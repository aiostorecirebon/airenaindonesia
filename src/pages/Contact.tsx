import { useState } from "react";
import {
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Mail,
  CheckCircle,
} from "lucide-react";
const Contact = () => {
  const [formData, setFormData] = useState({
    nama: "",
    whatsapp: "",
    alamat: "",
    layanan: "",
    tanggal: "",
    waktu: "",
    catatan: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const services = [
    "Cuci AC",
    "Servis AC Rusak",
    "Isi Freon",
    "Instalasi AC Baru",
    "Bongkar Pasang AC",
    "Perawatan Berkala",
    "Lainnya",
  ];
  const timeSlots = [
    "08:00 - 10:00",
    "10:00 - 12:00",
    "12:00 - 14:00",
    "14:00 - 16:00",
    "16:00 - 17:00",
  ];
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format WhatsApp message
    const message = `
*BOOKING LAYANAN AIRENA*

Nama: ${formData.nama}
WhatsApp: ${formData.whatsapp}
Alamat: ${formData.alamat}
Layanan: ${formData.layanan}
Tanggal: ${formData.tanggal}
Waktu: ${formData.waktu}
${formData.catatan ? `Catatan: ${formData.catatan}` : ""}

Mohon konfirmasi ketersediaan teknisi. Terima kasih!
    `.trim();

    // Open WhatsApp with pre-filled message
    window.open(
      `https://wa.me/6287811538848?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        nama: "",
        whatsapp: "",
        alamat: "",
        layanan: "",
        tanggal: "",
        waktu: "",
        catatan: "",
      });
    }, 3000);
  };
  const contactInfo = [
    {
      icon: Phone,
      title: "Telepon",
      details: "+62 878 1153 8848",
      action: () => window.open("tel:+6287811538848", "_self"),
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: "Chat 24/7",
      action: () => window.open("https://wa.me/6287811538848", "_blank"),
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      details: "08.00 - 17.00 WIB",
      action: null,
    },
    {
      icon: MapPin,
      title: "Wilayah Layanan",
      details: "Cirebon, Indramayu, Tasikmalaya, Bandung",
      action: null,
    },
  ];
  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-section-background">
        <div className="card-hover text-center max-w-md mx-4">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Pesan Terkirim!
          </h2>
          <p className="text-muted-foreground mb-6">
            Terima kasih! Pesan Anda telah dikirim ke WhatsApp kami. Tim AIRENA
            akan segera merespon permintaan Anda.
          </p>
          <button onClick={() => setIsSubmitted(false)} className="btn-brand">
            Kirim Pesan Lain
          </button>
        </div>
      </div>
    );
  }
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-primary to-brand-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hubungi Kami</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Siap membantu kebutuhan AC Anda dengan layanan cepat dan profesional
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="card-hover">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Booking Layanan
            </h2>
            <p className="text-muted-foreground mb-8">
              Isi form di bawah ini dan kami akan menghubungi Anda untuk
              konfirmasi booking
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    name="nama"
                    value={formData.nama}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-card-border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    No. WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-card-border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    placeholder="08xxxxxxxxxx"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Alamat Lengkap *
                </label>
                <textarea
                  name="alamat"
                  value={formData.alamat}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 border border-card-border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  placeholder="Masukkan alamat lengkap dengan patokan"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Jenis Layanan *
                </label>
                <select
                  name="layanan"
                  value={formData.layanan}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-card-border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                >
                  <option value="">Pilih jenis layanan</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Tanggal *
                  </label>
                  <input
                    type="date"
                    name="tanggal"
                    value={formData.tanggal}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 border border-card-border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Waktu *
                  </label>
                  <select
                    name="waktu"
                    value={formData.waktu}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-card-border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  >
                    <option value="">Pilih waktu</option>
                    {timeSlots.map((slot, index) => (
                      <option key={index} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Catatan Tambahan
                </label>
                <textarea
                  name="catatan"
                  value={formData.catatan}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-card-border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  placeholder="Informasi tambahan tentang kondisi AC atau permintaan khusus"
                />
              </div>

              <button
                type="submit"
                className="btn-brand w-full text-lg py-4 flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Kirim Sekarang
              </button>
            </form>
          </div>

          {/* Contact Information */}
        </div>
      </section>
    </div>
  );
};
export default Contact;
