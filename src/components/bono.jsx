import React, { Component } from "react";

class Bono extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="card-deck mb-3 text-center">
          <div className="card mb-4 box-shadow">
            <div className="card-header">MassCodId 0</div>
            <div className="card-body">
              <p>Para procesar el archivo completo enviado por sistemas </p>
              <a
                href="/bono/massCodId"
                className="btn btn-lg btn-block btn-primary"
              >
                MassCodId0
              </a>
            </div>
          </div>
          <div className="card mb-4 box-shadow">
            <div className="card-header">CodId 0</div>
            <div className="card-body">
              <p>
                Para procesar individualmente el archivo enviado por sistemas
              </p>
              <a
                href="/bono/codid"
                className="btn btn-lg btn-block btn-primary"
              >
                CodId0
              </a>
            </div>
          </div>
          <div className="card mb-4 box-shadow">
            <div className="card-header">Bono No Existe</div>
            <div className="card-body">
              <p>Para consiliacion de bonos Banmedica/Vida Tres</p>
              <a
                href="/bono/noExiste"
                className="btn btn-lg btn-block btn-primary"
              >
                BonoNoExiste
              </a>
            </div>
          </div>
        </div>
        <div className="card-deck mb-3 text-center">
          <div className="card mb-4 box-shadow">
            <div className="card-header">Nombre Lugar</div>
            <div className="card-body">
              <p>Cambio de nombre de lugar en convenio venta y pago</p>
              <a
                href="/bono/nombre"
                className="btn btn-lg btn-block btn-primary"
              >
                NombreLugar
              </a>
            </div>
          </div>
          <div className="card mb-4 box-shadow">
            <div className="card-header">Eliminar Liquidacion</div>
            <div className="card-body">
              <p>Para eliminar liquidaciones errones</p>
              <a
                href="/bono/eliminar"
                className="btn btn-lg btn-block btn-primary"
              >
                EliminarLiquidacion
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Bono;
