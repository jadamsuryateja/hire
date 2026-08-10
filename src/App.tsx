import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MainLayout, NotFoundComponent } from "./layouts/MainLayout";
import Index from "./pages/Index";
import CareerJourneys from "./pages/CareerJourneys";
import WhyWeExist from "./pages/WhyWeExist";
import HireLeapMethod from "./pages/HireLeapMethod";
import CareerIntelligence from "./pages/CareerIntelligence";
import CareerHub from "./pages/CareerHub";
import SuccessStories from "./pages/SuccessStories";
import CareerInvestment from "./pages/CareerInvestment";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Helmet>
        <title>HireLeap — Career Decision Platform</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="HireLeap combines AI intelligence with expert guidance to help you make career decisions with clarity and confidence." />
        <meta property="og:title" content="HireLeap — Career Decision Platform" />
        <meta property="og:description" content="Better Decisions. Better Careers. Plan your next leap with clarity." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" />
      </Helmet>
      
      <BrowserRouter>
        <ScrollToTop />
        <MainLayout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/career-journeys" element={<CareerJourneys />} />
            <Route path="/why-we-exist" element={<WhyWeExist />} />
            <Route path="/the-hireleap-method" element={<HireLeapMethod />} />
            <Route path="/career-intelligence" element={<CareerIntelligence />} />
            <Route path="/career-hub" element={<CareerHub />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/career-investment" element={<CareerInvestment />} />
            <Route path="*" element={<NotFoundComponent />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
