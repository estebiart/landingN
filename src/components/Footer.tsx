import { Facebook, Instagram, Youtube as YouTube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
              <p>Una marca respaldada por</p>
            <h3 className="text-2xl font-bold mb-4">
              <img
                src="/Logo-HSJ.svg"
                alt="Logo HSJ"
                className="w-32 h-auto"
              />
            </h3>
                        <div className="space-y-1 text-white/80 text-sm">
              <p>HSJ: Calle 82 No. 9-65 Oficina 502</p>
              <p>Bogotá D.C., Colombia</p>
              <p>Tel: <a href="tel:+573218113200" className="hover:text-secondary transition-colors">+57 321 811 3200</a></p>
              <p>Email: <a href="mailto:aclientes@hsj.com.co" className="hover:text-secondary transition-colors">aclientes@hsj.com.co</a></p>
            </div>
          

          </div>

          <div>
            <div className="mb-4">

                           <img 
                src="./Nutrimax.png" 
                alt="logo NUTRIMAX" 
                className="w-64 h-auto "
              />
            </div>
            <p className="text-white/80 text-sm mb-4">
              Suplementos minerales y proteicos de la más alta calidad para la nutrición bovina.
            </p>
                        <p className="text-white/90 font-semibold mb-2">
              De ganaderos para ganaderos
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Productos</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="/fichas/06. Ficha tecnica PROT.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-secondary cursor-pointer transition-colors">NUTRIMAX PROT</a></li>
              <li><a href="/fichas/03. Ficha tecnica PRODUCE 1.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-secondary cursor-pointer transition-colors">NUTRIMAX PRODUCE 1</a></li>
              <li><a href="/fichas/04. Ficha tecnica PRODUCE 2.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-secondary cursor-pointer transition-colors">NUTRIMAX PRODUCE 2</a></li>
              <li><a href="/fichas/05. Ficha tecnica PRODUCE 3.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-secondary cursor-pointer transition-colors">NUTRIMAX PRODUCE 3</a></li>
              <li><a href="/fichas/02. Ficha tecnica SOSTIENE.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-secondary cursor-pointer transition-colors">NUTRIMAX SOSTIENE</a></li>
              <li><a href="/fichas/01. Ficha tecnica PREÑA.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-secondary cursor-pointer transition-colors">NUTRIMAX PREÑA</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Encuentre más contenido en</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/HSJVichada/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-secondary p-3 rounded-full transition-all hover:scale-110"
                aria-label="Visitar Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/hsj_vichada/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-secondary p-3 rounded-full transition-all hover:scale-110"
                aria-label="Visitar Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://bit.ly/2FMGQfp"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-secondary p-3 rounded-full transition-all hover:scale-110"
                aria-label="Visitar YouTube"
              >
                <YouTube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center space-y-2">
          <p className="text-white/90 font-semibold">NUTRIMAX – De ganaderos para ganaderos</p>
          <p className="text-white/60 text-sm">&copy; 2026 GENPRO. Todos los derechos reservados.</p>
          <a
            href="https://www.estebiart.com/"
            target="_blank"
            className="inline-block text-sm text-white/70 underline underline-offset-4 transition-colors hover:text-white"
          >
            Creado por esterbiart
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
