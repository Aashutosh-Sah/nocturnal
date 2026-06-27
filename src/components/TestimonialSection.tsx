import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function TestimonialSection() {
  return (
    <section className="py-24 relative z-20 bg-black/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-sm text-nocturnal-accent tracking-[0.2em] uppercase mb-4 font-semibold">Testimonials</h3>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Clients Love <br/>
              <span className="text-gradient">Working With Us</span>
            </h2>
            
            <div className="glass-card p-8 relative">
              <div className="text-6xl text-nocturnal-accent/20 absolute top-4 left-4 font-serif">"</div>
              <p className="text-lg text-gray-300 leading-relaxed relative z-10 italic mb-8 pt-4">
                "NOCTURNAL completely transformed our brand presence. Their strategies, creativity, and dedication are unmatched. We saw a massive increase in engagement within the first month."
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-nocturnal-border">
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80" alt="Client" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Anish Thapa</h4>
                  <p className="text-xs text-gray-400">Founder, Elevate Nepal</p>
                </div>
                <div className="ml-auto flex">
                  {[1,2,3,4,5].map(star => (
                    <Star key={star} className="w-4 h-4 text-nocturnal-gold fill-nocturnal-gold" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl font-display font-bold mb-6">Why Choose NOCTURNAL?</h3>
            <div className="flex gap-4">
              <div className="flex-1 glass-card p-6 border-red-500/10">
                <h4 className="text-center font-bold text-gray-400 mb-6 uppercase tracking-wider text-sm">Others</h4>
                <ul className="space-y-4 text-sm text-gray-500">
                  <li className="flex items-center gap-2">- Basic Posts</li>
                  <li className="flex items-center gap-2">- Random Uploads</li>
                  <li className="flex items-center gap-2">- No Strategy</li>
                  <li className="flex items-center gap-2">- Little Growth</li>
                  <li className="flex items-center gap-2">- Short Term Focus</li>
                </ul>
              </div>
              
              <div className="flex items-center justify-center -mx-4 z-10">
                <div className="w-8 h-8 rounded-full bg-nocturnal-accent text-white flex items-center justify-center text-xs font-bold ring-4 ring-nocturnal-bg">
                  VS
                </div>
              </div>
              
              <div className="flex-1 glass-card p-6 border-nocturnal-accent/30 box-glow relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-nocturnal-accent/5 to-transparent"></div>
                <div className="relative z-10">
                  <h4 className="text-center font-bold text-nocturnal-accent mb-6 uppercase tracking-wider text-sm">NOCTURNAL</h4>
                  <ul className="space-y-4 text-sm text-white">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-nocturnal-accent"></div> Research Based</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-nocturnal-accent"></div> Content Psychology</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-nocturnal-accent"></div> Professional Branding</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-nocturnal-accent"></div> Growth Focused</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-nocturnal-accent"></div> Long-term Value</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
