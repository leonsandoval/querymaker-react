import React, { Component } from "react";

class CME extends Component {
  render() {
    return (
      <div className="card-deck mb-3 text-center">
        <div className="card mb-4 box-shadow">
          <div className="card-header">Cambiar de Estado una CME</div>
          <div className="card-body">
            <ul className="list-unstyled mb-4">
              <li>Cuando el prestador/financiador</li>
              <li>solicita dejar una cuenta fuera </li>
              <li>de flujo, se debe usar las querys </li>
              <li>resultantes para generar el cambio </li>
              <li>en BD</li>
            </ul>
            <a
              href="/CME/estadoCME"
              className="btn btn-lg btn-block btn-primary"
            >
              EstadoCME
            </a>
          </div>
        </div>
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            Crear Nuevo Convenio para CME y/o PMF
          </div>
          <div className="card-body">
            <ul className="list-unstyled mb-4">
              <li>Cuando ejecutivos solicitan la creacion</li>
              <li>de un nuevo lugar/convenio/prestador</li>
              <li>en CME o PMF se debe consultar los datos</li>
              <li> existentes y completar con la informacion</li>
              <li>de bono para los que no existen</li>
            </ul>
            <a
              href="/CME/nuevoCME"
              className="btn btn-lg btn-block btn-primary"
            >
              NuevoCME
            </a>
          </div>
        </div>
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            Validar Texto para "caracteres erroneos"
          </div>
          <div className="card-body">
            <ul className="list-unstyled mb-4">
              <li>Cuando prestador indica que no puede</li>
              <li>cargar una cuenta debido a que </li>
              <li>arroja un mensaje de error que dice</li>
              <li>"caracter erroneo", normalmente este</li>
              <li>caracter está en la anamnesis o epicrisis</li>
            </ul>
            <a
              href="/CME/caracteres"
              className="btn btn-lg btn-block btn-primary"
            >
              Carateres
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default CME;
