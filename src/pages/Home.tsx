import React, { useState } from "react";
// import { Link } from "react-router-dom"; // Removed Link to fix the error
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
  Navigation, // Import Navigation icon
} from "lucide-react";

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
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Wilayah Layanan Kami
          </h2>
          <p className="text-xl text-gray-600">
            Temukan lokasi kami yang siap melayani Anda di Cirebon dan
            Indramayu.
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

const Home = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/6287811538848?text=Halo AIRENA, saya ingin konsultasi layanan AC",
      "_blank"
    );
  };

  const featuredServices = [
    {
      icon: Snowflake,
      title: "Cuci AC",
      desc: "Pembersihan menyeluruh AC Anda",
    },
    { icon: Wrench, title: "Servis AC", desc: "Perbaikan dan maintenance AC" },
    { icon: Settings, title: "Isi Freon", desc: "Penambahan freon semua tipe" },
    { icon: Users, title: "Instalasi AC", desc: "Pemasangan AC profesional" },
    { icon: CheckCircle, title: "Bongkar Pasang", desc: "Relokasi AC aman" },
    { icon: Shield, title: "Perawatan Berkala", desc: "Maintenance rutin AC" },
  ];

  const faqs = [
    {
      question: "Berapa biaya servis AC?",
      answer:
        "Biaya servis AC mulai dari Rp 75.000 tergantung jenis kerusakan dan tipe AC Anda.",
    },
    {
      question: "Apakah teknisi bisa datang hari ini?",
      answer:
        "Ya, kami menyediakan layanan same-day service tergantung ketersediaan jadwal teknisi di wilayah Anda.",
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
            Cirebon, Indramayu, Bandung dan Tasikmalaya
          </p>
          <button
            onClick={handleWhatsApp}
            className="whatsapp-btn bg-white text-[#01b2b7] hover:bg-gray-100 text-xl px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <MessageCircle className="h-6 w-6" />
            Pesan Sekarang via WhatsApp
          </button>
        </div>
      </section>

      {/* Why Choose AIRENA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="w-full lg:w-2/5">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 lg:p-12 shadow-sm">
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#01b2b7] leading-tight">
                  Mengapa Pilih AIRENA?
                </h2>
                <p className="text-lg text-gray-600 mt-4">
                  Kepercayaan ribuan pelanggan di Jawa Barat
                </p>
              </div>
            </div>
            <div className="w-full lg:w-3/5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-100 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#01b2b7] to-[#009fa3] rounded-full flex items-center justify-center mx-auto mb-4">
                    <img
                      src="/teknisi.png"
                      alt="Teknisi Profesional"
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Profesional
                  </h3>
                  <p className="text-sm text-gray-600">
                    Tim teknisi bersertifikat dan berpengalaman
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#01b2b7] to-[#009fa3] rounded-full flex items-center justify-center mx-auto mb-4">
                    <img
                      src="/garansi.png"
                      alt="Garansi Servis"
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Berkualitas
                  </h3>
                  <p className="text-sm text-gray-600">
                    Garansi servis dan kepuasan pelanggan
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#01b2b7] to-[#009fa3] rounded-full flex items-center justify-center mx-auto mb-4">
                    <img
                      src="/responsif.png"
                      alt="Respon Cepat"
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
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

      {/* Featured Services */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Layanan Unggulan
            </h2>
            <p className="text-xl text-muted-foreground">
              Solusi lengkap untuk semua kebutuhan AC Anda
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-md text-center group hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#01b2b7] transition-colors duration-300">
                    <Icon className="h-10 w-10 text-[#01b2b7] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <a
              href="/layanan"
              className="text-[#01b2b7] border-2 border-[#01b2b7] hover:bg-[#01b2b7] hover:text-white font-bold text-lg px-8 py-3 rounded-lg inline-block transition-all duration-300"
            >
              Lihat Semua Layanan
            </a>
          </div>
        </div>
      </section>

      {/* Service Areas - This now calls the new component */}
      <WilayahLayanan />

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-xl text-muted-foreground">
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
                  className="w-full text-left px-6 py-4 font-semibold text-foreground hover:text-[#01b2b7] transition-colors duration-200 flex justify-between items-center"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  {faq.question}
                  <span className="text-xl font-light">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-muted-foreground">
                    {faq.answer}
                  </div>
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
