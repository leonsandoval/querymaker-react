import React from "react";
import { Field } from "formik";

function BaseDato(props) {
  const monet = ["dba", "cme", "gct", "liquidador", "lme"];
  const monetSchema = monet.map(monet => (
    <option value={monet}>{monet}</option>
  ));
  const preProductivo = ["bono", "lme", "cme"];
  const pre = preProductivo.map(preProductivo => (
    <option value={preProductivo}>{preProductivo}</option>
  ));
  if (props.db === "1") {
    return (
      <label className="col-md-2 mb-2">
        Schema de monet
        <Field as="select" name="monet" className="form-control">
          {monetSchema}
        </Field>
      </label>
    );
  } else {
    return (
      <label className="col-md-2 mb-2">
        Base de produccion
        <Field as="select" name="pre" className="form-control">
          {pre}
        </Field>
      </label>
    );
  }
}

export default BaseDato;
