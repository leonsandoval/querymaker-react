import React from "react";

const MassCodId = () => {
  return (
    <div className="card-body">
      <input type="file" id="fileUpload" />
      <input type="button" id="upload" value="Upload" onclick="Upload()" />
      <hr />
      <div id="dvCSV"></div>
      <button
        type="button"
        id="generar"
        className="btn btn-primary"
        onclick="escribirmass()"
      >
        Generar
      </button>
      <div className="well well-lg" id="escribe"></div>
    </div>
  );
};

export default MassCodId;
