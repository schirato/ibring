import React from "react";
import Header from "./Header";
import { Input } from "../../shared/components";
import clsx from "clsx";
import "./Cadastro.scss";

const Cadastro = () => {
  const [erro, setErro] = React.useState(false);
  const [sucesso, setSucesso] = React.useState(false);

  return (
    <>
      <Header />
      <section id="ibring-cadastro" className="secaoCadastro">
        <h5>Dados Pessoais</h5>
        <form className="secaoCadastro__formulario">
          <div className="secaoCadastro__formulario__nomeCompleto">
            <Input
              type="text"
              label="Nome"
              className="secaoCadastro__formulario__nomeCompleto__spaceRight"
            />
            <Input type="text" label="Sobrenome" />
          </div>
          <Input type="tel" label="Celular" />
          <Input type="email" label="E-mail" />
          <h5>Crie uma senha de acesso</h5>
          <Input type="password" className="secaoCadastro__formulario__senha" />
          <p
            //className="secaoCadastro__formulario__senha__rodape"
            className={clsx(
              "secaoCadastro__formulario__senha__rodape",
              { "secaoCadastro__formulario__senha__rodape--erro": erro },
              { "secaoCadastro__formulario__senha__rodape--sucesso": sucesso }
            )}
          >
            Deve conter no mínimo 6 caracteres, dentre eles números e letras
            maiúsculas e minúsculas
          </p>
          <button
            type="button"
            className={clsx(
              "btn btn-primary secaoCadastro__formulario__buttonPrimary",
              {
                "secaoCadastro__formulario__buttonPrimary--disabled": !sucesso
              }
            )}
          >
            Cadastrar
          </button>
        </form>
      </section>
    </>
  );
};

export default Cadastro;
