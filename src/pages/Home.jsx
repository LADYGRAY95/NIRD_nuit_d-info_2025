import { ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import WhySection from '../components/sections/WhySection';
import SchoolsSection from '../components/sections/SchoolsSection';
import ParentsSection from '../components/sections/ParentsSection';
import PilotsSection from '../components/sections/PilotsSection';
import RefurbishSection from '../components/sections/RefurbishSection';
import CommunitiesSection from '../components/sections/CommunitiesSection';
import img from '../assets/logo2.png';
export default function Home() {
  return (
    <div>
      {/* Hero — Golden Pollen to Sweet Peony Gradient */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#ba45a5] via-[#cd3278] to-[#e505fa] text-white py-20 px-4">
  <div className="absolute inset-0 bg-black/10"></div>
  <div className="relative mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-12">
    
    {/* Logo + Acronym */}
    <div className="lg:w-1/3 flex justify-center">
      <div className="w-full max-w-md">
        <img 
          src={img} 
          alt="Logo NIRD - Numérique Inclusif Responsable Durable"
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </div>
    </div>

    {/* Text Content */}
    <div className="lg:w-2/3 text-center lg:text-left">
      <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/20 text-sm font-medium">
        🌸 Nouveau site — 2025
      </span>
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-lg">
        NIRD — Le numérique responsable pour tous
      </h1>
      <p className="text-xl mb-8 max-w-2xl opacity-95">
        Une démarche pour transformer l’usage du numérique dans les établissements scolaires : 
        <strong>inclusif</strong>, <strong>responsable</strong> et <strong>durable</strong>.
      </p>
    </div>
  </div>
</section>

      {/* Sections */}
      <WhySection />
      <SchoolsSection />
      <ParentsSection />
      <PilotsSection />
      <RefurbishSection />
      <CommunitiesSection />
    </div>
  );
}