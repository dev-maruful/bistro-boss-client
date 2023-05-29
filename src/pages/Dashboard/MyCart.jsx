import React from "react";
import useCart from "../../hooks/useCart";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle";

const MyCart = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  return (
    <div className="bg-[#F3F3F3] w-full h-screen">
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <div className="mb-16 mt-12">
        <SectionTitle
          heading="wanna add more?"
          subHeading="My Cart"
        ></SectionTitle>
      </div>
      <div className="bg-white max-w-[900px] mx-auto p-12">
        <div className="flex justify-between mb-8">
          <h3 className="uppercase text-3xl font-bold">
            Total orders: {cart.length}
          </h3>
          <h3 className="uppercase text-3xl font-bold">total price: {total}</h3>
          <button className="btn bg-[#D1A054] text-white border-none text-xl font-bold">
            pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
