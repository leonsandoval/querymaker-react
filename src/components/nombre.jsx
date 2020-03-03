import React, { Component } from "react";

class NombreLugar extends Component {
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
    var nombre = document.getElementById("nombre");

    var texto =
      "UPDATE cfconvenioventa SET NombredelConvenio = '" +
      this.state.nombre +
      "' WHERE CodIdConvenioVenta = " +
      this.state.CodIdConvenioVenta +
      ";" +
      "\n" +
      "UPDATE cfconveniopago SET NombredelConvenio = '" +
      this.state.nombre +
      "' WHERE CodIdConvenioPago = " +
      this.state.CodIdConvenioVenta +
      ";";

    nombre.innerText = texto;
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="col-md-3 mb-2">
              Nuevo Nombre
              <input
                type="text"
                name="nombre"
                className="form-control"
                value={this.state.nombre}
                onChange={this.handleChange}
              />
            </label>
            <label className="col-md-3 mb-2">
              CodIdConvenioVenta
              <input
                type="number"
                name="CodIdConvenioVenta"
                className="form-control"
                value={this.state.CodIdConvenioVenta}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <input
              type="submit"
              value="Generar"
              className="btn btn-primary m-2"
            />
            <div className="well well-lg" id="nombre"></div>
          </div>
        </form>
        <form action="/bono" className="float-right">
          <input type="submit" value="Volver" className="btn btn-info btn-sm" />
        </form>
      </div>
    );
  }
}

export default NombreLugar;
