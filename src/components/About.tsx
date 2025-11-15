import aboutImage from "@/assets/about-spa.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Sobre Phoenix Beauty Spa</h2>
            <p className="text-lg text-muted-foreground mb-6">
              En Phoenix Beauty Spa, creemos que cada persona merece sentirse hermosa y segura. Nuestro equipo de
              profesionales altamente capacitados se dedica a ofrecer servicios de belleza excepcionales en un ambiente
              relajante y acogedor.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Utilizamos solo productos de la más alta calidad y las técnicas más avanzadas para garantizar resultados
              impecables. Ya sea que vengas para un retoque rápido o un día completo de mimos, estamos aquí para
              realzar tu belleza natural.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <div className="text-sm text-muted-foreground">Clientes Felices</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Servicios Premium</div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img src={aboutImage} alt="Phoenix Beauty Spa Interior" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
