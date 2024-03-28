import React from "react";
import Header from './layout/Header';
import { Link } from "react-router-dom";
import './CSS/galeria.css';

const  Galeria = () => {
  return (
    <>
    <Header/>
    <h1 className="h1-galeria">Galeria de Todos os Meus Projetos em Produção.</h1>
    <section className="section-galeria">
        <div className="card">
          <img src="https://i.ibb.co/SKs979h/Captura-de-tela-2024-03-06-113909.png" alt="Pokedex" width={'100%'}/>
          <h3>Pokedex (Jogo da Memória)</h3>
          <p className="text-galeria">Neste Projeto vou apresentar a você este site totalmente funcional e responsivo tanto a Celular quento a computadores, criado com React.js e Consumindo os dados da PokéAPI.</p>
          <Link to='https://pokengame.netlify.app/'>Navegar para o Projeto</Link>
        </div>
        <div className="card">
          <img src="https://i.ibb.co/DkyqZ9Y/Captura-de-tela-2024-02-18-225551.png" alt="Pokedex" width={'100%'}/>
          <h3>KNTEC</h3>
          <p className="text-galeria">A era digital transformou radicalmente a maneira como empresas operam e prosperam no mercado atual. Nesse contexto, a KNTEC emerge como uma parceira estratégica essencial para empresas que buscam maximizar seu potencial financeiro e tecnológico.</p>
          <Link to='https://kntec.netlify.app/'>Navegar para o Projeto</Link>
        </div>
        <div className="card">
          <img src="https://i.ibb.co/MnDCt6T/Captura-de-tela-2024-03-27-212944.png" alt="Pokedex" width={'100%'}/>
          <h3>SKY Front-End</h3>
          <p className="text-galeria">projeto </p>
          <Link to='https://sky-front-end.netlify.app/'>Navegar para o Projeto</Link>
        </div>
    </section>
    </>
  );
}

export default Galeria;
