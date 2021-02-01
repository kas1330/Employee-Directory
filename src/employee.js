import React, { useEffect, useState } from "react";
import API from "./API";
import Search from "./searchBar";
import Table from "./components/table";

//kind of like the model. data will be passed here and this will show how it should be formatted, then this will be called from the app.js
const Employee = (props) => {
  return (
    <div>
      {console.log(props.emp)}

      <Table emp={props.emp} />
    </div>
  );
};
export default Employee;
