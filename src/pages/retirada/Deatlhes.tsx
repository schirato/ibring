import React from "react";
import clsx from "clsx";
import { Input, Textarea } from "../../shared/components";
import icoVoltar from "../../images/ico-arrow-back-white.svg";
import "./Detalhe.scss";

const Detalhe = () => {
  const [sucesso, setSucesso] = React.useState(false);
  return (
    <section id="ibring-detalhe" className="secaoDetalhe">
      <header id="ibring-detalhe-header" className="secaoDetalhe__header">
        <div className="secaoDetalhe__header__top">
          <img
            src={icoVoltar}
            className="secaoDetalhe__header__top__ico"
            alt="icone menu"
          />
          <h5 className="secaoDetalhe__header__top__titulo">Detalhes</h5>
        </div>
        <div className="secaoDetalhe__header__endereco">
          <p className="secaoDetalhe__header__endereco__texto">
            Avenida das Américas, Barra da Tijuca, RJ
          </p>
        </div>
      </header>
      <div className="secaoDetalhe__content">
        <Input
          type="text"
          label="Identificação"
          placeholder="Quem o entregador deve procurar?"
          showError
          errorMensage="Insira um nome"
        />
        <Input
          type="text"
          label="Contato"
          placeholder="(xx) xxxxx-xxxx"
          showError
          errorMensage="Insira um número de telefone válido!"
        />
        <Textarea
          label="Instruções"
          placeholder="Informações que podem ajudar o entregador! Escreva a vontade!"
          rows={5}
        />
        <button
          type="button"
          className={clsx(
            "btn btn-primary secaoDetalhe__content__buttonPrimary",
            {
              "secaoDetalhe__content__buttonPrimary--disabled": !sucesso
            }
          )}
        >
          Concluir
        </button>
      </div>
    </section>
  );
};

export default Detalhe;
