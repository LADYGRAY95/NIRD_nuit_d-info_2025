import { useState } from 'react';

export default function SportQCM({ onComplete }) {
  const [answers, setAnswers] = useState({
    level: '',
    sports: [],
    goal: '',
    frequency: '',
    injuries: '',
    age: ''
  });

  const questions = [
    {
      id: 'level',
      question: 'Quel est votre niveau sportif actuel ?',
      type: 'single',
      options: [
        { value: 'debutant', label: '🌱 Débutant - Je commence le sport' },
        { value: 'intermediaire', label: '💪 Intermédiaire - Je pratique régulièrement' },
        { value: 'avance', label: '🏆 Avancé - Je suis un athlète confirmé' }
      ]
    },
    {
      id: 'sports',
      question: 'Quels sports pratiquez-vous ou souhaitez-vous pratiquer ?',
      type: 'multiple',
      options: [
        { value: 'musculation', label: '🏋️ Musculation' },
        { value: 'yoga', label: '🧘 Yoga' },
        { value: 'course', label: '🏃 Course à pied' },
        { value: 'fitness', label: '💃 Fitness' },
        { value: 'natation', label: '🏊 Natation' },
        { value: 'crossfit', label: '⚡ CrossFit' }
      ]
    },
    {
      id: 'goal',
      question: 'Quel est votre objectif principal ?',
      type: 'single',
      options: [
        { value: 'perte-poids', label: '📉 Perte de poids' },
        { value: 'muscle', label: '💪 Gain musculaire' },
        { value: 'souplesse', label: '🤸 Améliorer la souplesse' },
        { value: 'endurance', label: '🏃 Développer l\'endurance' },
        { value: 'sante', label: '❤️ Santé générale' }
      ]
    },
    {
      id: 'frequency',
      question: 'À quelle fréquence pratiquez-vous ?',
      type: 'single',
      options: [
        { value: '1-2', label: '1-2 fois par semaine' },
        { value: '3-4', label: '3-4 fois par semaine' },
        { value: '5+', label: '5+ fois par semaine' },
        { value: 'irregulier', label: 'De manière irrégulière' }
      ]
    },
    {
      id: 'injuries',
      question: 'Avez-vous des blessures ou limitations physiques ?',
      type: 'single',
      options: [
        { value: 'non', label: '✅ Non, aucune' },
        { value: 'dos', label: '🔴 Problèmes de dos' },
        { value: 'genoux', label: '🔴 Problèmes de genoux' },
        { value: 'epaules', label: '🔴 Problèmes d\'épaules' },
        { value: 'autres', label: '🔴 Autres limitations' }
      ]
    },
    {
      id: 'age',
      question: 'Quelle est votre tranche d\'âge ?',
      type: 'single',
      options: [
        { value: '18-25', label: '18-25 ans' },
        { value: '26-35', label: '26-35 ans' },
        { value: '36-50', label: '36-50 ans' },
        { value: '50+', label: '50+ ans' }
      ]
    }
  ];

  const handleSingleChoice = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleMultipleChoice = (questionId, value) => {
    const currentValues = answers[questionId] || [];
    if (currentValues.includes(value)) {
      setAnswers({
        ...answers,
        [questionId]: currentValues.filter(v => v !== value)
      });
    } else {
      setAnswers({
        ...answers,
        [questionId]: [...currentValues, value]
      });
    }
  };

  const handleSubmit = () => {
    // Vérifier que toutes les questions obligatoires sont répondues
    if (!answers.level || !answers.goal || !answers.frequency || !answers.injuries || !answers.age) {
      alert('Veuillez répondre à toutes les questions obligatoires');
      return;
    }
    if (answers.sports.length === 0) {
      alert('Veuillez sélectionner au moins un sport');
      return;
    }

    onComplete(answers);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        📋 Questionnaire de Profilage Sportif
      </h2>
      <p className="text-gray-600 text-center mb-8">
        Répondez à ces questions pour obtenir un programme personnalisé
      </p>

      <div className="space-y-8">
        {questions.map((q, index) => (
          <div key={q.id} className="border-b pb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              {index + 1}. {q.question}
            </h3>
            <div className="space-y-3">
              {q.options.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-purple-50 transition"
                >
                  <input
                    type={q.type === 'single' ? 'radio' : 'checkbox'}
                    name={q.id}
                    value={option.value}
                    checked={
                      q.type === 'single'
                        ? answers[q.id] === option.value
                        : (answers[q.id] || []).includes(option.value)
                    }
                    onChange={() =>
                      q.type === 'single'
                        ? handleSingleChoice(q.id, option.value)
                        : handleMultipleChoice(q.id, option.value)
                    }
                    className="mr-3"
                  />
                  <span className="text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={handleSubmit}
          className="px-8 py-4 bg-gradient-to-r from-[#ba45a5] to-[#e505fa] text-white text-lg font-bold rounded-lg hover:opacity-90 transition shadow-lg"
        >
          Valider mon profil →
        </button>
      </div>
    </div>
  );
}