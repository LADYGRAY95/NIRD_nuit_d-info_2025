import { Building, Scale, Lightbulb } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

export default function CommunitiesSection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          icon={Building}
          title="🏛️ Collectivités"
          subtitle="Devenez une collectivité numérique responsable."
        />

        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <Scale className="mt-1 text-indigo-600" size={24} />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Charte d’engagement</h3>
              <p className="text-gray-600">
                Adoptez une politique d’achat responsable, de réduction des stocks, et de formation des agents.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Lightbulb className="mt-1 text-indigo-600" size={24} />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Kit d’accompagnement</h3>
              <p className="text-gray-600">
                Audit gratuit, plan d’action sur 12 mois, labellisation « Territoire Numérique Responsable ».
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Building className="mt-1 text-indigo-600" size={24} />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Réseau des villes engagées</h3>
              <p className="text-gray-600">
                Partage de bonnes pratiques, mutualisation des ateliers de réparation, événements annuels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}