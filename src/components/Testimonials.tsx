import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    service: "Lash Extensions",
    text: "¡Increíble servicio! Mis pestañas se ven naturales y hermosas. El ambiente del spa es muy relajante.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    service: "Hair Styling",
    text: "El mejor corte de cabello que he tenido. El equipo es profesional y muy atento a los detalles.",
    rating: 5,
  },
  {
    name: "Laura Rodríguez",
    service: "Brow Lamination",
    text: "Mis cejas nunca se habían visto tan bien. Altamente recomendado para quien busque calidad.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Lo Que Dicen Nuestras Clientas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La satisfacción de nuestras clientas es nuestra mejor recompensa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.service}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
