import React, { useState, useEffect, useRef, useCallback } from 'react';

const FrustratingInput = () => {
  const [floatingDigits, setFloatingDigits] = useState([]);
  const [capturedValues, setCapturedValues] = useState({
    day1: null, day2: null,
    month1: null, month2: null,
    year1: null, year2: null, year3: null, year4: null
  });
  const [currentTarget, setCurrentTarget] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [coherenceTimers, setCoherenceTimers] = useState({});
  const [showValidation, setShowValidation] = useState(false);
  const [validationAnswer, setValidationAnswer] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const containerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const lastTimeRef = useRef(Date.now());

  const positions = ['day1', 'day2', 'month1', 'month2', 'year1', 'year2', 'year3', 'year4'];
  const labels = {
    day1: 'J', day2: 'J',
    month1: 'M', month2: 'M',
    year1: 'A', year2: 'A', year3: 'A', year4: 'A'
  };

  useEffect(() => {
    const digits = [];
    for (let i = 0; i < 15; i++) {
      digits.push({
        id: i,
        value: Math.floor(Math.random() * 10),
        x: Math.random() * 80 + 10,
        y: Math.random() * 70 + 15,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 3
      });
    }
    setFloatingDigits(digits);

    const availablePositions = positions.filter(p => capturedValues[p] === null);
    if (availablePositions.length > 0) {
      setCurrentTarget(availablePositions[Math.floor(Math.random() * availablePositions.length)]);
    }
  }, []);

  useEffect(() => {
    const animate = () => {
      const now = Date.now();
      const deltaTime = (now - lastTimeRef.current) / 16.67;
      lastTimeRef.current = now;

      setFloatingDigits(prev => prev.map(digit => {
        let { x, y, vx, vy, rotation, rotationSpeed } = digit;

        const dx = mousePos.x - x;
        const dy = mousePos.y - y;
        const distanceFromMouse = Math.sqrt(dx * dx + dy * dy);
        
        const captureX = 50, captureY = 50;
        const dxCapture = captureX - x;
        const dyCapture = captureY - y;
        const distanceFromCapture = Math.sqrt(dxCapture * dxCapture + dyCapture * dyCapture);
        const inCaptureZone = distanceFromCapture < 15;

        if (distanceFromMouse < 18 && distanceFromMouse > 0) {
          const force = inCaptureZone 
            ? 0.03 / (distanceFromMouse * 0.25 + 0.1)
            : 2.0 / (distanceFromMouse * 0.08 + 0.1);
          vx -= (dx / distanceFromMouse) * force * deltaTime;
          vy -= (dy / distanceFromMouse) * force * deltaTime;
        }

        if (Math.random() < 0.002 * deltaTime) {
          vx *= 0.3;
          vy *= 0.3;
        }

        vx += (Math.random() - 0.5) * 0.12 * deltaTime;
        vy += (Math.random() - 0.5) * 0.12 * deltaTime;

        if (!inCaptureZone && distanceFromCapture < 35) {
          const attractForce = 0.05;
          vx += (dxCapture / distanceFromCapture) * attractForce * deltaTime;
          vy += (dyCapture / distanceFromCapture) * attractForce * deltaTime;
        }

        x += vx * deltaTime;
        y += vy * deltaTime;

        if (x <= 5 || x >= 95) {
          vx = -vx * 0.7;
          x = x <= 5 ? 5 : 95;
        }
        if (y <= 10 || y >= 85) {
          vy = -vy * 0.7;
          y = y <= 10 ? 10 : 85;
        }

        const dampingFactor = inCaptureZone ? 0.92 : 0.98;
        vx *= dampingFactor;
        vy *= dampingFactor;

        const maxVel = 2.5;
        const vel = Math.sqrt(vx * vx + vy * vy);
        if (vel > maxVel) {
          vx = (vx / vel) * maxVel;
          vy = (vy / vel) * maxVel;
        }

        rotation += rotationSpeed * deltaTime;

        return { ...digit, x, y, vx, vy, rotation };
      }));

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [mousePos]);

  useEffect(() => {
    const timers = {};
    positions.forEach(key => {
      if (capturedValues[key] !== null && !coherenceTimers[key]) {
        const timer = setTimeout(() => {
          setCapturedValues(prev => ({ ...prev, [key]: null }));
          setCoherenceTimers(prev => {
            const { [key]: _, ...rest } = prev;
            return rest;
          });

          const available = positions.filter(p => capturedValues[p] === null);
          if (available.length > 0) {
            setCurrentTarget(available[Math.floor(Math.random() * available.length)]);
          }
        }, 8000 + Math.random() * 4000);

        timers[key] = timer;
        setCoherenceTimers(prev => ({ ...prev, [key]: timer }));
      }
    });

    return () => {
      Object.values(timers).forEach(clearTimeout);
    };
  }, [capturedValues, coherenceTimers]);

  const handleMouseMove = useCallback((e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      });
    }
  }, []);

  const handleDigitClick = useCallback((digit) => {
    if (!currentTarget) return;

    const captureX = 50, captureY = 50;
    const distance = Math.sqrt(
      Math.pow(digit.x - captureX, 2) + Math.pow(digit.y - captureY, 2)
    );

    if (distance < 15) {
      setCapturedValues(prev => ({ ...prev, [currentTarget]: digit.value }));
      setAttempts(prev => prev + 1);

      const available = positions.filter(p => 
        p !== currentTarget && capturedValues[p] === null
      );

      if (available.length > 0) {
        setCurrentTarget(available[Math.floor(Math.random() * available.length)]);
      } else {
        setCurrentTarget(null);
        setShowValidation(true);
      }
    }
  }, [currentTarget, capturedValues]);

  const validateAnswer = () => {
    const day = parseInt(`${capturedValues.day1}${capturedValues.day2}`) || 0;
    const month = parseInt(`${capturedValues.month1}${capturedValues.month2}`) || 0;
    const year = parseInt(`${capturedValues.year1}${capturedValues.year2}${capturedValues.year3}${capturedValues.year4}`) || 0;
    
    const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (day < 1 || day > 31) {
      alert('Jour invalide ! Le jour doit être entre 1 et 31. Réinitialisation...');
      resetForm();
      return;
    }
    if (month < 1 || month > 12) {
      alert('Mois invalide ! Le mois doit être entre 1 et 12. Réinitialisation...');
      resetForm();
      return;
    }
    if (year < 1900 || year > 2025) {
      alert('Année invalide ! L\'année doit être entre 1900 et 2025. Réinitialisation...');
      resetForm();
      return;
    }
    if (day > daysInMonth[month - 1]) {
      alert(`Jour invalide pour le mois ${month} ! Réinitialisation...`);
      resetForm();
      return;
    }

    setIsComplete(true);
  };

  const resetForm = () => {
    setCapturedValues({
      day1: null, day2: null,
      month1: null, month2: null,
      year1: null, year2: null, year3: null, year4: null
    });
    setCoherenceTimers({});
    setShowValidation(false);
    setValidationAnswer('');
    const available = positions.filter(p => capturedValues[p] === null);
    setCurrentTarget(available[Math.floor(Math.random() * available.length)]);
  };

  if (isComplete) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 flex items-center justify-center p-4 z-50">
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 md:p-8 w-full max-w-md border border-emerald-500/30 text-center">
          <svg 
            className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4 md:mb-6 text-emerald-400" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Félicitations ! 🎉</h1>
          <p className="text-emerald-100 mb-4 md:mb-6">
            Vous avez réussi à entrer votre date d'anniversaire !
          </p>
          <div className="bg-black/30 rounded-xl p-4 md:p-6 mb-4 md:mb-6">
            <p className="text-lg md:text-2xl font-mono text-white">
              {capturedValues.day1}{capturedValues.day2}/
              {capturedValues.month1}{capturedValues.month2}/
              {capturedValues.year1}{capturedValues.year2}{capturedValues.year3}{capturedValues.year4}
            </p>
          </div>
          <p className="text-emerald-200">
            Tentatives de capture : <span className="font-bold">{attempts}</span>
          </p>
          <p className="text-emerald-300 text-xs md:text-sm italic mt-3 md:mt-4">
            &quot;Si une machine doit être notre servante…&quot; — Donald Norman
          </p>
        </div>
      </div>
    );
  }

  if (showValidation) {
    const day = parseInt(`${capturedValues.day1}${capturedValues.day2}`) || 0;
    const month = parseInt(`${capturedValues.month1}${capturedValues.month2}`) || 0;
    const year = parseInt(`${capturedValues.year1}${capturedValues.year2}${capturedValues.year3}${capturedValues.year4}`) || 0;

    return (
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center p-3 md:p-4 z-50">
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 md:p-8 w-full max-w-md border border-purple-500/30">
          <svg 
            className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 text-amber-400" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <h2 className="text-xl md:text-2xl font-bold text-white text-center mb-4 md:mb-6">Validation Finale</h2>
          
          <div className="bg-black/30 rounded-xl p-4 md:p-6 mb-4 md:mb-6 text-center">
            <p className="text-purple-200 text-sm md:text-base mb-1 md:mb-2">Date capturée :</p>
            <p className="text-base md:text-xl font-mono text-white">
              {capturedValues.day1}{capturedValues.day2}/
              {capturedValues.month1}{capturedValues.month2}/
              {capturedValues.year1}{capturedValues.year2}{capturedValues.year3}{capturedValues.year4}
            </p>
          </div>

          <div className="bg-purple-900/50 rounded-xl p-4 md:p-6 mb-4 md:mb-6">
            <p className="text-purple-200 text-sm md:text-base mb-1 md:mb-2">Vérifiez votre date :</p>
            <p className="text-base md:text-lg font-mono text-white">
              Jour : {day} | Mois : {month} | Année : {year}
            </p>
          </div>

          <button
            onClick={validateAnswer}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-bold py-2.5 md:py-3 px-4 md:px-6 rounded-xl transition-transform hover:scale-[1.02] text-sm md:text-base"
          >
            Confirmer la date
          </button>
        </div>
      </div>
    );
  }

  // 🔑 KEY: 9% left shift + responsive, full-screen container
  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-screen h-screen overflow-hidden cursor-crosshair bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      style={{ transform: 'translateX(-9%)' }}
    >
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 bg-black/30 backdrop-blur-sm p-4 md:p-6 border-b border-purple-500/30 z-30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-center gap-3 mb-2 md:mb-4">
            <div className="flex items-center gap-2 md:gap-3">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <h1 className="text-lg md:text-2xl font-bold text-white">The Quantum Birthday Input</h1>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              <span className="text-amber-400 font-mono text-xs md:text-base">{attempts} tentatives</span>
            </div>
          </div>
          <p className="text-purple-300 text-xs md:text-base">
            🎯 Entrer votre date d'anniversaire en attrapant les chiffres flottants
          </p>
        </div>
      </div>

      {/* Instructions Panel — responsive positioning */}
      <div className="absolute top-20 md:top-32 left-4 md:left-8 bg-black/50 backdrop-blur-lg rounded-xl p-4 md:p-6 max-w-xs md:max-w-sm border border-purple-500/30 z-30">
        <h3 className="text-white font-bold text-sm md:text-base mb-2 md:mb-3 flex items-center gap-1.5 md:gap-2">
          <svg className="w-4 h-4 md:w-5 md:h-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" />
          </svg>
          Instructions
        </h3>
        <ul className="text-purple-200 text-xs md:text-sm space-y-1">
          <li>• Les chiffres fuient votre curseur</li>
          <li>• Cliquez sur un chiffre dans la zone centrale</li>
          <li>• Ordre de remplissage : <span className="text-amber-400">ALÉATOIRE</span></li>
          <li>• Les chiffres capturés peuvent <span className="text-red-400">disparaître</span></li>
          <li>• Position actuelle : <span className="text-green-400 font-mono">{labels[currentTarget] || '—'}</span></li>
        </ul>
      </div>

      {/* Date Display — responsive positioning */}
      <div className="absolute top-20 md:top-32 right-4 md:right-8 bg-black/50 backdrop-blur-lg rounded-xl p-4 md:p-6 border border-purple-500/30 z-30">
        <div className="flex items-center gap-2 flex-wrap justify-center">
          {['day1', 'day2'].map(key => (
            <div key={key} className={`w-8 h-12 md:w-10 md:h-14 lg:w-12 lg:h-16 rounded-md flex items-center justify-center text-base md:text-lg lg:text-xl font-mono border ${
              currentTarget === key
                ? 'bg-amber-500/30 border-amber-400 text-white animate-[pulse_1s_infinite]'
                : capturedValues[key] !== null
                  ? 'bg-emerald-500/30 border-emerald-400 text-white'
                  : 'bg-white/10 border-purple-500/30 text-white'
            }`}>
              {capturedValues[key] ?? '_'}
            </div>
          ))}
          <span className="text-white text-base md:text-lg lg:text-xl">/</span>
          {['month1', 'month2'].map(key => (
            <div key={key} className={`w-8 h-12 md:w-10 md:h-14 lg:w-12 lg:h-16 rounded-md flex items-center justify-center text-base md:text-lg lg:text-xl font-mono border ${
              currentTarget === key
                ? 'bg-amber-500/30 border-amber-400 text-white animate-[pulse_1s_infinite]'
                : capturedValues[key] !== null
                  ? 'bg-emerald-500/30 border-emerald-400 text-white'
                  : 'bg-white/10 border-purple-500/30 text-white'
            }`}>
              {capturedValues[key] ?? '_'}
            </div>
          ))}
          <span className="text-white text-base md:text-lg lg:text-xl">/</span>
          {['year1', 'year2', 'year3', 'year4'].map(key => (
            <div key={key} className={`w-8 h-12 md:w-10 md:h-14 lg:w-12 lg:h-16 rounded-md flex items-center justify-center text-base md:text-lg lg:text-xl font-mono border ${
              currentTarget === key
                ? 'bg-amber-500/30 border-amber-400 text-white animate-[pulse_1s_infinite]'
                : capturedValues[key] !== null
                  ? 'bg-emerald-500/30 border-emerald-400 text-white'
                  : 'bg-white/10 border-purple-500/30 text-white'
            }`}>
              {capturedValues[key] ?? '_'}
            </div>
          ))}
        </div>
        <p className="text-center text-purple-400 text-xs mt-2">JJ/MM/AAAA</p>
      </div>

      {/* Capture Zone */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full border-3 md:border-4 border-dashed border-amber-500/50 flex items-center justify-center animate-[spin_10s_linear_infinite]">
        <div className="text-center">
          <p className="text-amber-400 font-bold text-xs md:text-sm lg:text-lg">ZONE DE</p>
          <p className="text-amber-400 font-bold text-xs md:text-sm lg:text-lg">CAPTURE</p>
        </div>
      </div>

      {/* Floating Digits */}
      {floatingDigits.map(digit => (
        <div
          key={digit.id}
          onClick={() => handleDigitClick(digit)}
          style={{
            left: `${digit.x}%`,
            top: `${digit.y}%`,
            transform: `translate(-50%, -50%) rotate(${digit.rotation}deg)`,
            position: 'absolute',
            willChange: 'transform'
          }}
          className="cursor-pointer select-none"
        >
          <div className="relative w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16">
            <div 
              className="absolute inset-0 bg-purple-500 rounded-full opacity-40 blur-md md:blur-lg"
              style={{ opacity: 0.4 }}
            />
            <div 
              className="relative flex items-center justify-center w-full h-full bg-gradient-to-br from-purple-600 to-blue-500 rounded-full text-white text-base md:text-lg lg:text-2xl font-bold border-2 md:border-4 border-purple-400 shadow-lg hover:scale-110 transition-transform duration-200"
              onMouseEnter={e => e.currentTarget.previousElementSibling.style.opacity = '0.65'}
              onMouseLeave={e => e.currentTarget.previousElementSibling.style.opacity = '0.4'}
            >
              {digit.value}
            </div>
          </div>
        </div>
      ))}

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm p-3 md:p-4 text-center border-t border-purple-500/30">
        <p className="text-purple-400 text-[10px] md:text-xs italic">
          &quot;Si une machine doit être notre servante, elle doit être conçue pour être facile à utiliser.&quot; - Donald Norman
        </p>
        <p className="text-purple-500 text-[8px] md:text-[10px] mt-0.5">
          (Nous avons fait exactement l'inverse)
        </p>
      </div>
    </div>
  );
};

export default FrustratingInput;