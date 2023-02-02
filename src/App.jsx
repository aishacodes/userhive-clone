import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import SectionTwo from "./components/SectionTwo";
import Features from "./components/Features";
import Brands from "./components/Brands";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <SectionTwo />
      <Features />
      <Brands />
    </div>
  );
}

export default App;
