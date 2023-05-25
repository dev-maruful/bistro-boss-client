import React from "react";

const FoodCard = ({ item }) => {
  const { price, image, name, recipe } = item;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="mb-8 relative">
        <img className="w-full" src={image} alt="" />
        <p className="absolute top-5 right-5 text-white bg-[#111827] px-6 py-3 font-semibold">
          ${price}
        </p>
      </figure>
      <div className="card-body">
        <div className="flex justify-center">
          <h2 className="card-title text-2xl font-semibold mb-2">{name}</h2>
        </div>
        <p className="text-[#737373] mb-6">{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn border-0 border-b-4 font-medium border-[#BB8506] text-[#BB8506] bg-[#E8E8E8] hover:bg-[#111827] text-xl hover:border-[#BB8506]">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
