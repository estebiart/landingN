import { Card } from "@/components/ui/card";
import { Home, Droplets, Ruler, Users } from "lucide-react";

const usageSteps = [
  {
    icon: Home,
    title: "Saladeros techados",
    description: "Coloque el suplemento en saladeros cubiertos para protegerlo de la lluvia"
  },
  {
    icon: Droplets,
    title: "Libre disposición",
    description: "Deje a libre acceso según el tipo de producto y etapa productiva"
  },
  {
    icon: Ruler,
    title: "Espacio adecuado",
    description: "Mantenga 5-20 cm lineales por animal para evitar competencia"
  },
  {
    icon: Users,
    title: "Asesoría técnica",
    description: "Consulte con nuestro equipo para transiciones entre líneas"
  }
];

const UsageSection = () => {
  return (
    <section className="py-24 bg-white relative">
      {/* Decorative stripe */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-secondary"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 space-y-6 fade-up">
          <h2 className="text-4xl md:text-6xl font-light text-foreground leading-tight">
            Uso correcto, <span className="text-secondary font-bold">resultados visibles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Cada producto NUTRIMAX está formulado para integrarse naturalmente a la dieta del ganado 
            y adaptarse al clima y etapa productiva
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {usageSteps.map((step, index) => (
            <Card 
              key={index}
              className="p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 group bg-white"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-secondary/10 p-5 rounded-full group-hover:bg-secondary transition-colors">
                  <step.icon className="w-10 h-10 text-secondary group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                {step.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="bg-[hsl(var(--nutrimax-green-light))] rounded-3xl p-12 md:p-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-light text-foreground mb-8">
                <span className="font-bold text-secondary">Recomendaciones</span> importantes
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground font-light text-lg">
                    Asegure acceso permanente a agua limpia y fresca
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground font-light text-lg">
                    Realice transiciones graduales entre productos (7-10 días)
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground font-light text-lg">
                    Monitoree el consumo diario y ajuste según necesidades
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground font-light text-lg">
                    Almacene en lugar seco y protegido de la humedad
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&h=400&fit=crop" 
                alt="Ganado consumiendo NUTRIMAX" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsageSection;
