import React from "react";

export const prestaciones = [
  {
    CodIdPrestacionCertificador: 13893,
    CodPrestacionCertificador: "0306691",
    CodIdPrestacionHomologo: 47073,
    CodPrestacFinanciador: "0306091",
    CodItemFinanciador: "0"
  },
  {
    CodIdPrestacionCertificador: 13899,
    CodPrestacionCertificador: "0306692",
    CodIdPrestacionHomologo: 47088,
    CodPrestacFinanciador: "0306092",
    CodItemFinanciador: "0"
  },
  {
    CodIdPrestacionCertificador: 13956,
    CodPrestacionCertificador: "0308646",
    CodIdPrestacionHomologo: 47124,
    CodPrestacFinanciador: "0308046",
    CodItemFinanciador: "0"
  },
  {
    CodIdPrestacionCertificador: 13965,
    CodPrestacionCertificador: "0306682",
    CodIdPrestacionHomologo: 47136,
    CodPrestacFinanciador: "0306082",
    CodItemFinanciador: "0"
  }
];

export const prest = prestaciones.map(prestaciones => (
  <option
    key={prestaciones.CodIdPrestacionCertificador}
    value={prestaciones.CodPrestacionCertificador}
  >
    {prestaciones.CodPrestacionCertificador}
  </option>
));