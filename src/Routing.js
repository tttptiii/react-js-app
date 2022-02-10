import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Side } from "./components/Side";

import WIP from "./pages/WIP";
import Dashboard from "./pages/test";
// 2014
import ColorWheel from "./pages/2014/ColorWheel";
import LuxAeterna from "./pages/2014/LuxAeterna";
import RainyCube from "./pages/2014/RainyCube";
// 2015
import Bubbles from "./pages/2015/Bubbles";
import Wave from "./pages/2015/Wave";
import PCA from "./pages/2015/PCA";
import Explosion from "./pages/2015/Explosion";
// 2016
import City from "./pages/2016/City";
import {default as Objects2016} from "./pages/2016/Objects";
// 2016
import Howler from "./pages/2017/Howler";
import {default as Objects2017} from "./pages/2017/Objects";
import AiryCube from "./pages/2017/AiryCube";

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
          <Route path="2015">
            <Route path="bubbles" element={<Bubbles />} />
            <Route path="wave" element={<Wave />} />
            <Route path="probabilistic-cellular-automata" element={<PCA />} />
            <Route path="explosion" element={<Explosion />} />
          </Route>
          <Route path="2016">
            <Route path="objects" element={<Objects2016 />} />
            <Route path="city" element={<City />} />
          </Route>
          <Route path="2017">
            <Route path="howler" element={<Howler />} />
            <Route path="objects" element={<Objects2017 />} />
            <Route path="airy-cube" element={<AiryCube />} />
          </Route>
          <Route path="/*" element={<WIP />} />
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default Routing;