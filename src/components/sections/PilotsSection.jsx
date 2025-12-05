// src/components/sections/PilotsSection.jsx
import { useState, useRef, useEffect } from 'react';
import {
  MapPin,
  Info,
  X,
  GraduationCap,
  School,
  Users
} from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// 🔧 Fix Leaflet default icon issue (critical!)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

// ✅ Safe markers — using red/blue/green (all exist)
const createMarkerIcon = (color) => {
  const baseUrl = 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img';
  return new L.Icon({
    iconUrl: `${baseUrl}/marker-icon-${color}.png`,
    iconRetinaUrl: `${baseUrl}/marker-icon-2x-${color}.png`,
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
};

const markerRed = createMarkerIcon('red');
const markerBlue = createMarkerIcon('blue');
const markerGreen = createMarkerIcon('green');

const pilots = [
  { name: "Cité scolaire Bellevue", city: "Chalon-sur-Saône", type: "lycée", lat: 46.7833, lng: 4.85 },
  { name: "Collège Coat Mez", city: "Brest", type: "collège", lat: 48.3909, lng: -4.4841 },
  { name: "Collège des 7 vallées", city: "Hesdin", type: "collège", lat: 50.3936, lng: 2.1722 },
  { name: "Collège Les Cuvelles", city: "Avignon", type: "collège", lat: 43.9417, lng: 4.8086 },
  { name: "Collège Uporu", city: "Mata-Utu", type: "collège", lat: -13.2772, lng: -176.1747 },
  { name: "Collège Victor Vasarely", city: "Lyon", type: "collège", lat: 45.7640, lng: 4.8357 },
  { name: "École élémentaire Louis Barrié", city: "Nantes", type: "école", lat: 47.2184, lng: -1.5536 },
  { name: "Lycée Alain Borne", city: "Tournon-sur-Rhône", type: "lycée", lat: 45.0667, lng: 4.8333 },
  { name: "Lycée Carnot", city: "Dijon", type: "lycée", lat: 47.3220, lng: 5.0415 },
  { name: "Lycée de la Plaine de l’Ain", city: "Ambérieu-en-Bugey", type: "lycée", lat: 45.9667, lng: 5.3500 },
  { name: "Lycée des métiers Heinrich-Nessel", city: "Haguenau", type: "lycée", lat: 48.8167, lng: 7.7833 },
  { name: "Lycée Jacques Prevert", city: "Champs-sur-Marne", type: "lycée", lat: 48.8333, lng: 2.5833 },
  { name: "Lycée Jean Monnet", city: "Saint-Étienne", type: "lycée", lat: 45.4397, lng: 4.3872 },
  { name: "Lycée La Martinière Diderot", city: "Lyon", type: "lycée", lat: 45.7597, lng: 4.8422 },
  { name: "Lycée Marie Curie", city: "Sceaux", type: "lycée", lat: 48.7775, lng: 2.2947 },
  { name: "Lycée professionnel Jean Lurçat", city: "Lyon", type: "lycée", lat: 45.7695, lng: 4.8687 },
  { name: "Lycée Simone de Beauvoir", city: "Saint-Maur-des-Fossés", type: "lycée", lat: 48.7969, lng: 2.5067 },
  { name: "Lycée Vincent d’Indy", city: "Cruas", type: "lycée", lat: 44.5000, lng: 4.7500 },
];

export default function PilotsSection() {
  const [selectedPilot, setSelectedPilot] = useState(null);
  const mapRef = useRef();

  const getMarkerIcon = (type) => {
    switch (type) {
      case 'lycée': return markerRed;
      case 'collège': return markerBlue;
      default: return markerGreen;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#fafaff]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          icon={MapPin}
          title="📍 La carte des pilotes"
          subtitle="Explorez les établissements engagés dans la démarche NIRD sur une carte interactive."
          iconColor="#ba45a5"
        />

        {/* 🌍 Real Map */}
        <div className="bg-white rounded-2xl shadow-xl border border-[#ffebee] overflow-hidden mb-16">
          <div className="relative h-[600px]">
            {/* Info Banner */}
            <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-lg rounded-xl p-3 shadow-lg flex items-center space-x-2">
              <Info className="text-red-600 flex-shrink-0" size={18} />
              <p className="text-red-600 text-sm font-medium">
                Cliquez sur les marqueurs pour plus d'informations
              </p>
            </div>

            <MapContainer
              ref={mapRef}
              center={[46.5, 2.5]}
              zoom={5}
              scrollWheelZoom={true}
              className="h-full w-full z-10"
            >
              {/* ✅ FREE TILE LAYER — WORKS ON VERCEL */}
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />

              {/* Markers */}
              {pilots.map((pilot, i) => (
                <Marker
                  key={i}
                  position={[pilot.lat, pilot.lng]}
                  icon={getMarkerIcon(pilot.type)}
                  eventHandlers={{
                    click: () => setSelectedPilot(i),
                  }}
                />
              ))}
            </MapContainer>

            {/* Selected Pilot Card */}
            {selectedPilot !== null && (
              <div className="absolute top-20 right-6 w-80 bg-white rounded-2xl shadow-xl p-5 border border-[#ffebee] z-30">
                <button
                  onClick={() => setSelectedPilot(null)}
                  className="absolute top-3 right-3 w-7 h-7 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center"
                  aria-label="Fermer"
                >
                  <X size={14} className="text-gray-600" />
                </button>

                <div className="flex items-start space-x-3">
                  <div className="mt-0.5">
                    {pilots[selectedPilot].type === "lycée" ? (
                      <GraduationCap className="text-red-600" size={20} />
                    ) : pilots[selectedPilot].type === "collège" ? (
                      <School className="text-blue-600" size={20} />
                    ) : (
                      <Users className="text-green-600" size={20} />
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-base leading-tight">
                      {pilots[selectedPilot].name}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      📍 {pilots[selectedPilot].city}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#ffebee]">
                  <span className="inline-block px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full capitalize">
                    {pilots[selectedPilot].type}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { value: "18", label: "Établissements", color: "text-red-600" },
            { value: "12", label: "Régions", color: "text-blue-600" },
            { value: "3", label: "Types", color: "text-green-600" },
            { value: "100%", label: "Engagés", color: "text-red-600" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-4 bg-white rounded-xl border border-[#fff5f5]">
              <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* List */}
        <div className="bg-white rounded-2xl border border-[#ffebee] p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Liste des établissements pilotes
          </h3>
          <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
            {pilots.map((pilot, i) => (
              <div
                key={i}
                onClick={() => {
                  setSelectedPilot(i);
                  if (mapRef.current) {
                    const map = mapRef.current;
                    map.setView([pilot.lat, pilot.lng], 10, { animate: true });
                  }
                }}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#fff5f5] cursor-pointer transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="flex-1 min-w-0">
                  <span className="font-medium text-gray-800 block truncate">{pilot.name}</span>
                  <span className="text-gray-500 text-sm">({pilot.city})</span>
                </div>
                <span className="text-xs px-2 py-0.5 bg-red-100 text-red-700 rounded-full capitalize">
                  {pilot.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}