import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import SetupCompany from "./pages/SetupCompany.tsx";
import OverseasMarketPromotion from "./pages/OverseasMarketPromotion.tsx";
import BusinessDevelopment from "./pages/BusinessDevelopment.tsx";
import PackagesMRA from "./pages/PackagesMRA.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/setup-company-in-vietnam" element={<SetupCompany />} />
          <Route path="/services/overseas-market-promotion" element={<OverseasMarketPromotion />} />
          <Route path="/services/business-development" element={<BusinessDevelopment />} />
          <Route path="/packages" element={<PackagesMRA />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
