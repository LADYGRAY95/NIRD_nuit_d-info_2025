// src/pages/Demarche.jsx
import { 
  Target, 
  Lightbulb, 
  Zap, 
  Users, 
  GraduationCap, 
  Laptop, 
  Network, 
  CheckCircle, 
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function Demarche() {
  const milestones = [
    {
      id: 1,
      title: "Jalon 1 — Mobilisation",
      icon: Lightbulb,
      color: "#ba45a5", // petal-pink
      bgColor: "bg-[#f8ecf6]",
      borderColor: "border-[#f1daed]",
      desc: "Sensibiliser l’établissement et initier une dynamique collective.",
      actions: [
        "Enseignant volontaire → contact NIRD",
        "Sensibilisation de l’équipe éducative",
        "Mise en réseau sur Tchap",
        "Diffusion de supports pédagogiques",
        "Appui de la direction",
        "Information préliminaire de la collectivité"
      ],
      result: "Prise de conscience collective + relais interne + direction favorable"
    },
    {
      id: 2,
      title: "Jalon 2 — Expérimentation",
      icon: Zap,
      color: "#cd3278", // sweet-peony
      bgColor: "bg-[#faeaf1]",
      borderColor: "border-[#f5d6e4]",
      desc: "Tester des solutions concrètes et évaluer leur pertinence.",
      actions: [
        "Installation de postes Linux (neufs/reconditionnés)",
        "Club informatique (élèves → reconditionnement)",
        "PrimTux pour les écoles primaires",
        "Formations enseignants & élèves",
        "Suivi des retours d’usage",
        "Coordinateur NIRD identifié",
        "Suivi par la direction",
        "Échanges avec la collectivité"
      ],
      result: "Expérience concrète documentée + direction engagée + collectivité impliquée"
    },
    {
      id: 3,
      title: "Jalon 3 — Intégration",
      icon: Network,
      color: "#3653c9", // ocean-twilight
      bgColor: "bg-[#ebeefa]",
      borderColor: "border-[#d7ddf4]",
      desc: "Inscrire durablement la démarche dans l’établissement.",
      actions: [
        "Intégration au parc informatique & réseau",
        "Inscription au projet d’établissement",
        "Valorisation & communication",
        "Référent NIRD reconnu",
        "Direction pilote de la démarche",
        "Coopération structurée avec la collectivité"
      ],
      result: "Démarche institutionnalisée, pérenne et connectée"
    }
  ];

  return (
    <div className="py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="text-center mb-16">
          <SectionTitle
            icon={Target}
            title="🚸 La démarche NIRD"
            subtitle="Un cheminement progressif en trois jalons pour un Numérique Inclusif, Responsable et Durable."
            iconColor="#ba45a5"
          />
          <p className="max-w-3xl mx-auto text-lg text-[#3653c9]/80 mb-8">
            La démarche NIRD propose aux établissements scolaires un parcours structuré en trois étapes : 
            <span className="font-medium text-[#cd3278]"> Mobilisation → Expérimentation → Intégration</span>.
          </p>
          <div className="inline-flex items-center space-x-2 bg-[#f8ecf6] px-4 py-2 rounded-full">
            <GraduationCap size={18} className="text-[#ba45a5]" />
            <span className="text-[#3653c9] font-medium">
              Chaque jalon implique enseignants, direction, élèves et collectivité — à des niveaux croissants d’engagement.
            </span>
          </div>
        </div>

        {/* Milestones Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#ebeefa] hidden md:block"></div>

          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div 
                key={milestone.id}
                className="relative pl-12 md:pl-20"
              >
                {/* Milestone badge */}
                <div className="absolute left-0 top-0 flex flex-col items-center">
                  <div 
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${milestone.bgColor} border-2 ${milestone.borderColor} shadow-sm`}
                    style={{ borderColor: milestone.color }}
                  >
                    <milestone.icon size={24} color={milestone.color} />
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="h-12 w-px bg-[#ebeefa] mt-2 hidden md:block"></div>
                  )}
                </div>

                {/* Content */}
                <Card className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-baseline space-x-3 mb-3">
                        <h2 className="text-2xl font-bold text-[#3653c9]">{milestone.title}</h2>
                        {milestone.id === 1 && (
                          <span className="px-2 py-0.5 text-xs bg-[#ba45a5]/10 text-[#ba45a5] rounded-full font-medium">
                            Démarrage
                          </span>
                        )}
                        {milestone.id === 2 && (
                          <span className="px-2 py-0.5 text-xs bg-[#cd3278]/10 text-[#cd3278] rounded-full font-medium">
                            Concrétisation
                          </span>
                        )}
                        {milestone.id === 3 && (
                          <span className="px-2 py-0.5 text-xs bg-[#3653c9]/10 text-[#3653c9] rounded-full font-medium">
                            Pérennisation
                          </span>
                        )}
                      </div>
                      <p className="text-[#3653c9]/80 mb-5">{milestone.desc}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <h3 className="font-semibold text-[#3653c9] mb-2 flex items-center">
                            <Users className="mr-2" size={16} style={{ color: milestone.color }} />
                            Actions clés
                          </h3>
                          <ul className="space-y-2">
                            {milestone.actions.map((action, i) => (
                              <li key={i} className="flex items-start">
                                <ChevronDown 
                                  size={14} 
                                  className="mt-1 mr-2 flex-shrink-0" 
                                  style={{ color: milestone.color }}
                                />
                                <span className="text-[#3653c9]/80 text-sm">{action}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#3653c9] mb-2 flex items-center">
                            <CheckCircle className="mr-2" size={16} style={{ color: milestone.color }} />
                            Résultat attendu
                          </h3>
                          <p className="text-[#3653c9]/80 text-sm bg-[#fcfcff] p-3 rounded-lg border border-[#ebeefa]">
                            {milestone.result}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Visual separator */}
                    <div className="hidden lg:block w-px h-full bg-[#ebeefa] mx-6"></div>

                    {/* Roles */}
                    <div className="lg:w-64 mt-6 lg:mt-0">
                      <h3 className="font-semibold text-[#3653c9] mb-3">Acteurs engagés</h3>
                      <div className="space-y-3">
                        {[
                          { role: "Enseignant", icon: GraduationCap },
                          { role: "Direction", icon: Users },
                          { role: "Élèves", icon: Laptop },
                          { role: "Collectivité", icon: Network }
                        ].map((actor, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <actor.icon 
                              size={16} 
                              className="text-[#3653c9]/60" 
                              style={{ 
                                color: milestone.id > i ? milestone.color : "#d1d5db" 
                              }} 
                            />
                            <span 
                              className="text-sm"
                              style={{ 
                                color: milestone.id > i ? milestone.color : "#6b7280" 
                              }}
                            >
                              {actor.role}
                            </span>
                            {milestone.id > i && (
                              <span className="text-xs bg-[#ba45a5]/10 text-[#ba45a5] px-1.5 py-0.5 rounded">
                                ✅
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

       
          
        
      </div>
    </div>
  );
}
