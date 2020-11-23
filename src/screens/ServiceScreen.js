import React from "react";

function ServiceScreen() {
  return (
    <div className="contentContainer">
      <hr className="line-hr" />
      <h1>SERVICE & SOLUTIONS</h1>

      <ul>
        <li>Energy optimization for Residential</li>
        <li>Section building</li>
        <li>
          Preventive maintenance service
          <ul>
            <li>Electrical control system</li>
            <li>Air conditioner system</li>
            <li>Instrumental</li>
            <li>Home energy service</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default ServiceScreen;
