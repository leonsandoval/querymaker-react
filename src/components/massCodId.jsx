import React, { Component } from "react";
import BackButton from "./backButton";
import { prestaciones } from "./prestacionesCerthom";
import CSVReader from "react-csv-reader";
import { Formik, Field, Form } from "formik";

class MassCodId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codid0: "",
      dvCSV: "",
      prestaciones: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = () => {
    var reader = new FileReader();
    reader.addEventListener("load", function(e) {
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

  render() {
    return (
      <div>
        <Formik
          initialValues={{
            prestacion: "",
            dvCSV: "",
            codid0: ""
          }}
          onSubmit={data => {
            let escribe = document.getElementById("escribe");
            let texto = "texto";
            let tabla = document.querySelector("tbody");
            let NumActoVenta = "";
            let CodIdVentaConvenio = "";
            let FolioBono = "";
            let CorrPrestacion = "";
            let CodPrestCertificador = "";
            let CodPrestacionFinanciador = "";
            /*             let {
              CodIdPrestacionCertificador,
              CodIdPrestacionHomologo,
              CodItemFinanciador,
              CodPrestacFinanciador,
              CodPrestacionCertificador
            } = prestaciones; */

            for (let i = 0, row; (row = tabla.rows[i + 1]); i++) {
              //iterate through rows
              //rows would be accessed using the "row" variable assigned in the for loop
              for (let j = 0, col; (col = row.cells[j]); j++) {
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
                    CodPrestCertificador = col.textContent.trim();
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
              if (
                CodPrestacionFinanciador.trimRight().match(
                  prestaciones.CodPrestacFinanciador
                )
              ) {
                const resultado = prestaciones.find(
                  p =>
                    p.CodPrestacFinanciador ===
                    CodPrestacionFinanciador.trimRight()
                );
                texto =
                  "update trprestacionventaconvenio set  CodIdPrestacionCertificador =" +
                  resultado.CodIdPrestacionCertificador +
                  " , CodPrestacionCertificador = '" +
                  resultado.CodPrestacionCertificador +
                  "',CodIdPrestacionHomologo = " +
                  resultado.CodIdPrestacionHomologo +
                  " ,CodItemFinanciador = " +
                  resultado.CodItemFinanciador +
                  vtaconvenio +
                  "update trbonoprestaciones set  CodIdPrestacionCertificador = " +
                  resultado.CodIdPrestacionCertificador +
                  bonoprestacion;
              }

              escribe.innerText += texto;
            }
          }}
        >
          {({ values }) => (
            <Form>
              <CSVReader onFileLoaded={this.handleChange} inputId="codid0" />

              <div id="dvCSV"></div>

              <Field
                type="submit"
                value="Generar"
                className="btn btn-primary m-2"
              />
              <div className="well well-lg" id="escribe"></div>
            </Form>
          )}
        </Formik>
        <BackButton />
      </div>
    );
  }
}

export default MassCodId;
