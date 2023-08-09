import React from "react";
import Image from "next/image";

const FeatureBox = (props) => {
  return (
    <div className="bg-white shadow-md overflow-hidden mt-5 transform hover:scale-105 duration-500 ease-in-out rounded-3xl">
      <div className="flex items-center">
        <div className="pl-6 pr-3 py-3">
          <Image layout="fixed" width={35} height={35} src={props.img_url} />
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <hr className="border-b-2 border-gray-300" />
        <h4 className="px-8 font-serif text-lg mb-2 text-left">
          {props.title}
        </h4>
        <h5 className="px-8 text-[12px] mb-5 text-left">{props.desc}</h5>
      </div>
    </div>
  );
};

export default FeatureBox;
