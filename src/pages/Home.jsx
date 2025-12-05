import { ArrowRight, Sparkles, Heart, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import Button from '../components/ui/Button';
import WhySection from '../components/sections/WhySection';
import SchoolsSection from '../components/sections/SchoolsSection';
import ParentsSection from '../components/sections/ParentsSection';
import PilotsSection from '../components/sections/PilotsSection';
import RefurbishSection from '../components/sections/RefurbishSection';
import CommunitiesSection from '../components/sections/CommunitiesSection';
import img from '../assets/logo2.png';
import SnakeGame from '../components/ui/SnakeGame';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  const [clicks, setClicks] = useState(0);
  const [showSnake, setShowSnake] = useState(false);

  function handleLogoClick() {
    setClicks(prev => {
      const newCount = prev + 1;

      if (newCount >= 3) {
        setShowSnake(true);
        return 0; // Reset clicks after opening game
      }

      return newCount;
    });
  }
  return (
    <div>
      {/* Hero — Golden Pollen to Sweet Peony Gradient */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#ba45a5] via-[#cd3278] to-[#e505fa]">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#f5c20a] rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-[#ba45a5] rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        {/* Gradient mesh overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Logo Section with 3D effect */}
            <div className={`lg:w-1/3 flex justify-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#f5c20a] via-white to-[#f5c20a] rounded-3xl opacity-50 group-hover:opacity-75 blur-2xl transition-opacity duration-500 animate-pulse"></div>
                
                {/* Logo container */}
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl group-hover:scale-105 group-hover:rotate-2 transition-all duration-500">
                  <img 
                    src={img} 
                    alt="Logo NIRD"
                    className="w-full h-auto rounded-2xl shadow-lg"
                    onClick={handleLogoClick}
                  />
                  {clicks > 0 && (
                <div className="absolute top-2 right-2 bg-white/90 text-purple-900 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shadow-lg">
                  {clicks}
                </div>
              )}
                  {/* Floating particles */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#f5c20a] rounded-full opacity-80 animate-bounce"></div>
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-white rounded-full opacity-60 animate-bounce animation-delay-700"></div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className={`lg:w-2/3 text-center lg:text-left transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-lg border border-white/30 rounded-full px-6 py-3 mb-8 shadow-lg hover:bg-white/30 transition-all duration-300 group cursor-pointer">
                <Sparkles className="text-[#f5c20a] group-hover:rotate-12 transition-transform" size={20} />
                <span className="text-white font-semibold text-sm">🌸 Nouveau site — 2025</span>
                <div className="w-2 h-2 bg-[#f5c20a] rounded-full animate-pulse"></div>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                <span className="block text-white drop-shadow-2xl mb-2">
                  NIRD
                </span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-[#f5c20a] to-white text-3xl md:text-4xl lg:text-5xl font-bold">
                  Le numérique responsable pour tous
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl md:text-2xl text-white/95 mb-4 leading-relaxed max-w-3xl">
                Une démarche pour transformer l'usage du numérique dans les établissements scolaires
              </p>

              {/* Keywords with icons */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
                {[
                  { icon: Heart, text: 'Inclusif', color: 'from-pink-400 to-red-400' },
                  { icon: Sparkles, text: 'Responsable', color: 'from-[#f5c20a] to-yellow-300' },
                  { icon: Zap, text: 'Durable', color: 'from-green-400 to-emerald-400' },
                ].map((item, i) => (
                  <div 
                    key={i}
                    className="group flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${item.color} shadow-lg group-hover:rotate-12 transition-transform`}>
                      <item.icon size={20} className="text-white" />
                    </div>
                    <span className="text-white font-bold text-lg">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="group relative px-8 py-4 bg-white text-[#cd3278] rounded-2xl font-bold text-lg shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                   <a href='a-propos'><span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>Découvrir NIRD</span>
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
                  </span>
                  </a>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f5c20a] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <a href="#PilotsSection"><button className="px-8 py-4 bg-white/10 backdrop-blur-lg border-2 border-white/40 text-white rounded-2xl font-bold text-lg hover:bg-white/20 hover:border-white/60 transition-all duration-300 hover:scale-105 shadow-lg">
                  Voir les établissements pilotes
                </button>
                </a>
              </div>

              {/* Stats mini-cards */}
              <div className="grid grid-cols-3 gap-4 mt-12 max-w-2xl">
                {[
                  { number: '18', label: 'Établissements' },
                  { number: '500+', label: 'Enseignants' },
                  { number: '100%', label: 'Open Source' },
                ].map((stat, i) => (
                  <div 
                    key={i}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="text-3xl font-black text-white mb-1 group-hover:text-[#f5c20a] transition-colors">
                      {stat.number}
                    </div>
                    <div className="text-white/80 text-sm font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-6 h-10 border-2 border-white/40 rounded-full p-1">
              <div className="w-1.5 h-3 bg-white/60 rounded-full mx-auto animate-pulse"></div>
            </div>
            <span className="text-white/60 text-xs font-medium">Défiler</span>
          </div>
        </div>

        <style>{`
          @keyframes blob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
          .animation-delay-700 {
            animation-delay: 0.7s;
          }
        `}</style>
      </section>

      {/* Sections */}
      <WhySection />
      <SchoolsSection />
      <ParentsSection />
      <PilotsSection />
      <RefurbishSection />
      <CommunitiesSection />

      {/* Hidden Snake Game */}
      {showSnake && <SnakeGame onClose={() => setShowSnake(false)} />}
    </div>
  );
}