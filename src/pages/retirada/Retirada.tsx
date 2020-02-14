import React from "react";
import { Input } from "../../shared/components";
import icoMenu from "../../images/ico-menu-white.svg";
import icoMenuMoto from "../../images/ico-menu-scooter.svg";
import icoMenuCarro from "../../images/ico-menu-car.svg";
import icoMenuChevron from "../../images/ico-chevron-down.svg";
import icoChevronRight from "../../images/ico-chevron-right.svg";
import "./Retirada.scss";

const Retirada = () => {
  return (
    <section id="ibring-retirada" className="secaoRetirada">
      <header id="ibring-retirada-header" className="secaoRetirada__header">
        <div className="secaoRetirada__header__top">
          <img
            src={icoMenu}
            className="secaoRetirada__header__top__ico"
            alt="icone menu"
          />
          <h5 className="secaoRetirada__header__top__titulo">Novo pedido</h5>
        </div>
        <div className="secaoRetirada__header__dropdown">
          <button className="secaoRetirada__header__dropdown__btn">
            <img
              src={icoMenuMoto}
              className="secaoRetirada__header__dropdown__btn__ico"
              alt="icone menu moto"
            />
            Entrega de moto
            <img
              src={icoMenuChevron}
              className="secaoRetirada__header__dropdown__btn__arrow"
              alt="icone menu chevron"
            />
          </button>
          <div className="secaoRetirada__header__dropdown__content">
            <div className="secaoRetirada__header__dropdown__content__divisor">
              &nbsp;
            </div>
            <div className="secaoRetirada__header__dropdown__content__item">
              <img
                src={icoMenuCarro}
                className="secaoRetirada__header__dropdown__btn__ico"
                alt="icone menu carro"
              />
              Entrega de carro
            </div>
          </div>
        </div>
      </header>
      <div className="secaoRetirada__content">
        <div className="secaoRetirada__content__pesquisa">
          <div className="secaoRetirada__content__pesquisa__endereco">
            <p className="secaoRetirada__content__pesquisa__endereco__posicao">
              <span className="secaoRetirada__content__pesquisa__endereco__posicao__texto">
                A
              </span>
            </p>
            <Input
              type="text"
              placeholder="onde será a retirada?"
              className="secaoRetirada__content__pesquisa__endereco__input"
            />
          </div>
          <div className="secaoRetirada__content__pesquisa__complemento">
            <Input
              type="text"
              placeholder="complemento"
              classInputField="secaoRetirada__content__pesquisa__complemento__inputComplemento"
              showError
              errorMensage="Insira um número"
            />
            <p className="secaoRetirada__content__pesquisa__complemento__btnAvancar">
              Avançar
              <img
                src={icoChevronRight}
                alt="icone chevron right"
                className="secaoRetirada__content__pesquisa__complemento__btnAvancar__ico"
              />
            </p>
          </div>
        </div>
        <div className="secaoRetirada__content__resultado">
          <div className="secaoRetirada__content__resultado__lista">
            <div className="secaoRetirada__content__resultado__lista__linha">
              <p className="secaoRetirada__content__resultado__lista__linha__texto">
                Avenida das Américas, Barra da Tijuca
              </p>
              <p className="secaoRetirada__content__resultado__lista__linha__subTexto">
                Rio de Janeiro, RJ
              </p>
            </div>
            <div className="secaoRetirada__content__resultado__lista__linha">
              <p className="secaoRetirada__content__resultado__lista__linha__texto">
                Avenida das Américas
              </p>
              <p className="secaoRetirada__content__resultado__lista__linha__subTexto">
                Contagem, MG
              </p>
            </div>
            <div className="secaoRetirada__content__resultado__lista__linha">
              <p className="secaoRetirada__content__resultado__lista__linha__texto">
                Avenida das Américas, Centro
              </p>
              <p className="secaoRetirada__content__resultado__lista__linha__subTexto">
                Betim, MG
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Retirada;
