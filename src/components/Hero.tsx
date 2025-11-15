import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-spa.jpg";

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50" />
      </div>

      <div className="relative container mx-auto px-4 py-32 text-center md:text-left">
        <div className="max-w-2xl mx-auto md:mx-0">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Descubre Tu Belleza Natural
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Servicios de belleza premium que realzan tu confianza y estilo personal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              onClick={scrollToBooking}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
            >
              Reservar Cita
            </Button>
            <Button
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
            >
              Ver Servicios
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
