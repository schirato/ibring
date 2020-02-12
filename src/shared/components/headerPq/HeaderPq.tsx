import React from "react";
import icoVoltar from "../../../images/ico-arrow-back-white.svg";
import "./HeaderPq.scss";

export const HeaderPq = () => {
  return (
    <section id="ibring-headerPq" className="secaoHeaderPq">
      <img src={icoVoltar} className="secaoHeaderPq__ico" alt="icone voltar" />
      <h4 className="secaoHeaderPq__titulo">Fale conosco</h4>
    </section>
  );
};
