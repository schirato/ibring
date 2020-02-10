import React from "react";
import logo from "../../images/logo-ibring-pq.svg";
import icoArrowBack from "../../images/ico-arrow-back.svg";
import "./Header.scss";

const Header = () => {
  return (
    <header id="ibring-header" className="headerHeader">
      <img
        src={icoArrowBack}
        className="headerHeader__arrowBack"
        alt="botão voltar"
      />
      <img src={logo} className="headerHeader__logo" alt="logo" />
    </header>
  );
};

export default Header;
