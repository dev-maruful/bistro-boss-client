import React from "react";

const MenuItem = ({ item }) => {
  const { price, image, name, recipe } = item;

  return (
    <div className="flex">
      <img
        className="mr-8 w-[118px] h-[104px] rounded-r-full rounded-bl-full"
        src={image}
        alt=""
      />
      <div>
        <h3 className="text-xl mb-2 uppercase">{name} ------------------</h3>
        <p className="text-[#737373]">{recipe}</p>
      </div>
      <p className="text-[#BB8506] text-xl">${price}</p>
    </div>
  );
};

export default MenuItem;
