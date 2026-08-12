import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactLenis, useLenis } from 'lenis/react';
import { MainLayout } from "./layouts/MainLayout";
import Index from "./pages/Index";
import CareerJourneys from "./pages/CareerJourneys";
import WhyWeExist from "./pages/WhyWeExist";
import HireLeapMethod from "./pages/HireLeapMethod";
import CareerIntelligence from "./pages/CareerIntelligence";
import CareerHub from "./pages/CareerHub";
import SuccessStories from "./pages/SuccessStories";
import CareerInvestment from "./pages/CareerInvestment";
import AboutUs from "./pages/AboutUs";
import PlanYourNextLeap from "./pages/PlanYourNextLeap";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsConditions } from "./pages/TermsConditions";
import { CookiePolicy } from "./pages/CookiePolicy";
import { Disclaimer } from "./pages/Disclaimer";
import { NotFound } from "./pages/NotFound";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]);

  return null;
}

function App() {
  return (
    <ReactLenis root>
      <QueryClientProvider client={queryClient}>
        <Helmet>
          <title>HireLeap — Career Decision Platform</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="HireLeap combines AI intelligence with expert guidance to help you make career decisions with clarity and confidence."
          />
          <meta property="og:title" content="HireLeap — Career Decision Platform" />
          <meta
            property="og:description"
            content="Better Decisions. Better Careers. Plan your next leap with clarity."
          />
          <meta property="og:image" content="/favicon.png" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="/favicon.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          />
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
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/plan-your-next-leap" element={<PlanYourNextLeap />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-and-conditions" element={<TermsConditions />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </MainLayout>
        </BrowserRouter>
      </QueryClientProvider>
    </ReactLenis>
  );
}

export default App;
