import { MapPin, Phone, Clock, Instagram } from "lucide-react";

// Custom TikTok Icon Component
const TikTokIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const Footer = () => {
  const serviceAreas = [
    { name: "Cirebon", url: "https://maps.app.goo.gl/CBZcSeJp8fRPaWT9" },
    { name: "Indramayu", url: "https://maps.app.goo.gl/BLy1UKmh6K4hJjem6" },
    { name: "Bandung", url: "https://maps.app.goo.gl/BLy1UKmh6K4hJjem6" },
    { name: "Tasikmalaya", url: "https://maps.app.goo.gl/BLy1UKmh6K4hJjem6" },
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              AIRENA INDONESIA
            </div>
            <p className="text-gray-300 mb-4">
              Bersama Airena jaga AC kamu tetap dingin.
            </p>
            <div className="flex items-center text-gray-300 mb-2">
              <Clock className="h-4 w-4 mr-2 text-[#01b2b7]" />
              <span className="text-sm">08.00 - 17.00 WIB</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Phone className="h-4 w-4 mr-2 text-[#01b2b7]" />
              <span className="text-sm">+62 878 1153 8848</span>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Wilayah Layanan</h3>
            <ul className="space-y-2 mb-6">
              {serviceAreas.map((area, index) => (
                <li key={index} className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-[#01b2b7]" />
                  <a
                    href={area.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {area.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ikuti Kami Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Ikuti Kami</h3>
            <div className="flex flex-col items-start gap-y-2">
              {/* Instagram Link */}
              <a
                href="https://www.instagram.com/airena.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Instagram className="h-5 w-5 mr-2 text-[#01b2b7]" />
                <span className="text-sm">@airena.id</span>
              </a>

              {/* TikTok Link */}
              <a
                href="https://www.tiktok.com/@airena.id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-300 hover:text-white transition-colors duration-200"
              >
                <TikTokIcon className="h-5 w-5 mr-2 text-[#01b2b7]" />
                <span className="text-sm">@airena.id</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} AIRENA INDONESIA. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
