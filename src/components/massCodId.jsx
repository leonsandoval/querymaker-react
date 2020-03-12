import React, { Component } from "react";
/* import { Formik, Form, Field } from "formik";
import BackButton from "./backButton";
import { prestaciones } from "./prestacionesCerthom"; */
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

    console.log(file);
  };

  handleClick = () => {
    let escribe = document.getElementById("escribe");
    let texto = "texto";
    let tabla = document.querySelector("tbody");

    for (var i = 0, row; (row = tabla.rows[i]); i++) {
      //iterate through rows
      //rows would be accessed using the "row" variable assigned in the for loop
      for (var j = 0, col; (col = row.cells[j]); j++) {
        //iterate through columns
        //columns would be accessed using the "col" variable assigned in the for loop
        console.log("fila=", i, "columna=", j, "cont=", col.textContent);
        switch (j) {
          case 0:
            let NumActoVenta = col;
            break;
          case 1:
            let CodIdVentaConvenio = col;
            break;
          case 2:
            let FolioBono = col;
            break;
          case 3:
            let CorrPrestacion = col;
            break;
          case 5:
            let CodPrestacionCertificador = col;
            break;
          case 6:
            let CodPrestacionFinanciador = col;
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
    }

    /*   for (let i = 1; i < tabla.length; i++) {
      let NumActoVenta = tabla
        .eq(i)
        .children()
        .first()
        .text();
      let CodIdVentaConvenio = tabla
        .eq(i)
        .children()
        .eq(1)
        .text();
      let FolioBono = tabla
        .eq(i)
        .children()
        .eq(2)
        .text();
      let CorrPrestacion = tabla
        .eq(i)
        .children()
        .eq(3)
        .text();
      let prestacion = tabla
        .eq(i)
        .children()
        .eq(5)
        .text();
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

      //console.log(prestacion)
      //prestacion venia con espacios en blanco al final...
      switch (prestacion.trim()) {
        case "0306091":
          texto =
            "update trprestacionventaconvenio set  CodIdPrestacionCertificador = 13893, CodPrestacionCertificador = '0306691',CodIdPrestacionHomologo = 47073,CodItemFinanciador = 0 " +
            vtaconvenio +
            "update trbonoprestaciones set  CodIdPrestacionCertificador = 13893" +
            bonoprestacion;
          break;
        case "0306092":
          texto =
            "update trprestacionventaconvenio set  CodIdPrestacionCertificador = 13899, CodPrestacionCertificador = '0306692',CodIdPrestacionHomologo = 47088,CodItemFinanciador = 0" +
            vtaconvenio +
            "update trbonoprestaciones set  CodIdPrestacionCertificador = 13899" +
            bonoprestacion;
          break;

        case "0308046":
          texto =
            "update trprestacionventaconvenio set  CodIdPrestacionCertificador = 13956, CodPrestacionCertificador = '0308646',CodIdPrestacionHomologo = 47124,CodItemFinanciador = 0" +
            vtaconvenio +
            "update trbonoprestaciones set  CodIdPrestacionCertificador = 13956" +
            bonoprestacion;
          break;
        case "0305091":
          texto =
            "update trprestacionventaconvenio set  CodIdPrestacionCertificador = 16720, CodPrestacionCertificador = '0305691',CodIdPrestacionHomologo = 59224,CodItemFinanciador = 0" +
            vtaconvenio +
            "update trbonoprestaciones set  CodIdPrestacionCertificador = 16720" +
            bonoprestacion;
          break;

        case "0305092":
          texto =
            "update trprestacionventaconvenio set  CodIdPrestacionCertificador = 16726, CodPrestacionCertificador = '0305692',CodIdPrestacionHomologo = 59227,CodItemFinanciador = 0" +
            vtaconvenio +
            "update trbonoprestaciones set  CodIdPrestacionCertificador = 16726" +
            bonoprestacion;
          break;

        case "0306082":
          texto =
            "update trprestacionventaconvenio set  CodIdPrestacionCertificador = 13965, CodPrestacionCertificador = '0306682',CodIdPrestacionHomologo = 47136,CodItemFinanciador = 0" +
            vtaconvenio +
            "update trbonoprestaciones set  CodIdPrestacionCertificador = 13965" +
            bonoprestacion;
          break;

        default:
          texto = "Prestacion no reconocida";
          break;
      }
      escribe.innerText += texto;
    }*/
  };

  render() {
    const papaparseOptions = {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
    };
    return (
      <div className="card-body">
        <CSVReader
          parserOptions={papaparseOptions}
          onFileLoaded={this.handleChange}
          inputId="codid0"
        />

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
        {JSON.stringify(this.state.dvCSV)}
      </div>
    );
  }
}

export default MassCodId;
/* 
const MassCodId = () => {
  const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
  };

  let codid0 = document.getElementById("codid0");

  return (
    <div className="card-body">
      <Formik
        initialValues={{
          prestacion: "",
          NumActoVenta: "",
          CodIdVentaConvenio: "",
          FolioBono: "",
          CorrPrestacion: "",
          codid0: []
        }}
        onSubmit={data => {
          var escribe = document.getElementById("escribe");
          var vtaconvenio =
            " where NumActoVenta = " +
            data.NumActoVenta +
            " and CodIdVentaConvenio =" +
            data.CodIdVentaConvenio +
            " and CorrPrestacion =" +
            data.CorrPrestacion +
            ";" +
            "\n" +
            "\n";
          var bonoprestacion =
            " where NumActoVenta = " +
            data.NumActoVenta +
            " and CodIdVentaConvenio =" +
            data.CodIdVentaConvenio +
            " and FolioBono = " +
            data.FolioBono +
            " and CorrPrestacion =" +
            data.CorrPrestacion +
            ";";
          var texto = "texto";
          //dependiendo del codigo de prestacion seleccionado los datos complementarios que se escriben
          prestaciones.map(prestaciones => {
            if (data.prestacion === prestaciones.CodPrestacionCertificador)
              return (texto =
                "update trprestacionventaconvenio set  CodIdPrestacionCertificador =" +
                prestaciones.CodIdPrestacionCertificador +
                " , CodPrestacionCertificador = " +
                prestaciones.CodPrestacionCertificador +
                ",CodIdPrestacionHomologo = " +
                prestaciones.CodIdPrestacionHomologo +
                " ,CodItemFinanciador = " +
                prestaciones.CodItemFinanciador +
                vtaconvenio +
                "update trbonoprestaciones set  CodIdPrestacionCertificador = " +
                prestaciones.CodIdPrestacionCertificador +
                bonoprestacion);
          });

          escribe.innerText = texto;
        }}
      >
        {({ values }) => (
          <Form>
            <CSVReader
              parserOptions={papaparseOptions}
              onFileLoaded={data => console.log(data)}
              inputId="codid0"
              name="codid0"
            />
                         <input type="file" accept=".csv" id="fileUpload" />
      <p id="dvCSV">a</p>
      <input type="button" id="upload" value="Upload" /> 

            <div id="dvCSV">{JSON.stringify(codid0)}</div>
            <hr />
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
};

export default MassCodId;
 */
