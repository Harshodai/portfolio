import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { useEffect, useState } from 'react';
import { siteConfig } from '../data/siteContent';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % siteConfig.hero.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Nebula Background */}
      <div className="absolute inset-0 nebula-bg" />

      {/* Enhanced Floating Elements with More Dynamic Animations */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-48 h-48 rounded-full bg-secondary/10 blur-3xl"
        animate={{
          y: [0, 20, 0],
          x: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-accent/10 blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Additional floating orbs */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-primary/20 blur-2xl"
        animate={{
          y: [0, -40, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-20 h-20 rounded-full bg-secondary/15 blur-2xl"
        animate={{
          x: [0, 30, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="container mx-auto px-6 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.p
          variants={itemVariants}
          className="text-muted-foreground text-lg mb-4"
        >
          {siteConfig.hero.greeting}
        </motion.p>

        {/* Name with enhanced animation */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6"
        >
          <motion.span
            className="text-gradient inline-block"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              backgroundSize: '200% 200%',
            }}
          >
            {siteConfig.personal.name}
          </motion.span>
        </motion.h1>

        {/* Animated Role with enhanced transitions */}
        <motion.div
          variants={itemVariants}
          className="h-12 mb-8 overflow-hidden"
        >
          <motion.p
            key={roleIndex}
            initial={{ y: 40, opacity: 0, rotateX: -45 }}
            animate={{ y: 0, opacity: 1, rotateX: 0 }}
            exit={{ y: -40, opacity: 0, rotateX: 45 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-xl md:text-2xl text-muted-foreground"
          >
            {siteConfig.hero.roles[roleIndex]}
          </motion.p>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg"
        >
          {siteConfig.hero.description}
        </motion.p>

        {/* CTA Buttons with Resume Download */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px hsl(var(--primary) / 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium glow-primary transition-all hover:bg-primary/90"
          >
            Explore My Work
          </motion.a>
          <motion.a
            href={siteConfig.personal.resumePath}
            download="Kolluru_Harshodai_Resume.pdf"
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px hsl(var(--secondary) / 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-medium glow-secondary transition-all hover:bg-secondary/90 inline-flex items-center gap-2"
          >
            <Download size={18} />
            Download Resume
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full border border-border text-foreground font-medium hover:border-primary hover:text-primary transition-all"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6"
        >
          <motion.a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            className="p-3 rounded-full glass-card text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            className="p-3 rounded-full glass-card text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            href={`mailto:${siteConfig.personal.email}`}
            whileHover={{ scale: 1.1, y: -2 }}
            className="p-3 rounded-full glass-card text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail size={24} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
