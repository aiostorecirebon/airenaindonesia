import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceArea from "./pages/ServiceArea";
import NotFound from "./pages/NotFound";
// Import artikel components - FIXED: Sesuaikan path jika file ada di pages/
import Artikel from "./pages/Artikel";
import ArticleDetail from "./pages/ArticleDetail";

const queryClient = new QueryClient();

// ScrollToTop Component inline
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll ke atas dengan small delay untuk smooth transition
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tentang" element={<About />} />
            <Route path="/layanan" element={<Services />} />
            <Route path="/wilayah" element={<ServiceArea />} />

            {/* Artikel routes */}

            <Route path="*" element={<NotFound />} />
            <Route path="/artikel" element={<Artikel />} />
            <Route path="/artikel/:slug" element={<ArticleDetail />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
