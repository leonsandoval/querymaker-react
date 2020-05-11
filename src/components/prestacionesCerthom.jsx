import React from "react";

export const prestaciones = [
  {
    CodIdPrestacionCertificador: 13893,
    CodPrestacionCertificador: "0306691",
    CodIdPrestacionHomologo: 47073,
    CodPrestacFinanciador: "0306091",
    CodItemFinanciador: "0",
  },
  {
    CodIdPrestacionCertificador: 13899,
    CodPrestacionCertificador: "0306692",
    CodIdPrestacionHomologo: 47088,
    CodPrestacFinanciador: "0306092",
    CodItemFinanciador: "0",
  },
  {
    CodIdPrestacionCertificador: 13956,
    CodPrestacionCertificador: "0308646",
    CodIdPrestacionHomologo: 47124,
    CodPrestacFinanciador: "0308046",
    CodItemFinanciador: "0",
  },
  {
    CodIdPrestacionCertificador: 13965,
    CodPrestacionCertificador: "0306682",
    CodIdPrestacionHomologo: 47136,
    CodPrestacFinanciador: "0306082",
    CodItemFinanciador: "0",
  },
  {
    CodIdPrestacionCertificador: 16720,
    CodPrestacionCertificador: "0305691",
    CodIdPrestacionHomologo: 59224,
    CodPrestacFinanciador: "0305091",
    CodItemFinanciador: "0",
  },
  {
    CodIdPrestacionCertificador: 16726,
    CodPrestacionCertificador: "0305692",
    CodIdPrestacionHomologo: 59227,
    CodPrestacFinanciador: "0305092",
    CodItemFinanciador: "0",
  },
  {
    CodIdPrestacionCertificador: 27044,
    CodPrestacionCertificador: "0305883",
    CodIdPrestacionHomologo: 163718,
    CodPrestacFinanciador: "0305094",
    CodItemFinanciador: "0",
  },
  {
    CodIdPrestacionCertificador: 27047,
    CodPrestacionCertificador: "0305884",
    CodIdPrestacionHomologo: 163721,
    CodPrestacFinanciador: "0305095",
    CodItemFinanciador: "0",
  },
  {
    CodIdPrestacionCertificador: 27041,
    CodPrestacionCertificador: "0305882",
    CodIdPrestacionHomologo: 163712,
    CodPrestacFinanciador: "0305093",
    CodItemFinanciador: "0",
  },
  {
    CodIdPrestacionCertificador: 27050,
    CodPrestacionCertificador: "0305885",
    CodIdPrestacionHomologo: 163724,
    CodPrestacFinanciador: "0305096",
    CodItemFinanciador: "0",
  },
];

export const prest = prestaciones.map((prestaciones) => (
  <option
    key={prestaciones.CodIdPrestacionCertificador}
    value={prestaciones.CodPrestacionCertificador}
  >
    {prestaciones.CodPrestacFinanciador}
  </option>
));
