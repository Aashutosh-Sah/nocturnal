import { motion } from 'framer-motion';
import { Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-black pt-20 pb-10 border-t border-nocturnal-border overflow-hidden">
      {/* Decorative top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-nocturnal-accent/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="text-2xl font-display font-bold tracking-widest text-white flex flex-col mb-6">
              <span>NOCTURNAL</span>
              <span className="text-[0.5rem] tracking-[0.2em] text-nocturnal-accent mt-1 uppercase">Where Brands Become Legends</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8">
              A premium digital marketing agency focused on helping brands dominate social media through creative storytelling, strategic planning, and powerful visual communication.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-nocturnal-border flex items-center justify-center hover:bg-nocturnal-accent hover:border-nocturnal-accent transition-all text-gray-400 hover:text-white">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-nocturnal-border flex items-center justify-center hover:bg-nocturnal-accent hover:border-nocturnal-accent transition-all text-gray-400 hover:text-white">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-nocturnal-border flex items-center justify-center hover:bg-nocturnal-accent hover:border-nocturnal-accent transition-all text-gray-400 hover:text-white">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-nocturnal-border flex items-center justify-center hover:bg-nocturnal-accent hover:border-nocturnal-accent transition-all text-gray-400 hover:text-white">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-nocturnal-accent transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-nocturnal-accent transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-nocturnal-accent transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-nocturnal-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Content Research</li>
              <li>Content Planning</li>
              <li>Creative Production</li>
              <li>Graphic Design</li>
              <li>Social Media Management</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-nocturnal-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 uppercase tracking-widest">
            © 2025–{currentYear} NOCTURNAL. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
