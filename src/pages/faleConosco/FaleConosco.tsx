import React from "react";
import { HeaderPq } from "../../shared/components";
import icoTel from "../../images/ico-phone.svg";
import icoEmail from "../../images/ico-email.svg";
import "./FaleConosco.scss";

const FaleConosco = () => {
  return (
    <section id="ibring-faleConosco" className="secaoFaleConosco">
      <HeaderPq titulo="Fale conosco" />
      <div className="secaoFaleConosco__content">
        <div className="secaoFaleConosco__content__label">
          <img
            src={icoTel}
            className="secaoFaleConosco__content__label__ico"
            alt="icone telefone"
          />
          <h5 className="secaoFaleConosco__content__label__texto">Telefone</h5>
        </div>
        <p className="secaoFaleConosco__content__info">(21) 99992-6507</p>
        <div className="secaoFaleConosco__content__label">
          <img
            src={icoEmail}
            className="secaoFaleConosco__content__label__ico"
            alt="icone email"
          />
          <h5 className="secaoFaleConosco__content__label__texto">E-mail</h5>
        </div>
        <p className="secaoFaleConosco__content__info">contato@ibring.com.br</p>
      </div>
    </section>
  );
};

export default FaleConosco;
