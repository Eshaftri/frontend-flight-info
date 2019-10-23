import React from "react";
import "./ListStyle.css";

const Arrivals = props => {
  return (
    <div>
    <table>
      <thead>
        <tr>
        <th>AIRLINE</th>
        <th>TIME</th>
        <th>FLIGHT</th>
        <th>AIRPORT</th>
        <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
      {
        props.filterFlight.map(row =>(
          <tr key = {row.FlightNo}>
            <td>{<img src={row.Image} alt="" />}</td>
            <td>{row.Time}</td>
            <td>{row.FlightNo}</td>
            <td>{row.PortOfCallA}</td>
            <td>{row.Status}</td>
          </tr>
        ))
      }
      </tbody>
    </table>
    </div>
  );
};

export default Arrivals;

