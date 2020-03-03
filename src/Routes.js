import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home";
import CME from "./components/cme";
import Bono from "./components/bono";
import LME from "./components/lme";
import NuevoCME from "./components/nuevoCME";
import EstadoCME from "./components/estadoCME";
import Caracteres from "./components/caracteres";
import MassCodId from "./components/massCodId";
import CodId from "./components/codId";
import NombreLugar from "./components/nombre";
import EliminarLiquidacion from "./components/eliminar";
import BonoNoExiste from "./components/noexiste";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/bono" component={Bono} />
      <Route exact path="/CME" component={CME} />
      <Route path="/LME" component={LME} />
      <Route path="/CME/estadoCME" component={EstadoCME} />
      <Route path="/CME/nuevoCME" component={NuevoCME} />
      <Route path="/CME/caracteres" component={Caracteres} />
      <Route path="/bono/massCodId" component={MassCodId} />
      <Route path="/bono/codId" component={CodId} />
      <Route path="/bono/nombre" component={NombreLugar} />
      <Route path="/bono/eliminar" component={EliminarLiquidacion} />
      <Route path="/bono/noexiste" component={BonoNoExiste} />
    </Switch>
  );
};

export default Routes;
