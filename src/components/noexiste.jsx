import React from "react";

const BonoNoExiste = () => {
  return (
    <div className="card-body">
      <div className="form-row">
        <div className="col-md-3 mb-4">
          <label for="FolioBono">Folio Bono</label>
          <input
            type="text"
            name="FolioBono"
            id="FolioBono"
            className="form-control"
            required
          />
        </div>
        <div className="col-md-3 mb-4">
          <label for="CodIdVentaConvenio">CodIdVentaConvenio</label>
          <input
            type="text"
            name="CodIdVentaConvenio"
            id="CodIdVentaConvenio"
            className="form-control"
            required
          />
        </div>
        <div className="col-md-3 mb-4">
          <label for="codEntidad">Codigo Entidad</label>
          <input
            type="text"
            name="codEntidad"
            id="codEntidad"
            className="form-control"
            required
          />
        </div>
        <div className="col-md-3 mb-4">
          <input type="radio" id="fin" name="entidad" value="1" checked />
          <label for="fin">Financiador</label>
          <br />
          <input type="radio" id="cia" name="entidad" value="3" />
          <label for="cia">Compañia</label>
        </div>
      </div>
      <button
        className="btn btn-primary"
        type="button"
        id="generar"
        onclick="noExiste()"
      >
        Generar
      </button>

      <div className="well well-lg" id="noExiste"></div>
    </div>
  );
};

export default BonoNoExiste;
