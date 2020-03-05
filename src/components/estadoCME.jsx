import React from "react";
import { Formik, Form, Field } from "formik";
import BackButton from "./backButton";

const EstadoCME = () => {
  return (
    <div>
      <Formik
        initialValues={{ ctaMedId: "", estadoId: "", fecha: "", estado: "" }}
        onSubmit={data => {
          let estados = document.getElementById("estados");
          // El estado 16(fuera de flujo) ademas deja la vigencia en 0
          let insert =
            "INSERT INTO cfncmeestado(CtaMedID, EstadoID, FecModEstado, FecModRegistro, UsuModRegistro, EstCod, NombreResponsable, Observacion, FecPago, MtoDescuadre) VALUES (" +
            data.ctaMedId +
            ", " +
            data.estadoId +
            ", '" +
            data.fecha +
            "', '" +
            data.fecha +
            "', 'op'," +
            data.estado +
            ", 'IMED', 'Cambio de estado solicitado', '1900-01-01', 0);" +
            "\n" +
            "\n";

          if (data.estado === 16) {
            var texto =
              insert +
              "UPDATE cfnctamedica SET ctavigente=0 ,EstCod = " +
              data.estado +
              ", FecModEstado = '" +
              data.fecha +
              "' WHERE CtaMedID = " +
              data.ctaMedId +
              "; ";
          } else {
            texto =
              insert +
              "UPDATE cfnctamedica SET EstCod = " +
              data.estado +
              ", FecModEstado = '" +
              data.fecha +
              "' WHERE CtaMedID = " +
              data.ctaMedId +
              "; ";
          }

          estados.innerText = texto;
        }}
      >
        {({ values }) => (
          <Form>
            <label className="col-md-3 mb-2">
              CtaMedId
              <Field type="number" name="ctaMedId" className="form-control" />
            </label>
            <label className="col-md-3 mb-2">
              EstadoID
              <Field type="number" name="estadoId" className="form-control" />
            </label>
            <label className="col-md-3 mb-2">
              Fecha
              <Field type="date" name="fecha" className="form-control" />
            </label>
            <label className="col-md-3 mb-2">
              Estado
              <Field type="number" name="estado" className="form-control" />
            </label>
            <Field
              type="submit"
              value="Generar"
              className="btn btn-primary m-2"
            />
            <div className="well well-lg" id="estados"></div>
          </Form>
        )}
      </Formik>
      <BackButton />
    </div>
  );
};

export default EstadoCME;
