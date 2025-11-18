import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "NUTRIMAX +PRO",
    category: "Suplemento proteico",
    purpose: "Suplemento proteico y mineral, con proteína verdadera y equivalente en NNP, que suman 40% de proteína bruta; que potencian la actividad y crecimiento de la flora ruminal del bovino, buscando una mejor digestión y aprovechamiento de los forrajes.",
    idealUse: "Ideal para novillas y programas de monta.",
    attribute: "Potencia el desarrollo, la ganancia de peso y la fertilidad del hato.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&h=400&fit=crop",
  },
  {
    name: "NUTRIMAX PRODUCE 1",
    category: "Suplemento mineral",
    purpose: "Suplemento mineral diseñado para activar la flora ruminal y preparar el sistema digestivo para máxima eficiencia en la fase inicial.",
    idealUse: "Ideal para animales en fase de adaptación y levante.",
    attribute: "Optimiza la digestión y aprovechamiento del forraje desde el inicio.",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=500&h=400&fit=crop",
  },
  {
    name: "NUTRIMAX PRODUCE 3",
    category: "Suplemento avanzado",
    purpose: "Suplemento de alta eficiencia proteica diseñado para animales en etapa de finalización, maximizando el rendimiento y conversión alimenticia.",
    idealUse: "Ideal para ganado en fase de finalización y engorde intensivo.",
    attribute: "Máxima eficiencia en conversión proteica y ganancia de peso acelerada.",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=500&h=400&fit=crop",
  },
  {
    name: "NUTRIMAX PRODUCE 2",
    category: "Suplemento intermedio",
    purpose: "Suplemento intermedio que mejora la digestibilidad y condición corporal, promoviendo una ganancia de peso sostenida y equilibrada.",
    idealUse: "Ideal para ganado en fase de desarrollo y crecimiento.",
    attribute: "Mejora la condición corporal y promueve ganancia de peso constante.",
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=500&h=400&fit=crop",
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
