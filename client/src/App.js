import React from "react";
import "./styles/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import FootballPage from "./components/FootballPage";
import PremiereLeaguePage from "./components/PremiereLeaguePage";
import LoginPage from "./components/LoginPage";
import CardPage from "./components/CardPage";
import NotFound from "./components/NotFound";

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
