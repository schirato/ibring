import React from "react";
import { InputMaterial } from "../../shared/components";
import logo from "../../images/logo-ibring.svg";
import "./Login.scss";

const Login = () => {
  return (
    <section className="loginPage container">
      <img src={logo} className="loginPage__logo" alt="logo" />
      <form>
        <InputMaterial label="E-mail" type="text" />
        <InputMaterial label="Senha" type="password" />
        <p className="loginPage__esqueceuSuaSenha">esqueceu sua senha?</p>
        <button
          type="button"
          className="btn btn-primary loginPage__buttonPrimary"
        >
          Entrar
        </button>
        <button
          type="button"
          className="btn btn-outline-primary loginPage__buttonSecondary"
        >
          Fazer Cadastro
        </button>
      </form>
    </section>
  );
};

export default Login;
