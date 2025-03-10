import React, { useEffect, useState } from "react";

import caloriesIcon from "/src/assets/images/energy.svg";
import proteinIcon from "/src/assets/images/chicken.svg";
import fatIcon from "/src/assets/images/cheeseburger.svg";
import carbsIcon from "/src/assets/images/apple.svg";

/**
 * KeyDataComponent - Displays nutritional key data in a card format.
 *
 * @component
 *
 * @param {*} props - The component props.
 * @param {*} props.keyData - The key nutrition data .
 *
 * @returns {JSX.Element} The rendered key data component.
 */
const KeyDataComponent = ({ keyData }) => {
  const [keyDataList, setKeyDataList] = useState([]);

  useEffect(() => {
      setKeyDataList([
        {
          color: "bg-red-500-opacity-10",
          icon: caloriesIcon,
          number: keyData.calorieCount,
          unit: "kCal",
          name: "Calories",
        },
        {
          color: "bg-blue-500-opacity-10",
          icon: proteinIcon,
          number: keyData.proteinCount,
          unit: "g",
          name: "Protéines",
        },
        {
          color: "bg-yellow-500-opacity-10",
          icon: carbsIcon,
          number: keyData.lipidCount,
          unit: "g",
          name: "Glucides",
        },
        {
          color: "bg-pink-500-opacity-10",
          icon: fatIcon,
          number: keyData.carbohydrateCount,
          unit: "g",
          name: "Lipides",
        },
      ]);
  }, []);

  return (
    <>
      {keyDataList.map((data) => (
        <div key={data.name} className="w-[49%] xl:w-full  mb-4 flex bg-lightgray rounded-md p-8 text-center gap-6">
          <div className={data.color + " w-[60px] h-[60px] flex items-center justify-center "} >
            <img src={data.icon} alt={data.name} className="spent-energy--icon" />
          </div>
          <div className="flex flex-col justify-center gap-2">
            <span className="font-bold size-5">{data.number}{data.unit}</span>
            <p className="size-3.5 text-gray-500">{data.name}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default KeyDataComponent;
