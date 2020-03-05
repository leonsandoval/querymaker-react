import React, { Component } from "react";
import { Formik, Field, Form } from "formik";
import BackButton from "./backButton";

class EliminarLiquidacion extends Component {
  render() {
    return (
      <div>
        <Formik
          initialValues={{ NumLiquidacion: "" }}
          onSubmit={data => {
            console.log("submit:", data);
          }}
        >
          {({ values }) => (
            <Form>
              <label for="NumLiquidacion">NumLiquidacion</label>
              <Field
                placeholder="Ej:0001234567-8"
                type="text"
                name="NumLiquidacion"
                className="form-control col-md-3 mb-4"
                maxlength="12"
                required
              />
              <br />
              <p>
                DELETE FROM trliquidacion WHERE NumLiquidacion = '
                {values.NumLiquidacion}';
              </p>
              <p>
                DELETE FROM trdocumentosliquidacion WHERE NumLiquidacion = '
                {values.NumLiquidacion}';
              </p>
              <p>
                DELETE FROM treventosliquidacion WHERE NumLiquidacion = '
                {values.NumLiquidacion}';
              </p>
              <p>
                DELETE FROM trestadosliquidacion WHERE NumLiquidacion = '
                {values.NumLiquidacion}';
              </p>
              <p>
                DELETE FROM trdistribucionpago WHERE NumLiquidacion = '
                {values.NumLiquidacion}';
              </p>
              <p>
                DELETE FROM trliqbash WHERE NumLiquidacion = '
                {values.NumLiquidacion}';
              </p>
              <p>
                DELETE FROM trliquidacionerronea WHERE numliquidacion = '
                {values.NumLiquidacion}';
              </p>
            </Form>
          )}
        </Formik>
        <BackButton />
      </div>
    );
  }
}

export default EliminarLiquidacion;
