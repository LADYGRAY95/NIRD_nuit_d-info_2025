import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Fix default icon issue in Leaflet + Vite
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Example list of pilot locations
const pilotLocations = [
  { name: "Paris", coords: [48.8566, 2.3522] },
  { name: "Lyon", coords: [45.7640, 4.8357] },
  { name: "Rennes", coords: [48.1173, -1.6778] },
  { name: "Strasbourg", coords: [48.5734, 7.7521] },
];

export default function PilotsMap() {
  return (
    <div className="w-full h-[600px] rounded-xl overflow-hidden shadow-xl">
      <MapContainer
        center={[46.5, 2.5]} // Center on France
        zoom={6}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {pilotLocations.map((location, index) => (
          <Marker key={index} position={location.coords}>
            <Popup>
              <strong>{location.name}</strong>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
