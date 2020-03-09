import React from "react";
import { Formik, Form, Field } from "formik";
import BackButton from "./backButton";
import { prestaciones } from "./prestacionesCerthom";

const MassCodId = () => {
  return (
    <div className="card-body">
      <Formik
        initialValues={{
          prestacion: "",
          NumActoVenta: "",
          CodIdVentaConvenio: "",
          FolioBono: "",
          CorrPrestacion: ""
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
            <input type="file" id="fileUpload" />
            <input type="button" id="upload" value="Upload" />
            <hr />
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
};

export default MassCodId;
