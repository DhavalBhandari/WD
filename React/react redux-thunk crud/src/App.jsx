import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Adduser from "./pages/Adduser";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adduser" element={<Adduser />} />
        <Route path="/edituser/:id" element={<Adduser />} />
      </Routes>
    </div>
  );
}

export default App;
