import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo-ibring.svg";
import "./App.scss";

const App = () => {
  return (
    <section id="ibring-app" className="secaoApp">
      <img src={logo} className="secaoApp__logo" alt="logo" />
      <div className="secaoApp__nota">
        <p className="secaoApp__nota__texto">
          <span>*</span> Os layouts podem estar com estilos quebrados por causa
          do bootstrap que esta sendo carregado em todas as páginas/folhas de
          estilo da aplicação.
        </p>
        <p className="secaoApp__nota__texto">
          Não consegui fazer com que ele fosse carregado uma única vez na
          aplicação toda, acredito que com seu conhecimento e, se for utilizar,
          o react consiga deixa-lo carregando uma única vez globalmente, não
          necessitando que seja chamado inúmeras vezes.
        </p>
        <p className="secaoApp__nota__texto">
          <span>**</span> quando conseguir resolver o problema de carregar o
          bootstrap uma única vez na aplicação, remover os{" "}
          <span>!important</span> das folhas de estilo.
        </p>
      </div>
      <Link to="/sumario" className="secaoApp__link">
        Sumário de páginas
      </Link>
    </section>
  );
};

export default App;
