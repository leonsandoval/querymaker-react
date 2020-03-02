import React, { Component } from "react";
import image from "../ilustracion_inicio.png";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <img src={image} alt="Imagen obtenida del home de imed" />
      </div>
    );
  }
}

export default Home;
