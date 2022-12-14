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
      <span>
        Please allow 20-30 seconds for the server to fully boot up. Then,
        refresh the page and send your query!
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
