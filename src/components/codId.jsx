import React from "react";
import { Formik, Form, Field } from "formik";
import BackButton from "./backButton";
import { prest, prestaciones } from "./prestacionesCerthom";

const CodId = () => {
  return (
    <div>
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
            <label className="col-md-3 mb-4">
              Prestacion
              <Field as="select" name="prestacion" className="form-control">
                {prest}
              </Field>
            </label>
            <div className="form-row">
              <label className="col-md-3 mb-2">
                NumActoVenta
                <Field
                  type="number"
                  name="NumActoVenta"
                  className="form-control"
                  required
                />
              </label>

              <label className="col-md-3 mb-4">
                CodIdVentaConvenio
                <Field
                  type="number"
                  name="CodIdVentaConvenio"
                  className="form-control"
                  required
                />
              </label>
              <label className="col-md-3 mb-4">
                FolioBono
                <Field
                  type="number"
                  name="FolioBono"
                  className="form-control"
                  required
                />
              </label>

              <label className="col-md-3 mb-4">
                CorrPrestacion
                <Field
                  type="number"
                  name="CorrPrestacion"
                  className="form-control"
                  required
                />
              </label>
            </div>
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

export default CodId;
