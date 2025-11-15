import { Sparkles, Scissors, Palette, Hand, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import serviceLashBrow from "@/assets/service-lash-brow.jpg";
import serviceHair from "@/assets/service-hair.jpg";
import serviceMakeup from "@/assets/service-makeup.jpg";
import serviceNails from "@/assets/service-nails.jpg";
import serviceFacial from "@/assets/service-facial.jpg";

const services = [
  {
    icon: Sparkles,
    title: "Lash & Brow Lamination",
    description: "Realza tu mirada con pestañas y cejas perfectamente definidas y duraderas.",
    image: serviceLashBrow,
  },
  {
    icon: Scissors,
    title: "Hair Styling",
    description: "Cortes, peinados y tratamientos profesionales para un cabello radiante.",
    image: serviceHair,
  },
  {
    icon: Palette,
    title: "Maquillaje Profesional",
    description: "Looks personalizados para eventos especiales o el día a día.",
    image: serviceMakeup,
  },
  {
    icon: Hand,
    title: "Manicura & Pedicura",
    description: "Cuidado completo de manos y pies con productos de alta calidad.",
    image: serviceNails,
  },
  {
    icon: Heart,
    title: "Faciales & Spa",
    description: "Tratamientos rejuvenecedores para una piel luminosa y saludable.",
    image: serviceFacial,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos una gama completa de servicios de belleza premium diseñados para realzar tu belleza natural
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/30 h-[400px]"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/95 via-espresso/70 to-espresso/30 group-hover:from-espresso/98 transition-all duration-500" />
                <CardContent className="relative h-full p-8 flex flex-col justify-end text-center">
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-cream/20 backdrop-blur-sm border border-cream/30 group-hover:bg-gold/30 group-hover:border-gold transition-all duration-300 mx-auto">
                    <Icon className="w-8 h-8 text-cream group-hover:text-gold transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-semibold text-cream mb-3 group-hover:text-gold transition-colors duration-300">{service.title}</h3>
                  <p className="text-cream/90 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
