import React from "react";

const BackButton = () => {
  let url = window.location.href;
  let backButtonUrl = "";
  if (url.charAt(url.length - 1) === "/") {
    backButtonUrl = url.slice(0, url.lastIndexOf("/"));
    backButtonUrl = backButtonUrl.slice(0, backButtonUrl.lastIndexOf("/"));
  } else {
    backButtonUrl = url.slice(0, url.lastIndexOf("/"));
  }
  return (
    <div className="float-right">
      <a href={backButtonUrl} className="btn btn-info btn-sm">
        {" "}
        volver
      </a>
    </div>
  );
};

export default BackButton;
