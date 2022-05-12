import React from "react";
import "./styles/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import FootballPage from "./pages/FootballPage";
import PremiereLeaguePage from "./pages/PremiereLeaguePage";
import LoginPage from "./pages/LoginPage";
import CardPage from "./pages/CardPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="footballpage" element={<FootballPage />} />
        <Route path="premiereleaguepage" element={<PremiereLeaguePage />} />
        <Route path="loginpage" element={<LoginPage />} />
        <Route path="cardpage" element={<CardPage />} />
        <Route path="notfound" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
