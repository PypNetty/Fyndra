import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/router";
import ToastContainer from "./components/ToastContainer";
import ScrollToTop from "./components/ScrollToTop";
import "./index.css";

const App: React.FC = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Router />
    <ToastContainer />
  </BrowserRouter>
);

export default App;
