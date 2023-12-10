import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/home-page/HomePage";
import SearchPage from "../components/search-page/SearchPage";
import LandingPage from "../components/landing-page/LandingPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/landingpage" element={<LandingPage />} />
    </Routes>
  );
};

export default AppRoutes;
