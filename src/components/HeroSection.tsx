import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import { ArrowRight, Play } from 'lucide-react';

function Background3D() {
  return (
    <div className="absolute inset-0 z-0 opacity-50">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#7a3eff" />
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
          <mesh position={[0, 0, -5]}>
            <torusGeometry args={[3, 0.05, 16, 100]} />
            <meshStandardMaterial color="#7a3eff" emissive="#7a3eff" emissiveIntensity={2} wireframe />
          </mesh>
        </Float>
      </Canvas>
    </div>
  );
}

export default function HeroSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={container} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-nocturnal-bg">
      <Background3D />
      
      {/* Fog effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-nocturnal-bg via-transparent to-transparent z-10"></div>
      
      {/* Subtle Batman silhouette glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-nocturnal-accent/10 blur-[120px] rounded-full z-0 pointer-events-none"></div>

      <motion.div 
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-20 w-full"
        style={{ y, opacity }}
      >
        <div className="flex flex-col justify-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex flex-col justify-center gap-6">
              <div className="title-group">
                <h1 className="text-7xl lg:text-[7rem] font-black leading-[0.85] tracking-[-0.04em] text-gradient m-0">
                  NOCTURNAL
                </h1>
                <div className="text-nocturnal-accent font-bold tracking-[0.4em] uppercase text-sm mt-4">
                  WHERE BRANDS BECOME LEGENDS.
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.p 
            className="text-white/60 text-lg max-w-[450px] leading-relaxed mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We don't just manage social media.
            We build unforgettable brands through strategy, creativity, research, storytelling, and cinematic content.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#portfolio" className="btn btn-primary group flex items-center gap-2">
              Explore Our Work
            </a>
            <a href="#contact" className="btn btn-outline flex items-center gap-2">
              Book Free Consultation
            </a>
          </motion.div>
        </div>
        
        {/* Abstract cinematic/camera representation */}
        <div className="hidden lg:flex justify-center items-center relative">
           <motion.div 
             className="relative w-full h-[500px]"
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.2, delay: 0.5 }}
           >
              {/* This represents the camera/lens element from the reference */}
              <div className="absolute inset-0 rounded-full border border-nocturnal-border border-dashed animate-[spin_40s_linear_infinite]"></div>
              <div className="absolute inset-4 rounded-full border border-nocturnal-accent/30 animate-[spin_20s_linear_infinite_reverse]"></div>
              <div className="absolute inset-20 rounded-full bg-gradient-to-br from-nocturnal-accent/10 to-transparent backdrop-blur-3xl border border-white/10 flex items-center justify-center box-glow">
                <div className="w-32 h-32 rounded-full bg-black flex items-center justify-center shadow-[inset_0_0_50px_rgba(122,62,255,0.5)] relative overflow-hidden">
                   <div className="absolute inset-0 bg-nocturnal-blue/20 blur-xl"></div>
                   <div className="w-16 h-16 rounded-full border-2 border-nocturnal-blue/50 flex items-center justify-center">
                     <div className="w-8 h-8 rounded-full bg-nocturnal-blue/80 blur-sm"></div>
                   </div>
                </div>
              </div>
              
              {/* Floating Social Icons representation */}
              <motion.div 
                className="absolute top-10 left-10 w-12 h-12 glass-card flex items-center justify-center border-nocturnal-accent/30"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-6 h-6 border-2 border-white/50 rounded-md"></div>
              </motion.div>

              <motion.div 
                className="absolute bottom-20 right-10 w-16 h-16 glass-card flex items-center justify-center border-nocturnal-blue/30"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Play className="w-6 h-6 text-white/50" />
              </motion.div>
           </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
