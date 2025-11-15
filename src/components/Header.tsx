import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import phoenixLogo from "@/assets/phoenix-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={phoenixLogo} alt="Phoenix Beauty Spa" className="h-12 w-12 rounded-full" />
          <div className="hidden sm:block">
            <h2 className="text-lg font-semibold text-foreground">Phoenix Beauty Spa</h2>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection("services")} 
            className="relative text-foreground hover:text-primary transition-all duration-300 hover:scale-105 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center"
          >
            Servicios
          </button>
          <button 
            onClick={() => scrollToSection("about")} 
            className="relative text-foreground hover:text-primary transition-all duration-300 hover:scale-105 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center"
          >
            Nosotros
          </button>
          <button 
            onClick={() => scrollToSection("gallery")} 
            className="relative text-foreground hover:text-primary transition-all duration-300 hover:scale-105 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center"
          >
            Galería
          </button>
          <button 
            onClick={() => scrollToSection("contact")} 
            className="relative text-foreground hover:text-primary transition-all duration-300 hover:scale-105 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center"
          >
            Contacto
          </button>
          <Button 
            onClick={() => scrollToSection("booking")} 
            className="bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Reservar
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors text-left py-2"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors text-left py-2"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-foreground hover:text-primary transition-colors text-left py-2"
            >
              Galería
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors text-left py-2"
            >
              Contacto
            </button>
            <Button onClick={() => scrollToSection("booking")} className="bg-primary hover:bg-primary/90 w-full">
              Reservar
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
