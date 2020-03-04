import React, { Component } from "react";
import BackButton from "./backButton";

class LME extends Component {
  constructor(props) {
    super(props);
    this.state = { valor: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    let eliminarlme = document.getElementById("eliminarlme");

    let texto =
      "Para 'folio mal consumido'" +
      "\n" +
      "\n" +
      "DELETE FROM licencia_estado WHERE id_licencia =" +
      this.state.valor +
      " AND codigo_estado_oficial = 11 ;" +
      "\n" +
      "DELETE FROM licencia_estado_traza WHERE id_licencia =" +
      this.state.valor +
      " AND codigo_estado_oficial = 11 ;" +
      "\n" +
      "DELETE FROM licencia_ccaf WHERE id_licencia =" +
      this.state.valor +
      ";" +
      "\n" +
      "UPDATE licencias  SET codigo_estado_oficial = 1 WHERE id_licencia =" +
      this.state.valor +
      ";" +
      "\n" +
      "\n" +
      "\n" +
      "******************            solo para   '103|La Ocupacion es 19:OTRO'                       ********************" +
      "\n" +
      "\n" +
      "UPDATE licencias SET ocupacion_otro = ' - ' WHERE id_licencia= " +
      this.state.valor +
      ";" +
      "\n";

    eliminarlme.innerText = texto;
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>IdLicencia</label>
            <input
              type="number"
              name="valor"
              className="form-control col-md-3 mb-4"
              value={this.state.valor}
              onChange={this.handleChange}
              onKeyUp={this.handleChange}
              required
            />
            {/* 
            <input type="submit" value="Generar" className="btn btn-primary" /> */}
          </div>
        </form>
        <div className="well well-lg" id="eliminarlme"></div>
        <BackButton />
      </React.Fragment>
    );
  }
}

export default LME;
