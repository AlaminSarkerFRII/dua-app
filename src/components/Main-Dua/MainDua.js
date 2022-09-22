import React from "react";
import { AiOutlineShareAlt, AiOutlineMessage } from "react-icons/ai";

const MainDua = ({ duas }) => {
  console.log(duas);
  return (
    <div className="card w-full mx-auto bg-base-100 shadow-2xl my-4">
      <h3>Main Dua</h3>
      {duas.map((dua) => (
        <div className="px-4 mx-4">
          
          <div className="border-2 text-gray-400"></div>
          <h4 className="text-green-600 text-xl">{dua.dua_name_en}</h4>
          <div className="p-1 my-4">
            <h4>{dua?.dua_arabic}</h4>
            <h2>{dua.dua_name_bn}</h2>
          </div>

          <div className="flex p-2">
            <h2>
              <span className="text-xl text-green-500">Reference :</span>
              {dua?.refference_bn}
            </h2>
            <h2 className="px-2">{dua?.refference_en}</h2>
          </div>
          <div className="flex  mx-2 px-2 text-2xl justify-center items-center my-4">
            <audio controls>{dua.audio}</audio>
            <i className="flex px-2 ">
              <AiOutlineShareAlt />
            </i>
            <i>
              <AiOutlineMessage />
            </i>
          </div>
          <div className="border-2 text-gray-400"></div>
        </div>
      ))}
    </div>
  );
};

export default MainDua;
