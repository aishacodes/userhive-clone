import React from "react";

const FeatureCard = ({ title, desc }) => {
  "#7381ff";
  return (
    <div className="bg-[#2c2c30] w-[27rem] pb-9 rounded-md pt-4 px-4">
      <h1 className="text-white font-bold text-3xl lg:text-xl">{title}</h1>
      <p className="text-gray1 my-4 text-xl lg:text-xs">{desc}</p>
      <button>Learn more</button>
    </div>
  );
};

export default FeatureCard;
