import React from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "../features/landing";
import { LoginPage, RegisterPage } from "../features/auth";
import { ProfilePage } from "../features/profile";
import { DemoPage } from "../features/demo";
import { CoursePage } from "../features/course";
import { QuestionnairePage } from "../features/questionnaire";
import { VMPage } from "../features/vm";
import { LegalPage, PrivacyPage } from "../features/legal";

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/demo" element={<DemoPage />} />
    <Route path="/course" element={<CoursePage />} />
    <Route path="/questionnaire" element={<QuestionnairePage />} />
    <Route
      path="/questionnaire/:category/:technology"
      element={<QuestionnairePage />}
    />
    <Route path="/vm" element={<VMPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/profile" element={<ProfilePage />} />
    <Route path="/legal" element={<LegalPage />} />
    <Route path="/privacy" element={<PrivacyPage />} />
    {/* Add other routes here */}
  </Routes>
);

export default Router;
