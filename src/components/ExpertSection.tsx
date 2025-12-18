const ExpertSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 flex justify-center ">
        <div className="bg-primary rounded-3xl overflow-visible md:w-[70%]">
          <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-0">
            {/* Product Image */}
            <div className="flex justify-center md:justify-start">
              <img
                src="/expert.png"
                alt="Productos NUTRIMAX"
                className="w-full md:h-[600px] h-[400px] md:-mb-20"
              />
            </div>

            {/* Content */}
            <div className="text-white space-y-8 md:py-8">
              <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                 Cada producto fue FORMULADO por expertos en nutrición bovina
              </h2>

              <p className="text-base text-white/90 leading-relaxed">
                 Formulaciones específicas que responden a las necesidades reales del campo colombiano.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center p-2">
                    <img src="/icons/Suplementacion.svg" alt="Suplementación" className="w-8 h-8" />
                  </div>
                  <p className="text-white/95 pt-2 text-sm">
                    Suplementación ideal para bovinos en pastoreo en trópico bajo.
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-secondary  w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center p-2">
                    <img src="/icons/Respaldo.svg" alt="Respaldo" className="w-8 h-8" />
                  </div>
                  <p className="text-white/95 pt-2 text-sm">
                    Respaldo técnico permanente con asesores zonales
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className=" bg-secondary  w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center p-2">
                    <img src="/icons/Resultados.svg" alt="Resultados" className="w-8 h-8" />
                  </div>
                  <p className="text-white/95 pt-2 text-sm">
                    Resultados tangibles en ganancias de peso y reproducción.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;
