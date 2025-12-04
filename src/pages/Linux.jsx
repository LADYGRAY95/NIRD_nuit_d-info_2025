// src/pages/Linux.jsx
import { 
  Download, 
  Shield, 
  Leaf, 
  User, 
  Zap, 
  HardDrive, 
  GraduationCap, 
  Users, 
  Globe, 
  Play, 
  FileText, 
  Monitor,
  ArrowRight
} from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import img1 from '../assets/imagelinux1.png';
import img2 from '../assets/imagelinux2.png';

export default function Linux() {
  const featuresNIRD = [
    {
      icon: User,
      title: "Créée par des enseignants",
      desc: "Conçue, testée et maintenue par des professeurs (lycée Carnot)."
    },
    {
      icon: Shield,
      title: "Support communautaire",
      desc: "Forum dédié sur Tchap pour accompagner les débutants."
    },
    {
      icon: Leaf,
      title: "Légère & performante",
      desc: "Linux Mint + Xfce + Plank — fonctionne sur du matériel ancien."
    },
    {
      icon: Zap,
      title: "Hors ligne",
      desc: "Fonctionne sans internet — idéal en situation de crise (ex: Hauts-de-France)."
    },
    {
      icon: HardDrive,
      title: "Bootable sur clé USB",
      desc: "Sans modifier le système existant — démarrage instantané."
    },
    {
      icon: GraduationCap,
      title: "Logiciels scolaires complets",
      desc: "NSI, bureautique, programmation, multimédia — tout est inclus."
    }
  ];

  return (
    <div className="py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="text-center mb-16">
          <SectionTitle
            icon={Monitor}
            title="🐧 Linux dans la démarche NIRD"
            subtitle="Deux distributions libres, conçues par des enseignants, pour équiper durablement les établissements."
            iconColor="#ba45a5"
          />
          <p className="max-w-3xl mx-auto text-lg text-[#3653c9]/80">
            Vous trouverez ici une proposition de deux distributions Linux : 
            <span className="font-medium text-[#cd3278]"> PrimTux pour le primaire</span> et 
            <span className="font-medium text-[#cd3278]"> Linux NIRD pour le secondaire</span>,
            ainsi qu’un argumentaire justifiant ce choix stratégique.
          </p>
          <div className="mt-6 bg-[#f8ecf6] border-l-4 border-[#ba45a5] p-4 rounded-r-lg inline-block">
            <p className="text-[#3653c9] font-medium">
              ⚠️ Cette distribution peut aider les lycées des Hauts-de-France en situation de crise : 
              <span className="hidden md:inline"> fonctionne hors ligne, sur clé USB, sur matériel ancien, avec les logiciels NSI.</span>
            </p>
          </div>
        </div>

        {/* Linux NIRD Section */}
        <section className="mb-24">
          <div className="flex flex-col lg:flex-row gap-8 items-center mb-10">
            <div className="lg:w-1/3">
              <div className="bg-gradient-to-br from-[#f8ecf6] to-[#ebeefa] rounded-2xl p-1 shadow-inner">
                <div className="bg-white rounded-xl h-48 flex items-center justify-center border border-[#f1daed]">
                  <span className="text-[#ba45a5] text-5xl"><img src={img1} alt="" /></span>
                </div>
              </div>
              <p className="text-center text-sm text-[#3653c9]/60 mt-2">Copie d’écran du bureau Linux NIRD</p>
            </div>
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-bold text-[#3653c9] mb-4">
                Notre distribution « Linux NIRD » pour le secondaire
              </h2>
              <p className="text-[#3653c9]/80 mb-4">
                Fruit de l’expérience du lycée Carnot, voici une distribution GNU/Linux adaptée au secondaire 
                (version 0.1 — évolution collaborative prévue).
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <Button variant="secondary" size="sm">
                  <a href="https://tube-numerique-educatif.apps.education.fr/w/o38jV2DpXyy3zVM8GDYh9M"><Play size={16} className="mr-1" /> Vidéo (2 min)</a>
                </Button>
                <span className="text-sm text-[#3653c9]/60">Présentation rapide</span>
              </div>
              <div className="bg-[#fcfcff] border border-[#ebeefa] rounded-lg p-4">
                <p className="text-[#3653c9]/80 italic">
                  ⚠️ Cette distribution <strong>n’est pas configurée</strong> pour s’intégrer directement au réseau 
                  de votre collectivité. Contactez-la pour une intégration adaptée.
                </p>
              </div>
            </div>
          </div>

          {/* Advantages */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuresNIRD.map((feature, i) => (
              <Card key={i} className="p-5 hover:border-[#cd3278]/30">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#ba45a5]/10 text-[#ba45a5]">
                  <feature.icon size={20} />
                </div>
                <h3 className="font-bold text-[#3653c9] mb-1">{feature.title}</h3>
                <p className="text-[#3653c9]/70 text-sm">{feature.desc}</p>
              </Card>
            ))}
          </div>

          {/* Downloads */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="flex items-start space-x-3 mb-4">
                <Download className="text-[#cd3278] mt-1" size={20} />
                <h3 className="font-bold text-[#3653c9]">Version avec installeur</h3>
              </div>
              <p className="text-[#3653c9]/80 text-sm mb-4">
                Pour installer la distribution sur votre machine (PC fixe, portable…).
              </p>
              <div className="space-y-3">
                <div>
                  <a 
                    href="https://maths-code.fr/iso/NIRD-2025.iso" 
                    className="inline-flex items-center text-[#cd3278] font-medium hover:underline"
                  >
                    📥 Télécharger l’image ISO (lien direct)
                    <ArrowRight size={14} className="ml-1" />
                  </a>
                </div>
                <div className="text-xs text-[#3653c9]/60">
                  Clé MD5 : <code className="bg-[#f8ecf6] px-1.5 py-0.5 rounded"><a href="https://maths-code.fr/iso/NIRD-2025.md5">Clé </a></code>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-[#f8ecf6]/50 to-transparent">
              <div className="flex items-start space-x-3 mb-4">
                <HardDrive className="text-[#cd3278] mt-1" size={20} />
                <h3 className="font-bold text-[#3653c9]">Version clé USB (sans installeur)</h3>
              </div>
              <p className="text-[#3653c9]/80 text-sm mb-4">
                Mode démonstration : connexion en <code>eleve</code>/<code>eleve</code>. 
                Installation de logiciels temporaire (session uniquement).
              </p>
              <div className="space-y-3">
                <div>
                  <a 
                    href="https://maths-code.fr/iso/NIRD-2025_USB_eleve.iso" 
                    className="inline-flex items-center text-[#cd3278] font-medium hover:underline"
                  >
                    📥 Télécharger la version clé USB
                    <ArrowRight size={14} className="ml-1" />
                  </a>
                </div>
                <div className="text-xs text-[#3653c9]/60">
                  Clé MD5 : <code className="bg-[#f8ecf6] px-1.5 py-0.5 rounded"><a href="https://maths-code.fr/iso/NIRD-2025_USB_eleve.md5">Clé </a></code>
                </div>
              </div>
            </Card>
          </div>

          {/* Burning Instructions */}
          <div className="mt-10 bg-white border border-[#ebeefa] rounded-xl p-6">
            <h3 className="font-bold text-[#3653c9] text-lg mb-3">📌 Graver l’image sur clé USB</h3>
            <p className="text-[#3653c9]/80 mb-4">
              Il ne s’agit pas d’une simple copie : l’image doit être <em>gravée</em> pour que le PC puisse démarrer dessus.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: "✅ Ventoy (recommandé)",
                  desc: "Garde la clé utilisable comme stockage. Idéal pour usage mobile."
                },
                {
                  title: "🔧 Balena Etcher / Rufus",
                  desc: "Gravure classique — la clé sera dédiée à Linux NIRD."
                },
                {
                  title: "❓ Besoin d’aide ?",
                  desc: "Rejoignez notre forum Tchap pour des conseils pas à pas."
                }
              ].map((item, i) => (
                <div key={i} className="p-4 bg-[#fcfcff] rounded-lg border border-[#f1daed]">
                  <h4 className="font-medium text-[#3653c9]">{item.title}</h4>
                  <p className="text-sm text-[#3653c9]/70 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PrimTux Section */}
        <section className="mb-24">
          <div className="flex flex-col lg:flex-row gap-8 items-center mb-10">
            <div className="lg:w-1/3 order-2 lg:order-1">
              <div className="bg-gradient-to-br from-[#faeaf1] to-[#ebeefa] rounded-2xl p-1 shadow-inner">
                <div className="bg-white rounded-xl h-48 flex items-center justify-center border border-[#f5d6e4]">
                  <span className="text-[#cd3278] text-5xl"><img src={img2} alt="" /></span>
                </div>
              </div>
              <p className="text-center text-sm text-[#3653c9]/60 mt-2">Bureau enseignant PrimTux</p>
            </div>
            <div className="lg:w-2/3 order-1 lg:order-2">
              <h2 className="text-2xl font-bold text-[#3653c9] mb-4">
                La distribution PrimTux pour le primaire
              </h2>
              <p className="text-[#3653c9]/80 mb-4">
                <strong>PrimTux</strong> : une distribution libre conçue <em>par et pour des enseignants</em>, 
                idéale pour équiper durablement les écoles primaires.
              </p>
              <p className="text-[#3653c9]/80 mb-4">
                Un même ordinateur propose plusieurs profils : cycles 1, 2, 3 + profil enseignant — 
                utilisable en fond de classe, salle informatique ou poste maître.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-[#3653c9] text-lg mb-4 flex items-center">
                <Users className="mr-2 text-[#cd3278]" size={20} />
                Une communauté active vous accompagne
              </h3>
              <ul className="space-y-3 text-[#3653c9]/80">
                <li className="flex items-start">
                  <span className="text-[#ba45a5] mr-2">•</span>
                  <span>L’<strong>association PrimTux</strong> développe, documente et anime la communauté.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ba45a5] mr-2">•</span>
                  <span>Webinaires de formation à la demande.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ba45a5] mr-2">•</span>
                  <span>Forum d’entraide sur <strong>Tchap</strong> (support pédagogique & technique).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ba45a5] mr-2">•</span>
                  <span>Reconditionnement possible avec les <strong>collèges/lycées NIRD</strong> (projets élèves).</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#fcfcff] border border-[#ebeefa] rounded-xl p-5">
              <h3 className="font-bold text-[#3653c9] mb-3">Ressources</h3>
              <div className="space-y-2">
                {[
                  { label: "🌐 Site officiel PrimTux", url: "https://primtux.fr/" },
                  { label: "🎥 Clip de présentation (2 min)", url: "https://primtux.fr/ptx8.mp4" },
                  { label: "🎓 Formation découverte (20 min)", url: "https://primtux.fr/Presentation.mp4" },
                  { label: "📄 Affiche « Que faire avec PrimTux ? » (PDF)", url: "https://primtux.fr/Primtux-affiche-A3.pdf" },
                  { label: "🧪 Tester en ligne (Distrosea)", url: "https://distrosea.com/fr/start/primtux-8-xfce/" },
                ].map((item, i) => (
                  <div key={i}>
                    <a 
                      href={item.url} 
                      className="flex items-center text-[#cd3278] hover:underline text-sm"
                    >
                      <Play size={14} className="mr-1" />
                      {item.label}
                    </a>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-[#ebeefa]">
                <p className="text-sm text-[#3653c9]/70">
                  Projet <strong>pépite</strong> de la forge des communs numériques éducatifs, 
                  soutenu par la <strong>Direction du numérique pour l’éducation (DNE)</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Linux Section */}
        <section className="bg-gradient-to-r from-[#f8ecf6] to-[#e8d6f5] rounded-2xl p-8 border border-[#f1daed]">
          <SectionTitle
            icon={Globe}
            title="❓ Pourquoi le choix Linux ?"
            subtitle="Un choix inclusif, responsable et durable — aligné avec les missions de l’Éducation nationale."
            iconColor="#ba45a5"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: "🌸 Un choix inclusif",
                desc: "Accès équitable, interfaces adaptées, outils pédagogiques libres, support pour élèves à besoins spécifiques.",
                icon: User,
                color: "#ba45a5"
              },
              {
                title: "🛡️ Un choix responsable",
                desc: "Respect des données, maîtrise pédagogique, formation citoyenne, souveraineté éducative.",
                icon: Shield,
                color: "#3653c9"
              },
              {
                title: "♻️ Un choix durable",
                desc: "Reconditionnement, réduction des déchets, pérennité, éducation à la sobriété numérique.",
                icon: Leaf,
                color: "#cd3278"
              }
            ].map((item, i) => (
              <div 
                key={i} 
                className="bg-white p-5 rounded-xl border border-[#f1daed] hover:shadow-md transition-shadow"
              >
                <div 
                  className="mb-3 flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <item.icon size={20} color={item.color} />
                </div>
                <h3 className="font-bold text-[#3653c9] mb-2">{item.title}</h3>
                <p className="text-[#3653c9]/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-[#3653c9]/80 max-w-3xl mx-auto">
              ✨ Avec Linux, chaque ordinateur reconditionné devient un acte pédagogique, éthique et écologique — 
              en cohérence avec les objectifs de développement durable et la responsabilité environnementale.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
