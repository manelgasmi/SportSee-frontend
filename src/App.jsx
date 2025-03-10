import React from "react";
import SideBar from "./components/side-bar/SideBar";
import Header from "./components/header/Header";
import Navigation from "./navigation/Navigation";
import { BrowserRouter } from "react-router-dom";

/**
 * App component
 *
 * @returns {*} 
 */
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="body flex flex-row h-full">
        <SideBar />
        <Navigation />
      </div>
    </BrowserRouter>
  );
};

export default App;
