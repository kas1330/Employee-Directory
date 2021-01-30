import React, { useEffect, useState } from "react";
import randomUserGen from "./API";

//kind of like the model. data will be passed here and this will show how it should be formatted, then this will be called from the app.js
const Employee = () => {
  //sets up component state, stores employees, data is the data that comes from the API call, set data is the way to update the data
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("coponent was born");
    randomUserGen.getRandEmpInfo().then((res) => {
      console.log(res);
      setData(res.data.results);
    });
  }, []);
  console.log(data);
  const add = (a, b) => a + b;
  return data.map((d) => {
    return (
      <h1 key={d.email}>
        {d.name.first} {d.name.last}
      </h1>
    );
  });
};
export default Employee;
