import { useState } from 'react';
import { RotateCcw, Package, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

export default function ModernRefurbishSection() {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      icon: Package,
      title: "Collecte",
      desc: "Ordinateurs, tablettes, smartphones… en fin de vie ou inutilisés.",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      details: ["Point de collecte local", "Enlèvement gratuit", "Traçabilité garantie"]
    },
    {
      icon: RotateCcw,
      title: "Réparation",
      desc: "Nettoyage, remplacement de pièces, installation de Linux NIRD.",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      details: ["Diagnostic complet", "Pièces d'origine", "Linux NIRD pré-installé"]
    },
    {
      icon: CheckCircle,
      title: "Redistribution",
      desc: "Aux écoles, familles en difficulté, tiers-lieux.",
      color: "from-indigo-600 to-purple-600",
      bgColor: "bg-indigo-50",
      details: ["Écoles prioritaires", "Tarifs solidaires", "Support inclus"]
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          icon={RotateCcw}
          title="♻️ Reconditionnement"
          subtitle="Donner une seconde vie aux appareils, c'est économiser 80 % de leur impact carbone."
        />

        {/* Impact Banner */}
        <div className="mb-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
          
          <div className="relative z-10">
            <Sparkles className="text-yellow-300 mx-auto mb-4" size={48} />
            <div className="text-5xl font-black mb-2">80%</div>
            <p className="text-xl font-semibold">de réduction d'impact carbone</p>
          </div>
        </div>

        {/* Steps - Process Flow */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection lines - visible on desktop */}
            <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-indigo-600 opacity-20"></div>

            {steps.map((step, i) => (
              <div
                key={i}
                onMouseEnter={() => setActiveStep(i)}
                onMouseLeave={() => setActiveStep(null)}
                className="group relative"
                style={{
                  animation: 'scaleIn 0.6s ease-out forwards',
                  animationDelay: `${i * 0.2}s`,
                  opacity: 0
                }}
              >
                {/* Card glow */}
                <div className={`absolute -inset-2 bg-gradient-to-br ${step.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

                <div className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-transparent h-full flex flex-col ${activeStep === i ? 'scale-105' : ''}`}>
                  {/* Step number badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#cd3278] to-[#e505fa] rounded-full flex items-center justify-center text-white font-black text-lg shadow-xl">
                    {i + 1}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div className={`mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <step.icon className="text-white" size={36} />
                    </div>
                    {activeStep === i && (
                      <div className={`absolute inset-0 mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} animate-ping`}></div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-center mb-6 leading-relaxed flex-grow">
                    {step.desc}
                  </p>

                  {/* Details list */}
                  <div className={`space-y-2 p-4 rounded-xl ${step.bgColor} transition-all duration-300 ${activeStep === i ? 'opacity-100' : 'opacity-0'}`}>
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="text-green-600 flex-shrink-0" size={16} />
                        <span className="text-gray-700 font-medium">{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Arrow indicator */}
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute -right-8 top-1/2 -translate-y-1/2 z-20">
                      <ArrowRight className="text-gray-300 group-hover:text-[#cd3278] transition-colors" size={32} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: '5 ans', label: 'Durée de vie moyenne', icon: '⏱️' },
            { value: '70%', label: 'Coût économisé', icon: '💰' },
            { value: '100%', label: 'Appareils fonctionnels', icon: '✅' },
            { value: '2kg', label: 'Déchets évités/appareil', icon: '♻️' },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 text-center border border-gray-100">
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}