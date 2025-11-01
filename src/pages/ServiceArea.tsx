import { MapPin, Clock, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";
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
        "Kami siap membantu Anda menemukan solusi untuk Air Conditioner Anda",
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
  const WhatsAppIcon = ({ className = "h-4 w-4" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516" />
    </svg>
  );

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
                  <div className="absolute inset-y-0 left-1/2 flex items-center text-white px-4 sm:px-6 md:px-10">
                    <div className="text-left">
                      <h3 className="text-2xl sm:text-3xl font-bold">
                        {area.city}
                      </h3>
                      <p className="text-sm sm:text-base mt-1">
                        {area.description}
                      </p>
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
                    <WhatsAppIcon className="h-4 w-4" />
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
                                lat: -7.348426105134876,
                                lng: 108.21985459982903,
                              }
                        }
                        shareLink={
                          area.city === "Cirebon"
                            ? "https://maps.app.goo.gl/CBZcSeJp8fRPaWT96"
                            : area.city === "Indramayu"
                            ? "https://maps.app.goo.gl/BLy1UKmh6K4hJjem6"
                            : "https://maps.app.goo.gl/CHkS17qSPckMz5DM9"
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
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516" />
              </svg>
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
