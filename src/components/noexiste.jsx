import React from "react";
import { Formik, Field, Form } from "formik";
import BackButton from "./backButton";

const BonoNoExiste = () => {
  return (
    <div>
      <Formik
        initialValues={{
          FolioBono: "",
          CodIdVentaConvenio: "",
          codEntidad: "",
          entidad: ""
        }}
        onSubmit={data => {
          var noExiste = document.getElementById("noExiste");
          var texto =
            "UPDATE trseguimiento SET AtrEstadoConciliacion =2 WHERE FolioBono = " +
            data.FolioBono +
            " and CodIdVentaConvenio =" +
            data.CodIdVentaConvenio +
            " and CodEntidad= " +
            data.codEntidad +
            " and AtrEntidadConciliar=" +
            data.entidad +
            ";";
          noExiste.innerText = texto;
        }}
      >
        {({ values }) => (
          <Form className="form-row">
            <label className="col-md-3 mb-4">
              Folio Bono
              <Field
                type="text"
                name="FolioBono"
                className="form-control "
                required
              />
            </label>
            <label className="col-md-3 mb-4">
              CodIdVentaConvenio
              <Field
                type="text"
                name="CodIdVentaConvenio"
                className="form-control"
                required
              />
            </label>
            <label className="col-md-3 mb-4">
              Codigo Entidad
              <Field
                type="text"
                name="codEntidad"
                className="form-control"
                required
              />
            </label>
            <div className="col-md-3 mb-4">
              <Field type="radio" name="entidad" value="1" />
              <label>Financiador</label>
              <br />
              <Field type="radio" name="entidad" value="3" />
              <label>Compañia</label>
            </div>
            <Field
              type="submit"
              value="Generar"
              className="btn btn-primary m-2"
            />
            <div className="well well-lg" id="noExiste"></div>
          </Form>
        )}
      </Formik>
      <BackButton />
    </div>
  );
};

export default BonoNoExiste;
