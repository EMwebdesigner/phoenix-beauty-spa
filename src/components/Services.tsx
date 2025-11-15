import { Sparkles, Scissors, Palette, Hand, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Sparkles,
    title: "Lash & Brow Lamination",
    description: "Realza tu mirada con pestañas y cejas perfectamente definidas y duraderas.",
  },
  {
    icon: Scissors,
    title: "Hair Styling",
    description: "Cortes, peinados y tratamientos profesionales para un cabello radiante.",
  },
  {
    icon: Palette,
    title: "Maquillaje Profesional",
    description: "Looks personalizados para eventos especiales o el día a día.",
  },
  {
    icon: Hand,
    title: "Manicura & Pedicura",
    description: "Cuidado completo de manos y pies con productos de alta calidad.",
  },
  {
    icon: Heart,
    title: "Faciales & Spa",
    description: "Tratamientos rejuvenecedores para una piel luminosa y saludable.",
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
                className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/50 group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
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
