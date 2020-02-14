import React from "react";
import icoMenu from "../../images/ico-menu-white.svg";
import icoMastercard from "../../images/ico-mastercard.svg";
import "./Concluido.scss";

const Concluido = () => {
  return (
    <section id="ibring-concluido" className="secaoConcluido">
      <header id="ibring-header" className="secaoConcluido__header">
        <img
          src={icoMenu}
          className="secaoConcluido__header__ico"
          alt="icone"
        />
        <h4 className="secaoConcluido__header__titulo">Pedido concluido</h4>
      </header>
      <div className="secaoConcluido__content">
        <div className="secaoConcluido__content__trajeto">
          <div className="secaoConcluido__content__trajeto__item secaoConcluido__content__trajeto__item--first">
            <p className="secaoConcluido__content__trajeto__item__vector">
              <span className="secaoConcluido__content__trajeto__item__vector__bullet">
                &nbsp;
              </span>
              <span className="secaoConcluido__content__trajeto__item__vector__line">
                &nbsp;
              </span>
            </p>
            <p className="secaoConcluido__content__trajeto__item__texto">
              Avenida das Américas, 4200 Barra da Tijuca, Rio de Janeiro, 213452
              Brasil
            </p>
          </div>
          <div className="secaoConcluido__content__trajeto__item">
            <p className="secaoConcluido__content__trajeto__item__vector">
              <span className="secaoConcluido__content__trajeto__item__vector__bullet">
                &nbsp;
              </span>
              <span className="secaoConcluido__content__trajeto__item__vector__line">
                &nbsp;
              </span>
            </p>
            <p className="secaoConcluido__content__trajeto__item__texto">
              Avenida das Américas, 500 Barra da Tijuca, Rio de Janeiro,
              Shopping Downtown
            </p>
          </div>
        </div>
        <div className="secaoConcluido__content__map">
          <p className="secaoConcluido__content__map__circle secaoConcluido__content__map__posicaoA">
            <span className="secaoConcluido__content__map__circle--small">
              &nbsp;
            </span>
            <span className="secaoConcluido__content__map__circle__texto">
              A
            </span>
          </p>
          <p className="secaoConcluido__content__map__circle secaoConcluido__content__map__posicaoB">
            <span className="secaoConcluido__content__map__circle--small">
              &nbsp;
            </span>
            <span className="secaoConcluido__content__map__circle__texto">
              B
            </span>
          </p>
          <p className="secaoConcluido__content__map__line">&nbsp;</p>
        </div>
        <div className="secaoConcluido__content__rodape">
          <div className="secaoConcluido__content__rodape__linha">
            <div className="secaoConcluido__content__rodape__linha__dados">
              <div className="secaoConcluido__content__rodape__linha__dados__entrega">
                <p className="secaoConcluido__content__rodape__linha__dados__titulo">
                  Entrega realizada no
                </p>
                <p className="secaoConcluido__content__rodape__linha__dados__valor">
                  dia 20/01/2020
                </p>
              </div>
              <div className="secaoConcluido__content__rodape__linha__dados__duracao">
                <p className="secaoConcluido__content__rodape__linha__dados__titulo">
                  Duração
                </p>
                <p className="secaoConcluido__content__rodape__linha__dados__valor">
                  14min
                </p>
              </div>
            </div>
          </div>
          <div className="secaoConcluido__content__rodape__linha">
            <div className="secaoConcluido__content__rodape__linha__dados">
              <div className="secaoConcluido__content__rodape__linha__dados__valorPago">
                <p className="secaoConcluido__content__rodape__linha__dados__valorPago__texto">
                  R$ 15,00
                </p>
              </div>
              <div className="secaoConcluido__content__rodape__linha__dados__tipoPagamento">
                <p className="secaoConcluido__content__rodape__linha__dados__tipoPagamento__metodo">
                  <img
                    src={icoMastercard}
                    alt="forma pagamento"
                    className="secaoConcluido__content__rodape__linha__dados__tipoPagamento__metodo__ico"
                  />
                  <span className="secaoConcluido__content__rodape__linha__dados__tipoPagamento__metodo__texto">
                    **** 8295
                  </span>
                </p>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-outline-primary secaoConcluido__content__rodape__buttonPrimary"
          >
            Fazer Cadastro
          </button>
        </div>
      </div>
    </section>
  );
};

export default Concluido;
