import React from "react";
import clsx from "clsx";
import { HeaderPq, Input } from "../../shared/components";
import icoInfo from "../../images/ico-info.svg";
import "./Seguro.scss";

const Seguro = () => {
  const [isActive, setIsActive] = React.useState(false);
  const [isDisable, setIsDisable] = React.useState(false);

  const disableContent = () => {
    setIsActive(false);
    setIsDisable(true);
  };

  const activeContent = () => {
    setIsActive(true);
    setIsDisable(false);
  };

  return (
    <section id="ibring-seguro" className="secaoSeguro">
      <HeaderPq titulo="Contratar seguro" />
      <div className="secaoSeguro__content">
        <h5 className="secaoSeguro__content__titulo">
          Deseja contratar o seguro?
        </h5>
        <div className="secaoSeguro__content__radioGroup">
          <input
            id="ibring-radio-contratar"
            type="radio"
            name="contratar"
            className="secaoSeguro__content__radioGroup__radio"
            onClick={activeContent}
          />
          <label
            htmlFor="ibring-radio-contratar"
            className="secaoSeguro__content__radioGroup__label"
          >
            Sim, desejo contratar o seguro para meu pacote.
          </label>
          <input
            id="ibring-radio-naoContratar"
            type="radio"
            name="contratar"
            className="secaoSeguro__content__radioGroup__radio"
            onClick={disableContent}
          />
          <label
            htmlFor="ibring-radio-naoContratar"
            className="secaoSeguro__content__radioGroup__label"
          >
            Não, não desejo contratar o seguro.
          </label>
        </div>
        <div className="secaoSeguro__content__info">
          <img
            src={icoInfo}
            className="secaoSeguro__content__info__ico"
            alt="icone info"
          />
          <p className="secaoSeguro__content__info__texto">
            O serviço prevê a indenização no montante declarado, proporcional ao
            dano do conteúdo mediante a apresentação da nota fiscal do item
            assegurado.
          </p>
        </div>
        <h5
          className={clsx("secaoSeguro__content__titulo", {
            "secaoSeguro__content__titulo--disabled": isDisable
          })}
        >
          Declarar valor
        </h5>
        <p
          className={clsx("secaoSeguro__content__subTitulo", {
            "secaoSeguro__content__subTitulo--disabled": isDisable
          })}
        >
          Declare o valor referente ao pacote para ser reembolsado em caso de
          danos.
        </p>
        <Input type="text" placeholder="R$" />
        <div
          className={clsx("secaoSeguro__content__valorSeguro", {
            "secaoSeguro__content__valorSeguro--active": isActive
          })}
        >
          <p className="secaoSeguro__content__valorSeguro__texto">
            Valor do seguro
          </p>
          <p className="secaoSeguro__content__valorSeguro__valor">R$</p>
        </div>
        <button
          type="button"
          className={clsx(
            "btn btn-primary secaoSeguro__content__buttonPrimary",
            {
              "secaoSeguro__content__buttonPrimary--disabled": !isActive
            }
          )}
        >
          Pronto
        </button>
      </div>
    </section>
  );
};

export default Seguro;
