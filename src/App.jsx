import React from "react";
import SideBar from "./components/side-bar/SideBar";
import Header from "./components/header/Header";
import Navigation from "./navigation/Navigation";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="body">
        <SideBar />
        <Navigation />
      </div>
    </BrowserRouter>
  );
};

export default App;
