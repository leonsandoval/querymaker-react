import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/navbar";
import Bono from "./components/bono";
import Home from "./components/home";
import CME from "./components/cme";
import LME from "./components/lme";
import NuevoCME from "./components/nuevoCME";
import EstadoCME from "./components/estadoCME";
import Caracteres from "./components/caracteres";

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <br />
        <Route path="/" exact component={Home} />
        <Route path="/bono" component={Bono} />
        <Route path="/CME" exact component={CME} />
        <Route path="/CME/estadoCME" component={EstadoCME} />
        <Route path="/CME/nuevoCME" component={NuevoCME} />
        <Route path="/CME/caracteres" component={Caracteres} />
        <Route path="/LME" component={LME} />
      </div>
    </Router>
  );
}

export default App;
