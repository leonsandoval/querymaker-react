import React from "react";

const CSVFileUploader = () => {
  window.onload = function() {
    var button = document.querySelector("#fileUpload + Upload");
    var input = document.getElementById("fileUpload");
    var display = document.getElementById("dvCSV");
    var text = null;
    input.addEventListener("change", addDoc);
    button.addEventListener("click", handleText);

    function addDoc(event) {
      var file = this.files[0];
      var reader = new FileReader();
      reader.onload = function(e) {
        text = reader.result;
        button.removeAttribute("disabled");
      };

      reader.onerror = function(err) {
        console.log(err, err.loaded, err.loaded === 0, file);
        button.removeAttribute("disabled");
      };

      reader.readAsText(event.target.files[0]);
    }

    function handleText() {
      // do stuff with `text`: `reader.result` from `addDoc`
      display.textContent = text;
      button.setAttribute("disabled", "disabled");
      // set `text` to `null` if not needed or referenced again
      text = null;
    }
  };

  return (
    <div>
      <input type="file" accept=".csv" id="fileUpload" />
      <p id="dvCSV">a</p>
      <input type="button" id="upload" value="Upload" />
    </div>
  );
};

export default CSVFileUploader;
