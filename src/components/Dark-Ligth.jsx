import React, { useState, useEffect } from "react";
import { LuSun } from "react-icons/lu";
import { BsMoonStars } from "react-icons/bs";
import '../view/Home/home.css';

const DarkLight = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
     if (isDarkMode) {
       document.body.classList.add("mode-dark");
       document.body.classList.remove("mode-light");
     } else {
       document.body.classList.add("mode-light");
       document.body.classList.remove("mode-dark");
     }
   }, [isDarkMode]);

  return (
    <div className="select-mode">
      <button onClick={toggleMode}>
        {isDarkMode ? <BsMoonStars /> : <LuSun />}
      </button>
    </div>
  );
}

export default DarkLight;
