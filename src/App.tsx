import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/router";
import ToastContainer from "./components/ToastContainer";
import "./index.css";

const App: React.FC = () => (
  <BrowserRouter>
    <Router />
    <ToastContainer />
  </BrowserRouter>
);

export default App;
