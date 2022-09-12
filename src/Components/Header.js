import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [show, setShow] = useState(false);

  const Hide = () => {
    setShow(!show)
    setTimeout(() => {
      setShow(show)
    }, 2000);
  }

  return (
    <>
      <header>
        <nav className={show ? "navbar show-navbar" : "navbar"}>
          <div className="logo">
            <span>Green veg</span>
          </div>
          <ul className="list-ul">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/service">Services</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
        <div className="close-btn-box" onClick={() => Hide()}>
          <span className="close-lines"></span>
          <span className="close-lines"></span>
          <span className="close-lines"></span>
        </div>
      </header>
    </>
  );
};

export default Header;
