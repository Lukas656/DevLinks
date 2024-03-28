import React from "react";
import DarkLight from "../../components/Dark-Ligth";
import "./home.css";
import { AiOutlineGithub } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
let avatar = 'https://github.com/Lukas656.png';

const Home = () => { 

  return (
    <div>
        <section className="section-home">
            <img src={avatar} alt="avatar" id="avatar"/>
            <p>@Lucas Santos Nascimento</p>
            <DarkLight/>
            <div className="btns-links">
              <div>
             <Link to="/projetos">Ver Meu Protifólio</Link>
              <Link to="https://www.linkedin.com/in/link-lucas-santos/">Linkedin</Link>
              <Link to="https://github.com/Lukas656">GitHub</Link>
              <Link to="https://www.instagram.com/lucas.santos.2002/">Intagram</Link>
              </div>
            </div>
            <div className="incons">
            <FaLinkedin />
            <AiOutlineGithub />
            <FiInstagram />
            </div>

            
            <span className="span-home">&copy;2024 Desafio da <a href="https://app.rocketseat.com.br/">Roketseat</a> Feito com <FaHeart /> por Lucas Santos</span>
        </section>
    </div>
  );
}

export default Home;
