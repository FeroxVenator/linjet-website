import React, { useState } from "react";
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

export type PageType =
  | "home"
  | "about"
  | "services"
  | "contact"
  | "booking"
  | "privacy"
  | "terms";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showLoading, setShowLoading] = useState(false);
  const [currentPage, setCurrentPage] =
    useState<PageType>("home");
  const [selectedLanguage, setSelectedLanguage] = useState("tr");

  const handleLanguageSelect = (lang: string) => {
    setSelectedLanguage(lang);
    setShowSplash(false);
    setShowLoading(true);
  };

  const handleLoadingComplete = () => {
    setShowLoading(false);
  };

  const handleLanguageChange = () => {
    setShowSplash(true);
    setCurrentPage('home');
  };

  const t = getTranslation(selectedLanguage);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage t={t} />;
      case "about":
        return <AboutPage t={t} />;
      case "services":
        return <PlatformsPage t={t} />;
      case "contact":
        return <ContactPage t={t} />;
      case "booking":
        return <FlightBookingPage t={t} />;
      case "privacy":
        return <PrivacyPage t={t} />;
      case "terms":
        return <TermsPage t={t} />;
      default:
        return <HomePage t={t} />;
    }
  };

  if (showSplash) {
    return <SplashScreen onLanguageSelect={handleLanguageSelect} />;
  }

  if (showLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} message={t.loading.message} />;
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onLanguageChange={handleLanguageChange}
        t={t}
      />
      <main className="pt-20">{renderPage()}</main>
      <Footer setCurrentPage={setCurrentPage} t={t} />
    </div>
  );
}