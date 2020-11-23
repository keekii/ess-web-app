import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./styles/home.css";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Banner from "./components/Banner";
import BannerNav from "./components/BannerNav";
import { BrowserRouter, Route } from "react-router-dom";
import AboutScreen from "./screens/AboutScreen";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </div>
  );
}

export default App;
