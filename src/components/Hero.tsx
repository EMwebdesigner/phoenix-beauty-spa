import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";
import heroSlide5 from "@/assets/hero-slide-5.jpg";

const images = [heroSlide1, heroSlide2, heroSlide3, heroSlide4, heroSlide5];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 1000); // Duration of slide animation
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Images */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
              index === currentImage
                ? isTransitioning
                  ? "translate-x-[-100%] opacity-0"
                  : "translate-x-0 opacity-100"
                : index === (currentImage + 1) % images.length && isTransitioning
                ? "translate-x-0 opacity-100"
                : "translate-x-[100%] opacity-0"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-32 text-center md:text-left z-10">
        <div className="max-w-2xl mx-auto md:mx-0">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in">
            Descubre Tu Belleza Natural
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
            Servicios de belleza premium que realzan tu confianza y estilo personal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in">
            <Button
              onClick={scrollToBooking}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Reservar Cita
            </Button>
            <Button
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Ver Servicios
            </Button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentImage(index);
                setIsTransitioning(false);
              }, 1000);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImage
                ? "bg-primary w-8"
                : "bg-primary/40 hover:bg-primary/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
