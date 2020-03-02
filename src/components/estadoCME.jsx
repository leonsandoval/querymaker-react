import React, { Component } from "react";

class EstadoCME extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    let estados = document.getElementById("estados");
    // El estado 16(fuera de flujo) ademas deja la vigencia en 0
    let insert =
      "INSERT INTO cfncmeestado(CtaMedID, EstadoID, FecModEstado, FecModRegistro, UsuModRegistro, EstCod, NombreResponsable, Observacion, FecPago, MtoDescuadre) VALUES (" +
      this.state.ctaMedId +
      ", " +
      this.state.estadoId +
      ", '" +
      this.state.fecha +
      "', '" +
      this.state.fecha +
      "', 'op'," +
      this.state.estado +
      ", 'IMED', 'Cambio de estado solicitado', '1900-01-01', 0);" +
      "\n" +
      "\n";

    if (this.state.estado === "16") {
      var texto =
        insert +
        "UPDATE cfnctamedica SET ctavigente=0 ,EstCod = " +
        this.state.estado +
        ", FecModEstado = '" +
        this.state.fecha +
        "' WHERE CtaMedID = " +
        this.state.ctaMedId +
        "; ";
    } else {
      texto =
        insert +
        "UPDATE cfnctamedica SET EstCod = " +
        this.state.estado +
        ", FecModEstado = '" +
        this.state.fecha +
        "' WHERE CtaMedID = " +
        this.state.ctaMedId +
        "; ";
    }

    estados.innerText = texto;
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="col-md-3 mb-2">
              CtaMedId
              <input
                type="number"
                name="ctaMedId"
                className="form-control"
                value={this.state.ctaMedId}
                onChange={this.handleChange}
              />
            </label>
            <label className="col-md-3 mb-2">
              EstadoID
              <input
                type="number"
                name="estadoId"
                className="form-control"
                value={this.state.estadoId}
                onChange={this.handleChange}
              />
            </label>
            <label className="col-md-3 mb-2">
              Fecha
              <input
                type="date"
                name="fecha"
                className="form-control"
                value={this.state.fecha}
                onChange={this.handleChange}
              />
            </label>
            <label className="col-md-3 mb-2">
              Estado
              <input
                type="number"
                name="estado"
                className="form-control"
                value={this.state.estado}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <input
              type="submit"
              value="Generar"
              className="btn btn-primary m-2"
            />
            <div className="well well-lg" id="estados"></div>
          </div>
        </form>
        <form action="/CME" className="float-right">
          <input type="submit" value="Volver" className="btn btn-info btn-sm" />
        </form>
      </div>
    );
  }
}

export default EstadoCME;
