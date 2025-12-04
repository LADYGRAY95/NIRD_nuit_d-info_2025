import { Shield, Clock, Smartphone } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

export default function ParentsSection() {
  return (
    <section className="py-16 bg-indigo-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          icon={Shield}
          title="👪 Parents"
          subtitle="Accompagnez vos enfants vers un numérique serein et durable."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Clock,
              title: "Temps d’écran",
              desc: "Règles simples : pas d’écran 1h avant le coucher, zones sans écran à la maison.",
            },
            {
              icon: Shield,
              title: "Sécurité",
              desc: "Contrôle parental léger, discussion sur les traces numériques, gestion des mots de passe.",
            },
            {
              icon: Smartphone,
              title: "Achat responsable",
              desc: "Privilégier le reconditionné, vérifier la réparabilité (indice iFixit > 7/10).",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
              <p className="mt-3 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}