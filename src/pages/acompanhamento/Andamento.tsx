import React from "react";
import icoMenu from "../../images/ico-menu-white.svg";
import icoAvatar from "../../images/img-avatar.svg";
import "./Andamento.scss";

const Andamento = () => {
  return (
    <section id="ibring-andamento" className="secaoAndamento">
      <header id="ibring-header" className="secaoAndamento__header">
        <img
          src={icoMenu}
          className="secaoAndamento__header__ico"
          alt="icone"
        />
        <h4 className="secaoAndamento__header__titulo">Pedido em andamento</h4>
      </header>
      <div className="secaoAndamento__content">
        <div className="secaoAndamento__content__trajeto">
          <div className="secaoAndamento__content__trajeto__item">
            <span className="secaoAndamento__content__trajeto__item__posicao">
              A
            </span>
            <p className="secaoAndamento__content__trajeto__item__texto">
              Avenida das Américas, 4200 Barra da Tijuca, Rio de Janeiro, 213452
              Brasil
            </p>
          </div>
        </div>
        <div className="secaoAndamento__content__rastreamento">
          <div className="secaoAndamento__content__rastreamento__dados">
            <img src={icoAvatar} alt="Avatar" />
            <div className="secaoAndamento__content__rastreamento__dados__info">
              <p className="secaoAndamento__content__rastreamento__dados__info__nome">
                Marcelo
              </p>
              <p className="secaoAndamento__content__rastreamento__dados__info__entrega">
                Entrega de moto
              </p>
            </div>
            <p className="secaoAndamento__content__rastreamento__dados__placa">
              LBS-4565
            </p>
          </div>
          <div className="secaoAndamento__content__rastreamento__botao">
            <button
              type="button"
              className="btn btn-outline-primary secaoAndamento__content__rastreamento__botao__buttonSecondary"
            >
              Contato
            </button>
            <button
              type="button"
              className="btn btn-primary secaoAndamento__content__rastreamento__botao__buttonPrimary"
            >
              Ajuda
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Andamento;
