import { useState } from 'react';
import { GraduationCap, BookOpen, Users, Award, ArrowRight } from 'lucide-react';

export default function EnhancedSchoolsSection() {
  const [activeCard, setActiveCard] = useState(null);

  const features = [
    {
      icon: BookOpen,
      title: "Ateliers clés en main",
      desc: "De la réparation de claviers à l'analyse de l'empreinte carbone d'un site web.",
      color: "from-[#cd3278] to-[#e505fa]",
      stats: "15+ ateliers disponibles"
    },
    {
      icon: Users,
      title: "Formation enseignants",
      desc: "Modules certifiants, supports pédagogiques, communauté d'échange.",
      color: "from-[#374dc8] to-[#8c34cb]",
      stats: "500+ enseignants formés"
    },
    {
      icon: Award,
      title: "Évaluation & labellisation",
      desc: "Obtenez la certification « Établissement Numérique Responsable ».",
      color: "from-[#f5c20a] to-[#cd3278]",
      stats: "Certification reconnue"
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#fafafa] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f5c20a]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#cd3278]/5 rounded-full blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#cd3278] to-[#e505fa] mb-6 shadow-lg shadow-[#cd3278]/20 animate-pulse">
            <GraduationCap className="text-white" size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#374dc8] mb-4">
            🎓 Écoles & Établissements
          </h2>
          <p className="text-xl text-[#374dc8]/70 max-w-2xl mx-auto">
            Intégrez le numérique responsable dans votre enseignement
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Feature Cards */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-[#374dc8] mb-8">
              Un levier pédagogique fort
            </h3>
            
            {features.map((feature, i) => (
              <div
                key={i}
                onMouseEnter={() => setActiveCard(i)}
                onMouseLeave={() => setActiveCard(null)}
                className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 hover:border-transparent overflow-hidden"
                style={{
                  transform: activeCard === i ? 'scale(1.02)' : 'scale(1)',
                }}
              >
                {/* Gradient overlay on hover */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10 flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="text-white" size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-lg text-gray-900 group-hover:text-[#cd3278] transition-colors">
                        {feature.title}
                      </h4>
                      <ArrowRight 
                        className="text-gray-400 group-hover:text-[#cd3278] group-hover:translate-x-1 transition-all" 
                        size={20} 
                      />
                    </div>
                    <p className="text-gray-600 mb-3">{feature.desc}</p>
                    <div className="inline-flex items-center space-x-2 text-xs font-semibold text-[#374dc8] bg-[#f4ebfa] px-3 py-1 rounded-full">
                      <span>{feature.stats}</span>
                    </div>
                  </div>
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#cd3278]/20 transition-colors duration-300"></div>
              </div>
            ))}
          </div>

          {/* Right: Visual/Illustration */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-[#f4ebfa] to-[#ebedfa] rounded-3xl p-12 shadow-2xl overflow-hidden group">
              {/* Animated background elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#f5c20a] rounded-full opacity-10 group-hover:scale-150 transition-transform duration-700 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#cd3278] rounded-full opacity-10 group-hover:scale-150 transition-transform duration-700 blur-2xl"></div>

              <div className="relative z-10 text-center space-y-8">
                {/* Icon grid */}
                <div className="grid grid-cols-3 gap-6">
                  {[BookOpen, Users, Award, GraduationCap, Users, BookOpen].map((Icon, i) => (
                    <div
                      key={i}
                      className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-rotate-3 cursor-pointer"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <Icon className="text-[#374dc8] mx-auto" size={32} />
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <div className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#cd3278] to-[#e505fa] mb-2">
                    18
                  </div>
                  <div className="text-[#374dc8] font-semibold">
                    Établissements pilotes actifs
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}