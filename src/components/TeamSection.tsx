import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

const team = [
  {
    name: "Madan Bahadur Kathyat",
    role: "Lead Content Researcher",
    description: "The brain behind every successful strategy. Transforms research into high-performing content.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
  },
  {
    name: "Ujjwol Chaulagain",
    role: "Video & Graphics Team",
    description: "Creates cinematic advertisements, reels and engaging video content.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80"
  },
  {
    name: "Siddhartha Gautam",
    role: "Graphic Designer",
    description: "Designs premium branding, posters, advertisements and social media creatives.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80"
  },
  {
    name: "Avikeshan Poudel",
    role: "Social Media Handler",
    description: "Handles client communication, scheduling, posting, engagement, reporting and account management.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80",
    contact: true
  }
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24 relative z-20 bg-nocturnal-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-sm text-nocturnal-accent tracking-[0.2em] uppercase mb-4 font-semibold">Meet The Team</h3>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            4 Minds. 1 Vision. <br/> <span className="text-gradient">Unlimited Creativity.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="glass-card group overflow-hidden relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {member.contact && (
                 <div className="absolute top-4 right-4 z-20 bg-nocturnal-accent text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded-sm">
                   Contact Person
                 </div>
              )}
              
              <div className="h-64 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-t from-nocturnal-bg via-transparent to-transparent z-10"></div>
                <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              
              <div className="p-6 relative z-20 bg-nocturnal-bg/80 backdrop-blur-sm -mt-10 pt-10">
                <h4 className="text-xl font-display font-bold">{member.name}</h4>
                <p className="text-nocturnal-blue text-sm mb-4 font-medium">{member.role}</p>
                <p className="text-gray-400 text-sm mb-6 min-h-[60px]">{member.description}</p>
                
                <div className="flex gap-3">
                  <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-nocturnal-accent transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-nocturnal-accent transition-colors">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
