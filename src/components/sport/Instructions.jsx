export default function Instructions({ profile }) {
  const getExercises = () => {
    const exercises = [];

    // Exercices selon les sports choisis
    if (profile.sports.includes('musculation') || profile.sports.includes('fitness')) {
      exercises.push({
        name: '🏋️ Squat',
        description: 'Exercice fondamental pour les jambes et les fessiers',
        steps: [
          'Pieds écartés à largeur d\'épaules',
          'Dos droit, regard devant',
          'Descendre en poussant les fesses vers l\'arrière',
          'Genoux alignés avec les pieds',
          'Descendre jusqu\'à ce que les cuisses soient parallèles au sol',
          'Remonter en poussant sur les talons'
        ],
        warnings: [
          '❌ Ne pas avancer les genoux au-delà des orteils',
          '❌ Ne pas arrondir le dos',
          '❌ Ne pas lever les talons'
        ]
      });

      exercises.push({
        name: '💪 Pompes',
        description: 'Exercice complet pour le haut du corps',
        steps: [
          'Position de planche, mains écartées largeur d\'épaules',
          'Corps aligné de la tête aux pieds',
          'Descendre en contrôlant, coudes à 45°',
          'Poitrine proche du sol',
          'Pousser pour remonter en gardant le corps droit'
        ],
        warnings: [
          '❌ Ne pas cambrer le dos',
          '❌ Ne pas écarter trop les coudes',
          '❌ Ne pas relever les fesses'
        ]
      });
    }

    if (profile.sports.includes('yoga')) {
      exercises.push({
        name: '🧘 Chien tête en bas',
        description: 'Posture de yoga classique pour étirer tout le corps',
        steps: [
          'Démarrer à quatre pattes',
          'Mains écartées largeur d\'épaules',
          'Soulever les hanches vers le ciel',
          'Former un V inversé avec le corps',
          'Talons qui cherchent le sol',
          'Tête relâchée entre les bras'
        ],
        warnings: [
          '❌ Ne pas bloquer les coudes',
          '❌ Ne pas forcer sur les épaules',
          '❌ Adapter si problèmes de dos'
        ]
      });
    }

    if (profile.sports.includes('course')) {
      exercises.push({
        name: '🏃 Fentes',
        description: 'Renforcement et équilibre pour la course',
        steps: [
          'Debout, pieds écartés largeur de hanches',
          'Faire un grand pas en avant',
          'Descendre le genou arrière vers le sol',
          'Genou avant à 90°, au-dessus de la cheville',
          'Dos droit, abdos engagés',
          'Pousser sur le talon avant pour remonter'
        ],
        warnings: [
          '❌ Ne pas pencher le torse en avant',
          '❌ Genou avant ne dépasse pas l\'orteil',
          '❌ Ne pas toucher le sol avec le genou arrière'
        ]
      });
    }

    return exercises;
  };

  const getPersonalizedTips = () => {
    const tips = [];

    if (profile.level === 'debutant') {
      tips.push('💡 Commencez par 2-3 séries de 8-10 répétitions');
      tips.push('💡 Prenez 60-90 secondes de repos entre les séries');
      tips.push('💡 Privilégiez la technique à l\'intensité');
    } else if (profile.level === 'intermediaire') {
      tips.push('💡 Visez 3-4 séries de 10-15 répétitions');
      tips.push('💡 Repos de 45-60 secondes entre les séries');
      tips.push('💡 Augmentez progressivement l\'intensité');
    } else {
      tips.push('💡 4-5 séries de 12-20 répétitions');
      tips.push('💡 Repos de 30-45 secondes');
      tips.push('💡 Variez les exercices et l\'intensité');
    }

    if (profile.injuries !== 'non') {
      tips.push('⚠️ Consultez un professionnel avant de commencer');
      tips.push('⚠️ Écoutez votre corps et adaptez les exercices');
    }

    if (profile.goal === 'souplesse') {
      tips.push('🤸 Maintenez chaque étirement 20-30 secondes');
      tips.push('🤸 Respirez profondément pendant les étirements');
    }

    return tips;
  };

  const exercises = getExercises();
  const tips = getPersonalizedTips();

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          📖 Instructions Personnalisées
        </h2>
        <p className="text-gray-600 mb-6">
          Voici vos exercices recommandés selon votre profil
        </p>

        {/* Conseils personnalisés */}
        <div className="bg-purple-50 border-l-4 border-purple-600 p-6 mb-8">
          <h3 className="text-xl font-bold text-purple-900 mb-3">
            💡 Conseils pour votre profil
          </h3>
          <ul className="space-y-2">
            {tips.map((tip, index) => (
              <li key={index} className="text-gray-700">{tip}</li>
            ))}
          </ul>
        </div>

        {/* Liste des exercices */}
        <div className="space-y-8">
          {exercises.map((exercise, index) => (
            <div key={index} className="border rounded-lg p-6 hover:shadow-md transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {exercise.name}
              </h3>
              <p className="text-gray-600 mb-4">{exercise.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">✅ Étapes :</h4>
                <ol className="list-decimal list-inside space-y-1">
                  {exercise.steps.map((step, idx) => (
                    <li key={idx} className="text-gray-700">{step}</li>
                  ))}
                </ol>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <h4 className="font-semibold text-red-800 mb-2">⚠️ Erreurs à éviter :</h4>
                <ul className="space-y-1">
                  {exercise.warnings.map((warning, idx) => (
                    <li key={idx} className="text-red-700">{warning}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}