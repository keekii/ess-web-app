import React, { Component } from "react";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import LanguageIcon from "@material-ui/icons/Language";
import SearchIcon from "@material-ui/icons/Search";
import {
  BrowserRouter,
  Route,
  Link,
  useRouteMatch,
  NavLink,
} from "react-router-dom";
import Banner from "./Banner";
import AboutScreen from "../screens/AboutScreen";
import ServiceScreen from "../screens/ServiceScreen";
import SolarScreen from "../screens/SolarScreen";
import ProductScreen from "../screens/ProductScreen";
import ContactScreen from "../screens/ContactScreen";

const Header = () => {
  return (
    <>
      <div className="headerContainer">
        <div className="header">
          <Link to="/">
            <img
              src={require("../assets/logo.jpg")}
              alt="logo"
              className="logo"
            />
          </Link>

          <div className="navContainer">
            <NavLink
              activeClassName="selected"
              exact
              to="/"
              className="text-link"
            >
              Home
            </NavLink>
            <NavLink
              activeClassName="selected"
              to="/solar"
              className="text-link"
            >
              Energy Storage
            </NavLink>
            <NavLink
              activeClassName="selected"
              to="/product"
              className="text-link"
            >
              Product
            </NavLink>
            <NavLink
              activeClassName="selected"
              to="/service"
              className="text-link"
            >
              Service
            </NavLink>
            <NavLink
              activeClassName="selected"
              to="/contact"
              className="text-link"
            >
              Contact us
            </NavLink>
            <NavLink
              activeClassName="selected"
              to="/about"
              className="text-link"
            >
              About us
            </NavLink>

            {/* <LanguageIcon className="navIcon" /> */}
            <PersonOutlineIcon className="navIcon" />
          </div>
        </div>
        {/* <div className="subHeader">
          <div className="subNavContainer">
            <span>Solar cell</span>
            <span>Product</span>
            <span>Service</span>
            <span>About us</span>
            <span>Contact us</span>
          </div>

          <div className="searchContainer">
            <input type="text" />
            <SearchIcon />
          </div>
        </div> */}
      </div>
      <Route path="/home" component={Banner} />
      <Route path="/solar" component={SolarScreen} />
      <Route path="/product" component={ProductScreen} />
      <Route path="/service" component={ServiceScreen} />
      <Route path="/contact" component={ContactScreen} />
      <Route path="/about" component={AboutScreen} />
      <Route path="/" exact={true} component={Banner} />
    </>
  );
};

export default Header;
