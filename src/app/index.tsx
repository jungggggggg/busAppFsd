// src/index.tsx
import React, { useState } from "react";
import MainPage from "../pages/main-page";
import AnnouncementPage from "../pages/announcement-page/ui/announcement-page";
import { BusPage } from "../pages/bus-page/ui/_layout";
import { GlobalProvider } from "./global-provider";

export default function Index() {
  const [currentPage, setCurrentPage] = useState("main"); 

  const handlePressAnnouncement = () => {
    setCurrentPage("announcementPage");
  };

  const handlePressShuttle = () => {
    setCurrentPage("busPage");
  };

  const handleBack = () => {
    setCurrentPage("main");
  };

  return (
    <GlobalProvider>
      {currentPage === "main" && (
        <MainPage
          onPressAnnouncement={handlePressAnnouncement}
          onPressShuttle={handlePressShuttle}
        />
      )}
      {currentPage === "announcementPage" && (
        <AnnouncementPage onBack={handleBack} />
      )}
      {currentPage === "busPage" && (
        <BusPage onBack={handleBack} />
      )}
    </GlobalProvider>
  );
}