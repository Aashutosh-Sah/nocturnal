import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import TeamSection from '../components/TeamSection';
import ProcessSection from '../components/ProcessSection';
import PortfolioSection from '../components/PortfolioSection';
import TestimonialSection from '../components/TestimonialSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-nocturnal-bg min-h-screen text-white font-sans overflow-hidden relative">
      <div className="atmospheric-bg fixed inset-0 z-0 pointer-events-none"></div>
      <div className="grid-overlay fixed inset-0 z-0 pointer-events-none"></div>
      <Helmet>
        <title>NOCTURNAL | Where Brands Become Legends</title>
        <meta name="description" content="NOCTURNAL is a premium digital marketing agency focused on transforming businesses into memorable brands." />
        <meta property="og:title" content="NOCTURNAL | Where Brands Become Legends" />
        <meta property="og:description" content="Helping brands grow through research-driven content, strategic planning, cinematic storytelling, premium graphics, and social media management." />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ServicesSection />
        <TeamSection />
        <ProcessSection />
        <PortfolioSection />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
