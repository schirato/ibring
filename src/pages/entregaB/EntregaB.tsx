import React from "react";
import icoMenu from "../../images/ico-menu-white.svg";
import icoMenuMoto from "../../images/ico-menu-scooter.svg";
import icoMenuCarro from "../../images/ico-menu-car.svg";
import icoMenuChevron from "../../images/ico-chevron-down.svg";
import icoMais from "../../images/ico-plus.svg";
import icoEdit from "../../images/ico-edit.svg";
import "./EntregaB.scss";

const EntregaB = () => {
  return (
    <section id="ibring-entregaB" className="secaoEntregaB">
      <header id="ibring-entregaB-header" className="secaoEntregaB__header">
        <div className="secaoEntregaB__header__top">
          <img
            src={icoMenu}
            className="secaoEntregaB__header__top__ico"
            alt="icone menu"
          />
          <h5 className="secaoEntregaB__header__top__titulo">Novo pedido</h5>
        </div>
        <div className="secaoEntregaB__header__dropdown">
          <button className="secaoEntregaB__header__dropdown__btn">
            <img
              src={icoMenuMoto}
              className="secaoEntregaB__header__dropdown__btn__ico"
              alt="icone menu moto"
            />
            Entrega de moto
            <img
              src={icoMenuChevron}
              className="secaoEntregaB__header__dropdown__btn__arrow"
              alt="icone menu chevron"
            />
          </button>
          <div className="secaoEntregaB__header__dropdown__content">
            <div className="secaoEntregaB__header__dropdown__content__divisor">
              &nbsp;
            </div>
            <div className="secaoEntregaB__header__dropdown__content__item">
              <img
                src={icoMenuCarro}
                className="secaoEntregaB__header__dropdown__btn__ico"
                alt="icone menu carro"
              />
              Entrega de carro
            </div>
          </div>
        </div>
      </header>
      <div className="secaoEntregaB__content">
        <div className="secaoEntregaB__content__trajeto">
          <div className="secaoEntregaB__content__trajeto__item secaoEntregaB__content__trajeto__item--first">
            <span className="secaoEntregaB__content__trajeto__item__posicao secaoEntregaB__content__trajeto__item__posicao--disabled">
              A
            </span>
            <p className="secaoEntregaB__content__trajeto__item__vector">
              <span className="secaoEntregaB__content__trajeto__item__vector__bullet secaoEntregaB__content__trajeto__item__vector__bullet--disabled">
                &nbsp;
              </span>
              <span className="secaoEntregaB__content__trajeto__item__vector__line">
                &nbsp;
              </span>
            </p>
            <p className="secaoEntregaB__content__trajeto__item__texto">
              Avenida das Américas, 4200 Barra da Tijuca, Rio de Janeiro, 213452
              Brasil
            </p>
            <img
              src={icoEdit}
              className="secaoEntregaB__content__trajeto__item__ico"
              alt="icone edit"
            />
          </div>
          <div className="secaoEntregaB__content__trajeto__item">
            <span className="secaoEntregaB__content__trajeto__item__posicao">
              B
            </span>
            <p className="secaoEntregaB__content__trajeto__item__vector">
              <span className="secaoEntregaB__content__trajeto__item__vector__bullet">
                &nbsp;
              </span>
              <span className="secaoEntregaB__content__trajeto__item__vector__line">
                &nbsp;
              </span>
            </p>
            <p className="secaoEntregaB__content__trajeto__item__texto secaoEntregaB__content__trajeto__item__texto__novoDestino">
              Adicione o próximo destino
            </p>
            <img
              src={icoMais}
              className="secaoEntregaB__content__trajeto__item__ico"
              alt="icone edit"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntregaB;
