import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/home-page/HomePage";
import SearchPage from "../components/search-page/SearchPage";
import LandingPage from "../components/landing-page/LandingPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
};

export default AppRoutes;
