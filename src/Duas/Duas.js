import React from "react";

const Duas = () => {
  return (
    <div className="card w-96 h-4/5 bg-base-300 shadow-xl">
      <div className="card-body">
        {/* divider */}

        <div className="flex flex-col w-full border-opacity-50">
          <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
            content
          </div>
          <div className="divider">OR</div>
        </div>

        {/* divider */}

        <h2 className="card-title">All Duas will be load here</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
};

export default Duas;
