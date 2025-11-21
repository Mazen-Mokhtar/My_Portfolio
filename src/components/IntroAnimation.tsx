import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroAnimationProps {
  onComplete: () => void;
}

let globalAnimationFrame: number | undefined;
let globalCanvas: HTMLCanvasElement | null = null;
let globalCtx: CanvasRenderingContext2D | null = null;
let isAnimating = true;
let globalResizeHandler: (() => void) | null = null;

const startAnimation = (canvas: HTMLCanvasElement) => {
  if (globalAnimationFrame) {
    cancelAnimationFrame(globalAnimationFrame);
  }

  globalCanvas = canvas;
  globalCtx = canvas.getContext('2d');
  if (!globalCtx) return;

  const resizeCanvas = () => {
    if (!globalCanvas) return;
    globalCanvas.width = window.innerWidth;
    globalCanvas.height = window.innerHeight;
  };

  resizeCanvas();
  globalResizeHandler = resizeCanvas;
  window.addEventListener('resize', resizeCanvas);

  const particles = [];
  for (let i = 0; i < 200; i++) {
    const initialY = Math.random() * globalCanvas.height;
    particles.push({
      x: Math.random() * globalCanvas.width,
      y: initialY,
      initialY,
      size: Math.random() * 2 + 0.5,
      speed: Math.random() * 0.5 + 0.1,
      alpha: Math.random() * 0.4 + 0.1,
      angle: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
    });
  }

  const starSparkles = [];
  const centerX = globalCanvas.width / 2 - 30;
  const centerY = globalCanvas.height / 2 - 90;
  
  for (let i = 0; i < 40; i++) {
    const angle = (i / 40) * Math.PI * 2;
    const distance = Math.random() * 30 + 10;
    starSparkles.push({
      x: centerX + Math.cos(angle) * distance,
      y: centerY + Math.sin(angle) * distance,
      size: Math.random() * 2 + 1,
      alpha: Math.random() * 0.6 + 0.2,
      speed: Math.random() * 0.03 + 0.02,
      angle,
      pulseSpeed: Math.random() * 0.02 + 0.01,
    });
  }

  const motionLines = [];
  for (let i = 0; i < 25; i++) {
    const initialX = Math.random() * globalCanvas.width;
    motionLines.push({
      x: initialX,
      initialX,
      y: globalCanvas.height / 2 + (Math.random() * 200 - 100),
      length: Math.random() * 300 + 200,
      speed: Math.random() * 4 + 2,
      opacity: Math.random() * 0.3 + 0.1,
      direction: Math.random() > 0.5 ? 1 : -1,
      waveAmplitude: Math.random() * 20 + 10,
      waveFrequency: Math.random() * 0.02 + 0.01,
      phase: Math.random() * Math.PI * 2,
    });
  }

  let frame = 0;

  const animate = () => {
    if (!globalCtx || !globalCanvas) return;

    globalCtx.clearRect(0, 0, globalCanvas.width, globalCanvas.height);

    particles.forEach((particle) => {
      const pulse = Math.sin(frame * 0.05 + particle.angle) * 0.5 + 0.5;
      globalCtx!.fillStyle = `rgba(255, 255, 255, ${particle.alpha * pulse})`;
      globalCtx!.beginPath();
      globalCtx!.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      globalCtx!.fill();

      particle.y -= particle.speed;
      particle.angle += particle.rotationSpeed;
      if (particle.y < -10) {
        particle.y = globalCanvas.height + 10;
        particle.x = Math.random() * globalCanvas.width;
        particle.alpha = Math.random() * 0.4 + 0.1;
      }
    });

    motionLines.forEach((line) => {
      const wave = Math.sin(frame * line.waveFrequency + line.phase) * line.waveAmplitude;
      const gradient = globalCtx!.createLinearGradient(
        line.x, 
        line.y, 
        line.x + line.length * line.direction, 
        line.y
      );
      
      gradient.addColorStop(0, `rgba(147, 112, 219, ${line.opacity * 0.3})`);
      gradient.addColorStop(0.5, `rgba(147, 112, 219, ${line.opacity})`);
      gradient.addColorStop(1, `rgba(147, 112, 219, ${line.opacity * 0.3})`);

      globalCtx!.strokeStyle = gradient;
      globalCtx!.lineWidth = 2;
      globalCtx!.beginPath();
      
      const startX = line.x;
      const startY = line.y + wave;
      const endX = line.x + line.length * line.direction;
      const endY = line.y + wave;
      const cp1x = startX + (endX - startX) * 0.25;
      const cp1y = startY + wave * 0.5;
      const cp2x = startX + (endX - startX) * 0.75;
      const cp2y = endY + wave * 0.5;

      globalCtx!.moveTo(startX, startY);
      globalCtx!.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY);
      globalCtx!.stroke();

      globalCtx!.shadowColor = 'rgba(147, 112, 219, 0.3)';
      globalCtx!.shadowBlur = 15;
      globalCtx!.stroke();
      globalCtx!.shadowBlur = 0;

      line.x += line.speed * line.direction;
      if (line.x > globalCanvas.width + 300 || line.x < -300) {
        line.x = line.direction > 0 ? -150 : globalCanvas.width + 150;
        line.y = globalCanvas.height / 2 + (Math.random() * 200 - 100);
        line.opacity = Math.random() * 0.3 + 0.1;
        line.length = Math.random() * 300 + 200;
        line.speed = Math.random() * 4 + 2;
        line.phase = Math.random() * Math.PI * 2;
      }
    });

    starSparkles.forEach((sparkle) => {
      const pulse = Math.sin(frame * sparkle.pulseSpeed) * 0.6 + 0.4;
      const radius = Math.abs(sparkle.size * pulse); // Fixed: Ensure radius is always positive
      const angle = sparkle.angle + frame * 0.001;
      const x = centerX + Math.cos(angle) * 30;
      const y = centerY + Math.sin(angle) * 30;
      
      globalCtx!.fillStyle = `rgba(255, 255, 255, ${sparkle.alpha * pulse})`;
      globalCtx!.beginPath();
      globalCtx!.arc(x, y, radius, 0, Math.PI * 2);
      globalCtx!.fill();

      globalCtx!.shadowColor = 'rgba(255, 255, 255, 0.5)';
      globalCtx!.shadowBlur = 10;
      globalCtx!.fill();
      globalCtx!.shadowBlur = 0;
    });

    const starOpacity = Math.min(1, frame / 150);
    const starPulse = Math.sin(frame * 0.05) * 0.3 + 0.9;
    globalCtx!.fillStyle = `rgba(255, 255, 255, ${starOpacity})`;
    globalCtx!.font = `${25 * starPulse}px Arial`;
    globalCtx!.textAlign = 'center';
    globalCtx!.textBaseline = 'middle';
    globalCtx!.shadowColor = 'rgba(255, 255, 255, 0.5)';
    globalCtx!.shadowBlur = 15;
    globalCtx!.fillText('★', centerX, centerY);
    globalCtx!.shadowBlur = 0;

    frame++;
    globalAnimationFrame = requestAnimationFrame(animate);
  };

  globalAnimationFrame = requestAnimationFrame(animate);
};

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showDex, setShowDex] = useState(false);
  const [showMa, setShowMa] = useState(false);
  const [showZen, setShowZen] = useState(false);
  const [textAnimationComplete, setTextAnimationComplete] = useState(false);

  useEffect(() => {
    if (canvasRef.current) {
      startAnimation(canvasRef.current);
    }

    return () => {
      if (globalAnimationFrame) {
        cancelAnimationFrame(globalAnimationFrame);
        globalAnimationFrame = undefined;
      }
      if (globalResizeHandler) {
        window.removeEventListener('resize', globalResizeHandler);
        globalResizeHandler = null;
      }
      isAnimating = false;
      globalCanvas = null;
      globalCtx = null;
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    const sequence = async () => {
      try {
        // Show ZEN immediately
        if (isMounted) setShowZen(true);
        
        // Wait for ZEN animation to complete
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Show DEX
        if (isMounted) setShowDex(true);
        
        // Wait for DEX
        await new Promise(resolve => setTimeout(resolve, 1500));
        if (isMounted) setShowDex(false);
        
        // Wait before showing MA
        await new Promise(resolve => setTimeout(resolve, 800));
        if (isMounted) setShowMa(true);
        
        // Wait for MA
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        if (isMounted) {
          setTextAnimationComplete(true);
          onComplete();
        }
      } catch (error) {
        if (isMounted) {
          setTextAnimationComplete(true);
          onComplete();
        }
      }
    };

    sequence();

    return () => {
      isMounted = false;
    };
  }, [onComplete]);

  const zenVariants = {
    initial: { 
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const zenWithDexVariants = {
    animate: {
      x: -30,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const zenWithMaVariants = {
    animate: {
      x: 30,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const dexVariants = {
    initial: { 
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    exit: {
      opacity: 0,
      x: 50,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const maVariants = {
    initial: { 
      opacity: 0,
      x: -50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeOut' } }}
      ref={containerRef}
    >
      <canvas ref={canvasRef} className="absolute inset-0" />

      <div className="relative z-10 flex items-center justify-center">
        <div
          className="relative inline-flex items-center text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter"
          style={{
            letterSpacing: '-0.1em',
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
          }}
        >
          <AnimatePresence mode="wait">
            {showMa && (
              <motion.div
                className="text-white inline-block"
                variants={maVariants}
                initial="initial"
                animate="animate"
                style={{
                  textShadow: '0 0 12px #00f, 0 0 24px #00f, 0 0 36px #00f',
                  WebkitTextStroke: '1px #00f',
                }}
              >
                Ma
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {showZen && (
              <motion.div
                className="text-white inline-block"
                variants={zenVariants}
                initial="initial"
                animate="animate"
                style={{
                  textShadow: '0 0 12px #00f, 0 0 24px #00f, 0 0 36px #00f',
                  WebkitTextStroke: '1px #00f',
                }}
              >
                <motion.div
                  animate={showDex ? "animate" : showMa ? "animate" : {}}
                  variants={showDex ? zenWithDexVariants : showMa ? zenWithMaVariants : {}}
                >
                  Zen
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {showDex && (
              <motion.div
                key="dex"
                className="text-white inline-block"
                variants={dexVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                style={{
                  textShadow: '0 0 12px #00f, 0 0 24px #00f, 0 0 36px #00f',
                  WebkitTextStroke: '1px #00f',
                }}
              >
                dex
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default IntroAnimation;