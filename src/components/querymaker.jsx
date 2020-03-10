import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import BackButton from "./backButton";
import BaseDato from "./database";

const tipoQuery = ["select", "insert", "update", "delete"];
const options = tipoQuery.map(tipoQuery => (
  <option key={tipoQuery} value={tipoQuery}>
    {tipoQuery}
  </option>
));

class Querymaker extends Component {
  render() {
    return (
      <div>
        <Formik
          initialValues={{
            db: "1",
            tipoQuery: "select",
            monet: "dba",
            pre: "bono"
          }}
          onSubmit={data => {
            let query = document.getElementById("query");
            let texto = "";
            let select = "select * from ";
            if (data.tipoQuery === "select") {
              if (data.db === "1") {
                texto = select + data.monet;
              } else {
                texto = select + data.pre;
              }
            } else if (data.tipoQuery === "insert") {
            }
            query.innerText = texto;
          }}
        >
          {({ values }) => (
            <div>
              <Form>
                <label className="col-md-2 mb-2">
                  Tipo de query
                  <Field as="select" name="tipoQuery" className="form-control">
                    {options}
                  </Field>
                </label>
                <div className="col-md-2 mb-2">
                  <Field type="radio" name="db" value="1" />
                  <label>Monet</label>
                  <br />
                  <Field type="radio" name="db" value="2" />
                  <label>Produccion</label>
                </div>
                <BaseDato db={values.db} />
                <Field
                  type="submit"
                  value="Generar"
                  className="btn btn-primary m-2"
                />
                <div className="well well-lg" id="query"></div>
                {JSON.stringify(values.db)}
                {JSON.stringify(values.db.pre)}
              </Form>
            </div>
          )}
        </Formik>

        <BackButton />
      </div>
    );
  }
}

export default Querymaker;
