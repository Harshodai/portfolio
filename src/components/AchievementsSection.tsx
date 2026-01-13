import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Award, Medal, GraduationCap, Star } from 'lucide-react';
import { siteConfig } from '../data/siteContent';

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="achievements" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Space Medals</span>
          </h2>
          <p className="text-muted-foreground text-lg">Milestones in my journey</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {siteConfig.achievements.map((achievement, index) => {
            const Icon = achievement.icon === 'Award' ? Award :
              achievement.icon === 'Trophy' ? Trophy :
                achievement.icon === 'Medal' ? Medal :
                  achievement.icon === 'GraduationCap' ? GraduationCap : Star;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30, rotateY: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-card p-6 text-center hover:border-primary/30 transition-all group"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
                  className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${achievement.color === 'primary' ? 'bg-primary/20' :
                      achievement.color === 'secondary' ? 'bg-secondary/20' :
                        'bg-accent/20'
                    } group-hover:animate-pulse-glow`}
                >
                  <Icon className={`w-8 h-8 ${achievement.color === 'primary' ? 'text-primary' :
                      achievement.color === 'secondary' ? 'text-secondary' :
                        'text-accent'
                    }`} />
                </motion.div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
