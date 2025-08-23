import React, { useState, useEffect, useCallback } from "react";

// Simple icon components to replace lucide-react icons
const MessageCircle = ({ className }) => (
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
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
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
    { name: "Aqua", image: "/public/brand/aqua.png" },
    { name: "Ariston", image: "/public/brand/ariston.png" },
    { name: "Beko", image: "/public/brand/beko.png" },
    { name: "Changhong", image: "/public/brand/changhong.png" },
    { name: "Daikin", image: "/public/brand/daikin.png" },
    { name: "Electrolux", image: "/public/brand/electrolux.png" },
    { name: "Flife", image: "/public/brand/flife.png" },
    { name: "Gree", image: "/public/brand/gree.png" },
    { name: "Hisense", image: "/public/brand/hisense.png" },
    { name: "LG", image: "/public/brand/lg.png" },
    { name: "Midea", image: "/public/brand/midea.png" },
    { name: "Mitsubishi", image: "/public/brand/mitsubishi.png" },
    { name: "Panasonic", image: "/public/brand/panasonic.png" },
    { name: "Polytron", image: "/public/brand/polytron.png" },
    { name: "Reiwa", image: "/public/brand/reiwa.png" },
    { name: "Rinnai", image: "/public/brand/rinnai.png" },
    { name: "Samsung", image: "/public/brand/samsung.png" },
    { name: "Sharp", image: "/public/brand/sharp.png" },
    { name: "tcl", image: "/public/brand/tcl.png" },
    { name: "toshiba", image: "/public/brand/toshiba.png" },
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
            className="flex brand-scroll-seamless"
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
                  className="h-7 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
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
      mapUrl: "https://maps.app.goo.gl/CBZcSeJp8fRPaWTA9",
    },
    {
      name: "Airena Indramayu",
      city: "Indramayu",
      lat: -6.437191269195009,
      lng: 108.30315271200429,
      zoom: 17,
      mapUrl: "https://maps.app.goo.gl/BLy1UKmh6K4hJjem6",
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

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
  const galleryImages = [
    {
      src: "/public/gallery/gallery-1.jpg",
      alt: "Cuci AC Split",
      title: "Cuci AC Split",
    },
    {
      src: "/public/gallery/gallery-2.jpg",
      alt: "Servis AC Outdoor",
      title: "Servis AC Outdoor",
    },
    {
      src: "/public/gallery/gallery-3.jpg",
      alt: "Instalasi AC Baru",
      title: "Instalasi AC Baru",
    },
    {
      src: "/public/gallery/gallery-4.jpg",
      alt: "Teknisi Professional",
      title: "Teknisi Professional",
    },
    {
      src: "/public/gallery/gallery-5.jpg",
      alt: "Perawatan AC Rutin",
      title: "Perawatan AC Rutin",
    },
    {
      src: "/public/gallery/gallery-6.jpg",
      alt: "Bongkar Pasang AC",
      title: "Bongkar Pasang AC",
    },
    {
      src: "/public/gallery/gallery-7.jpg",
      alt: "Isi Freon AC",
      title: "Isi Freon AC",
    },
    {
      src: "/public/gallery/gallery-8.jpg",
      alt: "AC Cassette Service",
      title: "AC Cassette Service",
    },
    {
      src: "/public/gallery/gallery-9.jpg",
      alt: "Hasil Kerja Rapi",
      title: "Hasil Kerja Rapi",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Galeri Pekerjaan Kami
          </h2>
          <p className="text-xl text-gray-600">
            Lihat hasil kerja profesional tim AIRENA
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
      image: "/public/services/cuci-ac.png",
      title: "Cuci AC",
      desc: "Pembersihan menyeluruh unit indoor dan outdoor AC.",
    },
    {
      image: "/public/services/servis-ac.png",
      title: "Servis AC",
      desc: "Diagnosa dan perbaikan kerusakan AC oleh teknisi berpengalaman.",
    },
    {
      image: "/public/services/isi-freon.png",
      title: "Isi Freon",
      desc: "Pengisian freon berkualitas untuk semua tipe AC (R22, R32, R410A).",
    },
    {
      image: "/public/services/instalasi-ac.png",
      title: "Instalasi AC",
      desc: "Pemasangan AC baru dengan instalasi yang rapi dan aman.",
    },
    {
      image: "/public/services/bongkar-pasang.png",
      title: "Bongkar Pasang",
      desc: "Layanan bongkar pasang AC untuk pindahan atau renovasi.",
    },
    {
      image: "/public/services/perawatan-berkala.png",
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
      <section className="bg-gradient-to-br from-[#01b2b7] to-[#008a8e] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Jasa Servis, Cuci & Instalasi AC Profesional
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Bandung, Cirebon, Tasikmalaya, Indramayu
          </p>
          <button
            onClick={handleWhatsApp}
            className="bg-white text-[#01b2b7] hover:bg-gray-100 text-xl px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <MessageCircle className="h-6 w-6" />
            Pesan Sekarang via WhatsApp
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            <div className="w-full lg:w-1/2">
              <img
                src="/gambar.png"
                alt="Teknisi AIRENA Professional"
                className="w-full h-full object-cover rounded-lg shadow-lg"
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
                  Dipercaya oleh ribuan pelanggan di kota-kota besar Jawa Barat.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    title: "Profesional",
                    desc: "Teknisi bersertifikat & berpengalaman.",
                    img: "/teknisi.png",
                  },
                  {
                    title: "Berkualitas",
                    desc: "Garansi servis & kepuasan pelanggan.",
                    img: "/garansi.png",
                  },
                  {
                    title: "Responsif",
                    desc: "Pelayanan ramah & pemesanan mudah.",
                    img: "/responsif.png",
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
              Pertanyaan yang Sering Diajukan
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
