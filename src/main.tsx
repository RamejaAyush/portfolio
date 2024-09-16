import Layout from "./Layout";
import "./styles/global.scss";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Layout />
    </Router>
  </StrictMode>
);
