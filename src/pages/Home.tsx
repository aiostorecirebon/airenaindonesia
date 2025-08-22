import React, { useState, useEffect } from "react";
import {
  CheckCircle,
  Wrench,
  Snowflake,
  Settings,
  Users,
  Shield,
  Star,
  MapPin,
  MessageCircle,
  Navigation,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Brand Moving Section Component
const BrandSection = () => {
  const brands = [
    { name: "Gree", image: "/public/brand/gree.png" },
    { name: "Changhong", image: "/public/brand/sharp.png" },
    { name: "Midea", image: "/public/brand/midea.png" },
    { name: "Aqua", image: "/public/brand/aqua.png" },
    { name: "Samsung", image: "/public/brand/samsung.png" },
    { name: "Daikin", image: "/public/brand/daikin.png" },
    { name: "LG", image: "/public/brand/lg.png" },
    { name: "Sharp", image: "/public/brand/sharp.png" },
    { name: "Toshiba", image: "/public/brand/toshiba.png" },
    { name: "Panasonic", image: "/public/brand/panasonic.png" },
  ];

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

        {/* Moving Brand Container */}
        <div className="relative">
          <div className="flex brand-scroll">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
                style={{ minWidth: "200px", height: "100px" }}
              >
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='64' viewBox='0 0 120 64'%3E%3Crect width='120' height='64' fill='%23f3f4f6' rx='8'/%3E%3Ctext x='60' y='32' text-anchor='middle' dy='.3em' fill='%236b7280' font-family='Arial, sans-serif' font-size='12'%3E${brand.name}%3C/text%3E%3C/svg%3E`;
                  }}
                />
              </div>
            ))}
          </div>

          {/* Gradient Overlays */}
        </div>
      </div>
    </section>
  );
};

// This is the new section for service areas with interactive maps.
const WilayahLayanan = () => {
  // Updated area data with coordinates, zoom level, and Google Maps URL
  const areas = [
    {
      name: "Airena Cirebon",
      city: "Cirebon",
      lat: -6.730449803287912,
      lng: 108.57649665948746,
      zoom: 17,
      mapUrl: "https://maps.app.goo.gl/CBZcSeJp8fRPaWT9",
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
            // Construct the Google Maps embed URL
            const embedUrl = `https://maps.google.com/maps?q=${area.lat},${area.lng}&z=${area.zoom}&output=embed&hl=id`;

            return (
              <div
                key={index}
                className="border-4 border-[#01b2b7] rounded-2xl overflow-hidden bg-white shadow-lg flex flex-col"
              >
                {/* Header */}
                <div className="bg-[#01b2b7] text-white text-center py-3">
                  <h3 className="text-xl font-semibold">{area.name}</h3>
                </div>

                {/* Map Area using iframe */}
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
                  ></iframe>
                </div>

                {/* Bottom section */}
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

// Featured Services Slider Component
const FeaturedServicesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const featuredServices = [
    {
      icon: Snowflake,
      title: "Cuci AC",
      desc: "Pembersihan menyeluruh unit indoor dan outdoor AC dengan teknik profesional",
    },
    {
      icon: Wrench,
      title: "Servis AC",
      desc: "Diagnosa dan perbaikan berbagai kerusakan AC dengan teknisi berpengalaman",
    },
    {
      icon: Settings,
      title: "Isi Freon",
      desc: "Pengisian freon berkualitas untuk semua tipe AC (R22, R32, R410A)",
    },
    {
      icon: Users,
      title: "Instalasi AC",
      desc: "Pemasangan AC baru dengan instalasi pipa dan kelistrikan yang rapi",
    },
    {
      icon: CheckCircle,
      title: "Bongkar Pasang",
      desc: "Layanan bongkar pasang AC untuk pindahan atau renovasi dengan aman",
    },
    {
      icon: Shield,
      title: "Perawatan Berkala",
      desc: "Program perawatan berkala setiap 3-6 bulan untuk menjaga performa AC",
    },
  ];

  // Update items per slide based on screen size
  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerSlide(3); // lg: 3 items
      } else if (window.innerWidth >= 768) {
        setItemsPerSlide(2); // md: 2 items
      } else {
        setItemsPerSlide(1); // sm: 1 item
      }
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const totalSlides = Math.ceil(featuredServices.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Auto-slide functionality (pause when dragging)
  useEffect(() => {
    if (isDragging) return;

    const autoSlide = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(autoSlide);
  }, [totalSlides, isDragging]);

  // Touch and Mouse event handlers for drag functionality
  const handleStart = (clientX) => {
    setIsDragging(true);
    setStartX(clientX);
    setCurrentX(clientX);
  };

  const handleMove = (clientX) => {
    if (!isDragging) return;
    setCurrentX(clientX);
    const diff = clientX - startX;
    setDragOffset(diff);
  };

  const handleEnd = () => {
    if (!isDragging) return;

    const diff = currentX - startX;
    const threshold = 50; // Minimum drag distance to trigger slide change

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        prevSlide(); // Drag right = previous slide
      } else {
        nextSlide(); // Drag left = next slide
      }
    }

    setIsDragging(false);
    setDragOffset(0);
  };

  // Mouse events
  const handleMouseDown = (e) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleMouseMove = (e) => {
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  // Touch events
  const handleTouchStart = (e) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  // Add global event listeners for mouse events
  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, startX]);

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

        {/* Slider Container - Added more padding to prevent clipping */}
        <div className="relative py-8 px-4 md:px-8">
          {/* Navigation Buttons - Responsive positioning */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#01b2b7] hover:text-white"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#01b2b7] hover:text-white"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
          </button>

          {/* Slider Content - Added drag functionality */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className={`flex transition-transform ${
                isDragging ? "duration-0" : "duration-500"
              } ease-in-out cursor-grab ${isDragging ? "cursor-grabbing" : ""}`}
              style={{
                transform: `translateX(${
                  -currentSlide * 100 + (isDragging ? dragOffset / 10 : 0)
                }%)`,
                userSelect: "none",
              }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {Array.from({ length: totalSlides }, (_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div
                    className={`grid gap-8 ${
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
                      .map((service, index) => {
                        const Icon = service.icon;
                        return (
                          <div
                            key={slideIndex * itemsPerSlide + index}
                            className="bg-white rounded-xl shadow-md text-center group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-transparent hover:border-[#01b2b7] flex flex-col mx-2"
                            style={{ minHeight: "340px" }} // Increased height to accommodate hover effect
                            onMouseDown={(e) => e.preventDefault()} // Prevent text selection
                          >
                            <div className="p-8 flex-1 flex flex-col">
                              <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-[#01b2b7] group-hover:to-[#009fa3] transition-all duration-300">
                                <Icon className="h-10 w-10 text-[#01b2b7] group-hover:text-white transition-colors duration-300" />
                              </div>
                              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                                {service.title}
                              </h3>
                              <p className="text-gray-600 leading-relaxed flex-1">
                                {service.desc}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-[#01b2b7] w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="/layanan"
            className="text-[#01b2b7] border-2 border-[#01b2b7] hover:bg-[#01b2b7] hover:text-white font-bold text-lg px-8 py-3 rounded-lg inline-block transition-all duration-300 hover:shadow-lg"
          >
            Lihat Semua Layanan
          </a>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/6287811538848?text=Halo AIRENA, saya ingin konsultasi layanan AC",
      "_blank"
    );
  };

  const faqs = [
    {
      question: "Berapa biaya servis AC?",
      answer:
        "Biaya servis AC mulai dari Rp 75.000 tergantung jenis kerusakan dan tipe AC Anda.",
    },
    {
      question: "Jenis AC apa saja yang dilayani?",
      answer:
        "Kami melayani semua tipe AC: split, cassette, ducting, central, window, dan portable AC dari berbagai merek.",
    },
    {
      question: "Apakah ada garansi servis?",
      answer:
        "Ya, kami memberikan garansi servis sesuai dengan jenis layanan yang diberikan untuk memastikan kepuasan Anda.",
    },
  ];

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

      {/* Why Choose AIRENA - Updated Layout */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left Side - Single Image Area */}
            <div className="w-full lg:w-1/2">
              <div className="w-full flex items-center justify-center">
                <img
                  src="/gambar.png"
                  alt="Teknisi AIRENA Professional"
                  onError={(e) => {
                    e.currentTarget.src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6' rx='24'/%3E%3Ctext x='200' y='150' text-anchor='middle' dy='.3em' fill='%236b7280' font-family='Arial, sans-serif' font-size='16'%3EImage Placeholder%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
            </div>

            {/* Right Side - Content with Individual Borders */}
            <div className="w-full lg:w-1/2">
              {/* Main Title Section with Border */}
              <div className="bg-white border-2 border-[#01b2b7] rounded-2xl p-6 lg:p-8 shadow-sm mb-6">
                <h2 className="text-center text-3xl lg:text-4xl xl:text-5xl font-bold text-[#01b2b7] leading-tight mb-4">
                  Percayakan perawatan AC Anda kepada AIRENA
                </h2>
                <p className="text-center text-lg text-gray-600">
                  Airena telah dipercayai oleh ribuan pelanggan di Bandung,
                  Cirebon, Tasikmalaya, Indramayu
                </p>
              </div>

              {/* Three Sub Points with Individual Borders */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white border border-gray-300 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300 hover:border-[#01b2b7]">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#01b2b7] to-[#009fa3] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <img
                      src="/teknisi.png"
                      alt="Professional Icon"
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          parent.innerHTML =
                            '<svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>';
                        }
                      }}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Profesional
                  </h3>
                  <p className="text-sm text-gray-600">
                    Tim teknisi bersertifikat dan berpengalaman
                  </p>
                </div>

                <div className="bg-white border border-gray-300 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300 hover:border-[#01b2b7]">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#01b2b7] to-[#009fa3] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <img
                      src="/garansi.png"
                      alt="Quality Icon"
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          parent.innerHTML =
                            '<svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11H15.5C16.4,11 17,11.4 17,12V16C17,16.6 16.6,17 16,17H8C7.4,17 7,16.6 7,16V12C7,11.4 7.4,11 8,11H8.5V10C8.5,8.6 9.9,7 12,7M12,8.2C10.2,8.2 9.2,9.2 9.2,10V11H14.8V10C14.8,9.2 13.8,8.2 12,8.2Z"/></svg>';
                        }
                      }}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Berkualitas
                  </h3>
                  <p className="text-sm text-gray-600">
                    Garansi servis dan kepuasan pelanggan
                  </p>
                </div>

                <div className="bg-white border border-gray-300 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300 hover:border-[#01b2b7]">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#01b2b7] to-[#009fa3] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <img
                      src="/responsif.png"
                      alt="Responsive Icon"
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          parent.innerHTML =
                            '<svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/></svg>';
                        }
                      }}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Responsif
                  </h3>
                  <p className="text-sm text-gray-600">
                    Pelayanan ramah dan pemesanan mudah
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Slider - UPDATED */}
      <FeaturedServicesSlider />

      {/* Brand Section */}
      <BrandSection />

      {/* Service Areas */}
      <WilayahLayanan />

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-xl text-gray-600">
              Jawaban untuk pertanyaan umum seputar layanan kami
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg"
              >
                <button
                  className="w-full text-left px-6 py-4 font-semibold text-gray-900 hover:text-[#01b2b7] transition-colors duration-200 flex justify-between items-center"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  {faq.question}
                  <span className="text-xl font-light">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
