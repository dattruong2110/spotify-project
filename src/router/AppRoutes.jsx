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
import AccountManage from "../components/account-manage/AccountManage";
import HomePageAfterLogin from "../components/home-page-after-login/HomePageAfterLogin";
import AccountManagePlan from "../components/account-manage-plan/AccountManagePlan";
import AccountManageEditProfile from "../components/account-manage-edit-profile/AccountManageEditProfile";
import AccountPrivacy from "../components/account-manage-privacy-page/AccountPrivacy";
import SupportPage from "../components/support-page/SupportPage";
import SavedPaymentCards from "../components/overview-payment/saved-payment-cards-page/SavedPaymentCards";
import OrderHistory from "../components/overview-payment/order-history-page/OrderHistory";
import CreatePlayList from "../components/create-playlist-page/CreatePlayList"
import RedeemPage from "../components/overview-payment/redeem-page/RedeemPage";
import NotificationSettingPage from "../components/security and privacy/notifications-setting-page/NotificationSettingPage";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/search" element={<SearchPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset-password" element={<PasswordReset />} />
      <Route path="/playlist/:playlistId" element={<Playlist />} />
      <Route path="/premium-page" element={<Premium />} />
      <Route path="/download-page" element={<Download />} />
      <Route path="/account-manage" element={<AccountManage />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/home-page" element={<HomePage />} />
      <Route path="/playlist-artist" element={<PlaylistArtist />} />
      <Route path="/home-page-after-login" element={<HomePageAfterLogin />} />
      <Route path="/account-manage-plan" element={<AccountManagePlan />} />
      <Route
        path="/account-manage-edit"
        element={<AccountManageEditProfile />}
      />
      <Route path="/account-manage-privacy" element={<AccountPrivacy />} />
      <Route path="/support-page" element={<SupportPage />} />





      <Route path="/create-playlist-page" element={<CreatePlayList />} />
      <Route path="/order-history-page" element={<OrderHistory/>} />
      <Route path="/saved-payment-cards-page" element={<SavedPaymentCards/>} />
      <Route path="/redeem-page" element={<RedeemPage/>} />
      <Route path="notifications-setting-page" element={<NotificationSettingPage/>} />
    </Routes> 
  );
};

export default AppRoutes;
