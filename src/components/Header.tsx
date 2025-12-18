import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold w-[200px]">
              <img
                src="./Nutrimax.png"
                width={200}
                height={30}
                alt="logo NUTRIMAX"
                className="w-full h-auto"
              />
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#productos" className="text-secondary-foreground hover:text-primary transition-colors">
              Productos
            </a>
            <a href="#beneficios" className="text-secondary-foreground hover:text-primary transition-colors">
              Beneficios
            </a>
            <a href="#contacto" className="text-secondary-foreground hover:text-primary transition-colors">
              Contacto
            </a>
          </nav>

          <Button
            className="bg-secondary hover:bg-secondary/90 text-primary text-sm font-semibold hidden md:block"
            onClick={() => handleNavClick("contacto")}
          >
            Hablar con un asesor
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-secondary-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-secondary/20">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => handleNavClick("productos")}
                className="text-secondary-foreground hover:text-primary transition-colors text-left py-2"
              >
                Productos
              </button>
              <button
                onClick={() => handleNavClick("beneficios")}
                className="text-secondary-foreground hover:text-primary transition-colors text-left py-2"
              >
                Beneficios
              </button>
              <button
                onClick={() => handleNavClick("contacto")}
                className="text-secondary-foreground hover:text-primary transition-colors text-left py-2"
              >
                Contacto
              </button>
              <Button
                className="bg-secondary hover:bg-secondary/90 text-primary text-sm font-semibold w-full"
                onClick={() => handleNavClick("contacto")}
              >
                Hablar con un asesor
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
