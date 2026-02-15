import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "./components/PublicLayout";
import Index from "./pages/Index";
import ProductDetail from "./pages/ProductDetail";
import ArticlePage from "./pages/ArticlePage";
import About from "./pages/About";
import DashboardPage from "./pages/dashboards/DashboardPage";
import StartFiling from "./pages/filing/StartFiling";
import SelectFilingType from "./pages/filing/SelectFilingType";
import UploadDocuments from "./pages/filing/UploadDocuments";
import FilingProgress from "./pages/filing/FilingProgress";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public pages with shared layout */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/product" element={<ProductDetail />} />
            <Route path="/articles" element={<ArticlePage />} />
            <Route path="/about" element={<About />} />
          </Route>

          {/* Dashboards */}
          <Route path="/dashboard/:role" element={<DashboardPage />} />

          {/* Filing workflow */}
          <Route path="/filing/start" element={<StartFiling />} />
          <Route path="/filing/select-type" element={<SelectFilingType />} />
          <Route path="/filing/upload" element={<UploadDocuments />} />
          <Route path="/filing/progress" element={<FilingProgress />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
