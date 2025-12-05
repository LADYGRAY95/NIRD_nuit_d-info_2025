import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

// Pages
import Home from '../pages/Home';
import Learn from '../pages/Learn';
import Tools from '../pages/Tools';
import Demarche from '../pages/Demarche';
import Linux from '../pages/Linux';
import About from '../pages/About';
import FrustratingInput from '../pages/FrustratingInput';
import SportPosture from '../pages/SportPosture';

export default function AppRouter() {
  return (
      
      <Routes>
        <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/apprendre" element={<Learn />} />
        <Route path="/outils" element={<Tools />} />
        <Route path="/demarche" element={<Demarche />} />
        <Route path="/linux" element={<Linux />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/sport-posture" element={<SportPosture />} />
        <Route path="/frustrating-input" element={<FrustratingInput />} />
        <Route>404 Not Found</Route>
        </Route>
      </Routes>
  );
}