import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import BackButton from "./backButton";
import * as Yup from "yup";

function dgv(T) {
  //digito verificador
  var M = 0,
    S = 1;
  for (; T; T = Math.floor(T / 10)) S = (S + (T % 10) * (9 - (M++ % 6))) % 11;
  //return S?S-1:'k';

  console.log(S ? S - 1 : "k");
}

const validationSchema = Yup.object().shape({
  NumLiquidacion: Yup.string()
    .matches(
      /^[0-9]{0,10}-[0-9]{1}$/,
      "el formato de N° de cobranza es '000'+ 7 numeros + guion(-)+ 1 numero"
    )
    .min(12, "los numeros de cobranza son de 12 caracteres incluyendo los 000")
    .max(12, "las cobranzas solo tienen 12 caracteres incluyendo el -")
    .required("ingresa el numero de cobranza")
  // .test("match", "numero de cobranza no valido", function(NumLiquidacion) {
  //   return dgv === this.options.context.NumLiquidacion.slice(-1);
  // })
  // .when(this.NumLiquidacion.slice(-1) === dgv)
});

const EliminarLiquidacion = () => {
  return (
    <div>
      <Formik
        initialValues={{ NumLiquidacion: "" }}
        onSubmit={data => {
          console.log("submit:", data);
        }}
        validationSchema={validationSchema}
        validationSchemaOptions={{ showMultipleFieldErrors: true }}
      >
        {({ values }) => (
          <Form>
            <label forhtml="NumLiquidacion">NumLiquidacion</label>
            <Field
              placeholder="Ej:0001234567-8"
              type="text"
              name="NumLiquidacion"
              className="form-control col-md-3 mb-4"
              maxLength="12"
            />
            <ErrorMessage name="NumLiquidacion">
              {msg => <p>{msg}</p>}
            </ErrorMessage>
            <br />
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
};

export default EliminarLiquidacion;
