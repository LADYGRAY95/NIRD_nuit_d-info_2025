import { GraduationCap, BookOpen, Users } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import img from '../../assets/NIRD1.png';

export default function SchoolsSection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          icon={GraduationCap}
          title="🏫 Écoles & Établissements"
          subtitle="Intégrez le numérique responsable dans votre enseignement."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Un levier pédagogique fort</h3>
            <div className="space-y-5">
              <div className="flex items-start space-x-4">
                <BookOpen className="mt-1 text-indigo-600" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900">Ateliers clés en main</h4>
                  <p className="text-gray-600">De la réparation de claviers à l’analyse de l’empreinte carbone d’un site web.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="mt-1 text-indigo-600" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900">Formation enseignants</h4>
                  <p className="text-gray-600">Modules certifiants, supports pédagogiques, communauté d’échange.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <GraduationCap className="mt-1 text-indigo-600" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900">Évaluation & labellisation</h4>
                  <p className="text-gray-600">Obtenez la certification « Établissement Numérique Responsable ».</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
            <span className="text-gray-400"><img src={img} alt="Illustration école" /></span>
          </div>
        </div>
      </div>
    </section>
  );
}