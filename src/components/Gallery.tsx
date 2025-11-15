import { useState } from "react";
import galleryLashes from "@/assets/gallery-lashes.jpg";
import galleryHair from "@/assets/gallery-hair.jpg";
import galleryBrows from "@/assets/gallery-brows.jpg";
import galleryNails from "@/assets/gallery-nails.jpg";
import galleryMakeup from "@/assets/gallery-makeup.jpg";
import galleryFacial from "@/assets/gallery-facial.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    { id: 1, alt: "Lash Extensions", category: "Pestañas", image: galleryLashes },
    { id: 2, alt: "Hair Styling", category: "Cabello", image: galleryHair },
    { id: 3, alt: "Brow Lamination", category: "Cejas", image: galleryBrows },
    { id: 4, alt: "Manicure", category: "Uñas", image: galleryNails },
    { id: 5, alt: "Makeup", category: "Maquillaje", image: galleryMakeup },
    { id: 6, alt: "Facial Treatment", category: "Facial", image: galleryFacial },
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
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
              onClick={() => setSelectedImage(image.id)}
            >
              <img 
                src={image.image} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <div className="text-center">
                  <p className="text-2xl font-semibold text-cream drop-shadow-lg">{image.category}</p>
                </div>
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
