
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "py-3 bg-background/80 backdrop-blur-lg shadow-sm" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="/" className="flex items-center">
          <span className="text-xl font-display font-semibold tracking-tight">Luqman Miraj</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
          <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Testimonials</a>
          <a href="#contact" className="cta-button text-sm">
            Schedule a Consultation
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 bg-background/95 backdrop-blur-sm flex flex-col justify-center items-center transition-all duration-300 md:hidden",
        isOpen ? "opacity-100 z-40" : "opacity-0 -z-10"
      )}>
        <nav className="flex flex-col items-center gap-6">
          <a 
            href="#services" 
            className="text-lg font-medium hover:text-primary transition-colors" 
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a 
            href="#about" 
            className="text-lg font-medium hover:text-primary transition-colors" 
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a 
            href="#testimonials" 
            className="text-lg font-medium hover:text-primary transition-colors" 
            onClick={() => setIsOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            className="cta-button text-lg mt-4" 
            onClick={() => setIsOpen(false)}
          >
            Schedule a Consultation
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
