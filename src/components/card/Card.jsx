import React from "react";
import { Link } from "react-router-dom";

/**
 * Card component for displaying a shortcut link with an image.
 *
 * @component
 *
 * @param {*} props - The component props.
 * @param {*} props.image - The the image path.
 * @param {*} props.link - The path link.
 *
 * @returns {JSX.Element} The rendered Card component.
 */
const Card = ({ image, link }) => {
  return (
    <>
      <Link to={link}>
        <div className="flex justify-center items-center bg-white w-[64px] h-[64px]
         rounded-md ">
          <img src={image} alt="Shortcut" />
        </div>
      </Link>
    </>
  );
};

export default Card;
