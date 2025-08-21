import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoAirena from "../assets/airena-logo.jpg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Beranda" },
    { path: "/tentang", label: "Tentang" },
    { path: "/layanan", label: "Layanan" },
    { path: "/wilayah", label: "Wilayah" },
    { path: "/artikel", label: "Artikel" }, // perbaikan path sesuai route
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logoAirena}
              alt="Logo AIRENA Indonesia"
              className="h-10 w-auto"
              loading="eager"
              decoding="async"
            />
            <span className="sr-only">AIRENA Indonesia</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-brand-primary border-b-2 border-brand-primary"
                    : "text-foreground hover:text-brand-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              aria-label={isOpen ? "Tutup menu" : "Buka menu"}
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-brand-primary"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? "text-brand-primary bg-brand-primary-light"
                      : "text-foreground hover:text-brand-primary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
