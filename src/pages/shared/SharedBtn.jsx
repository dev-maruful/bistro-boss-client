import React from "react";

const SharedBtn = ({ text }) => {
  return (
    <div className="flex justify-center">
      <button className="btn border-0 border-b-4 font-medium border-black text-black bg-transparent text-xl hover:bg-[#111827] hover:border-[#BB8506] hover:text-[#BB8506]">
        {text}
      </button>
    </div>
  );
};

export default SharedBtn;
