import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const Booking = () => {
  return (
    <section id="booking" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Reserva Tu Cita Hoy</h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
          Estamos listos para atenderte. Contáctanos por teléfono o WhatsApp para reservar tu próxima visita
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-8 py-6 gap-3 min-w-[200px]"
            onClick={() => window.open("tel:+1234567890")}
          >
            <Phone className="w-5 h-5" />
            Llamar Ahora
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-8 py-6 gap-3 min-w-[200px]"
            onClick={() => window.open("https://wa.me/1234567890", "_blank")}
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </Button>
        </div>

        <div className="mt-12 text-primary-foreground/80">
          <p className="mb-2">Horario de Atención</p>
          <p className="font-semibold">Lunes - Sábado: 9:00 AM - 7:00 PM</p>
          <p className="font-semibold">Domingo: 10:00 AM - 5:00 PM</p>
        </div>
      </div>
    </section>
  );
};

export default Booking;
