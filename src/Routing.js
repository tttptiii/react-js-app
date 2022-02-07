import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Side } from "./components/Side";

import WIP from "./pages/WIP";
import Dashboard from "./pages/test";

import "./assets/styles/App.css";

function Routing() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Side></Side>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<WIP />} />
          <Route path="/*" element={<WIP />} />
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default Routing;