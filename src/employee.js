import React, { useEffect, useState } from "react";
import API from "./API";
import Search from "./searchBar";

//kind of like the model. data will be passed here and this will show how it should be formatted, then this will be called from the app.js
const Employee = () => {
  //sets up component state, stores employees, data is the data that comes from the API call, set data is the way to update the data
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("component was born");
    API.getRandEmpInfo().then((res) => {
      console.log(res);
      setData(res.data.results);
    });
  }, []);
  console.log(data);
  const add = (a, b) => a + b;
  return data.map((d) => {
    return (
      <div>
          <div>
              Search.Search()
          </div>
        <div key={d.email}>
          {d.name.first} {d.name.last}
        </div>
      </div>
    );
  });
};
export default Employee;
