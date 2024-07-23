import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pokedex from "./containers/Pokedex";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Pokedex} />
      </Routes>
    </Router>
  );
}
