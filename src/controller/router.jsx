import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../view/Home/Home.jsx";
import Galeria from "../components/Galeria-Projetos.jsx";
import NotFound from "../view/Not-Found/NotFound.jsx";

const Content = () => (
  <main className="Content">
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/projetos" exact element={<Galeria />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </main>
);

export default Content;
