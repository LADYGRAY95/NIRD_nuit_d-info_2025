import { MapPin, Star } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

// ✅ Exact list of pilots you provided
const pilots = [
  "Cité scolaire Bellevue",
  "Collège Coat Mez",
  "Collège des 7 vallées",
  "Collège Les Cuvelles",
  "Collège Uporu",
  "Collège Victor Vasarely",
  "École élémentaire Louis Barrié",
  "Lycée Alain Borne",
  "Lycée Carnot",
  "Lycée de la Plaine de l’Ain",
  "Lycée des métiers Heinrich-Nessel",
  "Lycée Jacques Prevert",
  "Lycée Jean Monnet",
  "Lycée La Martinière Diderot",
  "Lycée Marie Curie",
  "Lycée professionnel Jean Lurçat",
  "Lycée Simone de Beauvoir",
  "Lycée Vincent d’Indy"
];

export default function PilotsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#fafafa] to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          icon={MapPin}
          title="📍 Nos établissements pilotes"
          subtitle="18 établissements engagés dans la transition numérique responsable."
          iconColor="#f5c20a"
        />

        {/* Map Mock — Ocean Twilight Base */}
        <div className="bg-gradient-to-br from-[#ebedfa] to-[#d7dbf4] rounded-2xl shadow-xl overflow-hidden mb-12 border border-[#afb8e9]">
          <div className="relative h-96">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-6 bg-white/70 backdrop-blur rounded-xl border border-[#d7dbf4]">
                <div className="text-5xl mb-3">🗺️</div>
                <h3 className="font-bold text-[#374dc8] text-xl mb-2">Carte des pilotes</h3>
                <p className="text-[#374dc8]/80 max-w-md">
                  Chaque point représente un établissement engagé dans la démarche NIRD.
                </p>
                <div className="mt-4 flex justify-center space-x-2">
                  {[...Array(10)].map((_, i) => (
                    <div 
                      key={i}
                      className="w-2 h-2 rounded-full bg-gradient-to-r from-[#f5c20a] to-[#cd3278] animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Animated Pins */}
            {pilots.slice(0, 8).map((_, i) => (
              <div
                key={i}
                className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-[#f5c20a] to-[#cd3278] border-2 border-white shadow-lg animate-ping"
                style={{
                  left: `${20 + (i % 4) * 20}%`,
                  top: `${30 + Math.floor(i / 4) * 25}%`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: "2s",
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Pilot List — Sweet Peony Accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pilots.map((name, i) => (
            <div 
              key={i}
              className="flex items-start space-x-3 p-4 bg-white rounded-xl border border-[#ebedfa] group hover:border-[#cd3278]/30 transition-colors"
            >
              <div className="mt-0.5 flex-shrink-0">
                <div className="w-3 h-3 rounded-full bg-[#f5c20a] animate-pulse group-hover:animate-none"></div>
              </div>
              <span className="text-[#374dc8] font-medium group-hover:text-[#cd3278] transition-colors">
                {name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-[#374dc8]/70">
            ✨ Prochaine vague de pilotes — ouverture à l’automne 2025
          </p>
        </div>
      </div>
    </section>
  );
}