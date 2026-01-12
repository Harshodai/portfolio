import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const UFOFollower = () => {
  const [windowHeight, setWindowHeight] = useState(0);
  const { scrollYProgress } = useScroll();
  
  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Transform scroll progress to Y position (0% = top, 100% = bottom)
  const rawY = useTransform(scrollYProgress, [0, 1], [100, windowHeight - 150]);
  
  // Add spring physics for smooth, natural movement
  const y = useSpring(rawY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Slight horizontal wobble based on scroll
  const rawX = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [20, 35, 25, 40, 20]);
  const x = useSpring(rawX, {
    stiffness: 100,
    damping: 30,
  });

  // Rotation based on scroll direction
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-5, 0, 5]);

  return (
    <motion.div
      className="fixed left-4 z-50 pointer-events-none hidden md:block"
      style={{ y, x }}
    >
      <motion.div
        style={{ rotate }}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative"
      >
        {/* UFO Emoji with Glow Effect */}
        <motion.span
          className="text-4xl filter drop-shadow-lg"
          animate={{
            filter: [
              'drop-shadow(0 0 10px rgba(139, 92, 246, 0.5))',
              'drop-shadow(0 0 20px rgba(139, 92, 246, 0.8))',
              'drop-shadow(0 0 10px rgba(139, 92, 246, 0.5))',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          🛸
        </motion.span>

        {/* Tractor Beam Effect */}
        <motion.div
          className="absolute top-full left-1/2 -translate-x-1/2 w-8"
          animate={{
            opacity: [0.3, 0.7, 0.3],
            height: [20, 35, 20],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div 
            className="w-full h-full rounded-b-full"
            style={{
              background: 'linear-gradient(to bottom, hsl(var(--primary) / 0.6), hsl(var(--secondary) / 0.3), transparent)',
            }}
          />
        </motion.div>

        {/* Particle Effects */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary"
            style={{
              left: `${30 + i * 20}%`,
              top: '100%',
            }}
            animate={{
              y: [0, 30, 0],
              opacity: [0, 1, 0],
              x: [0, (i - 1) * 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeOut',
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default UFOFollower;
