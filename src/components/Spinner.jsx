import React from "react";
import "./stylesheets/spinner.css";

const Spinner = () => {
  return (
    <div className="spinner-container">
      <span className="loading-message-1">
        Searching...
      </span>
      <span className="loading-message-2">
        The backend service will automatically spin down after a period of no usage. Therefore, you might have to wait 2-3 minutes for the service to spin up.
        <br /> <br /> Please send another query if you haven't received any results within the specified time.
        <br /> <br /> Sorry for this inconvenience :(
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
