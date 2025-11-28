import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FileText } from "lucide-react";

const products = [
  {
    name: "NUTRIMAX SOSTIENE",
    category: "Suplemento base",
    purpose: "Para suministro a machos y hembras en etapas de cría, levante y ceba, siempre a libre disposición y con acceso ilimitado al agua.",
    idealUse: "Para todas las etapas productivas.",
    attribute: "Versatilidad para todo el hato ganadero.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&h=400&fit=crop",
    indicacionHembras: "Para suministro a machos y hembras en etapas de cría, levante y ceba, siempre a libre disposición y con acceso ilimitado al agua.",
    indicacionMachos: "Para suministro a machos y hembras en etapas de cría, levante y ceba, siempre a libre disposición y con acceso ilimitado al agua."
  },
  {
    name: "NUTRIMAX PRODUCE 1",
    category: "Suplemento mineral",
    purpose: "Suplemento mineral diseñado para activar la flora ruminal y preparar el sistema digestivo para máxima eficiencia en la fase inicial.",
    idealUse: "Ideal para animales en fase de adaptación y levante.",
    attribute: "Optimiza la digestión y aprovechamiento del forraje desde el inicio.",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=500&h=400&fit=crop",
    indicacionHembras: "Suministre a terneras destetas, novillas de levante y vacas.",
    indicacionMachos: "Suministre a toretes y toros, además de a machos de ceba."
  },
  {
    name: "NUTRIMAX PRODUCE 2",
    category: "Suplemento intermedio",
    purpose: "Suplemento intermedio que mejora la digestibilidad y condición corporal, promoviendo una ganancia de peso sostenida y equilibrada.",
    idealUse: "Ideal para ganado en fase de desarrollo y crecimiento.",
    attribute: "Mejora la condición corporal y promueve ganancia de peso constante.",
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=500&h=400&fit=crop",
    indicacionHembras: "Suministre a vacas secas o con gestaciones tempranas, novillas de levante intermedio, o previo al inicio de estación de monta.",
    indicacionMachos: "Suministre a toretes y toros, además de a machos de ceba."
  },
  {
    name: "NUTRIMAX PRODUCE 3",
    category: "Suplemento avanzado",
    purpose: "Suplemento de alta eficiencia proteica diseñado para animales en etapa de finalización, maximizando el rendimiento y conversión alimenticia.",
    idealUse: "Ideal para ganado en fase de finalización y engorde intensivo.",
    attribute: "Máxima eficiencia en conversión proteica y ganancia de peso acelerada.",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=500&h=400&fit=crop",
    indicacionHembras: "Vacas en lactancia y novillas, durante temporada de monta.",
    indicacionMachos: "Suministre a toretes y toros, además de a machos de ceba durante la finalización."
  },
  {
    name: "NUTRIMAX PREÑA+",
    category: "Suplemento reproductivo",
    purpose: "Ideal para vacas de cría en periparto o inicio de la lactancia y estación de monta.",
    idealUse: "Enfocado en etapa reproductiva.",
    attribute: "Optimiza el rendimiento reproductivo del hato.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&h=400&fit=crop",
    indicacionHembras: "Ideal para vacas de cría en periparto o inicio de la lactancia y estación de monta. En novillas de levante para cubrir sus requerimientos y promover crecimiento y desarrollo reproductivo.",
    indicacionMachos: "En toretes y toros, ideal para un mayor desarrollo esquelético, rápido y eficiente crecimiento y preparación reproductiva."
  },
  {
    name: "NUTRIMAX +PRO",
    category: "Suplemento proteico",
    purpose: "Suplemento proteico y mineral, con proteína verdadera y equivalente en NNP, que suman 40% de proteína bruta; que potencian la actividad y crecimiento de la flora ruminal del bovino, buscando una mejor digestión y aprovechamiento de los forrajes.",
    idealUse: "Ideal para novillas y programas de monta.",
    attribute: "Potencia el desarrollo, la ganancia de peso y la fertilidad del hato.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&h=400&fit=crop",
    indicacionHembras: "Ideal para novillas de levante destinadas a programas de IATF o estación de monta.",
    indicacionMachos: "Ideal en el destete, levante y finalización de la ceba."
  },
];

const ProductsSection = () => {
  return (
    <section id="productos" className="py-24 bg-[hsl(var(--nutrimax-blue-light))] relative">
      {/* Decorative stripe */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-primary"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 space-y-6 fade-up">
          <h2 className="text-4xl md:text-6xl font-light text-foreground leading-tight">
            Nuestros <span className="text-secondary font-bold">Productos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Cada producto está diseñado para una etapa específica del ciclo productivo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => (
            <Card 
              key={index}
              className="bg-white rounded-2xl border border-border hover:shadow-lg transition-all duration-300 fade-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid md:grid-cols-2 gap-6 p-8">
                {/* Product Image */}
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover rounded-xl"
                    />
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-6">
                  <div>
                    <span className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-semibold mb-3">
                      {product.category}
                    </span>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {product.name}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-bold text-primary uppercase mb-2">Propósito</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {product.purpose}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-secondary uppercase mb-2">Uso ideal</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {product.idealUse}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-primary uppercase mb-2">Atributo</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {product.attribute}
                      </p>
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full mt-4 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all"
                        >
                          <FileText className="mr-2 h-4 w-4" />
                          Ver Ficha Técnica
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold text-primary">
                            Ficha Técnica - {product.name}
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
                                {product.indicacionHembras}
                              </p>
                            </div>

                            {/* Indicaciones Machos */}
                            <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                              <h3 className="text-lg font-bold text-blue-700 mb-4 flex items-center">
                                <span className="mr-2">🐂</span>
                                Indicación Machos
                              </h3>
                              <p className="text-sm text-foreground leading-relaxed">
                                {product.indicacionMachos}
                              </p>
                            </div>
                          </div>

                          <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                            <h4 className="font-bold text-primary mb-2">Propósito del Producto</h4>
                            <p className="text-sm text-muted-foreground">{product.purpose}</p>
                          </div>

                          <div className="bg-secondary/5 p-6 rounded-xl border border-secondary/20">
                            <h4 className="font-bold text-secondary mb-2">Uso Ideal</h4>
                            <p className="text-sm text-muted-foreground">{product.idealUse}</p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-primary rounded-3xl p-12 md:p-16 text-center text-white shadow-xl fade-up">
          <h3 className="text-3xl md:text-4xl font-light mb-6">
            ¿Necesita asesoría para <span className="font-bold text-secondary">escoger el producto ideal?</span>
          </h3>
          <p className="text-lg mb-10 text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
            Nuestros expertos en nutrición bovina están listos para asesorarte y diseñar un plan nutricional adaptado a tu hato
          </p>
          <Button 
            className="bg-secondary text-white hover:bg-secondary/90 text-lg px-12 py-7 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
            onClick={() => {
              const element = document.getElementById("contacto");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Hablar con un Experto
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
