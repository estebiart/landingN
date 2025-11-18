import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold">
              <span className="text-primary">1Nutri</span>
              <span className="text-secondary-foreground">max</span>
            </span>
          </div>
          
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

          <Button className="bg-secondary hover:bg-primary/90 text-primary-foreground">
            Hablar con un asesor
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
