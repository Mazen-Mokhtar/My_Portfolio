import { useEffect, useState, useRef } from 'react';
import IntroAnimation from '@/components/IntroAnimation';
import Layout from '@/components/Layout';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import { toast } from '@/components/ui/sonner';

const Index = () => {
  const [introComplete, setIntroComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Show welcome toast after intro animation completes
    if (introComplete) {
      toast("Welcome to Mazen's Portfolio", {
        description: "Explore my work and experience.",
      });
    }
  }, [introComplete]);

  useEffect(() => {
    // Simulate loading resources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Intersection Observer for smooth section reveals
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-50px',
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [introComplete]);

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-black">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  if (!introComplete) {
    return <IntroAnimation onComplete={() => setIntroComplete(true)} />;
  }

  return (
    <Layout>
      <div 
        ref={sectionsRef}
        id="sections-container"
        className="relative z-10 overflow-y-auto h-screen scroll-smooth pt-20 md:pt-24"
      >
        <section id="home" className="min-h-screen flex items-center scroll-mt-24 md:scroll-mt-28">
          <Hero />
        </section>
        
        <section id="about" className="min-h-screen scroll-mt-24 md:scroll-mt-28">
          <About />
        </section>
        
        <section id="skills" className="min-h-screen scroll-mt-24 md:scroll-mt-28">
          <Skills />
        </section>
        
        <section id="experience" className="min-h-screen scroll-mt-24 md:scroll-mt-28">
          <Experience />
        </section>
        
        <section id="projects" className="min-h-screen scroll-mt-24 md:scroll-mt-28">
          <Projects />
        </section>
        
        <section id="contact" className="min-h-screen scroll-mt-24 md:scroll-mt-28">
          <Contact />
        </section>
      </div>
    </Layout>
  );
};

export default Index;