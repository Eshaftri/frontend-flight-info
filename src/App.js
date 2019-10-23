import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import NavComp from "./components/NavComp"
import SearchComp from "./components/SearchComp"
import FlightStyle from "./components/FlightList"

class App extends React.Component{
  
  state = {
    data: [],
    query : ''
  }

  componentDidMount(arrDep,flightNo) {
    const url = "https://kabrudle.edinburghairport.com/api/flights/all";
    fetch(url)
      .then(res => res.json())
      .then(
        data => this.setState({ data: data.filter(
        data => data.ArrDep === arrDep
      )})
      );
  }

  handleArrDep = arrDep => {
    this.setState({query : ''})
    this.componentDidMount(arrDep)
  }


  render() {
    let filterFlight  = this.state.data.filter((flight)=>{
      return flight.FlightNo.includes(this.state.query) || flight.Status.includes(this.state.query)
  })
    return (
      <React.Fragment>
        <NavComp handleArrDep={this.handleArrDep}/>
        <SearchComp />
        <FlightStyle data = {this.state.data} filterFlight = {filterFlight}/>
      </React.Fragment>
    );
  }
}

export default App;
