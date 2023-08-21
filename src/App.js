import React, { useState } from "react";

// React Routers
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Add from "./pages/Add";
import Delete from "./pages/Delete";
import Details from "./pages/Details";

import NavBar from "./components/NavBar";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/pets/:id" element={<Details />} />
          <Route path="/delete" element={<Delete />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
