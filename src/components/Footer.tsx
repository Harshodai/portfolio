import { motion } from 'framer-motion';
import { Rocket, Heart } from 'lucide-react';
import { siteConfig } from '../data/siteContent';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <Rocket className="w-5 h-5 text-primary" />
            <span className="font-display font-bold text-lg text-foreground">{siteConfig.personal.firstName}</span>
          </motion.a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} {siteConfig.footer.copyright.replace('Made with ❤️ by Harshodai Kolluru', '')} Made with <Heart size={14} className="text-primary" /> by {siteConfig.personal.name}
          </p>

          {/* Quick Links */}
          <div className="flex items-center gap-6">
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.socials.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Medium
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
