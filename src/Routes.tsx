import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import AllSongs from "./pages/allSongs/allSongs";
import SongDetails from "./pages/songDetail/songDetails";

export function AppRoutes() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AllSongs />} />
        <Route path="detalhes" element={<SongDetails />} />
      </Routes>
    </div>
  );
}