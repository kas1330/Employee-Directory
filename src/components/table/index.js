import React from "react";
function Table(props) {
  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">Age</th>
        </tr>
      </thead>
      <tbody>
        {console.log(props.emp)}
        {props.emp.length > 0 ? (
          props.emp.map((employee) => {
            return (
              <tr>
                <td scope="row">
                  <img src={employee.picture.thumbnail} />{" "}
                </td>
                <td>
                  {employee.name.first} {employee.name.last}
                </td>
                <td>{employee.cell}</td>
                <td>{employee.email}</td>
                <td>{employee.dob.age}</td>
              </tr>
            );
          })
        ) : (
          <tr>
            <th scope="row">1</th>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default Table;
