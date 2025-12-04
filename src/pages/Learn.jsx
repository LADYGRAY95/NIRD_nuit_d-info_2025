import { BookOpen, RefreshCw, Code, Monitor, ShieldCheck, Leaf } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';

export default function Learn() {
  const topics = [
    {
      icon: Monitor,
      title: "La pollution numérique, c’est quoi ?",
      desc: "Le numérique émet plus de CO₂ que l’aviation mondiale. Découvrez d’où vient cet impact.",
    },
    {
      icon: RefreshCw,
      title: "Réparer > Jeter",
      desc: "Un smartphone réparé = 30 kg de CO₂ évités. Apprenez à prolonger la vie de vos appareils.",
    },
    {
      icon: Code,
      title: "Logiciels libres & open-source",
      desc: "LibreOffice, Firefox, VLC… Des alternatives éthiques, gratuites, et plus durables.",
    },
    {
      icon: Monitor,
      title: "Équilibre du temps d’écran",
      desc: "Stratégies pour les familles, outils de suivi, ateliers « déconnexion créative ».",
    },
    {
      icon: ShieldCheck,
      title: "Cybersécurité basique",
      desc: "Mots de passe, mises à jour, phishing — les bons réflexes pour tous.",
    },
    {
      icon: Leaf,
      title: "Écoconception web",
      desc: "Des sites plus légers, plus rapides, et moins gourmands en énergie.",
    },
  ];

  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          icon={BookOpen}
          title="📘 Apprendre"
          subtitle="Des contenus pédagogiques, ludiques et accessibles à tous les âges."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, i) => (
            <Card key={i} className="p-6 hover:shadow-md transition-shadow">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                <topic.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{topic.title}</h3>
              <p className="text-gray-600">{topic.desc}</p>
            </Card>
          ))}
        </div>


      </div>
    </div>
  );
}