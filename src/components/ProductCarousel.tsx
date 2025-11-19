import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    name: "NUTRIMAX +PRO",
    category: "Suplemento proteico",
    purpose: "Suplemento proteico y mineral, con proteína verdadera y equivalente en NNP, que suman 40% de proteína bruta; que potencian la actividad y crecimiento de la flora ruminal del bovino, buscando una mejor digestión y aprovechamiento de los forrajes.",
    idealUse: "Ideal para novillas y programas de monta.",
    attribute: "Potencia el desarrollo, la ganancia de peso y la fertilidad del hato.",
    image: "/produce-1.png",
  },
  {
    name: "NUTRIMAX PRODUCE 1",
    category: "Suplemento mineral",
    purpose: "Suplemento mineral diseñado para activar la flora ruminal y preparar el sistema digestivo para máxima eficiencia en la fase inicial.",
    idealUse: "Ideal para animales en fase de adaptación y levante.",
    attribute: "Optimiza la digestión y aprovechamiento del forraje desde el inicio.",
    image: "/produce-2.png",
  },
  {
    name: "NUTRIMAX PRODUCE 3",
    category: "Suplemento avanzado",
    purpose: "Suplemento de alta eficiencia proteica diseñado para animales en etapa de finalización, maximizando el rendimiento y conversión alimenticia.",
    idealUse: "Ideal para ganado en fase de finalización y engorde intensivo.",
    attribute: "Máxima eficiencia en conversión proteica y ganancia de peso acelerada.",
    image: "/Produce-3.png",
  },
  {
    name: "NUTRIMAX PRODUCE 2",
    category: "Suplemento intermedio",
    purpose: "Suplemento intermedio que mejora la digestibilidad y condición corporal, promoviendo una ganancia de peso sostenida y equilibrada.",
    idealUse: "Ideal para ganado en fase de desarrollo y crecimiento.",
    attribute: "Mejora la condición corporal y promueve ganancia de peso constante.",
    image: "/sostiene.png",
  },
];

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentProduct = products[currentIndex];

  return (
    <section id="productos" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 fade-up">
          <h2 className="text-4xl md:text-5xl font-light text-foreground leading-tight">
            Nuestros <span className="text-secondary font-bold">productos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
           Cada producto fue formulado para potenciar la productividad y la expresión de la genética en cada ciclo productivo.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-primary text-white p-4 rounded-full shadow-xl hover:bg-primary/90 transition-all hover:scale-110"
            aria-label="Producto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-primary text-white p-4 rounded-full shadow-xl hover:bg-primary/90 transition-all hover:scale-110"
            aria-label="Siguiente producto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Product Card */}
          <div className="bg-muted/50 rounded-3xl p-8 md:p-12 fade-up">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">
                <span className="text-secondary">{currentProduct.name.split(' ')[0]}</span>
                <span className="text-primary"> {currentProduct.name.split(' ').slice(1).join(' ')}</span>
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Left Column - PROPÓSITO */}
              <div className="space-y-4">
                <div className="bg-secondary w-16 h-16 rounded-full mx-auto md:mx-0"></div>
                <div>
                  <h4 className="text-sm font-bold text-primary uppercase mb-2">PROPÓSITO</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {currentProduct.purpose}
                  </p>
                </div>
              </div>

              {/* Center Column - Product Image */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-secondary/20 rounded-[3rem] transform rotate-6"></div>
                  <img 
                    src={currentProduct.image} 
                    alt={currentProduct.name}
                    className="relative w-full max-w-xs h-auto rounded-[3rem] shadow-2xl"
                  />
                </div>
              </div>

              {/* Right Column - USO IDEAL & ATRIBUTO */}
              <div className="space-y-6">
                <div>
                  <div className="bg-secondary w-16 h-16 rounded-full mx-auto md:mx-0 mb-4"></div>
                  <h4 className="text-sm font-bold text-secondary uppercase mb-2">USO IDEAL</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {currentProduct.idealUse}
                  </p>
                </div>

                <div>
                  <div className="bg-secondary w-16 h-16 rounded-full mx-auto md:mx-0 mb-4"></div>
                  <h4 className="text-sm font-bold text-primary uppercase mb-2">ATRIBUTO</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {currentProduct.attribute}
                  </p>
                </div>
              </div>
            </div>

            {/* Ver ficha técnica button */}
            <div className="text-center mt-8">
              <Button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 rounded-xl font-semibold">
                Ver ficha técnica
              </Button>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-3 mt-8">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Ir al producto ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
