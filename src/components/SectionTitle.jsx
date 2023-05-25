import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mb-12">
      <p className="text-center text-[#D99904] text-xl mb-4 italic">
        ---{subHeading}---
      </p>
      <hr className="border-2 w-[424px] text-[#E8E8E8] mx-auto" />
      <h2 className="text-4xl text-center my-6 uppercase">{heading}</h2>
      <hr className="border-2 w-[424px] text-[#E8E8E8] mx-auto" />
    </div>
  );
};

export default SectionTitle;
