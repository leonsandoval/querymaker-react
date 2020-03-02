import React, { Component } from "react";

class NuevoCME extends Component {
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
    var CME = document.getElementById("CME");

    var texto =
      "***** USAR SOLO LOS INSERT QUE NO ESTEN CREADOS DE ANTEMANO ***** " +
      "\n" +
      "\n" +
      "INSERT INTO prmlugarpam(CodFinanciador, CodLugar, RutConvenio, extHomLugarConvenio, extSucVenta) VALUES(" +
      this.state.codFin +
      ", " +
      this.state.codLugar +
      ", '" +
      this.state.rutConvenio +
      "', '" +
      this.state.homLugarConvenio +
      "', '" +
      this.state.codSucVenta +
      "');" +
      "\n" +
      "\n" +
      "INSERT INTO cmefincnvxml(CodFinanciador, RutConvenio) VALUES(" +
      this.state.codFin +
      ", '" +
      this.state.rutConvenio +
      "');" +
      "\n" +
      "\n" +
      "INSERT INTO convenioctamedica(CedPrestador, CodFinanciador, CodLugar, CorrConvenio, NombredelConvenio, CodArancelInterface, HomNumeroConvenio, HomLugarConvenio, AtrCargaCuentas, FecInicioVigencia, FecFinVigencia, AtrEstadosVigencia, CedModificacion, FecActualizacion)VALUES('" +
      this.state.rutConvenio +
      "', " +
      this.state.codFin +
      ", " +
      this.state.codLugar +
      ", 1 , '" +
      this.state.nombreConvenio +
      "', '" +
      this.state.codArancelInterface +
      "', '" +
      this.state.homNumeroConvenio +
      "', '" +
      this.state.homLugarConvenio +
      "', 1 ,'" +
      this.state.fecInicio +
      "', '" +
      this.state.fecFin +
      "', 1, '0000000000-0', now() );" +
      "\n" +
      "\n" +
      "INSERT INTO cmlugares(CodLugar, NombreLugar, AtrTiposDireccion, GloDireccion, DepNumero, Email, AtrCodigosRegion, CodComuna, AtrNombrePaises, CodAreaTelefono, NumTelefono, NumFax, FecInicioVigencia, FecFinVigencia, AtrEstadosVigencia, AtrFinanciadorFull, AtrNombrePaisesCedMod, AtrTiposIdentificacionCedMod, CedModificacion, FecActualizacion) VALUES(" +
      this.state.codLugar +
      ", '" +
      this.state.nombreConvenio +
      "', 1, 'NULL', 0, 'NULL', 0, 0, 56, 'NULL', 'NULL', 'NULL', '" +
      this.state.fecInicio +
      "', '" +
      this.state.fecFin +
      "',1, 2, 56, 1, '0000000000-0', now() );" +
      "\n" +
      "\n" +
      "INSERT INTO cmprestadores(CedPrestador, NombrePrestador, FecInicioVigencia, FecFinVigencia, AtrEstadosVigencia, CedModificacion, FecActualizacion) VALUES('" +
      this.state.rutConvenio +
      "', '" +
      this.state.nombreConvenio +
      "', '" +
      this.state.fecInicio +
      "', '" +
      this.state.fecFin +
      "',1, '0000000000-0', now() );" +
      "\n" +
      "\n";

    CME.innerText = texto;
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="col-md-3 mb-2">
              Codigo Financiador
              <input
                type="number"
                name="codFin"
                className="form-control"
                value={this.state.codFin}
                onChange={this.handleChange}
              />
            </label>
            <label className="col-md-3 mb-2">
              Rut Prestador
              <input
                type="text"
                name="rutConvenio"
                className="form-control"
                value={this.state.rutConvenio}
                onChange={this.handleChange}
              />
            </label>
            <label className="col-md-3 mb-2">
              Codigo Lugar
              <input
                type="number"
                name="codLugar"
                className="form-control"
                value={this.state.codLugar}
                onChange={this.handleChange}
              />
            </label>
            <label className="col-md-3 mb-2">
              Nombre del Convenio
              <input
                type="text"
                name="nombreConvenio"
                className="form-control"
                value={this.state.nombreConvenio}
                onChange={this.handleChange}
              />
            </label>
            <label className="col-md-3 mb-2">
              HomNumeroConvenio
              <input
                type="text"
                name="homNumeroConvenio"
                className="form-control"
                value={this.state.homNumeroConvenio}
                onChange={this.handleChange}
              />
            </label>
            <label className="col-md-3 mb-2">
              HomLugarConvenio
              <input
                type="text"
                name="homLugarConvenio"
                className="form-control"
                value={this.state.homLugarConvenio}
                onChange={this.handleChange}
              />
            </label>
            <label className="col-md-3 mb-2">
              CodSucVenta
              <input
                type="text"
                name="codSucVenta"
                className="form-control"
                value={this.state.codSucVenta}
                onChange={this.handleChange}
              />
            </label>
            <label className="col-md-3 mb-2">
              CodArancelInterface
              <input
                type="text"
                name="codArancelInterface"
                className="form-control"
                value={this.state.codArancelInterface}
                onChange={this.handleChange}
              />
            </label>
            <label className="col-md-3 mb-2">
              Fecha de Inicio
              <input
                type="date"
                name="fecInicio"
                className="form-control"
                value={this.state.fecInicio}
                onChange={this.handleChange}
              />
            </label>
            <label className="col-md-3 mb-2">
              Fecha de Termino
              <input
                type="date"
                name="fecFin"
                className="form-control"
                value={this.state.fecFin}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <input
              type="submit"
              value="Generar"
              className="btn btn-primary m-2"
            />
            <div className="well well-lg" id="CME"></div>{" "}
          </div>
        </form>
        <form action="/CME" className="float-right">
          <input type="submit" value="Volver" className="btn btn-info btn-sm" />
        </form>
      </div>
    );
  }
}

export default NuevoCME;
