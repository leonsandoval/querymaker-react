import React from "react";

const CodId = () => {
  return (
    <form className="needs-validation" novalidate>
      <div className="card-body">
        <div id="prest">
          <label for="prestaciones">Prestacion</label>
          <select
            name="prestaciones"
            className="custom-select my-1 mr-sm-2"
            id="prestaciones"
          >
            <option value="0" id="0">
              306091
            </option>
            <option value="1" id="1">
              306092
            </option>
            <option value="2" id="2">
              305091
            </option>
            <option value="3" id="3">
              305092
            </option>
            <option value="4" id="4">
              308046
            </option>
            <option value="5" id="5">
              306082
            </option>
          </select>
        </div>
        <div className="form-row">
          <div className="col-md-3 mb-4">
            <label for="NumActoVenta">NumActoVenta</label>
            <input
              type="number"
              name="NumActoVenta"
              id="NumActoVenta"
              className="form-control"
              required
            />
            <div className="invalid-feedback">
              Ingresa el NumActoVenta de la prestacion
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <label for="CodIdVentaConvenio">CodIdVentaConvenio</label>
            <input
              type="number"
              name="CodIdVentaConvenio"
              id="CodIdVentaConvenio"
              className="form-control"
              required
            />
            <div className="invalid-feedback">
              Ingresa el CodIdVentaConvenio de la prestacion
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <label for="FolioBono">FolioBono</label>
            <input
              type="number"
              name="FolioBono"
              id="FolioBono"
              className="form-control"
              required
            />
            <div className="invalid-feedback">
              Ingresa el FolioBono de la prestacion
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <label for="CorrPrestacion">CorrPrestacion</label>
            <input
              type="number"
              name="CorrPrestacion"
              id="CorrPrestacion"
              className="form-control"
              onblur="escribir()"
              required
            />
            <div className="invalid-feedback">
              Ingresa el CorrPrestacion de la prestacion
            </div>
          </div>
        </div>
        <button
          type="button"
          id="generar"
          className="btn btn-primary"
          onclick="escribir()"
        >
          Generar
        </button>
        <div className="well well-lg" id="escribe"></div>
      </div>
    </form>
  );
};

export default CodId;
