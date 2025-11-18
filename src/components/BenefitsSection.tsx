import { Heart, Shield, TrendingUp, Droplets } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Droplets,
    title: "Balance mineral óptimo",
    color: "text-primary"
  },
  {
    icon: TrendingUp,
    title: "Mejor aprovechamiento del forraje",
    color: "text-secondary"
  },
  {
    icon: Shield,
    title: "Resultados comprobados en desarrollo y ganancia de peso",
    color: "text-primary"
  },
  {
    icon: Heart,
    title: "Reduce días abiertos, mejora tasas de reproducción",
    color: "text-secondary"
  }
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-24 bg-white relative">
      {/* Decorative color stripe */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-secondary"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-6 fade-up">
          <h2 className="text-4xl md:text-5xl font-light text-foreground leading-tight">
            Cada etapa productiva, <span className="text-secondary font-bold">una fórmula precisa</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            NUTRIMAX desarrolla suplementos adaptados al ciclo de producción bovina: del levante a la reproducción. Equilibrio mineral, mayor eficiencia y resultados visibles en campo.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Beneficios</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-muted p-4 rounded-full">
                    <benefit.icon className={`w-8 h-8 ${benefit.color}`} strokeWidth={2} />
                  </div>
                </div>
                <h4 className="text-base font-semibold text-foreground leading-snug">
                  {benefit.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[hsl(var(--nutrimax-green-light))] rounded-3xl p-12 md:p-16 fade-up">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-light text-foreground mb-6">
                NUTRIMAX – <span className="text-secondary font-bold">De ganaderos para ganaderos</span>
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed font-light text-lg">
                Cada producto está diseñado por expertos en nutrición bovina, 
                con formulaciones específicas que responden a las necesidades reales del campo colombiano.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground font-light">
                    <span className="font-semibold text-foreground">Adaptado a condiciones de trópico</span> bajo, medio y alto
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground font-light">
                    <span className="font-semibold text-foreground">Respaldo técnico permanente</span> con asesores zonales
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground font-light">
                    <span className="font-semibold text-foreground">Resultados medibles</span> en reproducción, peso y condición corporal
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=700&fit=crop" 
                alt="Producto NUTRIMAX" 
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
