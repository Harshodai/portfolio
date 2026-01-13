import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState, useRef, useCallback } from 'react';

const UFOFollower = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const lastHoverCheck = useRef(0);

  // Motion values for mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Optimized spring physics - faster response, less lag
  const springConfig = { stiffness: 300, damping: 25, mass: 0.1 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // Track mouse velocity for tilt effect
  const velocityX = useMotionValue(0);
  const tilt = useTransform(velocityX, [-500, 0, 500], [-15, 0, 15]);
  const smoothTilt = useSpring(tilt, { stiffness: 200, damping: 30 });

  // Throttled hover check
  const checkInteractive = useCallback((target: HTMLElement) => {
    const now = Date.now();
    if (now - lastHoverCheck.current < 100) return; // Increased throttle to 100ms
    lastHoverCheck.current = now;

    const isInteractive = target.closest('a, button, [role="button"], input, textarea, select, [data-interactive]');
    setIsHoveringInteractive(!!isInteractive);
  }, []);

  useEffect(() => {
    // Only show on desktop
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return;

    let lastX = 0;
    let lastTime = Date.now();

    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastTime;

      // Throttle velocity calculation
      if (deltaTime > 16) { // ~60fps cap
        const velocity = (e.clientX - lastX) / deltaTime * 100;
        velocityX.set(velocity);
        lastX = e.clientX;
        lastTime = currentTime;
      }

      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Throttled check for interactive elements
      checkInteractive(e.target as HTMLElement);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, velocityX, isVisible, checkInteractive]);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
      style={{
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
        willChange: 'transform',
      }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.15 }}
    >
      <motion.div
        style={{ rotate: smoothTilt }}
        animate={{
          scale: isHoveringInteractive ? 1.2 : 1,
        }}
        transition={{
          scale: { duration: 0.15, ease: 'easeOut' },
        }}
        className="relative"
      >
        {/* UFO Emoji - Removed expensive filters */}
        <span
          className="text-3xl block"
          style={{
            transform: isHoveringInteractive ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 0.2s ease-out',
          }}
        >
          🛸
        </span>

        {/* Tractor Beam Effect - Simplified */}
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 transition-all duration-200"
          style={{
            opacity: isHoveringInteractive ? 0.8 : 0.5,
            height: isHoveringInteractive ? 35 : 20,
            width: isHoveringInteractive ? 28 : 20,
          }}
        >
          <div
            className="w-full h-full rounded-b-full"
            style={{
              background: isHoveringInteractive
                ? 'linear-gradient(to bottom, hsl(var(--primary) / 0.8), hsl(var(--secondary) / 0.4), transparent)'
                : 'linear-gradient(to bottom, hsl(var(--primary) / 0.6), transparent)',
            }}
          />
        </div>

        {/* Sparkle Particles - Reduced count */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${20 + i * 25}%`,
              top: '110%',
              backgroundColor: i % 2 === 0 ? 'hsl(var(--primary))' : 'hsl(var(--secondary))',
            }}
            animate={{
              y: [0, isHoveringInteractive ? 25 : 15, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeOut',
            }}
          />
        ))}

        {/* Ring effect when hovering interactive elements */}
        {isHoveringInteractive && (
          <motion.div
            className="absolute rounded-full border border-primary/40"
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              ease: 'easeOut',
            }}
            style={{
              left: '50%',
              top: '50%',
              translateX: '-50%',
              translateY: '-50%',
              width: 35,
              height: 35,
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
};

export default UFOFollower;
