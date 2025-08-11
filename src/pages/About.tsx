import logoAirena from "../assets/airena-logo.jpg";
import { Target, Eye, CheckCircle, Users, Award, Clock } from "lucide-react";
const About = () => {
  const stats = [
    {
      number: "1000+",
      label: "Pelanggan Puas",
      icon: Users,
    },
    {
      number: "5+",
      label: "Tahun Pengalaman",
      icon: Award,
    },
    {
      number: "4",
      label: "Kota Layanan",
      icon: CheckCircle,
    },
  ];
  const values = [
    {
      icon: Target,
      title: "Cepat",
      description: "Respon dalam 1 jam, teknisi datang hari yang sama",
    },
    {
      icon: CheckCircle,
      title: "Aman",
      description: "Prosedur kerja standar dan peralatan berkualitas",
    },
    {
      icon: Award,
      title: "Berkualitas",
      description: "Teknisi bersertifikat dengan hasil kerja terjamin",
    },
    {
      icon: Users,
      title: "Harga Masuk Akal",
      description: "Tarif transparan dan kompetitif untuk semua layanan",
    },
  ];
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-primary to-brand-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Tentang AIRENA
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Penyedia jasa AC terpercaya di Jawa Barat dengan komitmen memberikan
            layanan terbaik
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Siapa Kami?
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                AIRENA INDONESIA adalah perusahaan penyedia jasa air conditioner
                (AC) yang berdiri dengan komitmen untuk memberikan layanan
                berkualitas tinggi di wilayah Jawa Barat. Kami melayani berbagai
                kebutuhan AC mulai dari cuci, servis, instalasi, hingga
                perawatan berkala untuk rumah tinggal maupun komersial.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Dengan tim teknisi berpengalaman dan bersertifikat, kami
                memastikan setiap pekerjaan dilakukan dengan standar profesional
                tertinggi. Kepuasan pelanggan adalah prioritas utama kami.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Melayani Cirebon, Indramayu, Tasikmalaya, dan Bandung
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-brand-primary">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span className="font-medium">Teknisi Bersertifikat</span>
                </div>
                <div className="flex items-center text-brand-primary">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span className="font-medium">Peralatan Modern</span>
                </div>
                <div className="flex items-center text-brand-primary">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <span className="font-medium">Garansi Layanan</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="flex justify-center">
                <img
                  src={logoAirena}
                  alt="Logo AIRENA Indonesia"
                  className="h-40 w-auto"
                  loading="eager"
                  decoding="async"
                />
                <span className="sr-only">AIRENA Indonesia</span>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-brand-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-brand-primary" />
                  </div>
                  <div className="text-3xl font-bold text-brand-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-background section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="card-hover text-center">
              <div className="w-20 h-20 bg-brand-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-10 w-10 text-brand-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Visi</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Menjadi penyedia layanan AC nomor satu di Cirebon dan sekitarnya
                yang dipercaya oleh masyarakat dengan memberikan solusi terbaik
                untuk kenyamanan udara.
              </p>
            </div>

            {/* Mission */}
            <div className="card-hover text-center">
              <div className="w-20 h-20 bg-brand-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-brand-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Misi</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Memberikan layanan AC yang cepat, aman, berkualitas, dan dengan
                harga yang masuk akal untuk meningkatkan kenyamanan hidup
                pelanggan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-xl text-muted-foreground">
              Prinsip yang menjadi landasan setiap layanan kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="card-hover text-center">
                  <div className="w-16 h-16 bg-brand-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
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
            Siap Bekerja Sama dengan Kami?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran
            terbaik!
          </p>
          <button
            onClick={() => window.open("https://wa.me/6287811538848", "_blank")}
            className="whatsapp-btn bg-white text-brand-primary hover:bg-gray-100"
          >
            Hubungi Kami Sekarang
          </button>
        </div>
      </section>
    </div>
  );
};
export default About;
