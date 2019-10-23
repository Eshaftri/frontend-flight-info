import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavComp from "./components/NavComp";
import SearchComp from "./components/SearchComp";
import FlightStyle from "./components/FlightList";

class App extends React.Component() {
  render() {
    return (
      <React.Fragment>
        <NavComp />
        <SearchComp />
        <FlightStyle />
      </React.Fragment>
    );
  }
}

export default App;
