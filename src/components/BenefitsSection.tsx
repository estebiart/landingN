import { Heart, Shield, TrendingUp, Droplets } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Droplets,
    title: "Balance mineral óptimo: Formulación precisa que aporta los minerales esenciales que el forraje no proporciona",
    color: "text-primary"
  },
  {
    icon: TrendingUp,
    title: "Mejor aprovechamiento del forraje: Potencia la fermentación ruminal, mejora digestibilidad y estimula el consumo voluntario de forraje.",
    color: "text-secondary"
  },
  {
    icon: Shield,
    title: "Resultados comprobados en reproducción: Suplementación que busca reducir días abiertos, mejorar tasas de concepción y favorece la función reproductiva.",
    color: "text-primary"
  },
  {
    icon: Heart,
    title: "Desarrollo y ganancia de peso: Acelera el crecimiento en etapas de levante y optimiza el engorde en las diferentes etapas.",
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
          <h2 className="text-3xl md:text-4xl font-light text-foreground leading-tight">
           Una formula precisa <span className="text-primary font-bold"> a cada etapa productiva y época del año</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
           Nutrimax formula suplementos adaptados a los diferentes ciclos de producción, del levante a la reproducción o la ceba de bovinos. Balance mineral, aporte de nitrógeno y proteína, resultados visibles en campo.
          </p>
        </div>

        <div className="mb-20">
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

      </div>
    </section>
  );
};

export default BenefitsSection;
