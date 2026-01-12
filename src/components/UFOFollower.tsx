import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';

const UFOFollower = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Motion values for mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring physics for smooth, floaty following
  const springConfig = { stiffness: 150, damping: 15, mass: 0.5 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only show on desktop
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
      style={{ 
        x, 
        y,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        animate={{
          y: [0, -5, 0],
          rotate: [0, 3, -3, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative"
      >
        {/* UFO Emoji with Glow Effect */}
        <motion.span
          className="text-3xl block"
          style={{
            filter: 'drop-shadow(0 0 15px rgba(139, 92, 246, 0.8))',
          }}
          animate={{
            filter: [
              'drop-shadow(0 0 10px rgba(139, 92, 246, 0.6))',
              'drop-shadow(0 0 25px rgba(139, 92, 246, 1))',
              'drop-shadow(0 0 10px rgba(139, 92, 246, 0.6))',
            ],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          🛸
        </motion.span>

        {/* Tractor Beam Effect */}
        <motion.div
          className="absolute top-full left-1/2 -translate-x-1/2 w-6"
          animate={{
            opacity: [0.4, 0.8, 0.4],
            height: [15, 25, 15],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div 
            className="w-full h-full rounded-b-full"
            style={{
              background: 'linear-gradient(to bottom, hsl(var(--primary) / 0.7), hsl(var(--secondary) / 0.4), transparent)',
            }}
          />
        </motion.div>

        {/* Sparkle Particles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary"
            style={{
              left: `${20 + i * 20}%`,
              top: '110%',
            }}
            animate={{
              y: [0, 20, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeOut',
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default UFOFollower;
