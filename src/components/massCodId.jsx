import React, { Component } from "react";
/* import { Formik, Form, Field } from "formik";
import BackButton from "./backButton";*/
import { prestaciones } from "./prestacionesCerthom";
import CSVReader from "react-csv-reader";

class MassCodId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codid0: "",
      dvCSV: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange = file => {
    var reader = new FileReader();
    reader.addEventListener("load", function(e) {
      // document.getElementById("dvCSV").innerText = this.result;
      var table = document.createElement("table");
      var rows = e.target.result.split("\n");
      for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].split(";");
        if (cells.length > 1) {
          var row = table.insertRow(-1);
          for (var j = 0; j < cells.length; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = cells[j];
          }
        }
      }
      var dvCSV = document.getElementById("dvCSV");
      dvCSV.innerHTML = "";
      dvCSV.appendChild(table);
      table.setAttribute("id", "tabla");
    });
    reader.readAsText(document.querySelector("input").files[0]);
  };

  handleClick = () => {
    let escribe = document.getElementById("escribe");
    let texto = "texto";
    let tabla = document.querySelector("tbody");
    let NumActoVenta = "";
    let CodIdVentaConvenio = "";
    let FolioBono = "";
    let CorrPrestacion = "";
    let CodPrestacionCertificador = "";
    let CodPrestacionFinanciador = "";

    for (var i = 0, row; (row = tabla.rows[i + 1]); i++) {
      //iterate through rows
      //rows would be accessed using the "row" variable assigned in the for loop
      for (var j = 0, col; (col = row.cells[j]); j++) {
        //iterate through columns
        //columns would be accessed using the "col" variable assigned in the for loop
        //console.log("fila=", i, "columna=", j, "cont=", col.textContent);
        switch (j) {
          case 0:
            NumActoVenta = col.textContent.trim();
            break;
          case 1:
            CodIdVentaConvenio = col.textContent.trim();
            break;
          case 2:
            FolioBono = col.textContent.trim();
            break;
          case 3:
            CorrPrestacion = col.textContent.trim();
            break;
          case 5:
            CodPrestacionCertificador = col.textContent.trim();
            break;
          case 8:
            CodPrestacionFinanciador = col.textContent.trim();
            break;
          default:
            texto = "Prestacion no reconocida";
            break;
        }
      }

      const vtaconvenio =
        " where NumActoVenta = " +
        NumActoVenta +
        " and CodIdVentaConvenio =" +
        CodIdVentaConvenio +
        " and CorrPrestacion =" +
        CorrPrestacion +
        ";" +
        "\n" +
        "\n";
      const bonoprestacion =
        " where NumActoVenta = " +
        NumActoVenta +
        " and CodIdVentaConvenio =" +
        CodIdVentaConvenio +
        " and FolioBono = " +
        FolioBono +
        " and CorrPrestacion =" +
        CorrPrestacion +
        ";" +
        "\n" +
        "\n";

      //dependiendo del codigo de prestacion seleccionado los datos complementarios que se escriben
      prestaciones.map(p => {
        if (CodPrestacionFinanciador.trimRight === p.CodPrestacFinanciador)
          texto =
            "update trprestacionventaconvenio set  CodIdPrestacionCertificador =" +
            p.CodIdPrestacionCertificador +
            " , CodPrestacionCertificador = " +
            p.CodPrestacionCertificador +
            ",CodIdPrestacionHomologo = " +
            p.CodIdPrestacionHomologo +
            " ,CodItemFinanciador = " +
            p.CodItemFinanciador +
            vtaconvenio +
            "update trbonoprestaciones set  CodIdPrestacionCertificador = " +
            p.CodIdPrestacionCertificador +
            bonoprestacion;
      });
      {
        console.log(prestaciones.CodPrestacFinanciador);
      }
      escribe.innerText = texto;
    }
  };

  render() {
    return (
      <div className="card-body">
        <CSVReader onFileLoaded={this.handleChange} inputId="codid0" />
        <hr />
        <div id="dvCSV"></div>
        <button
          type="button"
          id="generar"
          className="btn btn-primary"
          onClick={this.handleClick}
        >
          Generar
        </button>
        <div className="well well-lg" id="escribe"></div>
      </div>
    );
  }
}

export default MassCodId;
