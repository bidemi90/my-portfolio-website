import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Header/>
      <Hero/>
      </BrowserRouter>
    </>
  );
}

export default App;
