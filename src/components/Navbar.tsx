import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenCareerForm?: () => void;
}

const Navbar = ({ onOpenCareerForm }: NavbarProps = {}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCareerClick = (e: React.MouseEvent) => {
    if (onOpenCareerForm) {
      e.preventDefault();
      onOpenCareerForm();
    }
  };

  return (
    <header className={`fixed w-full top-0 left-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-5">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/7060316a-eb6b-499b-b1a0-2fd61dcaf0a6.png" 
              alt="BitConned" 
              className="h-8"
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Button variant="ghost" className="text-white hover:text-bitconned-neon">
              Documentation
            </Button>
            <Button variant="ghost" className="text-white hover:text-bitconned-neon">
              Denuncie
            </Button>
            <Button className="bg-bitconned-neon text-black hover:bg-bitconned-neon/80">
              Launch App
            </Button>
            
            {/* Desktop Navigation */}
            <nav className="flex items-center space-x-8">
              <Link to="/" className="text-gray-300 hover:text-bitconned-neon transition-colors">
                Home
              </Link>
              <Link to="/documentation" className="text-gray-300 hover:text-bitconned-neon transition-colors">
                Documentation
              </Link>
              <Link to="/blog" className="text-gray-300 hover:text-bitconned-neon transition-colors">
                Blog
              </Link>
              <Link to="/faq" className="text-gray-300 hover:text-bitconned-neon transition-colors">
                FAQ
              </Link>
              <a 
                href="#" 
                onClick={handleCareerClick}
                className="text-gray-300 hover:text-bitconned-neon transition-colors"
              >
                Careers
              </a>
            </nav>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10 py-4 px-4 absolute w-full left-0">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/"
              className="text-gray-300 hover:text-bitconned-neon transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/documentation"
              className="text-gray-300 hover:text-bitconned-neon transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Documentation
            </Link>
            <Link 
              to="/blog"
              className="text-gray-300 hover:text-bitconned-neon transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/faq"
              className="text-gray-300 hover:text-bitconned-neon transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <a 
              href="#" 
              onClick={(e) => {
                setIsMobileMenuOpen(false);
                handleCareerClick(e);
              }}
              className="text-gray-300 hover:text-bitconned-neon transition-colors py-2"
            >
              Careers
            </a>
            <Button className="bg-bitconned-neon text-bitconned-dark-blue hover:bg-bitconned-neon/90 mt-2">
              Launch App
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
