import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      {" "}
      <tr>
        <th>Nome</th>
        <th>e-mail</th>
      </tr>
    </thead>
  );
};

const TableBody = () => {
  return (
    <tbody>
      <tr>
        <td>Natacsha</td>
        <td>nat@mail.com</td>
      </tr>
      <tr>
        <td>Felipe</td>
        <td>felipe@mail.com</td>
      </tr>
      <tr>
        <td>Maite</td>
        <td>maite@mail.com</td>
      </tr>
      <tr>
        <td>Juliana</td>
        <td>ju@mail.com</td>
      </tr>
    </tbody>
  );
};

class Table extends Component {
  render() {
    return (
      <table className="table">
        <TableHeader />
        <TableBody />
      </table>
    );
  }
}

export default Table;
