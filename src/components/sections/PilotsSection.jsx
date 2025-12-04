// src/components/sections/PilotsSection.jsx
import { useState, useRef, useEffect } from 'react';
import { MapPin, Info, X, Plus, Minus, Move } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

// Pilot locations (accurate coordinates)
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
  { name: "Lycée Vincent d’Indy", city: "Cruas", type: "lycée", lat: 44.5000, lng: 4.7500 }
];

export default function PilotsSection() {
  const [selectedPilot, setSelectedPilot] = useState(null);
  const [hoveredPilot, setHoveredPilot] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const svgRef = useRef(null);

  // Convert lat/lng to SVG coordinates (Europe focus)
  const getSVGPosition = (lat, lng) => {
    // Europe bounds: lat 35-55, lng -10 to 15
    const x = ((lng + 10) / 25) * 1000;
    const y = ((55 - lat) / 20) * 1000;
    return { x, y };
  };

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.2, 0.5));

  const handleMouseDown = (e) => {
    if (e.target === svgRef.current) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newPan = {
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      };
      setPan(newPan);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragStart]);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#fafaff]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          icon={MapPin}
          title="📍 La carte des pilotes"
          subtitle="Explorez les établissements engagés dans la démarche NIRD sur une carte interactive."
          iconColor="#ba45a5"
        />

        {/* Interactive Map */}
        <div className="bg-white rounded-2xl shadow-xl border border-[#f1daed] overflow-hidden mb-16">
          <div className="relative h-[600px] bg-[#f8ecf6]">
            {/* Zoom Controls */}
            <div className="absolute top-4 left-4 z-10 bg-white rounded-lg shadow-md p-2">
              <button
                onClick={handleZoomIn}
                className="block w-8 h-8 bg-[#ba45a5] hover:bg-[#cd3278] text-white rounded flex items-center justify-center transition-colors"
              >
                <Plus size={16} />
              </button>
              <button
                onClick={handleZoomOut}
                className="mt-1 block w-8 h-8 bg-[#ba45a5] hover:bg-[#cd3278] text-white rounded flex items-center justify-center transition-colors"
              >
                <Minus size={16} />
              </button>
            </div>

            {/* Map Container */}
            <svg
              ref={svgRef}
              viewBox="0 0 1000 1000"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid meet"
              onMouseDown={handleMouseDown}
              className="cursor-grab active:cursor-grabbing"
              style={{
                transform: `scale(${zoom}) translate(${pan.x}px, ${pan.y}px)`,
                transformOrigin: 'center',
                transition: isDragging ? 'none' : 'transform 0.2s ease'
              }}
            >
              {/* Background (Europe map outline) */}
              <rect width="1000" height="1000" fill="#f8ecf6" />
              
              {/* France */}
              <path
                d="M 300 400 L 350 380 L 400 400 L 450 450 L 400 500 L 350 520 L 300 500 L 280 450 Z"
                fill="#f1daed"
                stroke="#ba45a5"
                strokeWidth="2"
                opacity="0.6"
              />
              
              {/* Germany */}
              <path
                d="M 500 350 L 550 340 L 600 360 L 620 400 L 600 450 L 550 460 L 500 440 L 480 400 Z"
                fill="#ebeefa"
                stroke="#3653c9"
                strokeWidth="1"
                opacity="0.5"
              />
              
              {/* UK */}
              <path
                d="M 200 300 L 250 290 L 280 320 L 270 360 L 240 380 L 200 360 Z"
                fill="#ebeefa"
                stroke="#3653c9"
                strokeWidth="1"
                opacity="0.5"
              />
              
              {/* Spain */}
              <path
                d="M 150 500 L 200 480 L 250 500 L 270 550 L 250 600 L 200 620 L 150 600 L 130 550 Z"
                fill="#ebeefa"
                stroke="#3653c9"
                strokeWidth="1"
                opacity="0.5"
              />

              {/* Pilot Pins */}
              {pilots.map((pilot, i) => {
                const { x, y } = getSVGPosition(pilot.lat, pilot.lng);
                const isHovered = hoveredPilot === i;
                const isSelected = selectedPilot === i;

                return (
                  <g
                    key={i}
                    transform={`translate(${x}, ${y})`}
                    onMouseEnter={() => setHoveredPilot(i)}
                    onMouseLeave={() => setHoveredPilot(null)}
                    onClick={() => setSelectedPilot(isSelected ? null : i)}
                    className="cursor-pointer"
                  >
                    {/* Pulse ring */}
                    <circle
                      cx="0"
                      cy="0"
                      r={isHovered || isSelected ? 8 : 6}
                      fill="none"
                      stroke="#ba45a5"
                      strokeWidth="1"
                      opacity="0.4"
                      className={isHovered || isSelected ? "animate-ping" : ""}
                    />
                    
                    {/* Pin circle */}
                    <circle
                      cx="0"
                      cy="0"
                      r={isHovered || isSelected ? 6 : 4}
                      fill="#ba45a5"
                      stroke="white"
                      strokeWidth="2"
                      className={`transition-transform duration-200 ${isHovered || isSelected ? "scale-125" : ""}`}
                    />
                    
                    {/* Pin icon */}
                    <circle
                      cx="0"
                      cy="2"
                      r="1"
                      fill="white"
                      opacity="0.8"
                    />
                  </g>
                );
              })}
            </svg>

            {/* Info banner */}
            <div className="absolute top-4 left-20 right-4 z-10 bg-white/90 backdrop-blur-lg rounded-xl p-3 shadow-lg flex items-center space-x-2">
              <Info className="text-[#3653c9] flex-shrink-0" size={18} />
              <p className="text-[#3653c9] text-sm font-medium">
                Cliquez pour voir les détails • Glissez pour déplacer • +/- pour zoomer
              </p>
            </div>
          </div>

          {/* Selected Pilot Card */}
          {selectedPilot !== null && (
            <div className="absolute top-20 right-6 w-80 bg-white rounded-2xl shadow-xl p-5 border border-[#f1daed] z-20">
              <button
                onClick={() => setSelectedPilot(null)}
                className="absolute top-3 right-3 w-7 h-7 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <X size={14} className="text-gray-600" />
              </button>

              <div className="flex items-start space-x-3">
                <div className="mt-0.5">
                  {pilots[selectedPilot].type === "lycée" ? (
                    <GraduationCap className="text-[#ba45a5]" size={20} />
                  ) : pilots[selectedPilot].type === "collège" ? (
                    <School className="text-[#3653c9]" size={20} />
                  ) : (
                    <Users className="text-[#10b981]" size={20} />
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-[#3653c9] text-base leading-tight">
                    {pilots[selectedPilot].name}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    📍 {pilots[selectedPilot].city}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#f1daed]">
                <span className="inline-block px-2 py-1 bg-[#ba45a5]/10 text-[#ba45a5] text-xs font-medium rounded-full">
                  {pilots[selectedPilot].type.charAt(0).toUpperCase() + pilots[selectedPilot].type.slice(1)}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { value: "18", label: "Établissements", color: "text-[#ba45a5]" },
            { value: "12", label: "Régions", color: "text-[#3653c9]" },
            { value: "6", label: "Types", color: "text-[#cd3278]" },
            { value: "100%", label: "Engagés", color: "text-[#ba45a5]" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-4 bg-white rounded-xl border border-[#f8ecf6]">
              <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Pilot List */}
        <div className="bg-white rounded-2xl border border-[#f1daed] p-6">
          <h3 className="text-xl font-bold text-[#3653c9] mb-4">Liste des établissements pilotes</h3>
          <div className="space-y-3">
            {pilots.map((pilot, i) => (
              <div
                key={i}
                onClick={() => setSelectedPilot(i)}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#f8ecf6] cursor-pointer transition-colors"
              >
                <div className="flex-shrink-0 w-2 h-2 rounded-full" 
                  style={{ backgroundColor: "#ba45a5" }}
                ></div>
                <div className="flex-1">
                  <span className="font-medium text-[#3653c9]">{pilots[i].name}</span>
                  <span className="text-gray-500 text-sm ml-2">({pilots[i].city})</span>
                </div>
                <span className="text-xs px-2 py-0.5 bg-[#f1daed] text-[#ba45a5] rounded-full capitalize">
                  {pilots[i].type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        .animate-ping {
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
}
