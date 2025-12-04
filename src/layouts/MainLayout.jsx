// src/layouts/MainLayout.jsx
import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
           {/* Add animated background orbs */}
           <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
  
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
           <Outlet />
           </div>
      </main>
      <Footer />
    </div>
  );
}