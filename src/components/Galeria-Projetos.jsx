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
          <img src="https://i.ibb.co/DkyqZ9Y/Captura-de-tela-2024-02-18-225551.png" alt="KNTEC" width={'100%'}/>
          <h3>KNTEC</h3>
          <p className="text-galeria">A era digital transformou radicalmente a maneira como empresas operam e prosperam no mercado atual. Nesse contexto, a KNTEC emerge como uma parceira estratégica essencial para empresas que buscam maximizar seu potencial financeiro e tecnológico.</p>
          <Link to='https://kntec.netlify.app/'>Navegar para o Projeto</Link>
        </div>
        <div className="card">
          <img src="https://i.ibb.co/MnDCt6T/Captura-de-tela-2024-03-27-212944.png" alt="SKY Front-End" width={'100%'}/>
          <h3>SKY Front-End</h3>
          <p className="text-galeria">Projeto Criado para entrevista de Estágio SKY , projeto ultliza react, e dsigner de Imagens feitas por IA </p>
          <Link to='https://sky-front-end.netlify.app/'>Navegar para o Projeto</Link>
        </div>
        <div className="card">
          <img src="https://i.ibb.co/q1NjHtH/Captura-de-tela-2024-03-28-123129.png" alt="Arena Game" width={'100%'}/>
          <h3>Arena Game</h3>
          <p className="text-galeria">Projeto criado para reunir meus personagens favoritos dos jogos em um select-game onde voce pode ver a imagem e descrição deles, usei React, Ia de Criação e Animação de Imagens.</p>
          <Link to='https://arenagame.netlify.app/'>Navegar para o Projeto</Link>
        </div>
        <div className="card">
          <img src="https://i.ibb.co/23KnydG/Captura-de-tela-2024-02-18-224226.png" alt="Hairdresser" width={'100%'}/>
          <h3>Hairdresser</h3>
          <p className="text-galeria">Um projoto de Eccomerce para um Salão de Cabeleleiro/Barbearia. Usei a tematica de Estilo Black-Afro. </p>
          <Link to='https://dulcet-pudding-eff3a0.netlify.app/'>Navegar para o Projeto</Link>
        </div>
        <div className="card">
          <img src="https://i.ibb.co/0mrcn39/Captura-de-tela-2024-02-18-225300.png" alt="Fundamentos REACT" width={'100%'}/>
          <h3>Fundamentos REACT</h3>
          <p className="text-galeria">Projeto criadoo em um curso da Udemy de React.js aqui temos os fundamentos basicos de React. </p>
          <Link to='https://dulcet-pudding-eff3a0.netlify.app/'>Navegar para o Projeto</Link>
        </div>
        <div className="card">
          <img src="https://i.ibb.co/BsVwQyj/Captura-de-tela-2024-02-18-232223.png" alt="Calculadora REACT" width={'100%'}/>
          <h3>Calc REACT</h3>
          <p className="text-galeria">Projeto de Calculadora feita Com React.js no Curso de React da Udemy</p>
          <Link to='https://delicate-youtiao-2ae17e.netlify.app/'>Navegar para o Projeto</Link>
        </div>
        <div className="card">
          <img src="https://i.ibb.co/RvRw8Sj/Captura-de-tela-2024-02-18-233422.png" alt="Galeria Fhotos" width={'100%'}/>
          <h3>Galeria de Fotos</h3>
          <p className="text-galeria">Projeto Portifolio de Um Fotógrafo(a) com uma galeria separada em topicos das melhores fotografias dividindo-as em sessões. Feito em React.js</p>
          <Link to='https://comforting-sorbet-4bc302.netlify.app/'>Navegar para o Projeto</Link>
        </div>
        <div className="card">
          <img src="https://i.ibb.co/nDGSfT7/Batman.png" alt="The Batman" width={'100%'}/>
          <h3>The Batman</h3>
          <p className="text-galeria">Projeto nascido de um desafio entre amigos de uma apresentação de um filme, no ano estava estreando o filme The Batman então tive a ideia de Criar essa page de apresentação, com link para o site de ingressos para o Cinema. </p>
          <Link to='https://capable-kitsune-d9ee44.netlify.app/'>Navegar para o Projeto</Link>
        </div>
    </section>
    </>
  );
}

export default Galeria;
