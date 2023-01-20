import React, { useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <section className="top-nav">
        <input
          id="menu-toggle"
          type="checkbox"
          checked={menuOpen}
          onChange={() => setMenuOpen(!menuOpen)}
        />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul className={`mx-auto menu ${menuOpen ? "open" : ""}`}>
          <li>One</li>
          <li>Two</li>
          <li>Two</li>

          <img
            src="https://i.ibb.co/KyNJpVV/Valley-Emporium-logo.png"
            alt="logo"
            className="logo"
          />

          <li>Three</li>
          <li>Four</li>
          <li>Five</li>
        </ul>
      </section>
    </>
  );
}

export default Navbar;
