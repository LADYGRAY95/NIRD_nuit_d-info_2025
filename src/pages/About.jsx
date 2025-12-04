import { Heart, Users, Lightbulb } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';

export default function About() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          icon={Heart}
          title="ℹ️ À propos de NIRD"
        />

        <div className="prose max-w-none space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <Lightbulb className="mr-2 text-indigo-600" size={24} />
              Notre mission
            </h2>
            <p>
              Rendre le numérique durable, accessible et éducatif — en réparant les machines, en formant les citoyens, et en promouvant les logiciels libres.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <Users className="mr-2 text-indigo-600" size={24} />
              Notre vision
            </h2>
            <p>
              Un monde où chaque appareil est utilisé longtemps, chaque donnée respectée, et chaque citoyen·ne acteur·rice de la transition numérique.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900">Nos valeurs</h2>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {[
                { title: "Éducation", desc: "Apprendre par la pratique." },
                { title: "Collaboration", desc: "Partager, mutualiser, co-créer." },
                { title: "Durabilité", desc: "Réparer avant de jeter." },
                { title: "Liberté", desc: "Logiciels libres, données maîtrisées." },
                { title: "Inclusion", desc: "Accès pour tous, peu importe le budget." },
                { title: "Transparence", desc: "Impacts mesurés, actions visibles." },
              ].map((val, i) => (
                <li key={i} className="bg-white p-4 rounded-lg border">
                  <div className="font-bold text-indigo-700">{val.title}</div>
                  <div className="text-gray-600 text-sm">{val.desc}</div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900">L’équipe</h2>
            <p className="text-gray-600">
              Une équipe pluridisciplinaire : enseignants, ingénieurs, designers, éco-acteurs…  
              Basée à Paris, Lyon, et Rennes — mais active partout en France.
            </p>
            <div className="mt-4 flex space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                  ?
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t">
            <h2 className="text-2xl font-bold text-gray-900">Contact</h2>
            <p className="mt-2 text-gray-600">
              📧 contact@nird.fr<br />
              🌐 <a href="https://nird.fr" className="text-indigo-600 hover:underline">nird.fr</a><br />
              📱 @nird_officiel (Twitter, Instagram, Mastodon)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}