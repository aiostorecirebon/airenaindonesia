import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/6287811538848", "_blank");
  };
  const serviceAreas = ["Cirebon", "Indramayu", "Tasikmalaya", "Bandung"];
  const services = [
    "Cuci AC",
    "Servis AC",
    "Isi Freon",
    "Instalasi AC",
    "Bongkar Pasang",
    "Perawatan Berkala",
  ];
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-start">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-brand-primary mb-4">
              AIRENA INDONESIA
            </div>
            <p className="text-gray-300 mb-4">
              Bersama Airena jaga AC kamu tetap dingin
            </p>
            <div className="flex items-center text-gray-300 mb-2">
              <Clock className="h-4 w-4 mr-2" />
              <span className="text-sm">08.00 - 17.00 WIB</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-sm">+62 878 1153 8848</span>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Wilayah Layanan</h3>
            <ul className="space-y-2 mb-6">
              {serviceAreas.map((area, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <MapPin className="h-3 w-3 mr-2 text-brand-primary" />
                  <span className="text-sm">{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 AIRENA INDONESIA. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
