import React from "react";
import "./stylesheets/spinner.css";

const Spinner = () => {
  return (
    <div className="spinner-container">
      <span>
        Loading resources. If this has been loading for more than 10 seconds,
        please send your query again. It is likely the server hasn't been booted
        up when the query was sent.
      </span>
      <div className="lds-grid">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
