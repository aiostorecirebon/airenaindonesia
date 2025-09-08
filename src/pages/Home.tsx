import React, { useState, useEffect, useCallback } from "react";

// Simple icon components to replace lucide-react icons
const WhatsApp = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.488" />
  </svg>
);

const Navigation = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
    />
  </svg>
);

const ChevronLeft = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

const ChevronRight = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

// Brand Moving Section Component
const BrandSection = () => {
  const originalBrands = [
    { name: "Aqua", image: "/brand/aqua.webp" },
    { name: "Ariston", image: "/brand/ariston.webp" },
    { name: "Beko", image: "/brand/beko.webp" },
    { name: "Changhong", image: "/brand/changhong.webp" },
    { name: "Daikin", image: "/brand/daikin.webp" },
    { name: "Electrolux", image: "/brand/electrolux.webp" },
    { name: "Flife", image: "/brand/flife.webp" },
    { name: "Gree", image: "/brand/gree.webp" },
    { name: "Hisense", image: "/brand/hisense.webp" },
    { name: "LG", image: "/brand/lg.webp" },
    { name: "Midea", image: "/brand/midea.webp" },
    { name: "Mitsubishi", image: "/brand/mitsubishi.webp" },
    { name: "Panasonic", image: "/brand/panasonic.webp" },
    { name: "Polytron", image: "/brand/polytron.webp" },
    { name: "Reiwa", image: "/brand/reiwa.webp" },
    { name: "Rinnai", image: "/brand/rinnai.webp" },
    { name: "Samsung", image: "/brand/samsung.webp" },
    { name: "Sharp", image: "/brand/sharp.webp" },
    { name: "tcl", image: "/brand/tcl.webp" },
    { name: "toshiba", image: "/brand/toshiba.webp" },
  ];

  const brands = [...originalBrands, ...originalBrands];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Brand AC Yang Kami Layani
          </h2>
          <p className="text-xl text-gray-600">
            Dipercayai oleh brand AC terkemuka & terpercaya
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div
            className="flex space-x-20 brand-scroll-seamless"
            style={{ width: `${brands.length * 116}px` }}
          >
            {brands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 mx-2 flex items-center justify-center"
                style={{ minWidth: "100px", height: "100px" }}
              >
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="h-7 w-auto "
                  onError={(e) => {
                    e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='64' viewBox='0 0 120 64'%3E%3Crect width='120' height='64' fill='%23f3f4f6' rx='8'/%3E%3Ctext x='60' y='32' text-anchor='middle' dy='.3em' fill='%236b7280' font-family='Arial, sans-serif' font-size='12'%3E${brand.name}%3C/text%3E%3C/svg%3E`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Service Areas Section
const WilayahLayanan = () => {
  const areas = [
    {
      name: "Airena Cirebon",
      city: "Cirebon",
      lat: -6.730449803287912,
      lng: 108.57649665948746,
      zoom: 17,
      mapUrl: "https://maps.app.goo.gl/CBZcSeJp8fRPaWT96",
    },
    {
      name: "Airena Indramayu",
      city: "Indramayu",
      lat: -6.437191269195009,
      lng: 108.30315271200429,
      zoom: 17,
      mapUrl: "https://maps.app.goo.gl/BLy1UKmh6K4hJjem6",
    },
    {
      name: "Airena Tasikmalaya",
      city: "Tasikmalaya",
      lat: -7.348422381627437,
      lng: 108.21985354507241,
      zoom: 17,
      mapUrl: "https://maps.app.goo.gl/xPrrKJA1snbghSUs5",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Wilayah Layanan Kami
          </h2>
          <p className="text-xl text-gray-600">
            Temukan lokasi kami yang siap melayani Anda di Bandung, Cirebon,
            Tasikmalaya, Indramayu
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {areas.map((area, index) => {
            const embedUrl = `https://maps.google.com/maps?q=${area.lat},${area.lng}&z=${area.zoom}&output=embed&hl=id`;

            return (
              <div
                key={index}
                className="border-4 border-[#01b2b7] rounded-2xl overflow-hidden bg-white shadow-lg flex flex-col"
              >
                <div className="bg-[#01b2b7] text-white text-center py-3">
                  <h3 className="text-xl font-semibold">{area.name}</h3>
                </div>

                <div className="relative h-80 w-full flex-grow">
                  <iframe
                    title={area.name}
                    src={embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="p-4 bg-white flex items-center justify-between">
                  <a
                    href={area.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-[#01b2b7] hover:bg-[#009fa3] text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors">
                      <Navigation className="w-4 h-4" />
                      Buka di Peta
                    </button>
                  </a>
                  <div className="text-right text-sm text-gray-600">
                    <p>{area.city}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
// Gallery Section
const GallerySection = () => {
  const [currentGallerySlide, setCurrentGallerySlide] = useState(0);
  const [isGalleryDragging, setIsGalleryDragging] = useState(false);
  const [galleryStartX, setGalleryStartX] = useState(0);
  const [galleryDragOffset, setGalleryDragOffset] = useState(0);
  const [galleryAutoSlide, setGalleryAutoSlide] = useState(true);

  const galleryImages = [
    {
      src: "/gallery/gallery-1.jpg",
      alt: "Cuci AC Split",
      title: "Cuci AC Split",
    },
    {
      src: "/gallery/gallery-2.jpg",
      alt: "Servis AC Outdoor",
      title: "Servis AC Outdoor",
    },
    {
      src: "/gallery/gallery-3.jpg",
      alt: "Instalasi AC Baru",
      title: "Instalasi AC Baru",
    },
    {
      src: "/gallery/gallery-4.jpg",
      alt: "Teknisi Professional",
      title: "Teknisi Professional",
    },
    {
      src: "/gallery/gallery-5.jpg",
      alt: "Perawatan AC Rutin",
      title: "Perawatan AC Rutin",
    },
    {
      src: "/gallery/gallery-6.jpg",
      alt: "Bongkar Pasang AC",
      title: "Bongkar Pasang AC",
    },
    {
      src: "/gallery/gallery-7.jpg",
      alt: "Isi Freon AC",
      title: "Isi Freon AC",
    },
    {
      src: "/gallery/gallery-8.jpg",
      alt: "AC Komersil",
      title: "AC Komersil",
    },
    {
      src: "/gallery/gallery-9.jpg",
      alt: "Hasil Kerja Rapi",
      title: "Hasil Kerja Rapi",
    },
  ];

  const nextGallerySlide = useCallback(() => {
    setCurrentGallerySlide((prev) => (prev + 1) % galleryImages.length);
  }, [galleryImages.length]);

  const prevGallerySlide = useCallback(() => {
    setCurrentGallerySlide(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  }, [galleryImages.length]);

  // Auto slide for mobile
  useEffect(() => {
    if (!galleryAutoSlide || isGalleryDragging) return;

    const handleResize = () => {
      if (window.innerWidth >= 640) return; // Only for mobile
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    if (window.innerWidth < 640) {
      const autoSlide = setInterval(nextGallerySlide, 3500);
      return () => {
        clearInterval(autoSlide);
        window.removeEventListener("resize", handleResize);
      };
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [nextGallerySlide, galleryAutoSlide, isGalleryDragging]);

  const handleGalleryStart = useCallback((clientX) => {
    if (window.innerWidth >= 640) return; // Only for mobile
    setIsGalleryDragging(true);
    setGalleryStartX(clientX);
    setGalleryDragOffset(0);
    setGalleryAutoSlide(false);
  }, []);

  const handleGalleryMove = useCallback(
    (clientX) => {
      if (!isGalleryDragging || window.innerWidth >= 640) return;
      const offset = clientX - galleryStartX;
      const maxOffset = 100;
      setGalleryDragOffset(Math.max(-maxOffset, Math.min(maxOffset, offset)));
    },
    [isGalleryDragging, galleryStartX]
  );

  const handleGalleryEnd = useCallback(() => {
    if (!isGalleryDragging || window.innerWidth >= 640) return;

    const threshold = 50;
    if (Math.abs(galleryDragOffset) > threshold) {
      if (galleryDragOffset > 0) {
        prevGallerySlide();
      } else {
        nextGallerySlide();
      }
    }

    setIsGalleryDragging(false);
    setGalleryDragOffset(0);
    setTimeout(() => setGalleryAutoSlide(true), 3000);
  }, [
    isGalleryDragging,
    galleryDragOffset,
    nextGallerySlide,
    prevGallerySlide,
  ]);

  // Global event listeners for gallery drag
  useEffect(() => {
    const handleGlobalMove = (e) => {
      if (!isGalleryDragging || window.innerWidth >= 640) return;
      e.preventDefault();
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      handleGalleryMove(clientX);
    };

    const handleGlobalEnd = () => handleGalleryEnd();

    if (isGalleryDragging && window.innerWidth < 640) {
      document.addEventListener("mousemove", handleGlobalMove, {
        passive: false,
      });
      document.addEventListener("touchmove", handleGlobalMove, {
        passive: false,
      });
      document.addEventListener("mouseup", handleGlobalEnd);
      document.addEventListener("touchend", handleGlobalEnd);
      document.body.style.userSelect = "none";
    }

    return () => {
      document.removeEventListener("mousemove", handleGlobalMove);
      document.removeEventListener("touchmove", handleGlobalMove);
      document.removeEventListener("mouseup", handleGlobalEnd);
      document.removeEventListener("touchend", handleGlobalEnd);
      document.body.style.userSelect = "";
    };
  }, [isGalleryDragging, handleGalleryMove, handleGalleryEnd]);

  const goToGallerySlide = useCallback((index) => {
    setCurrentGallerySlide(index);
    setGalleryAutoSlide(false);
    setTimeout(() => setGalleryAutoSlide(true), 3000);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Galeri Kami
          </h2>
        </div>

        {/* Mobile Slider */}
        <div className="sm:hidden">
          <div className="relative px-8">
            {/* Navigation Buttons for Mobile */}
            <button
              onClick={prevGallerySlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-2 shadow-lg hover:bg-[#01b2b7] hover:text-white transition-all duration-300"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextGallerySlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-2 shadow-lg hover:bg-[#01b2b7] hover:text-white transition-all duration-300"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div
              className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
              onMouseDown={(e) => {
                e.preventDefault();
                handleGalleryStart(e.clientX);
              }}
              onTouchStart={(e) => handleGalleryStart(e.touches[0].clientX)}
            >
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{
                  transform: `translateX(calc(-${
                    currentGallerySlide * 100
                  }% + ${galleryDragOffset}px))`,
                  transition: isGalleryDragging
                    ? "none"
                    : "transform 0.3s ease-out",
                }}
              >
                {galleryImages.map((image, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                      <div className="aspect-square bg-gray-200">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          onError={(e) => {
                            e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f3f4f6'/%3E%3Ctext x='200' y='200' text-anchor='middle' dy='.3em' fill='%236b7280' font-family='Arial, sans-serif' font-size='16'%3E${image.title}%3C/text%3E%3C/svg%3E`;
                          }}
                          draggable={false}
                        />
                      </div>

                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end">
                        <div className="w-full p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="text-lg font-semibold">
                            {image.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots for Mobile */}
            <div className="flex justify-center mt-6 space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToGallerySlide(index)}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    currentGallerySlide === index
                      ? "bg-[#01b2b7] w-6"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-square bg-gray-200">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f3f4f6'/%3E%3Ctext x='200' y='200' text-anchor='middle' dy='.3em' fill='%236b7280' font-family='Arial, sans-serif' font-size='16'%3E${image.title}%3C/text%3E%3C/svg%3E`;
                  }}
                />
              </div>

              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end">
                <div className="w-full p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
// Improved Featured Services Slider Component
const FeaturedServicesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [autoSlideEnabled, setAutoSlideEnabled] = useState(true);

  const featuredServices = [
    {
      image: "/services/cuci-ac.webp",
      title: "Cuci AC",
      desc: "Pembersihan menyeluruh unit indoor dan outdoor AC.",
    },
    {
      image: "/services/servis-ac.webp",
      title: "Servis AC",
      desc: "Diagnosa dan perbaikan kerusakan AC oleh teknisi berpengalaman.",
    },
    {
      image: "/services/isi-freon.webp",
      title: "Isi Freon",
      desc: "Pengisian freon berkualitas untuk semua tipe AC (R22, R32, R410A).",
    },
    {
      image: "/services/instalasi-ac.webp",
      title: "Instalasi AC",
      desc: "Pemasangan AC baru dengan instalasi yang rapi dan aman.",
    },
    {
      image: "/services/bongkar-pasang.webp",
      title: "Bongkar Pasang",
      desc: "Layanan bongkar pasang AC untuk pindahan atau renovasi.",
    },
    {
      image: "/services/perawatan-berkala.webp",
      title: "Perawatan Berkala",
      desc: "Program perawatan rutin untuk menjaga performa AC tetap optimal.",
    },
  ];

  // Update items per slide based on screen size
  useEffect(() => {
    const updateItemsPerSlide = () => {
      const width = window.innerWidth;
      if (width >= 1024) setItemsPerSlide(3);
      else if (width >= 768) setItemsPerSlide(2);
      else setItemsPerSlide(1);
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const totalSlides = Math.max(
    1,
    Math.ceil(featuredServices.length / itemsPerSlide)
  );

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Auto slide functionality
  useEffect(() => {
    if (!autoSlideEnabled || isDragging || totalSlides <= 1) return;

    const autoSlide = setInterval(nextSlide, 4000);
    return () => clearInterval(autoSlide);
  }, [nextSlide, autoSlideEnabled, isDragging, totalSlides]);

  const handleStart = useCallback((clientX) => {
    setIsDragging(true);
    setStartX(clientX);
    setDragOffset(0);
    setAutoSlideEnabled(false);
  }, []);

  const handleMove = useCallback(
    (clientX) => {
      if (!isDragging) return;
      const offset = clientX - startX;
      const maxOffset = 100;
      setDragOffset(Math.max(-maxOffset, Math.min(maxOffset, offset)));
    },
    [isDragging, startX]
  );

  const handleEnd = useCallback(() => {
    if (!isDragging) return;

    const threshold = 50;
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }

    setIsDragging(false);
    setDragOffset(0);

    setTimeout(() => setAutoSlideEnabled(true), 5000);
  }, [isDragging, dragOffset, nextSlide, prevSlide]);

  // Global event listeners for drag
  useEffect(() => {
    const handleGlobalMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      handleMove(clientX);
    };

    const handleGlobalEnd = () => handleEnd();

    if (isDragging) {
      document.addEventListener("mousemove", handleGlobalMove, {
        passive: false,
      });
      document.addEventListener("touchmove", handleGlobalMove, {
        passive: false,
      });
      document.addEventListener("mouseup", handleGlobalEnd);
      document.addEventListener("touchend", handleGlobalEnd);
      document.body.style.userSelect = "none";
    }

    return () => {
      document.removeEventListener("mousemove", handleGlobalMove);
      document.removeEventListener("touchmove", handleGlobalMove);
      document.removeEventListener("mouseup", handleGlobalEnd);
      document.removeEventListener("touchend", handleGlobalEnd);
      document.body.style.userSelect = "";
    };
  }, [isDragging, handleMove, handleEnd]);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
    setAutoSlideEnabled(false);
    setTimeout(() => setAutoSlideEnabled(true), 5000);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Layanan Unggulan
          </h2>
          <p className="text-xl text-gray-600">
            Solusi lengkap untuk semua kebutuhan AC Anda
          </p>
        </div>

        <div className="relative px-12 py-8">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-3 shadow-lg hover:bg-[#01b2b7] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={totalSlides <= 1}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-3 shadow-lg hover:bg-[#01b2b7] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={totalSlides <= 1}
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
            onMouseDown={(e) => {
              e.preventDefault();
              handleStart(e.clientX);
            }}
            onTouchStart={(e) => handleStart(e.touches[0].clientX)}
          >
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(calc(-${
                  currentSlide * 100
                }% + ${dragOffset}px))`,
                transition: isDragging ? "none" : "transform 0.3s ease-out",
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 px-2">
                  <div
                    className={`grid gap-6 ${
                      itemsPerSlide === 1
                        ? "grid-cols-1"
                        : itemsPerSlide === 2
                        ? "grid-cols-2"
                        : "grid-cols-3"
                    }`}
                  >
                    {featuredServices
                      .slice(
                        slideIndex * itemsPerSlide,
                        (slideIndex + 1) * itemsPerSlide
                      )
                      .map((service, index) => (
                        <div
                          key={`${slideIndex}-${index}`}
                          className="bg-white rounded-xl shadow-lg group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col overflow-hidden"
                        >
                          <div className="w-full h-48 overflow-hidden bg-gray-100">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              onError={(e) => {
                                e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' text-anchor='middle' dy='.3em' fill='%236b7280' font-family='Arial, sans-serif' font-size='16'%3E${service.title}%3C/text%3E%3C/svg%3E`;
                              }}
                              draggable={false}
                            />
                          </div>
                          <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-[#01b2b7] transition-colors">
                              {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed flex-grow text-sm sm:text-base">
                              {service.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {totalSlides > 1 && (
            <div className="flex justify-center mt-8 space-x-3">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-[#01b2b7] w-8"
                      : "bg-gray-300 w-3 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// Main Home Component
const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const handleWhatsApp = useCallback(() => {
    const message = encodeURIComponent(
      "Halo AIRENA, saya ingin konsultasi layanan AC"
    );
    window.open(`https://wa.me/6287811538848?text=${message}`, "_blank");
  }, []);

  const faqs = [
    {
      question: "Berapa biaya servis AC?",
      answer:
        "Biaya servis AC mulai dari Rp 75.000, tergantung jenis kerusakan dan tipe AC Anda.",
    },
    {
      question: "Jenis AC apa saja yang dilayani?",
      answer:
        "Kami melayani semua tipe AC: split, cassette, central, window, dan portable dari berbagai merek.",
    },
    {
      question: "Apakah ada garansi servis?",
      answer:
        "Ya, kami memberikan garansi servis 30 hari untuk memastikan kepuasan Anda.",
    },
  ];

  const toggleFaq = useCallback((index) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="text-white py-16 md:py-24 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url(/banner.webp)",
        }}
      >
        {/* Overlay untuk memastikan teks tetap terbaca */}
        <div className="absolute inset-0 " />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Mobile Layout: Vertical Stack */}
          <div className="block md:hidden">
            <div className="text-left space-y-8">
              {/* Title */}
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white -mt-4">
                <span className="block">Jasa Servis,</span>
                <span className="block">Cuci & Instalasi AC</span>
                <span className="block">Profesional</span>
              </h1>

              {/* City Images Grid */}
              <div className="grid grid-cols-1 gap-4 max-w-sm mx-auto">
                {[
                  { image: "/cirebon.webp" },
                  { image: "/indramayu.webp" },
                  { image: "/tasikmalaya.webp" },
                  { image: "/bandung.webp" },
                ].map((city, index) => (
                  <div
                    key={index}
                    onClick={() => (window.location.href = "/wilayah")}
                    className="relative rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <div className="bg-transparent-10">
                      <img
                        src={city.image}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f3f4f6'/%3E%3Ctext x='100' y='100' text-anchor='middle' dy='.3em' fill='%236b7280' font-family='Arial, sans-serif' font-size='16'%3E%3C/text%3E%3C/svg%3E`;
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t " />
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <h3 className="text-white font-semibold text-lg text-center"></h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* Button */}
              <div>
                <button
                  onClick={handleWhatsApp}
                  className="bg-[#01b2b7] text-white hover:bg-[#019ca1] text-lg font-semibold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
                >
                  <WhatsApp className="h-6 w-6" />
                  Hubungi Kami
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Layout: Side by Side */}
          <div className="hidden md:flex items-center justify-between min-h-[500px]">
            {/* Left Content */}
            <div className="w-1/2 pr-12">
              <div className="space-y-8">
                <h1 className="text-5xl lg:text-6xl xl:text-6xl font-bold leading-tight text-white">
                  <span className="block">Jasa Servis,</span>
                  <span className="block">Cuci & Instalasi AC</span>
                  <span className="block">Profesional</span>
                </h1>
                <div>
                  <button
                    onClick={handleWhatsApp}
                    className="bg-[#01b2b7] text-white hover:bg-[#019ca1] text-xl font-semibold px-10 py-5 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
                  >
                    <WhatsApp className="h-7 w-7" />
                    Hubungi Kami
                  </button>
                </div>
              </div>
            </div>

            {/* Right Content - City Images */}
            <div className="w-1/2">
              <div className="relative max-w-lg ml-auto">
                {/* Cirebon - Kanan Atas */}
                <div
                  onClick={() => (window.location.href = "/wilayah")}
                  className="flex items-center mb-4 cursor-pointer transform hover:scale-105 transition-all duration-300 hover:translate-x-2 ml-24"
                >
                  <div className="w-auto h-20 rounded-lg overflow-hidden shadow-lg mr-4 flex-shrink-0">
                    <img
                      src="/cirebon.webp"
                      alt="Cirebon"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='80' viewBox='0 0 128 80'%3E%3Crect width='128' height='80' fill='%23f3f4f6'/%3E%3Ctext x='64' y='40' text-anchor='middle' dy='.3em' fill='%236b7280' font-family='Arial, sans-serif' font-size='12'%3ECirebon%3C/text%3E%3C/svg%3E`;
                      }}
                    />
                  </div>
                </div>

                {/* Indramayu - Kanan Tengah */}
                <div
                  onClick={() => (window.location.href = "/wilayah")}
                  className="flex items-center mb-4 cursor-pointer transform hover:scale-105 transition-all duration-300 hover:translate-x-4 ml-16"
                >
                  <div className="w-auto h-20 rounded-lg overflow-hidden shadow-lg mr-4 flex-shrink-0">
                    <img
                      src="/indramayu.webp"
                      alt="Indramayu"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='80' viewBox='0 0 128 80'%3E%3Crect width='128' height='80' fill='%23f3f4f6'/%3E%3Ctext x='64' y='40' text-anchor='middle' dy='.3em' fill='%236b7280' font-family='Arial, sans-serif' font-size='12'%3EIndramayu%3C/text%3E%3C/svg%3E`;
                      }}
                    />
                  </div>
                </div>

                {/* Tasikmalaya - Kiri Tengah */}
                <div
                  onClick={() => (window.location.href = "/wilayah")}
                  className="flex items-center mb-4 cursor-pointer transform hover:scale-105 transition-all duration-300 hover:translate-x-6 ml-8"
                >
                  <div className="w-auto h-20 rounded-lg overflow-hidden shadow-lg mr-4 flex-shrink-0">
                    <img
                      src="/tasikmalaya.webp"
                      alt="Tasikmalaya"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='80' viewBox='0 0 128 80'%3E%3Crect width='128' height='80' fill='%23f3f4f6'/%3E%3Ctext x='64' y='40' text-anchor='middle' dy='.3em' fill='%236b7280' font-family='Arial, sans-serif' font-size='10'%3ETasikmalaya%3C/text%3E%3C/svg%3E`;
                      }}
                    />
                  </div>
                </div>

                {/* Bandung - Tengah Bawah (Posisi Utama) */}
                <div
                  onClick={() => (window.location.href = "/wilayah")}
                  className="flex items-center cursor-pointer transform hover:scale-105 transition-all duration-300 hover:translate-x-8"
                >
                  <div className="w-auto h-20 rounded-lg overflow-hidden shadow-lg mr-4 flex-shrink-0">
                    <img
                      src="/bandung.webp"
                      alt="Bandung"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='80' viewBox='0 0 128 80'%3E%3Crect width='128' height='80' fill='%23f3f4f6'/%3E%3Ctext x='64' y='40' text-anchor='middle' dy='.3em' fill='%236b7280' font-family='Arial, sans-serif' font-size='12'%3EBandung%3C/text%3E%3C/svg%3E`;
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="py-16 bg-white -mt-28 -mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-stretch min-h-[600px] lg:min-h-[550px]">
            <div className="w-full lg:w-1/2 flex">
              <img
                src="/gambar.webp"
                alt="Teknisi AIRENA Professional"
                className="w-full h-full"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/600x600.png?text=Image+Not+Found";
                }}
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <div className="border-2 border-[#01b2b7] rounded-2xl p-8 shadow-sm mb-6">
                <h2 className="text-center text-3xl xl:text-4xl font-bold text-[#01b2b7] mb-4">
                  Percayakan Perawatan AC Anda kepada AIRENA
                </h2>
                <p className="text-center text-lg text-gray-600">
                  Dipercaya oleh ribuan pelanggan di kota Bandung, Cirebon,
                  Tasikmalaya & Indramayu.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    title: "Profesional",
                    desc: "Teknisi bersertifikat & berpengalaman.",
                    img: "/teknisi.webp",
                  },
                  {
                    title: "Berkualitas",
                    desc: "Garansi servis & kepuasan pelanggan.",
                    img: "/garansi.webp",
                  },
                  {
                    title: "Responsif",
                    desc: "Pelayanan ramah & pemesanan mudah.",
                    img: "/responsif.webp",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 rounded-xl p-6 text-center shadow-sm hover:border-[#01b2b7] transition-all"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-[#01b2b7] to-[#009fa3] rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <img
                        src={item.img}
                        alt={`${item.title} Icon`}
                        className="w-8 h-8"
                        onError={(e) => {
                          e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%23ffffff' rx='4'/%3E%3Ctext x='16' y='16' text-anchor='middle' dy='.3em' fill='%2301b2b7' font-family='Arial, sans-serif' font-size='10'%3E${item.title.charAt(
                            0
                          )}%3C/text%3E%3C/svg%3E`;
                        }}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Services Slider */}
      <FeaturedServicesSlider />

      {/* Brand Section */}
      <BrandSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Service Areas */}
      <WilayahLayanan />

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pertanyaan yang Sering Ditanyakan
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full text-left px-6 py-4 font-semibold text-gray-900 hover:text-[#01b2b7] transition-colors flex justify-between items-center"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  <span
                    className={`transform transition-transform duration-300 ${
                      openFaq === index ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out grid ${
                    openFaq === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-4 text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
