import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../../assets/logo.png';


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Apprendre', path: '/apprendre' },
    { name: 'Outils', path: '/outils' },
    { name: 'Démarche', path: '/demarche' },
    { name: 'Linux', path: '/linux' },
    { name: 'À propos', path: '/a-propos' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-[#d7dbf4] shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo — Golden Pollen + Indigo Bloom */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img src={logo} alt="NIRD Logo" className="h-9 w-9 rounded-full" />
            <span className="font-bold text-[#374dc8] group-hover:text-[#8c34cb] transition-colors">
              NIRD
            </span>
          </Link>

          {/* Desktop nav — Ocean Twilight base */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-[#374dc8] font-medium hover:text-[#cd3278] px-3 py-2 rounded-lg transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f5c20a] to-[#e505fa] group-hover:w-full transition-all"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button — Magenta pulse */}
          <button
            className="md:hidden text-[#374dc8] hover:text-[#e505fa] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#d7dbf4]">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-[#374dc8] font-medium p-3 rounded-lg hover:bg-[#f4ebfa] hover:text-[#cd3278] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}