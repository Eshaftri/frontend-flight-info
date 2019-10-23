import React from "react";
import "./SearchComp.css";

const SearchComp = props => (
  <React.Fragment>
    <div className="container search_bar">
      <div className="row justify-content-center align-items-center ">
        <div className="col-md-6">
          <div className="input-group mt-4">
            <input
              type="text"
              name="search"
              placeholder="Search by flight number..."
              className="form-control"
              onChange={props.handleSearch}
            />
          </div>
        </div>
        <div className="col-md-6 my-col">
          <div className="input-group mt-4 ">
            <div className="input-group-prepend">
              <label className="input-group-text">Filter</label>
            </div>
            <select
              className="custom-select"
              defaultValue=""
              onChange={props.handleSelect}
            >
              <option value="">All...</option>
              <option value="EXPECTED">EXPECTED</option>
              <option value="SCHEDULED">SCHEDULED</option>
              <option value="LANDED">LANDED</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default SearchComp;
