import React, { Component } from "react";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import LanguageIcon from "@material-ui/icons/Language";
import SearchIcon from "@material-ui/icons/Search";

const SubHeader = () => {
  return (
    <div className="subHeader">
      <div className="subNavContainer">
        <span>Nav1</span>
        <span>Nav2</span>
        <span>Nav3</span>
        <span>Nav4</span>
      </div>

      <div className="searchContainer">
        <input type="text" />
        <SearchIcon />
      </div>
    </div>
  );
};

export default SubHeader;
