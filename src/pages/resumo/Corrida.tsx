import React from "react";
import { HeaderPq } from "../../shared/components";
import icoMoto from "../../images/ico-scooter.svg";
import icoBau from "../../images/img-bau.svg";
import "./Corrida.scss";

const Corrida = () => {
  return (
    <section id="ibring-corrida" className="secaoCorrida">
      <HeaderPq titulo="Corrida" />
      <div className="secaoCorrida__content">
        <h5>Especificações</h5>
        <div className="secaoCorrida__content__infoEntrega">
          <div className="secaoCorrida__content__infoEntrega__distancia">
            <p className="secaoCorrida__content__infoEntrega__texto">
              Distância
            </p>
            <p className="secaoCorrida__content__infoEntrega__valor">7km</p>
          </div>
          <div className="secaoCorrida__content__infoEntrega__entrega">
            <p className="secaoCorrida__content__infoEntrega__texto">
              Entrega em
            </p>
            <p className="secaoCorrida__content__infoEntrega__valor secaoCorrida__content__infoEntrega__valor--alignRight">
              14 min
            </p>
          </div>
        </div>
        <div className="secaoCorrida__content__tipoEntrega">
          <img
            src={icoMoto}
            alt="icone moto"
            className="secaoCorrida__content__tipoEntrega__ico"
          />
          <p className="secaoCorrida__content__tipoEntrega__texto">
            Entrega de moto
          </p>
        </div>
        <div className="secaoCorrida__content__especificacao">
          <div className="secaoCorrida__content__especificacao__tamanho">
            <p className="secaoCorrida__content__especificacao__tamanho__titulo">
              Tamanho do baú
            </p>
            <p className="secaoCorrida__content__especificacao__tamanho__texto">
              Comprimento: 42cm
            </p>
            <p className="secaoCorrida__content__especificacao__tamanho__texto">
              Largura: 44cm
            </p>
            <p className="secaoCorrida__content__especificacao__tamanho__texto">
              Altura: 32cm
            </p>
            <p className="secaoCorrida__content__especificacao__tamanho__texto">
              Peso máximo: 20kg
            </p>
          </div>
          <div className="secaoCorrida__content__especificacao__imagem">
            <img
              src={icoBau}
              alt="icone bau"
              className="secaoCorrida__content__especificacao__tamanho__ico"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Corrida;
