import React, { useState } from "react";
import { Header } from "./components/Header";
import { HomePage } from "./components/pages/HomePage";
import { AboutPage } from "./components/pages/AboutPage";
import { PlatformsPage } from "./components/pages/PlatformsPage";
import { ContactPage } from "./components/pages/ContactPage";
import { Footer } from "./components/Footer";

export type PageType =
  | "home"
  | "about"
  | "platforms"
  | "contact";

export default function App() {
  const [currentPage, setCurrentPage] =
    useState<PageType>("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "about":
        return <AboutPage />;
      case "platforms":
        return <PlatformsPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <main className="pt-20">{renderPage()}</main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}