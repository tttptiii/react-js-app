import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import logo from './logo.svg';
import './css/App.css';

import { Side } from "./components/Side";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Side></Side>
        <Routes>
          <Route path="/about" exact component={App} />
          <Route path="/a" component={App} />
          <Route path="/b" component={App} />
        </Routes>
      </BrowserRouter>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          --- UNDER CONSTRUCTION! ---
        </p>
      </header>
    </div>
  );
}

export default App;
