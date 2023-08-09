import React from "react";

const Card = (props) => {
  return (
    <div className=" bg-white h-80 max-w-xs shadow-md overflow-visible mt-80 transform hover:scale-105 duration-500 ease-in-out rounded-3xl">
      <h4 className="font-serif text-xl mb-2">{props.title}</h4>
      <h5 className="px-8 text-[12px] mb-5">{props.desc}</h5>
    </div>
  );
};

export default Card;
