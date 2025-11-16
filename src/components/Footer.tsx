import { Instagram, Facebook } from "lucide-react";
import phoenixLogo from "@/assets/phoenix-logo.png";
import codedByLogo from "@/assets/coded-by-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
              <img src={phoenixLogo} alt="Phoenix Beauty Spa" className="h-10 w-10 rounded-full" />
              <h3 className="text-xl font-semibold">Phoenix Beauty Spa</h3>
            </div>
            <p className="opacity-90">
              Tu destino para servicios de belleza premium y una experiencia de spa incomparable
            </p>
          </div>

          <div className="text-center">
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 opacity-90">
              <li>
                <a href="#services" className="hover:underline">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:underline">
                  Galería
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-center">
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-4 justify-center md:center">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex items-center justify-center gap-4 opacity-90">
            <img src={codedByLogo} alt="Coded by EM" className="h-8 w-8" />
            <p>&copy; {new Date().getFullYear()} Phoenix Beauty Spa. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
