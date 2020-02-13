import React from "react";
import clsx from "clsx";
import icoMenu from "../../images/ico-menu-white.svg";
import icoMenuMoto from "../../images/ico-menu-scooter.svg";
import icoMenuCarro from "../../images/ico-menu-car.svg";
import icoMenuChevron from "../../images/ico-chevron-down.svg";
import icoChevron from "../../images/ico-chevron-right.svg";
import icoEdit from "../../images/ico-edit.svg";
import "./Resumo.scss";

const Resumo = () => {
  const [sucesso, setSucesso] = React.useState(false);
  return (
    <section id="ibring-resumo" className="secaoResumo">
      <header id="ibring-resumo-header" className="secaoResumo__header">
        <div className="secaoResumo__header__top">
          <img
            src={icoMenu}
            className="secaoResumo__header__top__ico"
            alt="icone menu"
          />
          <h5 className="secaoResumo__header__top__titulo">Novo pedido</h5>
        </div>
        <div className="secaoResumo__header__dropdown">
          <button className="secaoResumo__header__dropdown__btn">
            <img
              src={icoMenuMoto}
              className="secaoResumo__header__dropdown__btn__ico"
              alt="icone menu moto"
            />
            Entrega de moto
            <img
              src={icoMenuChevron}
              className="secaoResumo__header__dropdown__btn__arrow"
              alt="icone menu chevron"
            />
          </button>
          <div className="secaoResumo__header__dropdown__content">
            <div className="secaoResumo__header__dropdown__content__divisor">
              &nbsp;
            </div>
            <div className="secaoResumo__header__dropdown__content__item">
              <img
                src={icoMenuCarro}
                className="secaoResumo__header__dropdown__btn__ico"
                alt="icone menu carro"
              />
              Entrega de carro
            </div>
          </div>
        </div>
      </header>
      <div className="secaoResumo__content">
        <div className="secaoResumo__content__trajeto">
          <div className="secaoResumo__content__trajeto__item secaoResumo__content__trajeto__item--first">
            <p className="secaoResumo__content__trajeto__item__vector">
              <span className="secaoResumo__content__trajeto__item__vector__bullet">
                &nbsp;
              </span>
              <span className="secaoResumo__content__trajeto__item__vector__line">
                &nbsp;
              </span>
            </p>
            <p className="secaoResumo__content__trajeto__item__texto">
              Avenida das Américas, 4200 Barra da Tijuca, Rio de Janeiro, 213452
              Brasil
            </p>
            <img
              src={icoEdit}
              className="secaoResumo__content__trajeto__item__ico"
              alt="icone edit"
            />
          </div>
          <div className="secaoResumo__content__trajeto__item">
            <p className="secaoResumo__content__trajeto__item__vector">
              <span className="secaoResumo__content__trajeto__item__vector__bullet">
                &nbsp;
              </span>
              <span className="secaoResumo__content__trajeto__item__vector__line">
                &nbsp;
              </span>
            </p>
            <p className="secaoResumo__content__trajeto__item__texto">
              Avenida das Américas, 500 Barra da Tijuca, Rio de Janeiro,
              Shopping Downtown
            </p>
            <img
              src={icoEdit}
              className="secaoResumo__content__trajeto__item__ico"
              alt="icone edit"
            />
          </div>
          <div className="secaoResumo__content__trajeto__btn">
            <button
              type="button"
              className="btn btn-outline-primary secaoResumo__content__trajeto__btn__buttonSecondary"
            >
              Adicionar retorno
            </button>
            <button
              type="button"
              className="btn btn-outline-primary secaoResumo__content__trajeto__btn__buttonSecondary"
            >
              Adicionar endereço
            </button>
          </div>
        </div>
        <div className="secaoResumo__content__map">
          <p className="secaoResumo__content__map__circle secaoResumo__content__map__posicaoA">
            <span className="secaoResumo__content__map__circle--small">
              &nbsp;
            </span>
            <span className="secaoResumo__content__map__circle__texto">A</span>
          </p>
          <p className="secaoResumo__content__map__circle secaoResumo__content__map__posicaoB">
            <span className="secaoResumo__content__map__circle--small">
              &nbsp;
            </span>
            <span className="secaoResumo__content__map__circle__texto">B</span>
          </p>
          <p className="secaoResumo__content__map__line">&nbsp;</p>
        </div>
        <div className="secaoResumo__content__valores">
          <div className="secaoResumo__content__valores__linha">
            <p className="secaoResumo__content__valores__linha__valor">
              R$ 15,00
            </p>
            <div className="secaoResumo__content__valores__linha__group">
              <span className="secaoResumo__content__valores__linha__group__texto">
                Corrida
              </span>
              <img
                src={icoChevron}
                alt="icone chevron"
                className="secaoResumo__content__valores__linha__group__ico"
              />
            </div>
          </div>
          <div className="secaoResumo__content__valores__linha">
            <p className="secaoResumo__content__valores__linha__valor">
              R$ 10,00
            </p>
            <div className="secaoResumo__content__valores__linha__group">
              <span className="secaoResumo__content__valores__linha__group__texto">
                Seguro
              </span>
              <img
                src={icoChevron}
                alt="icone chevron"
                className="secaoResumo__content__valores__linha__group__ico"
              />
            </div>
          </div>
          <div className="secaoResumo__content__valores__linha">
            <p className="secaoResumo__content__valores__linha__valor secaoResumo__content__valores__linha__valor--negrito">
              R$ 25,00
            </p>
            <div className="secaoResumo__content__valores__linha__group">
              <span className="secaoResumo__content__valores__linha__group__texto">
                Pagamento
              </span>
              <img
                src={icoChevron}
                alt="icone chevron"
                className="secaoResumo__content__valores__linha__group__ico"
              />
            </div>
          </div>
          <button
            type="button"
            className={clsx(
              "btn btn-primary secaoResumo__content__valores__buttonPrimary",
              {
                "secaoResumo__content__valores__buttonPrimary--disabled": !sucesso
              }
            )}
          >
            Cadastrar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resumo;
