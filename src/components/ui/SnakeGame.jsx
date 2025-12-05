import React, { useState, useEffect, useCallback } from 'react';
import { X } from 'lucide-react';

export default function SnakeGame({ onClose }) {
  const [snake, setSnake] = useState([[10, 10]]);
  const [food, setFood] = useState([15, 15]);
  const [direction, setDirection] = useState([0, 1]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const gridSize = 18;
  const cellSize = 18;

  const generateFood = useCallback(() => {
    const newFood = [
      Math.floor(Math.random() * gridSize),
      Math.floor(Math.random() * gridSize)
    ];
    setFood(newFood);
  }, []);

  const resetGame = () => {
    setSnake([[9, 9]]);
    setDirection([0, 1]);
    setGameOver(false);
    setScore(0);
    setIsPaused(false);
    generateFood();
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (gameOver) return;
      
      switch(e.key) {
        case 'ArrowUp':
          if (direction[0] !== 1) setDirection([-1, 0]);
          break;
        case 'ArrowDown':
          if (direction[0] !== -1) setDirection([1, 0]);
          break;
        case 'ArrowLeft':
          if (direction[1] !== 1) setDirection([0, -1]);
          break;
        case 'ArrowRight':
          if (direction[1] !== -1) setDirection([0, 1]);
          break;
        case ' ':
          e.preventDefault();
          setIsPaused(p => !p);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction, gameOver]);

  useEffect(() => {
    if (gameOver || isPaused) return;

    const moveSnake = () => {
      setSnake(prevSnake => {
        const newHead = [
          prevSnake[0][0] + direction[0],
          prevSnake[0][1] + direction[1]
        ];

        if (
          newHead[0] < 0 || newHead[0] >= gridSize ||
          newHead[1] < 0 || newHead[1] >= gridSize
        ) {
          setGameOver(true);
          return prevSnake;
        }

        if (prevSnake.some(segment => segment[0] === newHead[0] && segment[1] === newHead[1])) {
          setGameOver(true);
          return prevSnake;
        }

        const newSnake = [newHead, ...prevSnake];

        if (newHead[0] === food[0] && newHead[1] === food[1]) {
          setScore(s => s + 10);
          generateFood();
          return newSnake;
        }

        newSnake.pop();
        return newSnake;
      });
    };

    const interval = setInterval(moveSnake, 150);
    return () => clearInterval(interval);
  }, [direction, food, gameOver, isPaused, generateFood]);

  return (
    <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4">
      {/* Outer container: scrollable if needed */}
      <div className="w-full max-w-lg bg-gradient-to-br from-purple-900 to-pink-800 rounded-xl shadow-2xl border border-pink-500/30 overflow-hidden">
        
        {/* Header (sticky top) */}
        <div className="p-4 pb-2 flex justify-between items-start border-b border-pink-700/30">
          <div>
            <h2 className="text-xl font-bold text-white">🐍 Snake NIRD</h2>
            <p className="text-pink-200 text-sm mt-1">Score: <span className="font-mono">{score}</span></p>
          </div>
          <button
            onClick={onClose}
            className="text-pink-200 hover:text-white hover:bg-black/20 p-2 rounded-md transition"
            aria-label="Fermer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable content area */}
        <div className="max-h-[70vh] overflow-y-auto">
          {/* Game Board (fixed size) */}
          <div className="px-4 py-3">
            <div className="bg-black/40 rounded-lg p-3 inline-block">
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: `repeat(${gridSize}, ${cellSize}px)`,
                  gap: '1px',
                  backgroundColor: '#111827',
                  margin: '0 auto',
                }}
              >
                {Array.from({ length: gridSize * gridSize }).map((_, idx) => {
                  const row = Math.floor(idx / gridSize);
                  const col = idx % gridSize;
                  const isSnake = snake.some(segment => segment[0] === row && segment[1] === col);
                  const isHead = snake[0] && snake[0][0] === row && snake[0][1] === col;
                  const isFood = food[0] === row && food[1] === col;

                  return (
                    <div
                      key={idx}
                      style={{
                        width: cellSize,
                        height: cellSize,
                        backgroundColor: isHead 
                          ? '#e879f9' 
                          : isSnake 
                            ? '#d946ef' 
                            : isFood 
                              ? '#fbbf24' 
                              : '#1e293b',
                        borderRadius: isFood ? '50%' : '2px',
                        transition: 'background-color 0.15s'
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="px-4 py-2 text-pink-200 text-xs space-y-1">
            <p>🎮 Flèches : ← ↑ → ↓</p>
            <p>⏸️ Espace : Pause</p>
          </div>

          {/* Pause & Game Over — now always visible */}
          {(isPaused || gameOver) && (
            <div className="px-4 pb-4">
              {isPaused && (
                <div className="text-center py-2">
                  <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-medium">
                    ⏸️ PAUSE
                  </span>
                </div>
              )}

              {gameOver && (
                <div className="text-center mt-3">
                  <p className="text-red-300 font-bold text-lg mb-2">💥 Game Over !</p>
                  <p className="text-pink-200 text-sm mb-3">
                    Vous avez économisé <span className="font-bold text-white">{score}</span> emails 📧
                  </p>
                  <button
                    onClick={resetGame}
                    className="w-full bg-white text-purple-900 py-2.5 rounded-lg font-bold hover:bg-gray-100 transition shadow-md"
                  >
                    🔄 Rejouer
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}