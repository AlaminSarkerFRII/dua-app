import React from "react";

const MainDua = ({ duas }) => {
  return (
    <div>
      <h3>Main Dua</h3>
      {duas.map((dua) => (
        <div className="px-4 mx-4">
          <div className="p-1">
            <h4>{dua.top_en}</h4>
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
        </div>
      ))}
    </div>
  );
};

export default MainDua;
