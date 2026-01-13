import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Building2, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { siteConfig } from '../data/siteContent';

const ExperienceCard = ({ experience, index }: { experience: typeof siteConfig.experiences[0]; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      {/* Timeline Connector */}
      <div className="absolute left-8 top-16 bottom-0 w-px bg-border hidden md:block" />

      <div className="flex gap-6 items-start">
        {/* Timeline Dot */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.2 + 0.3 }}
          className={`hidden md:flex w-16 h-16 rounded-full items-center justify-center shrink-0 ${experience.color === 'primary' ? 'bg-primary/20 glow-primary' :
              experience.color === 'secondary' ? 'bg-secondary/20 glow-secondary' :
                'bg-accent/20 glow-accent'
            }`}
        >
          <Building2 className={`w-6 h-6 ${experience.color === 'primary' ? 'text-primary' :
              experience.color === 'secondary' ? 'text-secondary' :
                'text-accent'
            }`} />
        </motion.div>

        {/* Card */}
        <div className="flex-1 glass-card p-6 hover:border-primary/30 transition-all">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="text-xl font-display font-semibold text-foreground">
                {experience.role}
              </h3>
              <p className={`font-medium ${experience.color === 'primary' ? 'text-primary' :
                  experience.color === 'secondary' ? 'text-secondary' :
                    'text-accent'
                }`}>
                {experience.company}
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar size={14} />
              <span>{experience.period}</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-4">{experience.location}</p>

          {/* Expandable Description */}
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? 'auto' : '60px' }}
            className="overflow-hidden"
          >
            <ul className="space-y-2">
              {experience.description.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                  <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${experience.color === 'primary' ? 'bg-primary' :
                      experience.color === 'secondary' ? 'bg-secondary' :
                        'bg-accent'
                    }`} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 text-sm text-primary mt-4 hover:text-primary/80 transition-colors"
          >
            {isExpanded ? (
              <>Show Less <ChevronUp size={16} /></>
            ) : (
              <>Show More <ChevronDown size={16} /></>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Mission Log</span>
          </h2>
          <p className="text-muted-foreground text-lg">The journey through the tech cosmos</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {siteConfig.experiences.map((experience, index) => (
            <ExperienceCard key={experience.company} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
