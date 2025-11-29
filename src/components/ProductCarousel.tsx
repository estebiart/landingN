import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, FileText } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const products = [
    {
    name: "Nutrimax Sostiene",
    category: "Suplemento mineral. Mantenimiento",
    purpose: "Suplemento mineral especializado para hatos bovinos, optima en niveles de macro y micro minerales, imprescindibles para el correcto desarrollo y producción tanto de hembras y machos en diferentes etapas productivas.",
    idealUse: " Crecimiento, desarrollo, adecuada actividad del sistema inmune y balance metabólico",
    attribute: "Formula que restablece el balance mineral y promueve un mejor desempeño productivo del hato.",
    image: "/sostiene.png",
    indicacionHembras: "Para suministro a machos y hembras en etapas de cría, levante y ceba, siempre a libre disposición y con acceso ilimitado al agua.",
    indicacionMachos: "Para suministro a machos y hembras en etapas de cría, levante y ceba, siempre a libre disposición y con acceso ilimitado al agua."
  },
    {
    name: "Nutrimax Produce 1",
    category: "Suplemento Mineral Nitrogenado. Adaptación",
    purpose: "Suplemento proteico y mineral, con 29% de proteina equivalente en NNP, promueve la fermentación ruminal, favoreciendo la digestibilidad de forrajes de baja calidad. Aumentando el valor de la dieta suministrada y el desempeño productivo y reproductivo de los bovinos.",
    idealUse: "Adapta y estimula crecimiento de la población microbiana ruminal, gracias al aporte de NNP.",
    attribute: "Estimula la flora ruminal y prepara su ganado para mayor aprovechamiento del forraje suministrado.",
    image: "/produce-1.png",
    indicacionHembras: "Suministre a terneras destetas, novillas de levante y vacas.",
    indicacionMachos: "Suministre a toretes y toros, además de a machos de ceba."
  },
  {
    name: "Nutrimax Produce 2",
    category: "Suplemento Mineral Nitrogenado Progresión",
    purpose: "Suplemento proteico y mineral, con 57% de proteina equivalente en NNP, promueve la fermentación ruminal, favoreciendo la digestibilidad de forrajes de baja calidad. Aumentando el valor de la dieta suministrada y el desempeño productivo y reproductivo de los bovinos.",
    idealUse: "Estimula crecimiento de la población microbiana ruminal, máximiza la conversión de nitrógeno a proteina microbiana.",
    attribute: "Mejora la digestión del forraje en temporadas retadoras secas, con forrajes pobres, buscando mantener o mejorar condición corporal",
    image: "/produce-2.png",
    indicacionHembras: "Suministre a vacas secas o con gestaciones tempranas, novillas de levante intermedio, o previo al inicio de estación de monta.",
    indicacionMachos: "Suministre a toretes y toros, además de a machos de ceba."
  },
    {
    name: "Nutrimax Produce 3",
    category: "Suplemento Mineral Nitrogenado - 87%NNP Avanzado",
    purpose: "Suplemento proteico y mineral, con 85% de proteina equivalente en NNP, promueve la fermentación ruminal, favoreciendo la digestibilidad de forrajes de baja calidad. Aumentando el valor de la dieta suministrada y el desempeño productivo y reproductivo de los bovinos.",
    idealUse: "Maximiza la sustitución de fuentes proteicas de alto costo (proteina verdadera) y compensa la dieta de forrajes de baja calidad.",
    attribute: "Máxima digestibilidad del forraje, promueve el aporte de proteína microbiana, favorecienco un mayor desempeño en verano intenso con forrajes pobres",
    image: "/Produce-3.png",
    indicacionHembras: "Vacas en lactancia y novillas, durante temporada de monta.",
    indicacionMachos: "Suministre a toretes y toros, además de a machos de ceba durante la finalización."
  },
    {
    name: "Nutrimax PREÑA+",
    category: "Suplemento mineral especializado para cría Natalidad",
    purpose: "Suplemento mineral especializado, formulado con los macro y micro minerales necesarios para hembras bovinas destinadas a reproducción en sistemas de pastoreo. Ideal para programas de monta estacional y convencional, además de programas de inseminación artificial e inseminación a tiempo fijo",
    idealUse: "Crecimiento, desarrollo, adecuada actividad del sistema inmune y balance metabólico, además de potenciar la reproducción pilar fundamental de la ganadería de cría.",
    attribute: "Formulada para mejorar indicadores reproductivos y productivos, con alto aporte de fósforo y micro minerales.",
    image: "/prena.png",
    indicacionHembras: "Ideal para vacas de cría en periparto o inicio de la lactancia y estación de monta. En novillas de levante para cubrir sus requerimientos y promover crecimiento y desarrollo reproductivo.",
    indicacionMachos: "En toretes y toros, ideal para un mayor desarrollo esquelético, rápido y eficiente crecimiento y preparación reproductiva."
  },
  {
    name: "Nutrimax +Pro",
    category: "Suplemento proteico y mineral de alto rendimiento. Productividad",
    purpose: "Suplemento Proteinado, con minerales biodisponibles, proteína verdadera y equivalente del NNP, 40% de proteína bruta, que potencia la actividad y crecimiento de la flora rumial del bovino, buscando mayor digestion, consumo voluntario y aprovechamiento de los forrajes.",
    idealUse: "El aporte del 40% de proteína bruta total permite mayor sintesis de de proteina microbiana, aporte de aminoacidos y mejor digestión de la fibra.",
    attribute: "Formulada para potenciar el desarrollo, la ganancia de peso y la fertilidad del hato.",
    image: "/+pro.png",
    indicacionHembras: "Ideal para novillas de levante destinadas a programas de IATF o estación de monta.",
    indicacionMachos: "Ideal en el destete, levante y finalización de la ceba."
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
    <section id="productos" >
      <div className="py-24 bg-muted/30 relative">
    <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 fade-up">
          <h2 className="text-3xl md:text-4xl font-light text-foreground leading-tight">
            Nuestros <span className="text-primary font-bold">productos</span>
          </h2>
          <p className="text-base   max-w-2xl mx-auto">
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
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
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
                  <p className="text-sm   leading-relaxed">
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
                  <p className="text-sm   leading-relaxed">
                    {currentProduct.idealUse}
                  </p>
                </div>

                <div>
                  <div className="bg-secondary w-16 h-16 rounded-full mx-auto md:mx-0 mb-4"></div>
                  <h4 className="text-sm font-bold text-primary uppercase mb-2">ATRIBUTO</h4>
                  <p className="text-sm   leading-relaxed">
                    {currentProduct.attribute}
                  </p>
                </div>
              </div>
            </div>

            {/* Ver ficha técnica button */}
            <div className="text-center mt-8">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 rounded-xl font-semibold">
                    <FileText className="mr-2 h-5 w-5" />
                    Ver ficha técnica
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-primary">
                      Ficha Técnica - {currentProduct.name}
                    </DialogTitle>
                  </DialogHeader>

                  <div className="space-y-6 mt-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Indicaciones Hembras */}
                      <div className="bg-pink-50 p-6 rounded-xl border-2 border-pink-200">
                        <h3 className="text-lg font-bold text-pink-700 mb-4 flex items-center">
                          <span className="mr-2">🐄</span>
                          Indicación Hembras
                        </h3>
                        <p className="text-sm text-foreground leading-relaxed">
                          {currentProduct.indicacionHembras}
                        </p>
                      </div>

                      {/* Indicaciones Machos */}
                      <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                        <h3 className="text-lg font-bold text-blue-700 mb-4 flex items-center">
                          <span className="mr-2">🐂</span>
                          Indicación Machos
                        </h3>
                        <p className="text-sm text-foreground leading-relaxed">
                          {currentProduct.indicacionMachos}
                        </p>
                      </div>
                    </div>

                    <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                      <h4 className="font-bold text-primary mb-2">Propósito del Producto</h4>
                      <p className="text-sm  ">{currentProduct.purpose}</p>
                    </div>

                    <div className="bg-secondary/5 p-6 rounded-xl border border-secondary/20">
                      <h4 className="font-bold text-secondary mb-2">Uso Ideal</h4>
                      <p className="text-sm  ">{currentProduct.idealUse}</p>
                    </div>

                    <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                      <h4 className="font-bold text-primary mb-2">Atributo</h4>
                      <p className="text-sm  ">{currentProduct.attribute}</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
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
      </div>
  
               <div className="container w-full p-[60px] bg-primary/95 rounded-3xl">
        <div className="text-center mb-12 space-y-6 fade-up">
          <h2 className="text-3xl md:text-4xl font-light text-white leading-tight">
            ¿Pensando en <span className="text-secondary font-bold">suplementación estratégica?</span>
          </h2>
          <p className="text-base text-white max-w-4xl mx-auto font-light leading-relaxed">
         Nuestros expertos en nutrición bovina están listos para asesorarte, elegir el producto ideal  e instaurar el plan nutricional que mejor se adapta a tu hato ganadero.
          </p>
                  <Button
            className="bg-secondary hover:bg-secondary/90 text-primary text-base font-semibold"
            onClick={() => {
              const contactSection = document.getElementById("contacto");
              contactSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Hablar con un asesor
          </Button>
        </div>


      </div>
    </section>
  );
};

export default ProductCarousel;
