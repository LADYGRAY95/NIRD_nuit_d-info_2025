import { RotateCcw, Package, CheckCircle } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

export default function RefurbishSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          icon={RotateCcw}
          title="♻️ Reconditionnement"
          subtitle="Donner une seconde vie aux appareils, c’est économiser 80 % de leur impact carbone."
        />

        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                <Package size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Collecte</h3>
              <p className="mt-3 text-gray-600">Ordinateurs, tablettes, smartphones… en fin de vie ou inutilisés.</p>
            </div>
            <div className="text-center p-6">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <RotateCcw size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Réparation</h3>
              <p className="mt-3 text-gray-600">Nettoyage, remplacement de pièces, installation de Linux NIRD.</p>
            </div>
            <div className="text-center p-6">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                <CheckCircle size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Redistribution</h3>
              <p className="mt-3 text-gray-600">Aux écoles, familles en difficulté, tiers-lieux.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}