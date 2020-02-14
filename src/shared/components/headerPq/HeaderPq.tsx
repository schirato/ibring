import React from "react";
import icoVoltar from "../../../images/ico-arrow-back-white.svg";
import "./HeaderPq.scss";

interface Props {
  titulo: string;
}

export const HeaderPq: React.FC<Props> = ({ titulo }) => {
  return (
    <section id="ibring-headerPq" className="secaoHeaderPq">
      <img src={icoVoltar} className="secaoHeaderPq__ico" alt="icone" />
      <h4 className="secaoHeaderPq__titulo">{titulo}</h4>
    </section>
  );
};
