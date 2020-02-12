import React from "react";
import clsx from "clsx";
import { HeaderPq, Input } from "../../shared/components";
import "./NovoCartao.scss";

const NovoCartao = () => {
  const [sucesso, setSucesso] = React.useState(false);

  return (
    <section id="ibring-novoCartao" className="secaoNovoCartao">
      <HeaderPq titulo="Novo Cartão" />
      <div className="secaoNovoCartao__content">
        <ul className="nav secaoNovoCartao__content__tabs">
          <li className="nav-item">
            <a className="nav-link active" href="/">
              Débito
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Crédito
            </a>
          </li>
        </ul>
        <form className="secaoNovoCartao__content__form">
          <Input label="Número do cartão" type="text" />
          <Input label="Número impresso no cartão" type="text" />
          <div className="secaoNovoCartao__content__form__group">
            <Input
              label="Data de validade"
              type="text"
              className="secaoNovoCartao__content__form__group__margin"
            />
            <Input label="CVV" type="text" />
          </div>
          <button
            type="button"
            className={clsx(
              "btn btn-primary secaoNovoCartao__content__buttonPrimary",
              {
                "secaoNovoCartao__content__buttonPrimary--disabled": !sucesso
              }
            )}
          >
            Adicionar
          </button>
        </form>
      </div>
    </section>
  );
};

export default NovoCartao;
