const ExpertSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-primary rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-16">
            {/* Product Image */}
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=600&fit=crop" 
                alt="Productos NUTRIMAX" 
                className="w-full max-w-md h-auto"
              />
            </div>

            {/* Content */}
            <div className="text-white space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Cada producto está diseñado por expertos en nutrición bovina
              </h2>
              
              <p className="text-lg text-white/90 leading-relaxed">
                Formulaciones específicas que responden a las necesidades reales del campo colombiano.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary w-12 h-12 rounded-full flex-shrink-0"></div>
                  <p className="text-white/95 pt-2">
                    Suplementación para las condiciones del trópico bajo, medio y alto.
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-secondary w-12 h-12 rounded-full flex-shrink-0"></div>
                  <p className="text-white/95 pt-2">
                    Respaldo técnico permanente con asesores zonales.
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-secondary w-12 h-12 rounded-full flex-shrink-0"></div>
                  <p className="text-white/95 pt-2">
                    Resultados medibles en reproducción, peso y condición corporal.
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
