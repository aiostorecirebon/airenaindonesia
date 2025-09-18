import { ArrowRight } from "lucide-react";

// Custom WhatsApp Icon Component
const WhatsAppIcon = ({ className = "h-4 w-4" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
  </svg>
);

const Services = () => {
  const services = [
    {
      image: "/services/cuci-ac.webp",
      title: "Cuci AC",
      description:
        "Pembersihan menyeluruh unit indoor dan outdoor AC dengan teknik profesional",
      features: [
        "Pembersihan filter dan evaporator",
        "Cuci unit outdoor dengan water jet",
        "Pembersihan saluran pembuangan",
        "Pengecekan sistem kelistrikan",
      ],
    },
    {
      image: "/services/instalasi-ac.webp",
      title: "Instalasi Baru",
      description:
        "Pemasangan AC baru dengan instalasi pipa dan kelistrikan yang rapi",
      features: [
        "Survey lokasi gratis",
        "Instalasi pipa tembaga berkualitas",
        "Sistem kelistrikan sesuai standar",
        "Commissioning dan testing",
      ],
    },
    {
      image: "/services/servis-ac.webp",
      title: "Servis AC Rusak",
      description:
        "Diagnosa dan perbaikan kerusakan AC oleh teknisi berpengalaman",
      features: [
        "Diagnosa kerusakan lengkap",
        "Perbaikan komponen rusak",
        "Penggantian spare part original",
        "Testing performa AC",
      ],
    },
    {
      image: "/services/bongkar-pasang.webp",
      title: "Bongkar Pasang AC",
      description:
        "Layanan bongkar pasang AC untuk pindahan atau renovasi dengan aman",
      features: [
        "Bongkar AC dengan aman",
        "Packing professional",
        "Instalasi di lokasi baru",
        "Testing dan commissioning",
      ],
    },
    {
      image: "/services/isi-freon.webp",
      title: "Isi Freon",
      description:
        "Pengisian freon berkualitas untuk semua tipe AC (R22, R32, R410A)",
      features: [
        "Freon original dan berkualitas",
        "Pengecekan kebocoran sistem",
        "Vacuum system sebelum isi",
        "Garansi freon 3 bulan",
      ],
    },
    {
      image: "/services/perawatan-berkala.webp",
      title: "Perawatan Rutin",
      description:
        "Program perawatan berkala setiap 3-6 bulan untuk menjaga performa AC",
      features: [
        "Schedule maintenance rutin",
        "Pembersihan berkala",
        "Pengecekan preventif",
        "Laporan kondisi AC",
      ],
    },
  ];

  const additionalServices = [
    "Service AC Central",
    "Maintenance Chiller",
    "Instalasi Ducting AC",
    "Service AC Cassette",
    "Perbaikan AC Window",
    "Service AC Portable",
  ];

  const handleWhatsApp = (serviceName: string) => {
    const message = `Halo AIRENA, saya tertarik dengan layanan ${serviceName}. Bisa berikan informasi lebih lanjut?`;
    window.open(
      `https://wa.me/6287811538848?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#01b2b7] to-[#019ca1] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Layanan AC Lengkap dari AIRENA
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Solusi profesional untuk semua kebutuhan AC Anda dengan teknisi
            berpengalaman
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Layanan Utama Kami
            </h2>
            <p className="text-xl text-gray-600">
              Dipercaya ribuan pelanggan di Jawa Barat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col overflow-hidden"
                >
                  {/* Image Section - Fixed aspect ratio and full width */}
                  <div className="relative w-full h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      draggable={false}
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 mb-6">{service.description}</p>

                    <ul className="space-y-2 mb-6 flex-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-[#01b2b7] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => handleWhatsApp(service.title)}
                      className="w-full bg-[#01b2b7] hover:bg-[#128C7E] text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      Pesan Sekarang
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proses Layanan Kami
            </h2>
            <p className="text-xl text-gray-600">
              Mudah, cepat, dan profesional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-8 left-0 w-full h-1 bg-[#01b2b7]/20 rounded-full"></div>

            {[
              {
                step: "1",
                title: "Hubungi Kami",
                desc: "Via WhatsApp atau telepon untuk konsultasi gratis",
              },
              {
                step: "2",
                title: "Jadwal Kunjungan",
                desc: "Tentukan waktu yang sesuai untuk survey/servis",
              },
              {
                step: "3",
                title: "Teknisi Datang",
                desc: "Tim profesional datang dengan peralatan lengkap",
              },
              {
                step: "4",
                title: "Selesai & Garansi",
                desc: "Pekerjaan selesai dengan garansi kepuasan",
              },
            ].map((process, index) => (
              <div key={index} className="text-center relative">
                {/* Step Circle */}
                <div className="w-16 h-16 bg-[#01b2b7] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold relative z-20 shadow-lg border-4 border-white transition-all duration-300 hover:scale-110">
                  {process.step}
                </div>

                {/* Desktop Arrow - positioned in the center between steps */}
                {index < 3 && (
                  <div
                    className="hidden md:block absolute top-4 left-full z-20"
                    style={{ transform: "translateX(calc(50% - 1rem))" }}
                  >
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-[#01b2b7]/20">
                      <ArrowRight className="h-4 w-4 text-[#01b2b7] animate-pulse" />
                    </div>
                  </div>
                )}

                {/* Mobile Arrow (vertical) */}
                {index < 3 && (
                  <div className="md:hidden flex justify-center mb-4">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-[#01b2b7]/20">
                      <ArrowRight className="h-4 w-4 text-[#01b2b7] rotate-90" />
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {process.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#01b2b7] text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Butuh Layanan AC Sekarang?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Jangan tunggu AC rusak! Booking sekarang dan dapatkan layanan
            terbaik dari AIRENA
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleWhatsApp("Konsultasi Layanan")}
              className="bg-[#01b2b7] hover:bg-[#128C7E] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="h-6 w-6" />
              Booking Sekarang via WhatsApp
            </button>
            <a
              href="tel:+6287811538848"
              className="border-2 border-white text-white hover:bg-white hover:text-[#01b2b7] font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              📞 Telepon Langsung
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
