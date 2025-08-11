import { Link } from "react-router-dom";
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
} from "lucide-react";
import { useState } from "react";
import MapCard from "@/components/MapCard";
const Home = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/6287811538848?text=Halo AIRENA, saya ingin konsultasi layanan AC",
      "_blank"
    );
  };
  const whyChooseUs = [
    {
      icon: Users,
      title: "Teknisi Bersertifikat",
      desc: "Tim teknisi terlatih dan berpengalaman",
    },
    {
      icon: MessageCircle,
      title: "Respon Cepat & Booking Mudah",
      desc: "Layanan responsif",
    },
    {
      icon: CheckCircle,
      title: "Harga Jelas, Tanpa Biaya Tersembunyi",
      desc: "Transparan dan terjangkau",
    },
    {
      icon: MapPin,
      title: "Layanan Luas",
      desc: "Cirebon, Indramayu, Tasikmalaya, Bandung",
    },
    {
      icon: Shield,
      title: "Garansi Servis",
      desc: "Jaminan kualitas dan kepuasan",
    },
    {
      icon: Star,
      title: "Rating Terbaik",
      desc: "Dipercaya ribuan pelanggan",
    },
  ];
  const featuredServices = [
    {
      icon: Snowflake,
      title: "Cuci AC",
      desc: "Pembersihan menyeluruh AC Anda",
    },
    {
      icon: Wrench,
      title: "Servis AC",
      desc: "Perbaikan dan maintenance AC",
    },
    {
      icon: Settings,
      title: "Isi Freon",
      desc: "Penambahan freon semua tipe",
    },
    {
      icon: Users,
      title: "Instalasi AC",
      desc: "Pemasangan AC profesional",
    },
    {
      icon: CheckCircle,
      title: "Bongkar Pasang",
      desc: "Relokasi AC aman",
    },
    {
      icon: Shield,
      title: "Perawatan Berkala",
      desc: "Maintenance rutin AC",
    },
  ];
  const serviceAreas = [
    {
      name: "Cirebon",
      icon: "🏢",
    },
    {
      name: "Indramayu",
      icon: "🏭",
    },
    {
      name: "Tasikmalaya",
      icon: "🏘️",
    },
    {
      name: "Bandung",
      icon: "🌆",
    },
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
      <section className="bg-gradient-to-br from-brand-primary to-brand-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Jasa Servis, Cuci & Instalasi AC Profesional
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Cirebon, Indramayu, Tasikmalaya, dan Bandung
          </p>
          <button
            onClick={handleWhatsApp}
            className="whatsapp-btn bg-white text-brand-primary hover:bg-gray-100 text-xl px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <CheckCircle className="h-6 w-6" />
            Pesan Sekarang via WhatsApp
          </button>
        </div>
      </section>

      {/* Why Choose AIRENA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Large Title Box - Left Side */}
            <div className="w-full lg:w-2/5">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 lg:p-12 shadow-sm">
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-brand-primary leading-tight">
                  Mengapa Pilih AIRENA?
                </h2>
                <p className="text-lg text-gray-600 mt-4">
                  Kepercayaan ribuan pelanggan di Jawa Barat
                </p>
              </div>
            </div>

            {/* Three Small Boxes - Right Side */}
            <div className="w-full lg:w-3/5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Professional Service */}
                <div className="bg-white border border-gray-100 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-primary-hover rounded-full flex items-center justify-center mx-auto mb-4">
                    <img
                      src="/teknisi.png"
                      alt="Teknisi"
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

                {/* Quality Service */}
                <div className="bg-white border border-gray-100 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-primary-hover rounded-full flex items-center justify-center mx-auto mb-4">
                    <img
                      src="/garansi.png"
                      alt="Garansi"
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

                {/* Fast Response */}
                <div className="bg-white border border-gray-100 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-primary-hover rounded-full flex items-center justify-center mx-auto mb-4">
                    <img
                      src="/responsif.png"
                      alt="Responsif"
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
      <section className="section-padding section-background">
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
                <div key={index} className="service-card group">
                  <div className="w-20 h-20 bg-brand-primary-light rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-primary transition-colors duration-300">
                    <Icon className="h-10 w-10 text-brand-primary group-hover:text-white transition-colors duration-300" />
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
            <Link
              to="/layanan"
              className="btn-brand-outline text-lg px-8 py-3 inline-block"
            >
              Lihat Semua Layanan
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Wilayah Layanan
            </h2>
            <p className="text-xl text-muted-foreground">
              Melayani seluruh Jawa Barat dengan cepat dan profesional
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding section-background">
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
                className="bg-white border border-card-border rounded-lg"
              >
                <button
                  className="w-full text-left px-6 py-4 font-semibold text-foreground hover:text-brand-primary transition-colors duration-200"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  {faq.question}
                  <span className="float-right">
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

      {/* CTA Section */}
    </div>
  );
};
export default Home;
