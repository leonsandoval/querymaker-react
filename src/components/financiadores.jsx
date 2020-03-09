import React from "react";

const financiadores = [
  { codfin: 1, nombre: "Fondo Nacional De Salud" },
  { codfin: 11, nombre: "Servicios Medicos" },
  { codfin: 21, nombre: "Financiador Ficticio CME" },
  { codfin: 57, nombre: "Promepart" },
  { codfin: 63, nombre: "ISALUD Isapre de CODELCO" },
  { codfin: 65, nombre: "Chuquicamata" },
  { codfin: 67, nombre: "Colmena Golden Cross" },
  { codfin: 68, nombre: "Rio Blanco" },
  { codfin: 70, nombre: "Normedica" },
  { codfin: 71, nombre: "Consalud" },
  { codfin: 76, nombre: "Fundacion" },
  { codfin: 78, nombre: "Cruz Blanca" },
  { codfin: 80, nombre: "Vida Tres" },
  { codfin: 81, nombre: "Ferrosalud" },
  { codfin: 85, nombre: "Ultrasalud" },
  { codfin: 88, nombre: "MasVida" },
  { codfin: 99, nombre: "Banmedica" },
  { codfin: 113, nombre: "Dipreca Carabineros" },
  { codfin: 114, nombre: "Dipreca Carabineros" },
  { codfin: 115, nombre: "Dipreca Carabineros" },
  { codfin: 116, nombre: "Dipreca Carabineros" }
];
const fin = financiadores.map(financiadores => (
  <option key={financiadores.codfin} value={financiadores.codfin}>
    {financiadores.nombre}
  </option>
));

export default fin;
