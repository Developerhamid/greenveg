import React from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home"
import About from "./About"
import Service from "./Service"
import Contact from "./Contact"
import './App.css';
import './Response.css'

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="service" element={<Service />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
