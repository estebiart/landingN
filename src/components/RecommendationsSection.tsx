
import { Heart, Shield, TrendingUp, Droplets } from "lucide-react"; 
const benefits = [
  {
    icon: Droplets,
    title: "Saladeros techados: Suministre el suplemento en saladeros cubiertos para evitar humedad o encharcamientos.",
    color: "text-primary"
  },
  {
    icon: TrendingUp,
    title: "Libre disposición: Es importante que siempre haya suplemento en el saladero, no debe faltar.",
    color: "text-secondary"
  },
  {
    icon: Shield,
    title: "Área del saladero: Suplemento mineral y nitrogenado 5-10cm y Proteinado 15-20cm lineales por animal.",
    color: "text-primary"
  },
  {
    icon: Heart,
    title: "Asesoría técnica: Consulte con nuestro equipo para transiciones entre líneas.",
    color: "text-secondary"
  }
];
const RecommendationsSection = () => {
  return (
    <section className="py-24 bg-white">
           <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-6 fade-up">
          <h2 className="text-4xl md:text-5xl font-light text-foreground leading-tight">
            Elección y uso correcto,<span className="text-secondary font-bold">  resultados visibles</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
          Cada producto de Nutrimax esta formulado para complementar y potenciar la dieta de ganado en pastoreo, en época seca o de lluvia y cada etapa productiva.
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
      <div className="container mx-auto px-4">
        <div className="bg-secondary rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-16">
            {/* Content */}
            <div className="text-white space-y-8">
              <h2 className="text-3xl md:text-4xl font-light leading-tight">
                Recomendaciones <span className="font-bold">importantes</span>
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary w-12 h-12 rounded-full flex-shrink-0"></div>
                  <p className="text-white/95 pt-2 leading-relaxed">
                    Asegure acceso permanente a agua limpia y fresca.
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary w-12 h-12 rounded-full flex-shrink-0"></div>
                  <p className="text-white/95 pt-2 leading-relaxed">
                    Realice transiciones semanales entre productos 25/75, 50/50, 75/25 y 100%
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary w-12 h-12 rounded-full flex-shrink-0"></div>
                  <p className="text-white/95 pt-2 leading-relaxed">
                    Monitoree el consumo diario y ajuste según sus necesidades.
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary w-12 h-12 rounded-full flex-shrink-0"></div>
                  <p className="text-white/95 pt-2 leading-relaxed">
                   Almacene sobre estibas retirado del piso y paredes, en un lugar fresco y protegido del sol y la humedad.
                  </p>
                </div>
              </div>
            </div>

            {/* Product Stack Image */}
            <div className="flex justify-center">
              <img 
                src="/+pro.png" 
                alt="Productos NUTRIMAX apilados" 
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection;
