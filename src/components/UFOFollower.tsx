import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const UFOFollower = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  
  // Motion values for mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring physics for smooth, floaty following
  const springConfig = { stiffness: 150, damping: 15, mass: 0.5 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // Track mouse velocity for tilt effect
  const velocityX = useMotionValue(0);
  const tilt = useTransform(velocityX, [-500, 0, 500], [-15, 0, 15]);
  const smoothTilt = useSpring(tilt, { stiffness: 100, damping: 20 });

  useEffect(() => {
    // Only show on desktop
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return;

    let lastX = 0;
    let lastTime = Date.now();

    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastTime;
      
      if (deltaTime > 0) {
        const velocity = (e.clientX - lastX) / deltaTime * 100;
        velocityX.set(velocity);
      }
      
      lastX = e.clientX;
      lastTime = currentTime;
      
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, select, [data-interactive]');
      setIsHoveringInteractive(!!isInteractive);
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
  }, [mouseX, mouseY, velocityX, isVisible]);

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
        style={{ rotate: smoothTilt }}
        animate={{
          y: [0, -5, 0],
          scale: isHoveringInteractive ? 1.3 : 1,
        }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          scale: {
            duration: 0.2,
            ease: 'easeOut',
          },
        }}
        className="relative"
      >
        {/* UFO Emoji with Glow Effect */}
        <motion.span
          className="text-3xl block"
          animate={{
            filter: isHoveringInteractive
              ? [
                  'drop-shadow(0 0 20px rgba(139, 92, 246, 1)) drop-shadow(0 0 40px rgba(236, 72, 153, 0.8))',
                  'drop-shadow(0 0 30px rgba(139, 92, 246, 1)) drop-shadow(0 0 60px rgba(236, 72, 153, 1))',
                  'drop-shadow(0 0 20px rgba(139, 92, 246, 1)) drop-shadow(0 0 40px rgba(236, 72, 153, 0.8))',
                ]
              : [
                  'drop-shadow(0 0 10px rgba(139, 92, 246, 0.6))',
                  'drop-shadow(0 0 25px rgba(139, 92, 246, 1))',
                  'drop-shadow(0 0 10px rgba(139, 92, 246, 0.6))',
                ],
          }}
          transition={{
            duration: isHoveringInteractive ? 0.5 : 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          🛸
        </motion.span>

        {/* Tractor Beam Effect - Enhanced when hovering interactive */}
        <motion.div
          className="absolute top-full left-1/2 -translate-x-1/2"
          animate={{
            opacity: isHoveringInteractive ? [0.6, 1, 0.6] : [0.4, 0.8, 0.4],
            height: isHoveringInteractive ? [25, 45, 25] : [15, 25, 15],
            width: isHoveringInteractive ? 32 : 24,
          }}
          transition={{
            duration: isHoveringInteractive ? 0.8 : 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div 
            className="w-full h-full rounded-b-full"
            style={{
              background: isHoveringInteractive
                ? 'linear-gradient(to bottom, hsl(var(--primary) / 0.9), hsl(280 100% 60% / 0.6), hsl(var(--secondary) / 0.4), transparent)'
                : 'linear-gradient(to bottom, hsl(var(--primary) / 0.7), hsl(var(--secondary) / 0.4), transparent)',
            }}
          />
        </motion.div>

        {/* Sparkle Particles - More when hovering */}
        {[...Array(isHoveringInteractive ? 6 : 4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${10 + i * 15}%`,
              top: '110%',
              backgroundColor: i % 2 === 0 ? 'hsl(var(--primary))' : 'hsl(var(--secondary))',
            }}
            animate={{
              y: [0, isHoveringInteractive ? 35 : 20, 0],
              opacity: [0, 1, 0],
              scale: [0.5, isHoveringInteractive ? 1.5 : 1, 0.5],
            }}
            transition={{
              duration: isHoveringInteractive ? 0.6 : 1,
              repeat: Infinity,
              delay: i * 0.15,
              ease: 'easeOut',
            }}
          />
        ))}

        {/* Extra ring effect when hovering interactive elements */}
        {isHoveringInteractive && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary/50"
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ scale: 2.5, opacity: 0 }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: 'easeOut',
            }}
            style={{
              left: '50%',
              top: '50%',
              translateX: '-50%',
              translateY: '-50%',
              width: 40,
              height: 40,
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
};

export default UFOFollower;
