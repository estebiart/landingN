import { Button } from "@/components/ui/button";


const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
<div 
  className="absolute inset-0 bg-cover bg-center"
style={{ backgroundImage: 'url("/banner.jpg")' }}

>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-right animate-fade-in">
          <div className="bg-red md:flex md:h-[100vh]">
              <div className="md:flex-1 md:h-[110vh] flex justify-center items-end">
                    <img 
                      src="/produce-1.png"
                      alt=""
                      width={200}
                      className=""
                    />
              </div>
            <div className=" md:flex-1 mb-6 flex flex-col justify-center">
              <h1 className="text-5xl md:text-6xl font-bold text-secondary-foreground mb-2">
                De ganaderos
              </h1>
              <div className="flex justify-end">
              <h1 className="text-5xl inline-blockbackdrop-blur-sm rounded-3xl  bg-primary/90  md:text-6xl font-bold text-secondary-foreground w-[600px] px-8 py-6">
                para ganaderos
              </h1>
              </div>
          <p className="text-xl md:text-2xl text-white mb-6 max-w-2xl ml-auto drop-shadow-lg">
           Suplementos minerales, minerales nitrogenados y minerales proteinados, para maximizar el desempeño productivo mas kilos, mas preñeces y la rentabilidad de su hato.
          </p>
          
          <div className="mb-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-secondary-foreground text-lg px-8 py-6">
              Quiero asesoría
            </Button>
          </div>
            </div>
          </div>

          

          

        </div>
      </div>
          <p className="text-primary text-xl font-semibold drop-shadow-lg bg-secondary absolute w-[100%] bottom-0 md:pl-[50%]">
           Suplementación nutricional estratégica para bovinos
          </p>
    </section>
  );
};

export default HeroSection;
