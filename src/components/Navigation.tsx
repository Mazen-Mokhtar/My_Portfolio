import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const container = document.getElementById('sections-container');

    const handleScroll = () => {
      const scrollTop = container ? (container as HTMLElement).scrollTop : window.scrollY;
      setScrolled(scrollTop > 50);

      const sections = document.querySelectorAll('section[id]');
      const viewportMid = window.innerHeight / 2;
      let currentId = 'home';

      sections.forEach((section) => {
        const rect = (section as HTMLElement).getBoundingClientRect();
        const id = section.getAttribute('id') || '';
        if (rect.top <= viewportMid && rect.bottom >= viewportMid) {
          currentId = id;
        }
      });

      setActiveSection(currentId);
    };

    const target = container || window;
    target.addEventListener('scroll', handleScroll as EventListener);
    window.addEventListener('resize', handleScroll as EventListener);
    // initialize on mount
    handleScroll();

    return () => {
      target.removeEventListener('scroll', handleScroll as EventListener);
      window.removeEventListener('resize', handleScroll as EventListener);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/70 backdrop-blur-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="text-xl sm:text-2xl font-bold tracking-tight text-white"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400">
            Mazen Mokhtar
          </span>
        </a>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        
        {/* Desktop menu */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className={`relative px-2 py-1 transition-colors text-sm lg:text-base ${
                activeSection === item.href.substring(1)
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {activeSection === item.href.substring(1) && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-md"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {item.name}
            </a>
          ))}
        </nav>
      </div>
      
      {/* Mobile menu */}
      <motion.nav
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 py-3 bg-black/90 backdrop-blur-md space-y-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className={`block px-3 py-2 rounded-md text-base ${
                activeSection === item.href.substring(1)
                  ? 'text-white bg-indigo-900/50'
                  : 'text-gray-400 hover:bg-indigo-900/30 hover:text-white'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </motion.nav>
    </header>
  );
};

export default Navigation;