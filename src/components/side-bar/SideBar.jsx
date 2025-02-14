import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="shortcuts">
        <Link to="/">
          <div className="shortcut">
            <img src="/src/assets/images/meditate.png" />
          </div>
        </Link>
        <Link to="/">
          <div className="shortcut">
            <img src="/src/assets/images/swim.png" />
          </div>
        </Link>
        <Link to="/">
          <div className="shortcut">
            <img src="/src/assets/images/bycicle.png" />
          </div>
        </Link>
        <Link to="/">
          <div className="shortcut">
            <img src="/src/assets/images/weight.png" />
          </div>
        </Link>
      </div>
      <div className="copyright">
        <p>Copiryght, SportSee 2020</p>
      </div>
    </div>
  );
};

export default SideBar;
