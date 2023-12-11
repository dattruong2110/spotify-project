import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/home-page/HomePage";
import SearchPage from "../components/search-page/SearchPage";

import LandingPage from "../components/landing-page/LandingPage";

import SignUp from "../components/sign-up/SignUp";
import Login from "../components/login/Login";
import PasswordReset from "../components/password-reset/PasswordReset";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset-password" element={<PasswordReset />} />
    </Routes>
  );
};

export default AppRoutes;
