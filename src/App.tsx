import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useParams, useNavigate, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./components/pages/HomePage";
import { AboutPage } from "./components/pages/AboutPage";
import { PlatformsPage } from "./components/pages/PlatformsPage";
import { ContactPage } from "./components/pages/ContactPage";
import { FlightBookingPage } from "./components/pages/FlightBookingPage";
import { PrivacyPage } from "./components/pages/PrivacyPage";
import { TermsPage } from "./components/pages/TermsPage";
import { Footer } from "./components/Footer";
import { SplashScreen } from "./components/SplashScreenVideo";
import { LoadingScreen } from "./components/LoadingScreenVideo";
import { getTranslation } from "./translations/all";
import { parseUrl, getPath, supportedLanguages, type SupportedLanguage, type PageSlug } from "./routes";

// Main app wrapper that handles routing
function AppContent() {
  const [showSplash, setShowSplash] = useState(true);
  const [showLoading, setShowLoading] = useState(false);
  const [hasSeenSplash, setHasSeenSplash] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Check if user has already seen splash
  useEffect(() => {
    const seen = sessionStorage.getItem('hasSeenSplash');
    if (seen === 'true') {
      setShowSplash(false);
      setHasSeenSplash(true);
    }
  }, []);

  const handleLanguageSelect = (lang: string) => {
    sessionStorage.setItem('hasSeenSplash', 'true');
    setHasSeenSplash(true);
    setShowSplash(false);
    setShowLoading(true);
    // Navigate to selected language
    setTimeout(() => {
      navigate(`/${lang}`);
    }, 100);
  };

  const handleLoadingComplete = () => {
    setShowLoading(false);
  };

  // Parse current URL
  const parsed = parseUrl(location.pathname);
  const currentLang = parsed?.lang || 'tr';
  const t = getTranslation(currentLang);

  if (showSplash) {
    return <SplashScreen onLanguageSelect={handleLanguageSelect} />;
  }

  if (showLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} message={t.loading.message} />;
  }

  return (
    <>
      <Header currentLang={currentLang} t={t} />
      <main className="pt-20">
        <Routes>
          {/* Redirect root to default language */}
          <Route path="/" element={<Navigate to="/tr" replace />} />
          
          {/* Language-specific routes */}
          {supportedLanguages.map((lang) => (
            <React.Fragment key={lang}>
              <Route path={`/${lang}`} element={<PageRouter lang={lang} page="home" />} />
              <Route path={`/${lang}/*`} element={<PageRouter lang={lang} page="dynamic" />} />
            </React.Fragment>
          ))}

          {/* Catch all - redirect to Turkish home */}
          <Route path="*" element={<Navigate to="/tr" replace />} />
        </Routes>
      </main>
      <Footer currentLang={currentLang} t={t} />
    </>
  );
}

// Page router component that renders the correct page based on URL
function PageRouter({ lang, page }: { lang: SupportedLanguage; page: PageSlug | 'dynamic' }) {
  const location = useLocation();
  const t = getTranslation(lang);

  // For dynamic routes, parse the URL to get the actual page
  let actualPage: PageSlug = page === 'dynamic' ? 'home' : page;
  if (page === 'dynamic') {
    const parsed = parseUrl(location.pathname);
    actualPage = parsed?.page || 'home';
  }

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  switch (actualPage) {
    case 'home':
      return <HomePage t={t} />;
    case 'about':
      return <AboutPage t={t} />;
    case 'services':
      return <PlatformsPage t={t} />;
    case 'contact':
      return <ContactPage t={t} />;
    case 'booking':
      return <FlightBookingPage t={t} />;
    case 'privacy':
      return <PrivacyPage t={t} />;
    case 'terms':
      return <TermsPage t={t} />;
    default:
      return <HomePage t={t} />;
  }
}

// Main App component with Router wrapper
export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950">
        <AppContent />
      </div>
    </BrowserRouter>
  );
}
