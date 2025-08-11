import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/6287811538848', '_blank');
  };

  return (
    <button
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 bg-brand-primary hover:bg-brand-primary-hover text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 z-50"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
};

export default FloatingWhatsApp;