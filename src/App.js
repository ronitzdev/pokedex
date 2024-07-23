import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pokedex from "./containers/Pokedex";
import AppNavigator from "./components/AppNavigator";
export default function App() {
  return (
    <Router>
      <AppNavigator />
      <Routes>
        <Route path="/" Component={Pokedex} />
      </Routes>
    </Router>
  );
}
