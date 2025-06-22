import React from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "../features/landing";
import { LoginPage, RegisterPage } from "../features/auth";
import { ProfilePage } from "../features/profile";
<<<<<<< HEAD
import { DemoPage } from "../features/demo";
import { CoursePage } from "../features/course";
import { QuestionnairePage } from "../features/questionnaire";
import { VMPage } from "../features/vm";
=======
>>>>>>> a7da3b8f7bf63ffdfde2337e37b1c39bccb76220

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
<<<<<<< HEAD
    <Route path="/demo" element={<DemoPage />} />
    <Route path="/course" element={<CoursePage />} />
    <Route path="/questionnaire" element={<QuestionnairePage />} />
    <Route
      path="/questionnaire/:category/:technology"
      element={<QuestionnairePage />}
    />
    <Route path="/vm" element={<VMPage />} />
=======
>>>>>>> a7da3b8f7bf63ffdfde2337e37b1c39bccb76220
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/profile" element={<ProfilePage />} />
    {/* Add other routes here */}
  </Routes>
);

export default Router;
