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

  const handleLanguageSelect = (lang: string) => {
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

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "about":
        return <AboutPage />;
      case "services":
        return <PlatformsPage />;
      case "contact":
        return <ContactPage />;
      case "booking":
        return <FlightBookingPage />;
      case "privacy":
        return <PrivacyPage />;
      case "terms":
        return <TermsPage />;
      default:
        return <HomePage />;
    }
  };

  if (showSplash) {
    return <SplashScreen onLanguageSelect={handleLanguageSelect} />;
  }

  if (showLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onLanguageChange={handleLanguageChange}
      />
      <main className="pt-20">{renderPage()}</main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}