import React from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "../features/landing";
import { LoginPage, RegisterPage } from "../features/auth";
import { ProfilePage } from "../features/profile";

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/profile" element={<ProfilePage />} />
    {/* Add other routes here */}
  </Routes>
);

export default Router;
