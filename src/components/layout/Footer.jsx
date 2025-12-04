import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#fafafa] border-t border-[#ebedfa]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-9 w-9 rounded-full bg-gradient-to-r from-[#f5c20a] to-[#cd3278]"></div>
              <span className="font-bold text-[#374dc8]">NIRD</span>
            </div>
            <p className="text-[#374dc8]/80 text-sm max-w-xs">
              Le numérique responsable, éthique et durable — pour tous.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[#374dc8] mb-3">Navigation</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: 'Accueil', path: '/' },
                { name: 'Apprendre', path: '/apprendre' },
                { name: 'Outils', path: '/outils' },
                { name: 'Démarche', path: '/demarche' },
              ].map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className="text-[#374dc8]/70 hover:text-[#cd3278] hover:underline transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#374dc8] mb-3">Ressources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/linux" className="text-[#374dc8]/70 hover:text-[#cd3278] hover:underline">Linux NIRD</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#374dc8] mb-3">Contact</h3>
            <address className="text-[#374dc8]/70 not-italic text-sm">
              📧 contact@nird.fr<br />
              🌐 nird.fr<br />
              📍 France
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#ebedfa] text-center">
          <p className="text-[#374dc8]/60 text-sm">
            © {new Date().getFullYear()} NIRD —{" "}
            <span className="inline-block animate-pulse">✨</span> Le numérique qui fleurit
          </p>
        </div>
      </div>
    </footer>
  );
}