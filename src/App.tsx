import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import CallNowPopup from "@/components/CallNowPopup";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Social from "./pages/Social";
import NotFound from "./pages/NotFound";
import Architecture from "./pages/services/Architecture";
import Construction from "./pages/services/Construction";
import Interior from "./pages/services/Interior";
import Furniture from "./pages/services/Furniture";
import Elevations from "./pages/projects/Elevations";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <CallNowPopup />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/social" element={<Social />} />
          <Route path="/services/architecture" element={<Architecture />} />
          <Route path="/services/construction" element={<Construction />} />
          <Route path="/services/interior" element={<Interior />} />
          <Route path="/services/furniture" element={<Furniture />} />
          <Route path="/projects/elevations" element={<Elevations />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
