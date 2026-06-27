import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['About', 'Services', 'Portfolio', 'Team', 'Process', 'Contact'];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-nocturnal-bg/80 backdrop-blur-md py-4 border-b border-nocturnal-border' : 'bg-transparent py-6'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-display font-bold tracking-widest text-white flex flex-col">
          <span>NOCTURNAL</span>
          <span className="text-[0.5rem] tracking-[0.2em] text-gray-400 mt-1 uppercase">Where Brands Become Legends</span>
        </div>
        
        <nav className="hidden md:flex gap-8">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-gray-300 hover:text-nocturnal-accent transition-colors">
              {link}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn-outline hidden md:block">
          Book Consultation
        </a>
      </div>
    </motion.header>
  );
}
