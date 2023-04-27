import React from "react";
import { DATA_LIST } from "../constant/data";

function FunctionResponsiveTable() {
  const tableData = DATA_LIST;

  //Create function for table header
  const renderTableHeader = () => {
    return (
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Email</th>
        <th>Phone</th>
      </tr>
    );
  };

  //Create function for table body
  const renderTableData = () => {
    return tableData.map((row) => {
      const { id, name, age, email, phone } = row;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{age}</td>
          <td>{email}</td>
          <td>{phone}</td>
        </tr>
      );
    });
  };
  return (
    <div className="responsive-table-container">
      <table>
        <thead>{renderTableHeader()}</thead>
        <tbody>{renderTableData()}</tbody>
      </table>
    </div>
  );
}

export default FunctionResponsiveTable;
