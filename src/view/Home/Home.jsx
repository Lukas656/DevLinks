import React, { useState } from "react";
import "./home.css";
import { AiOutlineGithub } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import { BsMoonStars } from "react-icons/bs";
import { Link } from "react-router-dom";
let avatar = 'https://i.ibb.co/SP666Gk/perfil3.jpg';

const Home = () => { 
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className={isDarkMode ? "home-dark" : "home-light"}>
        <section className="section-home">
            <img src={avatar} alt="avatar" id="avatar"/>
            <p>@lucasSantos</p>
            <div className="select-mode">
          <button onClick={toggleMode}>
            {isDarkMode ? <BsMoonStars /> : <LuSun />}
          </button>
        </div>
            <div className="btns-links">
              <div>
             <Link to="/projetos">Projetos</Link>
              <Link to="/">Linkedin</Link>
              <Link to="/">GitHub</Link>
              <Link to="/">Intagram</Link>
              </div>
            </div>
            <div className="incons">
            <FaLinkedin />
            <AiOutlineGithub />
            <FiInstagram />
            </div>

            
            <span className="span-home">Desafio da <a href="https://app.rocketseat.com.br/">Roketseat</a> Feito com <FaHeart /> por Lucas Santos</span>
        </section>
    </div>
  );
}

export default Home;
