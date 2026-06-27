import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, User } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    businessType: '',
    budget: '',
    projectGoal: '',
    message: ''
  });
  
  const [status, setStatus] = useState({ type: '', msg: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', msg: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      
      if (data.success) {
        setStatus({ type: 'success', msg: 'Thank you for contacting NOCTURNAL. Our team will contact you shortly.' });
        setFormData({ name: '', company: '', email: '', phone: '', businessType: '', budget: '', projectGoal: '', message: '' });
      } else {
        setStatus({ type: 'error', msg: 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', msg: 'Network error. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-20 bg-nocturnal-bg overflow-hidden">
      {/* Batman Spotlight Effect */}
      <div className="absolute top-0 right-1/4 w-px h-[500px] bg-gradient-to-b from-white/20 to-transparent rotate-[30deg] origin-top opacity-50"></div>
      <div className="absolute top-0 right-1/4 w-[100px] h-[100px] bg-nocturnal-accent/30 blur-[60px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-sm text-nocturnal-accent tracking-[0.2em] uppercase mb-4 font-semibold">Let's Talk</h3>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Let's Build Something <span className="text-gradient">Legendary</span>
            </h2>
            <p className="text-gray-400 mb-10 max-w-md">
              Ready to dominate your industry? Contact our team today and let's start planning your brand's future.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 glass-card border-none bg-white/5">
                <div className="w-10 h-10 rounded-full bg-nocturnal-accent/20 flex items-center justify-center shrink-0">
                  <User className="w-5 h-5 text-nocturnal-accent" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Contact Person</p>
                  <p className="font-display font-bold text-lg">Avikeshan Poudel</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 glass-card border-none bg-white/5">
                <div className="w-10 h-10 rounded-full bg-nocturnal-blue/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-nocturnal-blue" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Phone</p>
                  <a href="tel:9700045074" className="font-display font-bold text-lg hover:text-nocturnal-blue transition-colors">9700045074</a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 glass-card border-none bg-white/5">
                <div className="w-10 h-10 rounded-full bg-nocturnal-gold/20 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-nocturnal-gold" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:nocturnal.pvt.ltd@gmail.com" className="font-display font-bold text-lg hover:text-nocturnal-gold transition-colors break-all">nocturnal.pvt.ltd@gmail.com</a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 border-nocturnal-accent/20 box-glow relative">
              {status.msg && (
                <div className={`p-4 mb-6 rounded border ${status.type === 'success' ? 'bg-green-500/10 border-green-500/30 text-green-400' : 'bg-red-500/10 border-red-500/30 text-red-400'}`}>
                  {status.msg}
                </div>
              )}
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Full Name *</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-black/50 border border-nocturnal-border rounded p-3 text-white focus:border-nocturnal-accent outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Company Name</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full bg-black/50 border border-nocturnal-border rounded p-3 text-white focus:border-nocturnal-accent outline-none transition-colors" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Email *</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-black/50 border border-nocturnal-border rounded p-3 text-white focus:border-nocturnal-accent outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Phone *</label>
                  <input required type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-black/50 border border-nocturnal-border rounded p-3 text-white focus:border-nocturnal-accent outline-none transition-colors" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Business Type</label>
                  <input type="text" name="businessType" value={formData.businessType} onChange={handleChange} className="w-full bg-black/50 border border-nocturnal-border rounded p-3 text-white focus:border-nocturnal-accent outline-none transition-colors" placeholder="e.g. Real Estate, E-commerce" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Budget</label>
                  <select name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-black/50 border border-nocturnal-border rounded p-3 text-white focus:border-nocturnal-accent outline-none transition-colors appearance-none">
                    <option value="">Select a range</option>
                    <option value="Under $1,000">Under $1,000</option>
                    <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                    <option value="$10,000+">$10,000+</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Project Goal *</label>
                <input required type="text" name="projectGoal" value={formData.projectGoal} onChange={handleChange} className="w-full bg-black/50 border border-nocturnal-border rounded p-3 text-white focus:border-nocturnal-accent outline-none transition-colors" placeholder="What do you want to achieve?" />
              </div>

              <div className="mb-6">
                <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full bg-black/50 border border-nocturnal-border rounded p-3 text-white focus:border-nocturnal-accent outline-none transition-colors resize-none"></textarea>
              </div>
              
              <button disabled={isSubmitting} type="submit" className="w-full btn btn-primary box-glow disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? 'Sending...' : 'Book Consultation'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
