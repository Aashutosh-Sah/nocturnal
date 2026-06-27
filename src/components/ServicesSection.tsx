import { motion } from 'framer-motion';
import { Search, Calendar, Film, Palette, Share2 } from 'lucide-react';

const services = [
  {
    icon: <Search className="w-8 h-8 text-nocturnal-blue" />,
    title: "Content Research",
    features: ["Trend Analysis", "Competitor Research", "Audience Research", "Psychology"]
  },
  {
    icon: <Calendar className="w-8 h-8 text-nocturnal-gold" />,
    title: "Content Planning",
    features: ["Monthly Calendar", "Campaign Strategy", "Brand Storytelling", "Growth Planning"]
  },
  {
    icon: <Film className="w-8 h-8 text-nocturnal-accent" />,
    title: "Video Production",
    features: ["Commercial Videos", "Instagram Reels", "Cinematic Editing", "Product Shoots", "Photography"]
  },
  {
    icon: <Palette className="w-8 h-8 text-pink-500" />,
    title: "Graphic Design",
    features: ["Premium Posters", "Brand Identity", "Motion Graphics", "Advertising Creatives"]
  },
  {
    icon: <Share2 className="w-8 h-8 text-green-400" />,
    title: "Social Media",
    features: ["Facebook & Instagram", "TikTok & YouTube", "LinkedIn", "Scheduling & Engagement", "Analytics"]
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 relative z-20 bg-black/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-sm text-nocturnal-accent tracking-[0.2em] uppercase mb-4 font-semibold">Our Services</h3>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Powerful Strategies. <br/> <span className="text-gradient">Creative Excellence.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="glass-card p-8 group hover:border-nocturnal-accent/50 hover:bg-nocturnal-card/80 transition-all duration-500 cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-6 p-4 rounded-full bg-white/5 inline-block group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h4 className="text-2xl font-display font-bold mb-4">{service.title}</h4>
              <ul className="space-y-2">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="text-gray-400 flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-nocturnal-border group-hover:bg-nocturnal-accent transition-colors"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
