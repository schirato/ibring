import React from "react";
import icoMenu from "../../images/ico-menu-white.svg";
import "./Acompanhamento.scss";

const Acompanhamento = () => {
  return (
    <section id="ibring-acompanhamento" className="secaoAcompanhamento">
      <header id="ibring-header" className="secaoAcompanhamento__header">
        <img
          src={icoMenu}
          className="secaoAcompanhamento__header__ico"
          alt="icone"
        />
        <h4 className="secaoAcompanhamento__header__titulo">
          Pedido em andamento
        </h4>
      </header>
      <div className="secaoAcompanhamento__content">
        <div className="secaoAcompanhamento__content__trajeto">
          <div className="secaoAcompanhamento__content__trajeto__item secaoAcompanhamento__content__trajeto__item--first">
            <p className="secaoAcompanhamento__content__trajeto__item__vector">
              <span className="secaoAcompanhamento__content__trajeto__item__vector__bullet">
                &nbsp;
              </span>
              <span className="secaoAcompanhamento__content__trajeto__item__vector__line">
                &nbsp;
              </span>
            </p>
            <p className="secaoAcompanhamento__content__trajeto__item__texto">
              Avenida das Américas, 4200 Barra da Tijuca, Rio de Janeiro, 213452
              Brasil
            </p>
          </div>
          <div className="secaoAcompanhamento__content__trajeto__item">
            <p className="secaoAcompanhamento__content__trajeto__item__vector">
              <span className="secaoAcompanhamento__content__trajeto__item__vector__bullet">
                &nbsp;
              </span>
              <span className="secaoAcompanhamento__content__trajeto__item__vector__line">
                &nbsp;
              </span>
            </p>
            <p className="secaoAcompanhamento__content__trajeto__item__texto">
              Avenida das Américas, 500 Barra da Tijuca, Rio de Janeiro,
              Shopping Downtown
            </p>
          </div>
        </div>
        <div className="secaoAcompanhamento__content__rodape">
          <h5 className="secaoAcompanhamento__content__rodape__titulo">
            Estamos buscando entregadores perto de você...
          </h5>
          <div className="secaoAcompanhamento__content__rodape__botao">
            <button
              type="button"
              className="btn btn-outline-primary secaoAcompanhamento__content__rodape__botao__buttonSecondary"
            >
              Cancelar pedido
            </button>
            <button
              type="button"
              className="btn btn-primary secaoAcompanhamento__content__rodape__botao__buttonPrimary"
            >
              Ajuda
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Acompanhamento;
