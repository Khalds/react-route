import React from "react"
import { Routes, Route, Link, useLocation } from "react-router-dom"

import { Homepage } from "./pages/Home/Home"
import { Features } from "./pages/Features/Features"
import { Contact } from "./pages/Contact/Contact"
import { Notfound } from "./pages/Notfound/Notfound"

import "./App.css"

function App() {
  const location = useLocation()

  return (
    <div className="wrapper">
      <header>
        <div className="logo">
          <Link to="/">Cover</Link>
        </div>
        <nav>
          <ul>
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/">Home</Link>
            </li>
            <li className={location.pathname === "/feature" ? "active" : ""}>
              <Link to="/feature">Features</Link>
            </li>
            <li className={location.pathname === "/contact" ? "active" : ""}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/feature" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
      <footer>
        <p>Cover template for Bootstrap, by @mdo.</p>
      </footer>
    </div>
  )
}

export default App
