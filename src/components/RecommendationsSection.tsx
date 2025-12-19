
import { Heart, Shield, TrendingUp, Droplets } from "lucide-react"; 
const benefits = [
  {
    icon: Droplets,
    title: "Saladeros techados",
    description: "Suministre el suplemento en saladeros cubiertos para evitar humedad o encharcamientos.",
    color: "text-primary"
  },
  {
    icon: TrendingUp,
    title: "Libre disposición",
    description: "Es importante que siempre haya suplemento en el saladero, no debe faltar.",
    color: "text-secondary"
  },
  {
    icon: Shield,
    title: "Área del saladero",
    description: "Suplemento mineral y nitrogenado 5-10cm y Proteinado 15-20cm lineales por animal.",
    color: "text-primary"
  },
  {
    icon: Heart,
    title: "Asesoría técnica",
    description: "Consulte con nuestro equipo para transiciones entre líneas.",
    color: "text-secondary"
  }
];
const RecommendationsSection = () => {
  return (
    <section className="py-24 bg-white">
           <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-6 fade-up">
          <h2 className="text-3xl md:text-4xl  text-foreground leading-tight">
            Elección y uso correcto,<span className="text-primary font-bold">  resultados visibles</span>
          </h2>
          <p className="text-base   max-w-4xl mx-auto  leading-relaxed">
          Cada producto de Nutrimax esta formulado para complementar y potenciar la dieta de ganado en pastoreo, en época seca o de lluvia y cada etapa productiva.
          </p>
        </div>

        <div className="mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
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
                <h4 className="text-base font-semibold text-foreground leading-snug mb-2">
                  {benefit.title}
                </h4>
                <p className="text-sm  text-foreground/80 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
      <div className="container mx-auto px-4 flex justify-center">
        <div className="bg-secondary rounded-3xl overflow-visible relative md:w-[70%]">
          <div className="grid md:grid-cols-[2fr_1fr] gap-8 md:gap-0 items-center p-8 md:py-0 md:pl-18">
            {/* Content */}
            <div className="text-primary space-y-8 md:py-[24px] md:pl-[16px]">
              <h2 className="text-2xl md:text-3xl  leading-tight text-primary">
                Recomendaciones <span className="font-bold text-primary">importantes</span>
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center p-2">
                    <img src="/icons/icono agua.svg" alt="Agua" className="w-8 h-8" />
                  </div>
                  <p className="text-primary pt-2 leading-relaxed text-sm">
                    Asegure acceso permanente a agua limpia y fresca.
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center p-2">
                    <img src="/icons/icono transiciones.svg" alt="Transiciones" className="w-8 h-8" />
                  </div>
                  <p className="text-primary pt-2 leading-relaxed text-sm">
                    Realice transiciones semanales entre productos 25/75, 50/50, 75/25 y 100%
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center p-2">
                    <img src="/icons/icono monitoree.svg" alt="Monitoreo" className="w-8 h-8" />
                  </div>
                  <p className="text-primary pt-2 leading-relaxed text-sm">
                    Monitoree el consumo diario y ajuste según sus necesidades.
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center p-2">
                    <img src="/icons/icono almacenaje.svg" alt="Almacenaje" className="w-8 h-8" />
                  </div>
                  <p className="text-primary pt-2 leading-relaxed text-sm">
                   Almacene sobre estibas retirado del piso y paredes, en un lugar fresco y protegido del sol y la humedad.
                  </p>
                </div>
              </div>
            </div>

            {/* Product Stack Image - Sobresale del contenedor */}
            <div className="flex justify-center md:justify-end relative">
              <img
                src="/bultos.png"
                alt="Productos NUTRIMAX apilados"
                className=" h-auto relative md:-mb-24 md:-mt-12 md:mr-[-286px] md:max-w-[627px]"
                width={900}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection;
