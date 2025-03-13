import React from "react";
import { Link } from "react-router-dom";
import Card from "../card/Card";

/**
 * SideBar component
 *
 * @component
 *
 * @returns {JSX.Element} The sidebar component.
 */
const SideBar = () => {
  const shortcuts = [
    { image: "/src/assets/images/meditate.png", link: "/" },
    { image: "/src/assets/images/swim.png", link: "/" },
    { image: "/src/assets/images/bycicle.png", link: "/" },
    { image: "/src/assets/images/weight.png", link: "/" },
  ];
  return (
    <div className="flex-none w-[117px] bg-black flex flex-col 
    justify-evenly items-center text-white min-h-[125vh]">
      <div className="flex flex-col gap-[20px]">
        {shortcuts.map((shortcut, index) => (
          <Card key={index} image={shortcut.image} link={shortcut.link} />
        ))}
      </div>

      <div className="[writing-mode:sideways-lr] [text-orientation:mixed] ">
        <p>Copyright, SportSee 2020</p>
      </div>
    </div>
  );
};

export default SideBar;
