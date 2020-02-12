import React from "react";
import { HeaderPq } from "../../shared/components";
import icoMastercard from "../../images/ico-mastercard.svg";
import icoVisa from "../../images/ico-visa.svg";
import icoDinheiro from "../../images/ico-money.svg";
import icoMais from "../../images/ico-plus.svg";
import icoChevron from "../../images/ico-chevron-right.svg";
import "./Pagamento.scss";

const Pagamento = () => {
  return (
    <section id="ibring-pagamento" className="secaoPagamento">
      <HeaderPq titulo="Pagamento" />
      <div className="secaoPagamento__content">
        <div className="secaoPagamento__content__card secaoPagamento__content__card--mastercard">
          <img
            src={icoMastercard}
            className="secaoPagamento__content__card__ico"
            alt="icone mastercard"
          />
          <p className="secaoPagamento__content__card__titulo">**** 8295</p>
          <img
            src={icoChevron}
            className="secaoPagamento__content__card__icoAction"
            alt="icone chevron right"
          />
        </div>
        <div className="secaoPagamento__content__card secaoPagamento__content__card--visa">
          <img
            src={icoVisa}
            className="secaoPagamento__content__card__ico"
            alt="icone visa"
          />
          <p className="secaoPagamento__content__card__titulo">**** 3704</p>
          <img
            src={icoChevron}
            className="secaoPagamento__content__card__icoAction"
            alt="icone chevron right"
          />
        </div>
        <div className="secaoPagamento__content__card secaoPagamento__content__card--dinheiro">
          <img
            src={icoDinheiro}
            className="secaoPagamento__content__card__ico"
            alt="icone dinheiro"
          />
          <p className="secaoPagamento__content__card__titulo">Dinheiro</p>
        </div>
        <div className="secaoPagamento__content__card secaoPagamento__content__card--novFormaPagamento">
          <img
            src={icoMais}
            className="secaoPagamento__content__card__ico"
            alt="icone mais"
          />
          <p className="secaoPagamento__content__card__titulo secaoPagamento__content__card__titulo--negrito">
            Nova Forma de Pagamento
          </p>
          <img
            src={icoChevron}
            className="secaoPagamento__content__card__icoAction"
            alt="icone chevron right"
          />
        </div>
      </div>
    </section>
  );
};

export default Pagamento;
