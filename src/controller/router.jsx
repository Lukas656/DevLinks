import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../view/Home/Home.jsx";
import NotFound from "../view/Not-Found/NotFound.jsx";

const Content = () => (
  <main className="Content">
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </main>
);

export default Content;
