import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
                <img 
                src="./Nutrimax.png" 
                alt="logo NUTRIMAX" 
                className="w-full h-auto rounded-2xl "
              />
            </h3>
            <p className="text-white/90 font-semibold mb-2">
              De ganaderos para ganaderos
            </p>
            <p className="text-white/80 text-sm mb-4">
              Suplementos minerales y proteicos de la más alta calidad para la nutrición bovina.
            </p>
            <div className="space-y-1 text-white/80 text-sm">
              <p>HSJ: Calle 82 No. 9-65 Oficina 502</p>
              <p>Bogotá D.C., Colombia</p>
              <p>Tel: <a href="tel:+573218113200" className="hover:text-secondary transition-colors">+57 321 811 3200</a></p>
              <p>Email: <a href="mailto:aclientes@hsj.com.co" className="hover:text-secondary transition-colors">aclientes@hsj.com.co</a></p>
            </div>
          </div>

          {/* <div>
            <h4 className="text-lg font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-white/80">
              <li className="hover:text-secondary cursor-pointer transition-colors">Inicio</li>
              <li className="hover:text-secondary cursor-pointer transition-colors">Sobre Nosotros</li>
              <li className="hover:text-secondary cursor-pointer transition-colors">Certificaciones</li>
              <li className="hover:text-secondary cursor-pointer transition-colors">Asesoría Técnica</li>
              <li className="hover:text-secondary cursor-pointer transition-colors">Blog Ganadero</li>
            </ul>
          </div> */}

          <div>
            <h4 className="text-lg font-bold mb-4">Productos</h4>
            <ul className="space-y-2 text-white/80">
              <li className="hover:text-secondary cursor-pointer transition-colors">NUTRIMAX +PRO</li>
              <li className="hover:text-secondary cursor-pointer transition-colors">NUTRIMAX PRODUCE 1</li>
              <li className="hover:text-secondary cursor-pointer transition-colors">NUTRIMAX PRODUCE 2</li>
              <li className="hover:text-secondary cursor-pointer transition-colors">NUTRIMAX PRODUCE 3</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-secondary p-3 rounded-full transition-all hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-secondary p-3 rounded-full transition-all hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-secondary p-3 rounded-full transition-all hover:scale-110">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-secondary p-3 rounded-full transition-all hover:scale-110">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center space-y-2">
          <p className="text-white/90 font-semibold">NUTRIMAX – De ganaderos para ganaderos</p>
          <p className="text-white/60 text-sm">&copy; 2024 NUTRIMAX. Todos los derechos reservados.</p>
          <p className="text-white/60 text-sm">&copy; 2025 GENPRO. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
