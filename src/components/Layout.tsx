import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';
import SEOKeywordsSection from './SEOKeywordsSection';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <SEOKeywordsSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Layout;