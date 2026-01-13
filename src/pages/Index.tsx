import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import StarField from '@/components/StarField';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import BlogSection from '@/components/BlogSection';
import AchievementsSection from '@/components/AchievementsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import UFOFollower from '@/components/UFOFollower';
import ScrollToTop from '@/components/ScrollToTop';
// Parallax wrapper component
const ParallaxLayer = ({ children, speed = 0.5 }: { children: React.ReactNode; speed?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Loading Animation */}
      <LoadingScreen />
      
      {/* UFO Cursor Follower */}
      <UFOFollower />
      
      {/* Animated Star Background */}
      <StarField />
      
      {/* Navigation */}
      <Navigation />

      {/* Main Content with Parallax Effects */}
      <main>
        <HeroSection />
        
        <ParallaxLayer speed={0.3}>
          <AboutSection />
        </ParallaxLayer>
        
        <ParallaxLayer speed={0.4}>
          <ExperienceSection />
        </ParallaxLayer>
        
        <ParallaxLayer speed={0.3}>
          <SkillsSection />
        </ParallaxLayer>
        
        <ParallaxLayer speed={0.5}>
          <ProjectsSection />
        </ParallaxLayer>
        
        <ParallaxLayer speed={0.3}>
          <BlogSection />
        </ParallaxLayer>
        
        <ParallaxLayer speed={0.4}>
          <AchievementsSection />
        </ParallaxLayer>
        
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default Index;
