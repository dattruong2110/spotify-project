import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/home-page/HomePage";
import SearchPage from "../components/search-page/SearchPage";
import LandingPage from "../components/landing-page/LandingPage";
import SignUp from "../components/sign-up/SignUp";
import Login from "../components/login/Login";
import PasswordReset from "../components/password-reset/PasswordReset";
import PlaylistArtist from "../components/playlist-artist/PlaylistArtist";
import Playlist from "../components/playlist/Playlist";
import Premium from "../components/premium-page/Premium";
import Download from "../components/download-page/Download";
import SideBarAfterLogin from "../components/side-bar/sidebar-afterlogin/SideBarAfterLogin";
import FooterPlayMusic from "../components/footer/footer-playmusic/FooterPlayMusic";
import SupportPage from "../components/support-page/SupportPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home-page" element={<HomePage />} />
      <Route path="/playlist-artist" element={<PlaylistArtist />} />
      <Route path="/search-page" element={<SearchPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset-password" element={<PasswordReset />} />
      <Route path="/playlist" element={<Playlist />} />
      <Route path="/premium-page" element={<Premium />} />
      <Route path="/download-page" element={<Download />} />
      <Route path="/sidebar-afterlogin" element={<SideBarAfterLogin />} />
      <Route path="/footer-playmusic" element={<FooterPlayMusic />} />
      <Route path="/support-page" element={<SupportPage />} />
    </Routes>
  );
};

export default AppRoutes;
