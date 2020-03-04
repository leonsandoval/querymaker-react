import React, { Component } from "react";
import BackButton from "./backButton";

class Caracteres extends Component {
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
    var mal = document.getElementById("mal"); //en este div escribo el resultado
    var validar = document.getElementById("validar").value; //de este texto saco el texto a validar
    // eslint-disable-next-line
    var validos = /[^\000-\177\ñ\á\à\ä\â\í\ì\ï\i\é\è\ë\ê\ó\ò\ö\ô\ú\ù\ü\û\'\¡\ª\°\º\´\¿\·\>\<\ç\¦\½\¼\®\¨\¾\μ\\]/i; //caracteres reconocidos
    var indice = validar.search(validos) + 1; //busca el indice del caracter no incluido
    var caracter = validar.match(validos); //busca el caracter no incluido
    if (indice > 0)
      var texto =
        "El caracter " +
        caracter +
        " no es valido, y se encuentra en la posicion " +
        indice +
        " del texto ingresado";
    else texto = "No se encontro caracter erroneo";
    mal.innerText = texto;
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Validar caracteres CME
            <textarea
              name="validar"
              id="validar"
              value={this.state.validar}
              onChange={this.handleChange}
              character-set="UTF-8"
              className="form-control"
              rows="5"
              cols="150"
            />
          </label>
          <div className="well well-lg" id="mal"></div>
          {/* <input
            type="submit"
            value="Validar"
            className="btn btn-primary m-2"
          /> */}
        </form>
        <BackButton />
      </div>
    );
  }
}

export default Caracteres;
