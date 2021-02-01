import React, { useEffect, useState } from "react";
import API from "./API";
import Search from "./searchBar";
import Table from "./components/table"
// props{
//   emp
// }
//kind of like the model. data will be passed here and this will show how it should be formatted, then this will be called from the app.js
const Employee = (props) => {
  // //sets up component state, stores employees, data is the data that comes from the API call, set data is the way to update the data
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   console.log("component was born");
  //   API.getRandEmpInfo().then((res) => {
  //     console.log(res);
  //     setData(res.data.results);
  //   });
  // }, []);
  // console.log(data);
 
    return (
      <div>
          {console.log(props.emp)}
            
          <Table  emp= {props.emp} />
        
      </div>
    );
  
};
export default Employee;
