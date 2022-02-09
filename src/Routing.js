import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Side } from "./components/Side";

import WIP from "./pages/WIP";
import Dashboard from "./pages/test";
// 2014
import ColorWheel from "./pages/2014/ColorWheel";
import LuxAeterna from "./pages/2014/LuxAeterna";
import RainyCube from "./pages/2014/RainyCube";

import "./assets/styles/App.css";

function Routing() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Side></Side>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<WIP />} />
          <Route path="2014">
            <Route path="color-wheel" element={<ColorWheel />} />
            <Route path="lux-aeterna-mv" element={<LuxAeterna />} />
            <Route path="rainy-cube" element={<RainyCube />} />
          </Route>
          <Route path="/*" element={<WIP />} />
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default Routing;