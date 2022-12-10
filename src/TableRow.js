import React, { useState } from "react";

function TableRow({ data }) {
  const [colorChange, setColorChange] = useState(false);
  return (
    <tr
      style={{ backgroundColor: colorChange ? "lightgrey" : "white" }}
      onClick={() => setColorChange(!colorChange)}
    >
      <th scope="row">{data.id}</th>
      <td>{data.first_name}</td>
      <td>{data.last_name}</td>
      <td>{data.gender}</td>
      <td>{data.time}</td>
      <td style={{ color: data.status === "true" ? "green" : "red" }}>
        {data.status}
      </td>
    </tr>
  );
}

export default TableRow;
