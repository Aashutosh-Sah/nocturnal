import { motion } from 'framer-motion';

export default function StatsSection() {
  const stats = [
    { label: "Successfully Running Since", value: "October 11, 2025" },
    { label: "Team Members", value: "4 Specialists" },
    { label: "Client Satisfaction", value: "100%" },
    { label: "Digital Agency", value: "Creative" }
  ];

  return (
    <section className="py-12 border-y border-nocturnal-border bg-black/40 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center justify-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-nocturnal-gold mb-2 text-3xl font-display font-light">
                {stat.value}
              </div>
              <div className="text-gray-500 text-sm tracking-widest uppercase font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
