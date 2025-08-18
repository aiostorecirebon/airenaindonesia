import {
  Snowflake,
  Wrench,
  Settings,
  Users,
  RefreshCw,
  Shield,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Snowflake,
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
      icon: RefreshCw,
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
      icon: Wrench,
      title: "Servis AC Rusak",
      description:
        "Diagnosa dan perbaikan berbagai kerusakan AC dengan teknisi berpengalaman",
      features: [
        "Diagnosa kerusakan lengkap",
        "Perbaikan komponen rusak",
        "Penggantian spare part original",
        "Testing performa AC",
      ],
    },
    {
      icon: Users,
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
      icon: Settings,
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
      icon: Shield,
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
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-primary to-brand-primary-dark text-white py-16">
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
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Layanan Utama Kami
            </h2>
            <p className="text-xl text-muted-foreground">
              Dipercaya ribuan pelanggan di Jawa Barat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="card-hover">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-brand-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-10 w-10 text-brand-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleWhatsApp(service.title)}
                    className="btn-brand w-full flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Pesan Sekarang
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Proses Layanan Kami
            </h2>
            <p className="text-xl text-muted-foreground">
              Mudah, cepat, dan profesional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-8 left-0 w-full h-1 bg-brand-primary/20 rounded-full"></div>

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
                <div className="w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold relative z-20 shadow-lg border-4 border-white transition-all duration-300 hover:scale-110">
                  {process.step}
                </div>

                {/* Centered Arrow for desktop - positioned between circles */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-6 -right-4 z-30">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-brand-primary/20">
                      <ArrowRight className="h-4 w-4 text-brand-primary animate-pulse" />
                    </div>
                  </div>
                )}

                {/* Mobile Arrow (vertical) */}
                {index < 3 && (
                  <div className="md:hidden flex justify-center mb-4">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-brand-primary/20">
                      <ArrowRight className="h-4 w-4 text-brand-primary rotate-90" />
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    {process.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {process.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-primary text-white py-16">
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
              className="whatsapp-btn bg-white text-brand-primary hover:bg-gray-100"
            >
              <MessageCircle className="h-6 w-6" />
              Booking Sekarang via WhatsApp
            </button>
            <a
              href="tel:+6287811538848"
              className="btn-brand-outline border-white text-white hover:bg-white hover:text-brand-primary"
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
