import { Globe, Zap, Recycle, TrendingUp, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function InteractiveWhySection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const impacts = [
    {
      icon: Zap,
      title: "Énergie invisible",
      desc: "Un email avec pièce jointe = 50g de CO₂. 1 an de streaming = trajet Paris-NY en avion.",
      stat: "50g CO₂",
      detail: "par email",
      color: "from-[#f5c20a] to-[#ff9500]",
      bgGlow: "bg-[#f5c20a]/10"
    },
    {
      icon: Recycle,
      title: "Déchets électroniques",
      desc: "70 kg de déchets tech par seconde dans le monde. Seulement 20 % sont recyclés.",
      stat: "70kg/s",
      detail: "de déchets tech",
      color: "from-[#cd3278] to-[#e505fa]",
      bgGlow: "bg-[#cd3278]/10"
    },
    {
      icon: Globe,
      title: "Ressources rares",
      desc: "Un smartphone contient +60 métaux. Certains risquent la pénurie d'ici 2030.",
      stat: "+60",
      detail: "métaux rares",
      color: "from-[#374dc8] to-[#8c34cb]",
      bgGlow: "bg-[#374dc8]/10"
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#f5c20a]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#cd3278]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#374dc8] to-[#8c34cb] mb-8 shadow-2xl shadow-[#374dc8]/30 relative">
            <Globe className="text-white" size={36} />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#374dc8] to-[#8c34cb] animate-ping opacity-75"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#374dc8] via-[#cd3278] to-[#e505fa]">
              ❓ Pourquoi le numérique responsable ?
            </span>
          </h2>
          
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
            Parce que <span className="text-[#cd3278] font-bold">chaque clic</span> a un impact
          </p>
        </div>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {impacts.map((item, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative"
            >
              {/* Card glow effect */}
              <div className={`absolute -inset-1 ${item.bgGlow} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent overflow-hidden h-full flex flex-col">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                {/* Icon with animated ring */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10`}>
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
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                  {item.desc}
                </p>

                {/* Stat Badge */}
                <div className={`bg-gradient-to-r ${item.color} p-4 rounded-xl -mx-4 -mb-4 mt-auto`}>
                  <div className="text-3xl font-black text-white mb-1">
                    {item.stat}
                  </div>
                  <div className="text-white/90 text-sm font-medium">
                    {item.detail}
                  </div>
                </div>

                {/* Hover effect indicator */}
                <div className={`absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity animate-pulse`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quote Section */}
        <div className="relative bg-gradient-to-r from-[#374dc8] to-[#8c34cb] rounded-3xl p-12 text-center overflow-hidden shadow-2xl">
          {/* Animated grid background */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

          <div className="relative z-10">
            <AlertCircle className="text-[#f5c20a] mx-auto mb-6 animate-bounce" size={48} />
            
            <blockquote className="text-2xl md:text-3xl font-bold text-white mb-6 leading-relaxed">
              "Agir, ce n'est pas renoncer au numérique — <br className="hidden md:block" />
              c'est l'utiliser <span className="text-[#f5c20a]">mieux</span>, 
              <span className="text-[#f5c20a]"> plus longtemps</span>, 
              <span className="text-[#f5c20a]"> plus justement</span>."
            </blockquote>

          </div>
        </div>

        {/* Statistics ticker */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '4%', label: 'des émissions mondiales' },
            { value: '20%', label: 'de recyclage e-waste' },
            { value: '2030', label: 'pénurie métaux rares' },
            { value: '80%', label: "d'impact en moins" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#cd3278] to-[#e505fa] mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}