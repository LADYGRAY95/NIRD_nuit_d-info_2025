import { Heart, Users, Lightbulb } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

export default function About() {
  const [gameState, setGameState] = useState({
    started: false,
    score: 0,
    lives: 3,
    playerPos: 50,
    bullets: [],
    enemyBullets: [],
    enemies: [],
    victory: false,
    gameOver: false
  });

  // Constantes du jeu
  const PLAYER_SPEED = 4;
  const BULLET_SPEED = 5;
  const ENEMY_BULLET_SPEED = 3;
  const GAME_TICK = 30;
  const ENEMY_SHOOT_CHANCE = 0.003;

  // Initialiser les ennemis
  const initEnemies = useCallback(() => {
    const enemies = [];
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 8; col++) {
        enemies.push({
          id: `${row}-${col}`,
          x: col * 11 + 10,
          y: row * 12 + 10
        });
      }
    }
    return enemies;
  }, []);

  // Démarrer le jeu
  const startGame = useCallback(() => {
    setGameState({
      started: true,
      score: 0,
      lives: 3,
      playerPos: 50,
      bullets: [],
      enemyBullets: [],
      enemies: initEnemies(),
      victory: false,
      gameOver: false
    });
  }, [initEnemies]);

  // Tirer
  const shoot = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      bullets: [...prev.bullets, { 
        id: Date.now(), 
        x: prev.playerPos, 
        y: 85 
      }]
    }));
  }, []);

  // Contrôles
  useEffect(() => {
    if (!gameState.started || gameState.victory || gameState.gameOver) return;

    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setGameState(prev => ({
          ...prev,
          playerPos: Math.max(5, prev.playerPos - PLAYER_SPEED)
        }));
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setGameState(prev => ({
          ...prev,
          playerPos: Math.min(95, prev.playerPos + PLAYER_SPEED)
        }));
      } else if (e.key === ' ') {
        e.preventDefault();
        shoot();
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [gameState.started, gameState.victory, gameState.gameOver, shoot]);

  // Boucle de jeu principale
  useEffect(() => {
    if (!gameState.started || gameState.victory || gameState.gameOver) return;

    const gameLoop = setInterval(() => {
      setGameState(prev => {
        // Déplacer les balles du joueur
        let newBullets = prev.bullets
          .map(b => ({ ...b, y: b.y - BULLET_SPEED }))
          .filter(b => b.y > 0);

        // Déplacer les balles ennemies
        let newEnemyBullets = prev.enemyBullets
          .map(b => ({ ...b, y: b.y + ENEMY_BULLET_SPEED }))
          .filter(b => b.y < 100);

        let newEnemies = [...prev.enemies];
        let scoreIncrement = 0;
        let newLives = prev.lives;

        // Les ennemis tirent aléatoirement
        newEnemies.forEach(enemy => {
          if (Math.random() < ENEMY_SHOOT_CHANCE) {
            newEnemyBullets.push({
              id: Date.now() + Math.random(),
              x: enemy.x,
              y: enemy.y + 5
            });
          }
        });

        // Vérifier collisions balles joueur vs ennemis
        newBullets = newBullets.filter(bullet => {
          let hit = false;
          newEnemies = newEnemies.filter(enemy => {
            if (Math.abs(bullet.x - enemy.x) < 6 && Math.abs(bullet.y - enemy.y) < 6) {
              hit = true;
              scoreIncrement += 100;
              return false;
            }
            return true;
          });
          return !hit;
        });

        // Vérifier collisions balles ennemies vs joueur
        newEnemyBullets = newEnemyBullets.filter(bullet => {
          if (Math.abs(bullet.x - prev.playerPos) < 5 && bullet.y > 80) {
            newLives -= 1;
            return false;
          }
          return true;
        });

        // Vérifier victoire ou game over
        const victory = newEnemies.length === 0;
        const gameOver = newLives <= 0;

        return {
          ...prev,
          bullets: newBullets,
          enemyBullets: newEnemyBullets,
          enemies: newEnemies,
          score: prev.score + scoreIncrement,
          lives: newLives,
          victory,
          gameOver
        };
      });
    }, GAME_TICK);

    return () => clearInterval(gameLoop);
  }, [gameState.started, gameState.victory, gameState.gameOver]);

  return (
    <div className="py-16 bg-gray-50">
      <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Heart className="text-indigo-600" size={32} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">ℹ️ À propos de NIRD</h1>
        </div>

        <div className="prose max-w-none space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center mb-4">
              <Lightbulb className="mr-2 text-indigo-600" size={24} />
              Notre mission
            </h2>
            <p className="text-gray-700">
              Rendre le numérique durable, accessible et éducatif — en réparant les machines, en formant les citoyens, et en promouvant les logiciels libres.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center mb-4">
              <Users className="mr-2 text-indigo-600" size={24} />
              Notre vision
            </h2>
            <p className="text-gray-700">
              Un monde où chaque appareil est utilisé longtemps, chaque donnée respectée, et chaque citoyen·ne acteur·rice de la transition numérique.
            </p>
          </div>

          {/* ========== JEU RÉTRO SPACE INVADERS ========== */}
          <div className="bg-white p-8 rounded-lg shadow-lg border-4 border-indigo-600">
            <div style={{ fontFamily: "'Press Start 2P', cursive" }}>
              <div className="text-center mb-6">
                <h3 className="text-indigo-600 text-xl mb-2">🕹️ SPACE INVADERS 🕹️</h3>
                <p className="text-xs text-gray-600">Édition Nuit de l'Info</p>
              </div>

              {/* Score et stats */}
              <div className="flex justify-between items-center mb-6 text-sm flex-wrap gap-2">
                <div className="bg-indigo-100 px-4 py-2 rounded border-2 border-indigo-600">
                  <span className="text-indigo-600">SCORE: {gameState.score}</span>
                </div>
                <div className="bg-red-100 px-4 py-2 rounded border-2 border-red-600">
                  <span className="text-red-600">
                    VIES: {Array(gameState.lives).fill('❤️').join(' ')}
                    {Array(3 - gameState.lives).fill('🖤').join(' ')}
                  </span>
                </div>
                <div className="bg-indigo-100 px-4 py-2 rounded border-2 border-indigo-600">
                  <span className="text-indigo-600">ALIENS: {gameState.enemies.length}</span>
                </div>
              </div>

              {/* Zone de jeu */}
              <div 
                className="relative bg-black border-4 border-indigo-600 rounded mx-auto"
                style={{ 
                  height: '500px',
                  maxWidth: '650px',
                  overflow: 'hidden'
                }}
              >
                {/* Effet CRT scanlines */}
                <div className="absolute inset-0 pointer-events-none z-10" style={{
                  background: 'repeating-linear-gradient(0deg, rgba(99, 102, 241, 0.05) 0px, transparent 1px, transparent 2px, rgba(99, 102, 241, 0.05) 3px)',
                  animation: 'scanline 8s linear infinite'
                }} />

                {!gameState.started ? (
                  <div className="flex flex-col items-center justify-center h-full px-6">
                    <div className="text-green-400 text-center mb-8">
                      <p className="text-xl mb-6 animate-pulse">👾 SPACE INVADERS 👾</p>
                      <p className="text-xs leading-relaxed mb-3 text-green-300">
                        Les aliens attaquent la Terre !
                      </p>
                      <p className="text-xs leading-relaxed mb-2 text-cyan-400">
                        ← → : Déplacer le vaisseau
                      </p>
                      <p className="text-xs leading-relaxed mb-2 text-cyan-400">
                        ESPACE : Tirer des missiles
                      </p>
                      <p className="text-xs leading-relaxed text-yellow-400">
                        ⚠️ Évitez les tirs ennemis !
                      </p>
                    </div>
                    <button
                      onClick={startGame}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-lg border-4 border-indigo-800 shadow-lg transition-all hover:scale-105 active:scale-95"
                      style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '14px' }}
                    >
                      ▶ DÉMARRER
                    </button>
                  </div>
                ) : gameState.gameOver ? (
                  <div className="flex flex-col items-center justify-center h-full px-6">
                    <div className="text-red-400 text-center mb-8 animate-pulse">
                      <p className="text-3xl mb-6">💀 GAME OVER 💀</p>
                      <p className="text-xl mb-4">Score Final</p>
                      <p className="text-2xl mb-6 text-yellow-400">{gameState.score}</p>
                      <p className="text-sm text-cyan-400">Vous avez été détruit !</p>
                    </div>
                    <button
                      onClick={startGame}
                      className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-lg border-4 border-red-800 shadow-lg transition-all hover:scale-105 active:scale-95"
                      style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '14px' }}
                    >
                      ↻ RÉESSAYER
                    </button>
                  </div>
                ) : gameState.victory ? (
                  <div className="flex flex-col items-center justify-center h-full px-6">
                    <div className="text-yellow-400 text-center mb-8 animate-pulse">
                      <p className="text-3xl mb-6">🎉 VICTOIRE ! 🎉</p>
                      <p className="text-xl mb-4">Score Final</p>
                      <p className="text-2xl mb-6 text-green-400">{gameState.score}</p>
                      <p className="text-sm text-cyan-400">Tous les aliens éliminés !</p>
                    </div>
                    <button
                      onClick={startGame}
                      className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-lg border-4 border-green-800 shadow-lg transition-all hover:scale-105 active:scale-95"
                      style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '14px' }}
                    >
                      ↻ REJOUER
                    </button>
                  </div>
                ) : (
                  <div className="relative h-full">
                    {/* Ennemis */}
                    {gameState.enemies.map(enemy => (
                      <div
                        key={enemy.id}
                        className="absolute text-3xl transition-all duration-75"
                        style={{
                          left: `${enemy.x}%`,
                          top: `${enemy.y}%`,
                          transform: 'translate(-50%, -50%)',
                          filter: 'drop-shadow(0 0 8px #22c55e)'
                        }}
                      >
                        👾
                      </div>
                    ))}

                    {/* Missiles du joueur */}
                    {gameState.bullets.map(bullet => (
                      <div
                        key={bullet.id}
                        className="absolute"
                        style={{
                          left: `${bullet.x}%`,
                          top: `${bullet.y}%`,
                          width: '3px',
                          height: '18px',
                          background: 'linear-gradient(to top, #facc15, #fef08a)',
                          transform: 'translate(-50%, -50%)',
                          boxShadow: '0 0 10px #facc15, 0 0 20px #fef08a',
                          borderRadius: '2px'
                        }}
                      />
                    ))}

                    {/* Missiles ennemis */}
                    {gameState.enemyBullets.map(bullet => (
                      <div
                        key={bullet.id}
                        className="absolute"
                        style={{
                          left: `${bullet.x}%`,
                          top: `${bullet.y}%`,
                          width: '3px',
                          height: '18px',
                          background: 'linear-gradient(to bottom, #ef4444, #fca5a5)',
                          transform: 'translate(-50%, -50%)',
                          boxShadow: '0 0 10px #ef4444, 0 0 20px #fca5a5',
                          borderRadius: '2px'
                        }}
                      />
                    ))}

                    {/* Vaisseau du joueur */}
                    <div
                      className="absolute text-4xl"
                      style={{
                        left: `${gameState.playerPos}%`,
                        bottom: '30px',
                        transform: 'translateX(-50%)',
                        transition: 'left 0.05s linear',
                        filter: 'drop-shadow(0 0 10px #3b82f6)'
                      }}
                    >
                      🚀
                    </div>

                    {/* Effet de fond étoilé */}
                    <div className="absolute inset-0 pointer-events-none opacity-30">
                      {[...Array(30)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute bg-white rounded-full animate-pulse"
                          style={{
                            width: `${Math.random() * 2 + 1}px`,
                            height: `${Math.random() * 2 + 1}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`,
                            animationDuration: `${Math.random() * 3 + 2}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Instructions */}
              <div className="mt-6 text-center text-xs text-gray-600 leading-relaxed">
                <p className="mb-2">🎯 Détruisez tous les aliens avant de perdre vos 3 vies !</p>
                <p className="text-indigo-600">+100 points par alien 👾 | ⚠️ Évitez les tirs rouges !</p>
              </div>
            </div>
          </div>
          {/* ========== FIN JEU RÉTRO ========== */}

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nos valeurs</h2>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Éducation", desc: "Apprendre par la pratique." },
                { title: "Collaboration", desc: "Partager, mutualiser, co-créer." },
                { title: "Durabilité", desc: "Réparer avant de jeter." },
                { title: "Liberté", desc: "Logiciels libres, données maîtrisées." },
                { title: "Inclusion", desc: "Accès pour tous, peu importe le budget." },
                { title: "Transparence", desc: "Impacts mesurés, actions visibles." },
              ].map((val, i) => (
                <li key={i} className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-indigo-300 transition-colors">
                  <div className="font-bold text-indigo-700">{val.title}</div>
                  <div className="text-gray-600 text-sm">{val.desc}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">L'équipe</h2>
            <p className="text-gray-600 mb-4">
              Une équipe pluridisciplinaire : enseignants, ingénieurs, designers, éco-acteurs…  
              Basée à Paris, Lyon, et Rennes — mais active partout en France.
            </p>
            <div className="flex space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-12 w-12 rounded-full bg-indigo-100 border-2 border-indigo-300 flex items-center justify-center text-indigo-600 font-bold">
                  ?
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
            <p className="text-gray-600">
              📧 contact@nird.fr<br />
              🌐 <a href="https://nird.fr" className="text-indigo-600 hover:underline font-medium">nird.fr</a><br />
              📱 @nird_officiel (Twitter, Instagram, Mastodon)
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scanline {
          0% { transform: translateY(0); }
          100% { transform: translateY(10px); }
        }
      `}</style>
    </div>
  );
}