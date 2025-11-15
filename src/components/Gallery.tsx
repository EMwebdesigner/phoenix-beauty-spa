import { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder images - these would be replaced with actual gallery images
  const galleryImages = [
    { id: 1, alt: "Lash Extensions", category: "Pestañas" },
    { id: 2, alt: "Hair Styling", category: "Cabello" },
    { id: 3, alt: "Brow Lamination", category: "Cejas" },
    { id: 4, alt: "Manicure", category: "Uñas" },
    { id: 5, alt: "Makeup", category: "Maquillaje" },
    { id: 6, alt: "Facial Treatment", category: "Facial" },
  ];

  return (
    <section id="gallery" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Nuestra Galería</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestro trabajo y déjate inspirar por las transformaciones que hemos logrado
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer bg-muted"
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-primary-foreground">
                  <p className="text-lg font-semibold">{image.category}</p>
                </div>
              </div>
              {/* Placeholder for actual images */}
              <div className="w-full h-full flex items-center justify-center bg-accent/30">
                <span className="text-muted-foreground">{image.category}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Síguenos en Instagram para ver más de nuestro trabajo:{" "}
            <a href="#" className="text-primary hover:underline font-semibold">
              @phoenixbeautyspa
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
