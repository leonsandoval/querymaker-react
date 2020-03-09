import React from "react";
import BackButton from "./backButton";
import { Formik, Form, Field } from "formik";
import fin from "./financiadores";

const NuevoCME = () => {
  return (
    <div>
      <Formik
        initialValues={{
          codFin: "",
          rutConvenio: "",
          codLugar: "",
          nombreConvenio: "",
          homNumeroConvenio: "",
          homLugarConvenio: "",
          codSucVenta: "",
          codArancelInterface: "",
          fecInicio: "",
          fecFin: ""
        }}
        onSubmit={data => {
          let cme = document.getElementById("cme");
          let texto =
            "***** USAR SOLO LOS INSERT QUE NO ESTEN CREADOS DE ANTEMANO ***** " +
            "\n" +
            "\n" +
            "INSERT INTO prmlugarpam(CodFinanciador, CodLugar, RutConvenio, extHomLugarConvenio, extSucVenta) VALUES(" +
            data.codFin +
            ", " +
            data.codLugar +
            ", '" +
            data.rutConvenio +
            "', '" +
            data.homLugarConvenio +
            "', '" +
            data.codSucVenta +
            "');" +
            "\n" +
            "\n" +
            "INSERT INTO cmefincnvxml(CodFinanciador, RutConvenio) VALUES(" +
            data.codFin +
            ", '" +
            data.rutConvenio +
            "');" +
            "\n" +
            "\n" +
            "INSERT INTO convenioctamedica(CedPrestador, CodFinanciador, CodLugar, CorrConvenio, NombredelConvenio, CodArancelInterface, HomNumeroConvenio, HomLugarConvenio, AtrCargaCuentas, FecInicioVigencia, FecFinVigencia, AtrEstadosVigencia, CedModificacion, FecActualizacion)VALUES('" +
            data.rutConvenio +
            "', " +
            data.codFin +
            ", " +
            data.codLugar +
            ", 1 , '" +
            data.nombreConvenio +
            "', '" +
            data.codArancelInterface +
            "', '" +
            data.homNumeroConvenio +
            "', '" +
            data.homLugarConvenio +
            "', 1 ,'" +
            data.fecInicio +
            "', '" +
            data.fecFin +
            "', 1, '0000000000-0', now() );" +
            "\n" +
            "\n" +
            "INSERT INTO cmlugares(CodLugar, NombreLugar, AtrTiposDireccion, GloDireccion, DepNumero, Email, AtrCodigosRegion, CodComuna, AtrNombrePaises, CodAreaTelefono, NumTelefono, NumFax, FecInicioVigencia, FecFinVigencia, AtrEstadosVigencia, AtrFinanciadorFull, AtrNombrePaisesCedMod, AtrTiposIdentificacionCedMod, CedModificacion, FecActualizacion) VALUES(" +
            data.codLugar +
            ", '" +
            data.nombreConvenio +
            "', 1, 'NULL', 0, 'NULL', 0, 0, 56, 'NULL', 'NULL', 'NULL', '" +
            data.fecInicio +
            "', '" +
            data.fecFin +
            "',1, 2, 56, 1, '0000000000-0', now() );" +
            "\n" +
            "\n" +
            "INSERT INTO cmprestadores(CedPrestador, NombrePrestador, FecInicioVigencia, FecFinVigencia, AtrEstadosVigencia, CedModificacion, FecActualizacion) VALUES('" +
            data.rutConvenio +
            "', '" +
            data.nombreConvenio +
            "', '" +
            data.fecInicio +
            "', '" +
            data.fecFin +
            "',1, '0000000000-0', now() );" +
            "\n" +
            "\n";

          cme.innerText = texto;
        }}
      >
        {({ values }) => (
          <Form>
            <label className="col-md-3 mb-2">
              Codigo Financiador
              <Field as="select" name="codFin" className="form-control">
                {fin}
              </Field>
            </label>
            <label className="col-md-3 mb-2">
              Rut Prestador
              <Field
                type="text"
                name="rutConvenio"
                className="form-control"
                maxLength="12"
              />
            </label>
            <label className="col-md-3 mb-2">
              Codigo Lugar
              <Field type="number" name="codLugar" className="form-control" />
            </label>
            <label className="col-md-3 mb-2">
              Nombre del Convenio
              <Field
                type="text"
                name="nombreConvenio"
                className="form-control"
              />
            </label>
            <label className="col-md-3 mb-2">
              HomNumeroConvenio
              <Field
                type="text"
                name="homNumeroConvenio"
                className="form-control"
              />
            </label>
            <label className="col-md-3 mb-2">
              HomLugarConvenio
              <Field
                type="text"
                name="homLugarConvenio"
                className="form-control"
              />
            </label>
            <label className="col-md-3 mb-2">
              CodSucVenta
              <Field type="text" name="codSucVenta" className="form-control" />
            </label>
            <label className="col-md-3 mb-2">
              CodArancelInterface
              <Field
                type="text"
                name="codArancelInterface"
                className="form-control"
              />
            </label>
            <label className="col-md-3 mb-2">
              Fecha de Inicio
              <Field type="date" name="fecInicio" className="form-control" />
            </label>
            <label className="col-md-3 mb-2">
              Fecha de Termino
              <Field type="date" name="fecFin" className="form-control" />
            </label>
            <Field
              type="submit"
              value="Generar"
              className="btn btn-primary m-2"
            />
            <div className="well well-lg mt-4" id="cme"></div>
          </Form>
        )}
      </Formik>
      <BackButton />
    </div>
  );
};

export default NuevoCME;
