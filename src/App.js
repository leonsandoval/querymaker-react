import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
import Routes from "./Routes";
import NavBar from "./components/navbar";
// import Footer from "./components/footer";

function App() {
  return (
    <div className="m-4">
      <NavBar />
      <br />
      <Routes />
      <br />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
