import { useState } from 'react';
import { Shield, Clock, Smartphone, CheckCircle2, ArrowRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

export default function ModernParentsSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      icon: Clock,
      title: "Temps d'écran",
      desc: "Règles simples : pas d'écran 1h avant le coucher, zones sans écran à la maison.",
      color: "from-[#374dc8] to-[#8c34cb]",
      tips: ["1h avant coucher", "Zones sans écran", "Horaires fixes"]
    },
    {
      icon: Shield,
      title: "Sécurité",
      desc: "Contrôle parental léger, discussion sur les traces numériques, gestion des mots de passe.",
      color: "from-[#cd3278] to-[#e505fa]",
      tips: ["Contrôle parental", "Traces numériques", "Mots de passe"]
    },
    {
      icon: Smartphone,
      title: "Achat responsable",
      desc: "Privilégier le reconditionné, vérifier la réparabilité (indice iFixit > 7/10).",
      color: "from-[#f5c20a] to-[#ff9500]",
      tips: ["Reconditionné", "Réparabilité > 7/10", "Durabilité"]
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#ebedfa] via-[#f4ebfa] to-[#fafafa] relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#cd3278]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#374dc8]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          icon={Shield}
          title="👪 Parents"
          subtitle="Accompagnez vos enfants vers un numérique serein et durable."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cards.map((item, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative h-full"
              style={{
                animation: 'fadeInUp 0.8s ease-out forwards',
                animationDelay: `${i * 0.15}s`,
                opacity: 0
              }}
            >
              {/* Card glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-br ${item.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>

              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent overflow-hidden h-full flex flex-col">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon with animated ring */}
                  <div className="mb-6 relative">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <item.icon className="text-white" size={28} />
                    </div>
                    {hoveredCard === i && (
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} animate-ping`}></div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#cd3278] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                    {item.desc}
                  </p>

                  {/* Tips list */}
                  <div className="space-y-2 mb-6">
                    {item.tips.map((tip, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle2 className="text-green-500 flex-shrink-0" size={16} />
                        <span className="text-gray-700">{tip}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${item.color} opacity-10 rounded-bl-full transition-all duration-300 group-hover:w-32 group-hover:h-32`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional resources section */}
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Illustration placeholder */}
            <div className="relative bg-gradient-to-br from-[#f4ebfa] to-[#ebedfa] rounded-2xl p-12 h-80 flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzM3NGRjOCIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
              
              <div className="relative z-10 text-center">
                <div className="text-8xl mb-4 animate-bounce">👨‍👩‍👧‍👦</div>
                <div className="flex justify-center space-x-4">
                  {[Shield, Clock, Smartphone].map((Icon, i) => (
                    <div key={i} className="w-12 h-12 bg-white/60 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform" style={{ animationDelay: `${i * 0.2}s` }}>
                      <Icon className="text-[#374dc8]" size={24} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side - Resources */}
            <div>
              <h3 className="text-3xl font-bold text-[#374dc8] mb-6">
                Ressources pour parents
              </h3>

              <div className="space-y-4 mb-8">
                {[
                  "Guide PDF complet (20 pages)",
                  "Fiches pratiques par tranche d'âge",
                  "Liste d'applications éducatives validées",
                  "Modèle de contrat familial numérique"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#cd3278] to-[#e505fa] flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="text-white" size={14} />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}