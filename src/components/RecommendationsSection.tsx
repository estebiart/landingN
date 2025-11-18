const RecommendationsSection = () => {
  return (
    <section className="py-24 bg-white">
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
                    Realice transiciones graduales entre productos (7 a 10 días).
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
                    Almacene en lugar seco y protegido de la humedad.
                  </p>
                </div>
              </div>
            </div>

            {/* Product Stack Image */}
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=600&fit=crop" 
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
