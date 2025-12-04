import { Building, Scale, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

export default function CommunitiesSection() {
  const features = [
    {
      icon: Scale,
      title: "Charte d'engagement",
      desc: "Adoptez une politique d'achat responsable, de réduction des stocks, et de formation des agents.",
      color: "from-[#374dc8] to-[#8c34cb]",
      highlights: ["Achat responsable", "Formation agents", "Réduction stocks"]
    },
    {
      icon: Lightbulb,
      title: "Kit d'accompagnement",
      desc: "Audit gratuit, plan d'action sur 12 mois, labellisation « Territoire Numérique Responsable ».",
      color: "from-[#f5c20a] to-[#ff9500]",
      highlights: ["Audit gratuit", "Plan 12 mois", "Labellisation"]
    },
    {
      icon: Building,
      title: "Réseau des villes engagées",
      desc: "Partage de bonnes pratiques, mutualisation des ateliers de réparation, événements annuels.",
      color: "from-[#cd3278] to-[#e505fa]",
      highlights: ["Bonnes pratiques", "Ateliers mutualisés", "Événements"]
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#fafafa] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#374dc8]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#cd3278]/5 rounded-full blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          icon={Building}
          title="🏛️ Collectivités"
          subtitle="Devenez une collectivité numérique responsable."
        />

        {/* Feature Cards */}
        <div className="space-y-8">
          {features.map((item, i) => (
            <div 
              key={i}
              className="group relative bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent overflow-hidden"
              style={{
                animationDelay: `${i * 0.15}s`,
                animation: 'slideInFromLeft 0.8s ease-out forwards'
              }}
            >
              {/* Gradient glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <item.icon className="text-white" size={36} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#cd3278] transition-colors flex items-center">
                    {item.title}
                    <ArrowRight className="ml-3 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" size={24} />
                  </h3>
                  <p className="text-gray-600 text-lg mb-4 leading-relaxed">{item.desc}</p>
                  
                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-200 group-hover:border-[#cd3278]/30 transition-colors">
                        <CheckCircle className="text-green-500" size={16} />
                        <span className="text-sm font-medium text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Arrow */}
                <div className="flex-shrink-0">
                  <button className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110`}>
                    <ArrowRight className="text-white" size={24} />
                  </button>
                </div>
              </div>

              {/* Animated underline */}
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${item.color} w-0 group-hover:w-full transition-all duration-500`}></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}