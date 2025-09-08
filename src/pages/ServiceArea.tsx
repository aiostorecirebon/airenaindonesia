import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";
import MapCard from "@/components/MapCard";
import cirebonIcon from "@/assets/cirebon-icon.jpg";
import indramayuIcon from "@/assets/indramayu-icon.jpg";
import tasikmalayaIcon from "@/assets/tasikmalaya-icon.jpg";
import bandungIcon from "@/assets/bandung-icon.jpg";
const ServiceArea = () => {
  const serviceAreas = [
    {
      city: "Cirebon",
      icon: cirebonIcon,
      description: "Melayani seluruh wilayah Kota dan Kabupaten Cirebon",
      areas: [
        "Harjamukti",
        "Kedawung",
        "Weru",
        "Kejaksan",
        "Lemahwungkuk",
        "Pekalipan",
        "Babakan",
        "Karangsembung",
        "Sumber",
        "Ciledug",
        "Gegesik",
        "Kaliwedi",
        "Kapetakan",
        "Klangenan",
      ],
      responseTime: "30-60 menit",
      coverage: "100%",
    },
    {
      city: "Indramayu",
      icon: indramayuIcon,
      description: "Jangkauan luas ke seluruh Kabupaten Indramayu",
      areas: [
        "Jatibarang",
        "Haurgeulis",
        "Kandanghaur",
        "Lohbener",
        "Widasari",
        "Patrol",
        "Sliyeg",
        "Gabuswetan",
        "Bangodua",
        "Terisi",
        "Sukagumiwang",
        "Kertasemaya",
        "Anjatan",
      ],
      responseTime: "45-90 menit",
      coverage: "95%",
    },
    {
      city: "Tasikmalaya",
      icon: tasikmalayaIcon,
      description: "Melayani Kota Tasikmalaya dan sekitarnya",
      areas: [
        "Singaparna",
        "Ciawi",
        "Tawang",
        "Cibeureum",
        "Indihiang",
        "Mangkubumi",
        "Bungursari",
        "Purbaratu",
        "Tamansari",
        "Cipedes",
        "Cihideung",
        "Kawalu",
      ],
      responseTime: "60-120 menit",
      coverage: "90%",
    },
    {
      city: "Bandung",
      icon: bandungIcon,
      description: "Jangkauan Bandung Raya dan sekitarnya",
      areas: [
        "Kopo",
        "Dago",
        "Cimahi",
        "Bandung Barat",
        "Baleendah",
        "Soreang",
        "Margahayu",
        "Dayeuhkolot",
        "Bojongsoang",
        "Rancaekek",
        "Majalaya",
        "Banjaran",
      ],
      responseTime: "45-90 menit",
      coverage: "85%",
    },
  ];
  const serviceFeatures = [
    {
      icon: Clock,
      title: "Respon Cepat",
      description:
        "Kami siap membantu Anda menemukan soludi untuk Air Conditioner Anda",
    },
    {
      icon: MapPin,
      title: "Jangkauan Luas",
      description: "Melayani 4 kota besar di Jawa Barat",
    },
    {
      icon: Phone,
      title: "Layanan 24/7",
      description: "Customer service aktif setiap hari",
    },
  ];
  const handleWhatsApp = (city: string) => {
    const message = `Halo AIRENA, saya butuh teknisi AC di ${city}. Apakah bisa melayani?`;
    window.open(
      `https://wa.me/6287811538848?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };
  return (
    <div>
      {/* --- THIS IS THE NEW HERO SECTION --- */}
      <section className="bg-gradient-to-r from-brand-primary to-brand-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Wilayah Layanan Kami
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Kami menjangkau kota-kota besar di Jawa Barat, siap memberikan
            layanan AC terbaik untuk Anda.
          </p>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-background section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                {/* Header */}

                <div className="relative w-full aspect-[4/1]">
                  {/* Gambar */}
                  <img
                    src={area.icon}
                    alt={`${area.city} background`}
                    className="w-full h-full object-cover"
                  />

                  {/* Teks overlay */}
                  <div className="absolute inset-y-0 left-1/2 flex items-center text-white pl-6 md:pl-10">
                    <div className="text-left">
                      <h3 className="text-3xl font-bold">{area.city}</h3>
                      <p className="text-base">{area.description}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    Kecamatan yang Dilayani:
                  </h4>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-6">
                    {area.areas.map((subArea, subIndex) => (
                      <div
                        key={subIndex}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <MapPin className="h-3 w-3 mr-2 text-brand-primary flex-shrink-0" />
                        <span>{subArea}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handleWhatsApp(area.city)}
                    className="btn-brand w-full flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Pesan Teknisi di {area.city}
                  </button>

                  {(area.city === "Cirebon" ||
                    area.city === "Indramayu" ||
                    area.city === "Tasikmalaya") && (
                    <div className="mt-6">
                      <MapCard
                        branchName={`Airena ${area.city}`}
                        coordinates={
                          area.city === "Cirebon"
                            ? {
                                lat: -6.730449803287912, // Added negative sign
                                lng: 108.57649665948746,
                              }
                            : area.city === "Indramayu"
                            ? {
                                lat: -6.437191269195009, // Added negative sign
                                lng: 108.30315271200429,
                              }
                            : {
                                lat: -7.348422381627437,
                                lng: 108.21985354507241,
                              }
                        }
                        shareLink={
                          area.city === "Cirebon"
                            ? "https://maps.app.goo.gl/CBZcSeJp8fRPaWT96"
                            : area.city === "Indramayu"
                            ? "https://maps.app.goo.gl/BLy1UKmh6K4hJjem6"
                            : "https://maps.app.goo.gl/xPrrKJA1snbghSUs5"
                        }
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map Info */}

      {/* Service Features */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {serviceFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="card-hover text-center">
                  <div className="w-16 h-16 bg-brand-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-brand-primary text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Butuh Teknisi di Lokasi Anda?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Tidak masalah dimana lokasi Anda, tim AIRENA siap membantu dengan
            layanan terbaik
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleWhatsApp("Cek Lokasi Saya")}
              className="whatsapp-btn bg-white text-brand-primary hover:bg-gray-100"
            >
              <MessageCircle className="h-6 w-6" />
              Hubungi Sekarang!
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
export default ServiceArea;
