import React from "react";
import { Field } from "formik";
import { TablasMonet } from "./tablasMonet.js";
import { tablasBono, columnasBono } from "./tablasBono";

function BaseDato(props) {
  const monetSchema = TablasMonet.map(monet => (
    <option key={monet.id} value={monet.table}>
      {monet.table}
    </option>
  ));

  const preProductivo = ["bono", "lme", "cme"];
  const pre = preProductivo.map(preProductivo => (
    <option key={preProductivo} value={preProductivo}>
      {preProductivo}
    </option>
  ));

  const bono = tablasBono.map(tablasBono => (
    <option key={tablasBono.table_name} value={tablasBono.table_name}>
      {tablasBono.table_name}
    </option>
  ));

  /* const columnas = columnasBono.map(columnasBono => {
    if (tablasBono.table_name === columnasBono.table_name)
      return (
        <label className="col-md-3 mb-2">
          {columnasBono.column_name}
          <Field
            type={columnasBono.data_type}
            name={columnasBono.column_name}
            className="form-control"
            required
          />
        </label>
      );
  }); */

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
      <div>
        <label className="col-md-2 mb-2">
          Base de produccion
          <Field as="select" name="pre" className="form-control">
            {pre}
          </Field>
        </label>
        <label className="col-md-2 mb-2">
          Tablas Bono
          <Field as="select" name="bono" className="form-control">
            {bono}
          </Field>
        </label>

        {JSON.stringify(columnasBono.column_name)}
      </div>
    );
  }
}

export default BaseDato;
