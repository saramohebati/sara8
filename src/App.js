import React from "react";
import Home from "./component/Home";
import Truffles from "./component/Truffles";
import Crepes from "./component/Crepes";
import Cookies from "./component/Cookies"

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <header>
        <div >

          <h1 className="title">Dessert </h1>
          <div className="header">
            <div><Link to="/">Home</Link></div>
            <div><Link to="/Truffles">Truffles</Link></div>
            <div><Link to="/Crepes">Crepes</Link></div>
            <div><Link to="/Cookies">Cookies</Link></div>
          </div>

        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Truffles" element={<Truffles />} />
        <Route path="/Crepes" element={<Crepes />} />
        <Route path="/Cookies" element={<Cookies />} />

      </Routes>

      <footer>Have Good Day.</footer>

    </Router>
  );
}

export default App;
