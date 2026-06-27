import { motion } from 'framer-motion';
import { Search, PenTool, Video, Send, Settings, TrendingUp, ArrowRight } from 'lucide-react';

const steps = [
  { id: "01", title: "Research", desc: "We analyze your brand, audience & market.", icon: <Search className="w-6 h-6 text-nocturnal-blue" /> },
  { id: "02", title: "Planning", desc: "We create a strategy tailored for growth.", icon: <PenTool className="w-6 h-6 text-nocturnal-accent" /> },
  { id: "03", title: "Creation", desc: "We produce powerful content that connects.", icon: <Video className="w-6 h-6 text-pink-400" /> },
  { id: "04", title: "Publishing", desc: "We schedule and manage all platforms.", icon: <Send className="w-6 h-6 text-green-400" /> },
  { id: "05", title: "Optimization", desc: "We analyze, refine & improve performance.", icon: <Settings className="w-6 h-6 text-nocturnal-gold" /> },
  { id: "06", title: "Growth", desc: "We help your brand scale & dominate.", icon: <TrendingUp className="w-6 h-6 text-white" /> }
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 relative z-20 bg-black/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h3 className="text-sm text-nocturnal-accent tracking-[0.2em] uppercase mb-4 font-semibold">Our Process</h3>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            A Strategic Path To <br/> <span className="text-gradient">Your Brand's Success.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-nocturnal-border hidden lg:block -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative group flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-20 h-20 rounded-full glass-card flex items-center justify-center mb-6 relative group-hover:scale-110 transition-transform duration-500 group-hover:border-nocturnal-accent box-glow">
                   {step.icon}
                   <div className="absolute -bottom-2 -right-2 bg-nocturnal-bg text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border border-nocturnal-border">
                     {step.id}
                   </div>
                </div>
                <h4 className="text-lg font-display font-bold mb-2">{step.title}</h4>
                <p className="text-gray-400 text-xs">{step.desc}</p>
                
                {index < steps.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-nocturnal-border absolute -right-3 top-10 hidden lg:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
