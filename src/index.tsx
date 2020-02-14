import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import Confirmacao from "./pages/cadastro/Confirmacao";
import Home from "./pages/home/Home";
import FaleConosco from "./pages/faleConosco/FaleConosco";
import Seguro from "./pages/seguro/Seguro";
import Pagamento from "./pages/pagamento/Pagamento";
import NovoCartao from "./pages/pagamento/NovoCartao";
import Resumo from "./pages/resumo/Resumo";
import Corrida from "./pages/resumo/Corrida";
import Retirada from "./pages/retirada/Retirada";
import Detalhe from "./pages/retirada/Deatlhes";
import EntregaB from "./pages/entregaB/EntregaB";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/cadastro" component={Cadastro} />
      <Route exact path="/confirmacao" component={Confirmacao} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/faleconosco" component={FaleConosco} />
      <Route exact path="/seguro" component={Seguro} />
      <Route exact path="/pagamento" component={Pagamento} />
      <Route exact path="/novocartao" component={NovoCartao} />
      <Route exact path="/resumo" component={Resumo} />
      <Route exact path="/corrida" component={Corrida} />
      <Route exact path="/retirada" component={Retirada} />
      <Route exact path="/detalhe" component={Detalhe} />
      <Route exact path="/entregab" component={EntregaB} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
