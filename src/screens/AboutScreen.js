import React from "react";
import MaximizeIcon from "@material-ui/icons/Maximize";

function AboutScreen() {
  return (
    <div className="contentContainer">
      <hr className="line-hr" />
      <h1>ABOUT US</h1>
      <h3>ESS : Energy Service and Solution</h3>
      <ul>
        <li>
          Offer something Energy for home with energy storage system which smart
          control in your home.
        </li>
        <li>Provide something for engineering maintenance something.</li>
        <li>
          Something maintenance service
          <ul>
            <li>Electrical control</li>
            <li>Something section</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default AboutScreen;
