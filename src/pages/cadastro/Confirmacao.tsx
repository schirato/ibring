import React from "react";
import Header from "./Header";
import { Input } from "../../shared/components";
import "./Confirmacao.scss";

const Confirmacao = () => {
  return (
    <>
      <Header />
      <section id="ibring-confirmacao" className="secaoConfirmacao">
        <h5>Confirmação</h5>
        <p className="secaoConfirmacao__texto">
          Um código de confirmação foi enviado para o número{" "}
          <span>(xx) xxxxx-xxxx</span>.
        </p>
        <div className="secaoConfirmacao__fieldsGroup">
          <Input
            type="text"
            label=""
            className="secaoConfirmacao__fieldsGroup__espacoDireita"
            classInputField="secaoConfirmacao__fieldsGroup__field"
            maxLength={1}
          />
          <Input
            type="text"
            label=""
            className="secaoConfirmacao__fieldsGroup__espacoDireita"
            classInputField="secaoConfirmacao__fieldsGroup__field"
            maxLength={1}
          />
          <Input
            type="text"
            label=""
            className="secaoConfirmacao__fieldsGroup__espacoDireita"
            classInputField="secaoConfirmacao__fieldsGroup__field"
            maxLength={1}
          />
          <Input
            type="text"
            label=""
            className="secaoConfirmacao__fieldsGroup__espacoDireita"
            classInputField="secaoConfirmacao__fieldsGroup__field"
            maxLength={1}
          />
          <Input
            type="text"
            label=""
            maxLength={1}
            classInputField="secaoConfirmacao__fieldsGroup__field"
          />
        </div>
        <p>
          <a
            href="/"
            target="_self"
            title="Não recebi o código"
            className="secaoConfirmacao__hyperlink"
          >
            Não recebi o código
          </a>
        </p>
      </section>
    </>
  );
};

export default Confirmacao;
