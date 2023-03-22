import React from "react";
import "./Limit.css";

const Limit = ({setLimit}) => {
  return (
    <div className="Limit">
      <label className="me-4">Results per page:</label>
      <select onChange={(e)=>setLimit(e.target.value)}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
    </div>
  );
};

export default Limit;
