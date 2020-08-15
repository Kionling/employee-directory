import React from "react";

function Search() {
  return (
    <div className=" d-flex justify-content-center">
      <div className="row">
        <div className="col-sm-12">
          <h1>Search for employee</h1>
        </div>
        <div className="d-flex justify-content-center">
          <form>
            <input type="text" placeholder="Search for an employee"></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Search;
