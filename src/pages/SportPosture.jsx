import { useState } from 'react';
import SportQCM from '../components/sport/SportQCM';
import Instructions from '../components/sport/Instructions';
import ExerciseVisual from '../components/sport/ExerciseVisual';
import ProductRecommendations from '../components/sport/ProductRecommendations';

export default function SportPosture() {
  const [userProfile, setUserProfile] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);

  const handleProfileComplete = (profile) => {
    setUserProfile(profile);
    setCurrentStep(2);
  };

  const resetQCM = () => {
    setUserProfile(null);
    setCurrentStep(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#ba45a5] via-[#cd3278] to-[#e505fa] text-white py-16 px-4">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            🏋️ Santé Posturale & Sport
          </h1>
          <p className="text-xl mb-4 opacity-95">
            Pratiquez correctement vos exercices pour éviter les blessures
          </p>
          <p className="text-lg opacity-80">
            Un programme personnalisé selon votre profil sportif
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <div className="bg-white shadow-sm py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center gap-4">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition ${
                    currentStep >= step
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step}
                </div>
                {step < 4 && (
                  <div
                    className={`w-12 h-1 mx-2 ${
                      currentStep > step ? 'bg-purple-600' : 'bg-gray-200'
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-4 text-sm text-gray-600">
            <span className="font-semibold">
              {currentStep === 1 && 'Étape 1 : Profilage Sportif'}
              {currentStep === 2 && 'Étape 2 : Instructions Personnalisées'}
              {currentStep === 3 && 'Étape 3 : Visualisations'}
              {currentStep === 4 && 'Étape 4 : Recommandations Produits'}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Niveau 1 : QCM */}
        {currentStep === 1 && (
          <SportQCM onComplete={handleProfileComplete} />
        )}

        {/* Niveau 2 : Instructions */}
        {currentStep === 2 && userProfile && (
          <div>
            <Instructions profile={userProfile} />
            <div className="flex gap-4 justify-center mt-8">
              <button
                onClick={() => setCurrentStep(1)}
                className="px-6 py-3 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
              >
                ← Retour
              </button>
              <button
                onClick={() => setCurrentStep(3)}
                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
              >
                Voir les illustrations →
              </button>
            </div>
          </div>
        )}

        {/* Niveau 3 : Visuels */}
        {currentStep === 3 && userProfile && (
          <div>
            <ExerciseVisual profile={userProfile} />
            <div className="flex gap-4 justify-center mt-8">
              <button
                onClick={() => setCurrentStep(2)}
                className="px-6 py-3 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
              >
                ← Retour
              </button>
              <button
                onClick={() => setCurrentStep(4)}
                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
              >
                Voir les produits recommandés →
              </button>
            </div>
          </div>
        )}

        {/* Niveau 4 : Produits */}
        {currentStep === 4 && userProfile && (
          <div>
            <ProductRecommendations profile={userProfile} />
            <div className="flex gap-4 justify-center mt-8">
              <button
                onClick={() => setCurrentStep(3)}
                className="px-6 py-3 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
              >
                ← Retour
              </button>
              <button
                onClick={resetQCM}
                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
              >
                🔄 Recommencer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}