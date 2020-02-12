import React from "react";
import logo from "../../images/logo-ibring-pb.svg";
import icoMenu from "../../images/ico-menu.svg";
import icoClose from "../../images/ico-close.svg";
import icoMoto from "../../images/ico-lambreta.svg";
import icoCarro from "../../images/ico-carro.svg";
import icoMenuMoto from "../../images/ico-menu-scooter.svg";
import icoMenuCarro from "../../images/ico-menu-car.svg";
import icoMenuSair from "../../images/ico-logout.svg";
import clsx from "clsx";
import "./Home.scss";

const Home = () => {
  const [isVisible, setisVisible] = React.useState(false);

  const showSidebar = () => {
    setisVisible(true);
  };

  const hiddenSidebar = () => {
    setisVisible(false);
  };

  return (
    <>
      <section
        id="ibring-sidebar"
        className={clsx(
          "sidebar",
          { "sidebar--hidden": !isVisible },
          { "sidebar--show": isVisible }
        )}
      >
        <img
          src={icoClose}
          className="sidebar__close"
          alt="icone close"
          onClick={hiddenSidebar}
        />
        <div className="sidebar__content">
          <div className="sidebar__content__noIcon">
            <p id="ibring-sidebar-benvindo" className="sidebar__content__texto">
              Bem vindo(a),
              <span className="sidebar__content__texto sidebar__content__texto--negrito">
                Paula da Silva
              </span>
            </p>
          </div>
          <div id="ibring-sidebar-menu" className="sidebar__content__menu">
            <div className="sidebar__content__menu__itens sidebar__content__noIcon">
              <p className="sidebar__content__texto--negrito">Novo pedido</p>
            </div>
            <div className="sidebar__content__menu__itens">
              <img
                src={icoMenuMoto}
                className="sidebar__content__menu__ico"
                alt="icone menu moto"
              />
              <p className="sidebar__content__menu__texto">Entrega de moto</p>
            </div>
            <div className="sidebar__content__menu__itens">
              <img
                src={icoMenuCarro}
                className="sidebar__content__menu__ico"
                alt="icone menu carro"
              />
              <p className="sidebar__content__menu__texto">Entrega de carro</p>
            </div>
            <div className="sidebar__content__menu__linha">&nbsp;</div>
            <div className="sidebar__content__menu__itens sidebar__content__noIcon">
              <p className="sidebar__content__texto--negrito">Fale conosco</p>
            </div>
            <div className="sidebar__content__menu__linha">&nbsp;</div>
            <div className="sidebar__content__menu__itens">
              <img
                src={icoMenuSair}
                className="sidebar__content__menu__ico"
                alt="icone menu sair"
              />
              <p className="sidebar__content__menu__texto--negrito">Sair</p>
            </div>
            <div className="sidebar__content__menu__linha">&nbsp;</div>
          </div>
        </div>
      </section>
      <section
        id="ibring-bgSidebar"
        className={clsx(
          "sidebar__bg",
          { "sidebar__bg--hidden": !isVisible },
          { "sidebar__bg--show": isVisible }
        )}
      />
      <section id="ibring-home" className="secaoHome">
        <header id="ibring-home-header" className="secaoHome__header">
          <img
            src={icoMenu}
            className="secaoHome__header__menu"
            alt="icone menu"
            onClick={showSidebar}
          />
          <img src={logo} className="secaoHome__header__logo" alt="logo" />
        </header>
        <div className="secaoHome__content">
          <h5 className="secaoHome__content__titulo">Fazer um novo pedido</h5>
          <div className="secaoHome__content__botoes">
            <div className="secaoHome__content__botoes__cards secaoHome__content__botoes__moto">
              <img
                src={icoMoto}
                className="secaoHome__content__botoes__cards__ico secaoHome__content__botoes__moto__ico"
                alt="icone moto"
              />
              <p className="secaoHome__content__botoes__cards__texto secaoHome__content__botoes__moto__texto">
                Entrega de <span>moto</span>
              </p>
            </div>
            <div className="secaoHome__content__botoes__cards secaoHome__content__botoes__carro">
              <img
                src={icoCarro}
                className="secaoHome__content__botoes__cards__ico secaoHome__content__botoes__carro__ico"
                alt="icone carro"
              />
              <p className="secaoHome__content__botoes__cards__texto secaoHome__content__botoes__carro__texto">
                Entrega de <span>moto</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
