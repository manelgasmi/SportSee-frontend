import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="flex-none h-full w-[117px] bg-black flex flex-col justify-evenly items-center text-white min-h-[125vh]">
      <div className="shortcuts flex flex-col gap-[20px]">
        <Link to="/">
          <div className="flex justify-center items-center bg-white w-[64px] h-[64px] rounded-md ">
            <img src="/src/assets/images/meditate.png" />
          </div>
        </Link>
        <Link to="/">
          <div className="flex justify-center items-center bg-white w-[64px] h-[64px] rounded-md ">
            <img src="/src/assets/images/swim.png" />
          </div>
        </Link>
        <Link to="/">
          <div className="flex justify-center items-center bg-white w-64px h-[64px] rounded-md ">
            <img src="/src/assets/images/bycicle.png" />
          </div>
        </Link>
        <Link to="/">
          <div className="flex justify-center items-center bg-white w-64px h-[64px] rounded-md ">
            <img src="/src/assets/images/weight.png" />
          </div>
        </Link>
      </div>
      <div className="[writing-mode:sideways-lr] [text-orientation:mixed] ">
        <p>Copiryght, SportSee 2020</p>
      </div>
    </div>
  );
};

export default SideBar;
