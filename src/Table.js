import React, { useState } from "react";
import TableHeadRow from "./TableHeadRow";
import TableRow from "./TableRow";
import dummyData from "../src/dummyData";

function Table() {
  const [dataCopy, setDataCopy] = useState([...dummyData]);
  return (
    <table className="table">
      <thead class="thead-dark">
        <TableHeadRow data={dataCopy} setDataCopy={setDataCopy} />
      </thead>
      <tbody>
        {dataCopy.map((data) => {
          return <TableRow data={data} />;
        })}
      </tbody>
    </table>
  );
}

export default Table;
