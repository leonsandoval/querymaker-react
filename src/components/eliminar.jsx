import React, { Component } from "react";

class EliminarLiquidacion extends Component {
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <div className="form-row">
          <div className="col-md-3 mb-4">
            <label for="NumLiquidacion">NumLiquidacion</label>
            <input
              type="text"
              name="NumLiquidacion"
              id="numLiquidacion"
              className="form-control"
              onblur="eliminar()"
              required
            />
          </div>
        </div>
        <button
          className="btn btn-primary"
          type="button"
          id="generar"
          onclick="eliminar()"
        >
          Generar
        </button>

        <div className="well well-lg" id="eliminar"></div>
      </div>
    );
  }
}

export default EliminarLiquidacion;
