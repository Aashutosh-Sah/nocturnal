import { motion } from 'framer-motion';

const works = [
  {
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000",
    title: "Organic Reach",
    metric: "+340%",
    label: "Engagement",
    subMetric: "+278%"
  },
  {
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000",
    title: "Followers",
    metric: "+5.2K",
    label: "Engagement",
    subMetric: "+410%"
  },
  {
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000",
    title: "Views",
    metric: "+1.2M",
    label: "Leads Generated",
    subMetric: "+320%"
  },
  {
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000",
    title: "Brand Awareness",
    metric: "+280%",
    label: "Conversions",
    subMetric: "+215%"
  }
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 relative z-20 bg-nocturnal-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-sm text-nocturnal-accent tracking-[0.2em] uppercase mb-4 font-semibold">Our Work Speaks</h3>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Real Results. <span className="text-gradient">Real Impact.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {works.map((work, index) => (
            <motion.div
              key={index}
              className="glass-card group overflow-hidden relative h-[400px]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="absolute inset-0 bg-black/60 z-10 group-hover:bg-black/40 transition-colors duration-500"></div>
              <img 
                src={work.image} 
                alt={work.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
              />
              
              <div className="relative z-20 h-full flex flex-col justify-between p-6">
                <div className="text-xs uppercase tracking-widest text-nocturnal-accent font-bold bg-black/50 self-start px-3 py-1 rounded-sm border border-nocturnal-border">
                  Case Study
                </div>
                
                <div>
                  <div className="mb-4">
                    <p className="text-gray-400 text-xs mb-1 uppercase tracking-wider">{work.title}</p>
                    <p className="text-4xl font-display font-bold text-white">{work.metric}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-1 uppercase tracking-wider">{work.label}</p>
                    <p className="text-2xl font-display font-bold text-nocturnal-gold">{work.subMetric}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
