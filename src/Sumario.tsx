import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo-ibring-pq.svg";
import icoVoltar from "./images/ico-arrow-back.svg";
import icoUrl from "./images/ico-url.svg";
import "./Sumario.scss";

const Sumario = () => {
  return (
    <section id="ibring-sumario" className="secaoSumario">
      <header className="secaoSumario__header">
        <Link to="/">
          <img src={icoVoltar} className="secaoSumario__logo" alt="logo" />
        </Link>
        <img src={logo} className="secaoSumario__logo" alt="logo" />
      </header>
      <div className="secaoSumario__content">
        <h2 className="secaoSumario__content__h2">
          Links para todas as páginas
        </h2>
        <Link to="/login" className="secaoSumario__content__link">
          <img
            src={icoUrl}
            className="secaoSumario__content__link__ico"
            alt="icone url"
          />
          Login
        </Link>
        <Link to="/cadastro" className="secaoSumario__content__link">
          <img
            src={icoUrl}
            className="secaoSumario__content__link__ico"
            alt="icone url"
          />{" "}
          Cadastro
        </Link>
        <Link to="/confirmacao" className="secaoSumario__content__link">
          <img
            src={icoUrl}
            className="secaoSumario__content__link__ico"
            alt="icone url"
          />{" "}
          Cadastro - Confirmação
        </Link>
        <Link to="/home" className="secaoSumario__content__link">
          <img
            src={icoUrl}
            className="secaoSumario__content__link__ico"
            alt="icone url"
          />{" "}
          Home
        </Link>
        <Link to="/faleconosco" className="secaoSumario__content__link">
          <img
            src={icoUrl}
            className="secaoSumario__content__link__ico"
            alt="icone url"
          />{" "}
          Home - Fale Conosco
        </Link>
        <Link to="/seguro" className="secaoSumario__content__link">
          <img
            src={icoUrl}
            className="secaoSumario__content__link__ico"
            alt="icone url"
          />{" "}
          Seguro
        </Link>
        <Link to="/pagamento" className="secaoSumario__content__link">
          <img
            src={icoUrl}
            className="secaoSumario__content__link__ico"
            alt="icone url"
          />{" "}
          Pagamento
        </Link>
        <Link to="/novocartao" className="secaoSumario__content__link">
          <img
            src={icoUrl}
            className="secaoSumario__content__link__ico"
            alt="icone url"
          />{" "}
          Pagamento - Novo Cartão
        </Link>
        <Link to="/resumo" className="secaoSumario__content__link">
          <img
            src={icoUrl}
            className="secaoSumario__content__link__ico"
            alt="icone url"
          />{" "}
          Resumo do Pedido
        </Link>
        <Link to="/corrida" className="secaoSumario__content__link">
          <img
            src={icoUrl}
            className="secaoSumario__content__link__ico"
            alt="icone url"
          />{" "}
          Resumo do Pedido - Corrida
        </Link>
        <Link to="/retirada" className="secaoSumario__content__link">
          <img
            src={icoUrl}
            className="secaoSumario__content__link__ico"
            alt="icone url"
          />{" "}
          Local de Retirada A
        </Link>
        <Link to="/detalhe" className="secaoSumario__content__link">
          <img
            src={icoUrl}
            className="secaoSumario__content__link__ico"
            alt="icone url"
          />{" "}
          Local de Retirada A - Detalhe
        </Link>
        <Link to="/entregab" className="secaoSumario__content__link">
          <img
            src={icoUrl}
            className="secaoSumario__content__link__ico"
            alt="icone url"
          />{" "}
          Local de Entrega B
        </Link>
        <Link to="/acompanhamento" className="secaoSumario__content__link">
          <img
            src={icoUrl}
            className="secaoSumario__content__link__ico"
            alt="icone url"
          />{" "}
          Acompanhamento do Pedido
        </Link>
        <Link to="/andamento" className="secaoSumario__content__link">
          <img
            src={icoUrl}
            className="secaoSumario__content__link__ico"
            alt="icone url"
          />{" "}
          Acompanhamento do Pedido - Andamento
        </Link>
        <Link to="/concluido" className="secaoSumario__content__link">
          <img
            src={icoUrl}
            className="secaoSumario__content__link__ico"
            alt="icone url"
          />{" "}
          Acompanhamento do Pedido - Concluido
        </Link>
      </div>
    </section>
  );
};

export default Sumario;
