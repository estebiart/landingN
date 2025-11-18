import { Button } from "@/components/ui/button";


const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
<div 
  className="absolute inset-0 bg-cover bg-center"
  style={{ backgroundImage: `url("https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&h=800&fit=crop")` }}
>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl ml-auto mr-0 text-right animate-fade-in">
          <div className="inline-block bg-secondary/90 backdrop-blur-sm rounded-3xl px-8 py-6 mb-6">
            <h1 className="text-5xl md:text-6xl font-bold text-secondary-foreground mb-2">
              De ganaderos
            </h1>
            <h1 className="text-5xl md:text-6xl font-bold text-secondary-foreground">
              para ganaderos
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-white mb-6 max-w-2xl ml-auto drop-shadow-lg">
            Suplementos minerales y proteicos diseñados para maximizar el desempeño, 
            la fertilidad y la rentabilidad de su hato.
          </p>
          
          <div className="mb-8">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6">
              Quiero asesoría
            </Button>
          </div>
          
          <p className="text-primary text-xl font-semibold drop-shadow-lg">
            Nutrición especializada en Bovinos
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
