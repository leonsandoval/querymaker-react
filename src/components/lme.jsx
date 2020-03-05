import React from "react";
import BackButton from "./backButton";
import { Formik, Form, Field } from "formik";

const LME = () => {
  return (
    <div>
      <Formik
        initialValues={{ IdLicencia: "" }}
        onSubmit={data => {
          console.log("submit:", data);
        }}
      >
        {({ values }) => (
          <Form>
            <label>IdLicencia</label>
            <Field
              placeholder="Ej:123456"
              type="number"
              name="IdLicencia"
              className="form-control col-md-3 mb-4"
            />

            <h4>Para 'folio mal consumido' </h4>
            <br />
            <p>
              DELETE FROM licencia_estado WHERE id_licencia ={values.IdLicencia}{" "}
              AND codigo_estado_oficial = 11 ;
            </p>
            <p>
              DELETE FROM licencia_estado_traza WHERE id_licencia =
              {values.IdLicencia} AND codigo_estado_oficial = 11 ;
            </p>
            <p>
              DELETE FROM licencia_ccaf WHERE id_licencia ={values.IdLicencia};
            </p>
            <p>
              UPDATE licencias SET codigo_estado_oficial = 1 WHERE id_licencia =
              {values.IdLicencia};
            </p>
            <br />
            <h4> Solo para '103|La Ocupacion es 19:OTRO' </h4>
            <br />
            <p>
              UPDATE licencias SET ocupacion_otro = ' - ' WHERE id_licencia=
              {values.IdLicencia};
            </p>
          </Form>
        )}
      </Formik>

      <BackButton />
    </div>
  );
};

export default LME;
