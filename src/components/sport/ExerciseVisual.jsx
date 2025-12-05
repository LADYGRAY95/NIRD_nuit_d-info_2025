export default function ExerciseVisual({ profile }) {
  const exercises = [
    {
      name: 'Squat',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=400&fit=crop',
          caption: 'Position de départ - Debout, pieds écartés'
        },
        {
          url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop',
          caption: 'Position basse - Cuisses parallèles au sol'
        }
      ],
      keyPoints: [
        '🎯 Genoux alignés avec les pieds',
        '🎯 Dos droit pendant tout le mouvement',
        '🎯 Poids sur les talons',
        '🎯 Regard devant'
      ]
    },
    {
      name: 'Pompes',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
          caption: 'Position haute - Corps aligné'
        },
        {
          url: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=600&h=400&fit=crop',
          caption: 'Position basse - Poitrine proche du sol'
        }
      ],
      keyPoints: [
        '🎯 Corps droit de la tête aux pieds',
        '🎯 Coudes à 45° du corps',
        '🎯 Abdos contractés',
        '🎯 Ne pas cambrer le dos'
      ]
    },
    {
      name: 'Yoga - Chien tête en bas',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop',
          caption: 'Posture complète - V inversé'
        },
        {
          url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop',
          caption: 'Vue de côté - Alignement correct'
        }
      ],
      keyPoints: [
        '🎯 Mains bien ancrées au sol',
        '🎯 Hanches vers le ciel',
        '🎯 Talons qui cherchent le sol',
        '🎯 Tête relâchée'
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          🎨 Illustrations & Visualisations
        </h2>
        <p className="text-gray-600 mb-8">
          Visualisez la bonne posture pour chaque exercice
        </p>

        <div className="space-y-12">
          {exercises.map((exercise, index) => (
            <div key={index} className="border rounded-xl p-6 bg-gray-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {exercise.name}
              </h3>

              {/* Images */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {exercise.images.map((img, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="rounded-lg overflow-hidden shadow-md">
                      <img
                        src={img.url}
                        alt={img.caption}
                        className="w-full h-64 object-cover hover:scale-105 transition duration-300"
                      />
                    </div>
                    <p className="text-center text-sm font-medium text-gray-700">
                      {img.caption}
                    </p>
                  </div>
                ))}
              </div>

              {/* Points clés */}
              <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded">
                <h4 className="font-bold text-purple-900 mb-3">
                  Points clés à retenir :
                </h4>
                <ul className="space-y-2">
                  {exercise.keyPoints.map((point, idx) => (
                    <li key={idx} className="text-gray-700 font-medium">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Schéma anatomique (placeholder) */}
              <div className="mt-6 p-6 bg-white rounded-lg border-2 border-dashed border-gray-300">
                <p className="text-center text-gray-500 italic">
                  💡 Astuce : Filmez-vous pour vérifier votre posture
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Section animation */}
        <div className="mt-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            🎬 Conseils vidéo
          </h3>
          <p className="text-gray-700 mb-4">
            Pour une meilleure compréhension, nous recommandons de :
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>✅ Regarder des tutoriels vidéo professionnels</li>
            <li>✅ Pratiquer devant un miroir</li>
            <li>✅ Demander à un coach de vérifier votre posture</li>
            <li>✅ Commencer lentement et augmenter progressivement</li>
          </ul>
        </div>
      </div>
    </div>
  );
}