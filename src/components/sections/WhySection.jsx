import { Globe, Zap, Recycle } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

export default function WhySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          icon={Globe}
          title="❓ Pourquoi le numérique responsable ?"
          subtitle="Parce que chaque clic a un impact."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Zap,
              title: "Énergie invisible",
              desc: "Un email avec pièce jointe = 50g de CO₂. 1 an de streaming = trajet Paris-NY en avion.",
            },
            {
              icon: Recycle,
              title: "Déchets électroniques",
              desc: "70 kg de déchets tech par seconde dans le monde. Seulement 20 % sont recyclés.",
            },
            {
              icon: Globe,
              title: "Ressources rares",
              desc: "Un smartphone contient +60 métaux. Certains risquent la pénurie d’ici 2030.",
            },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white rounded-xl border">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
              <p className="mt-3 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Agir, ce n’est pas renoncer au numérique — c’est l’utiliser mieux, plus longtemps, plus justement.
          </p>
        </div>
      </div>
    </section>
  );
}