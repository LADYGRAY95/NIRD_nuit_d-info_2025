import { Calculator, Zap, RotateCcw, Package, Gamepad2 } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';

export default function Tools() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          icon={Zap}
          title="🛠️ Outils & Actions"
          subtitle="Des ressources pratiques pour agir, dès maintenant."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Outils concrets</h3>
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <Calculator className="mt-1 text-indigo-600" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900">Calculateur d’empreinte</h4>
                    <p className="text-gray-600 mt-1">
                      Estimez l’impact carbone de votre usage numérique (emails, streaming, stockage).
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <Package className="mt-1 text-indigo-600" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900">Guide de nettoyage numérique</h4>
                    <p className="text-gray-600 mt-1">
                      3 étapes : désabonnements, tri des fichiers, optimisation du stockage cloud.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <RotateCcw className="mt-1 text-indigo-600" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900">Carte des ateliers de réparation</h4>
                    <p className="text-gray-600 mt-1">
                      Trouvez un Repair Café près de chez vous, ou créez le vôtre.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Alternatives libres</h3>
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { name: "Firefox", desc: "Navigateur respectueux" },
                { name: "LibreOffice", desc: "Suite bureautique" },
                { name: "VLC", desc: "Lecteur multimédia" },
                { name: "GIMP", desc: "Édition d’images" },
              ].map((tool, i) => (
                <Card key={i} className="p-4 text-center">
                  <div className="font-medium text-gray-900">{tool.name}</div>
                  <div className="text-sm text-gray-500">{tool.desc}</div>
                </Card>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}