import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative z-20 bg-nocturnal-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-sm text-nocturnal-accent tracking-[0.2em] uppercase mb-4 font-semibold">Who We Are</h3>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              More Than An Agency, <br/>
              <span className="text-gradient">We're Your Growth Partner.</span>
            </h2>
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                NOCTURNAL is a premium digital marketing agency focused on transforming businesses into memorable brands.
              </p>
              <p>
                Every campaign begins with deep research, followed by strategic planning, cinematic content creation, luxury graphics, and social media management.
              </p>
              <p className="text-white font-medium border-l-2 border-nocturnal-accent pl-4 py-1 mt-6">
                We believe brands should become unforgettable.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-nocturnal-accent/10 rounded-full blur-[80px]"></div>
              
              <div className="relative z-10 grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-2xl font-display font-bold mb-2">Research</h4>
                  <p className="text-gray-400 text-sm">Deep audience & competitor analysis.</p>
                </div>
                <div>
                  <h4 className="text-2xl font-display font-bold mb-2">Strategy</h4>
                  <p className="text-gray-400 text-sm">Long-term brand positioning.</p>
                </div>
                <div>
                  <h4 className="text-2xl font-display font-bold mb-2">Cinematic</h4>
                  <p className="text-gray-400 text-sm">Premium video & photography.</p>
                </div>
                <div>
                  <h4 className="text-2xl font-display font-bold mb-2">Growth</h4>
                  <p className="text-gray-400 text-sm">Data-driven scaling & engagement.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
