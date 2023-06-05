import React from "react";
import { Helmet } from "react-helmet-async";
import { FaRegCreditCard } from "react-icons/fa";

const Payment = () => {
  return (
    <div className="text-center w-full">
      <Helmet>
        <title>Bistro Boss | Payment</title>
      </Helmet>
      <h3 className="text-4xl mb-16">Payment</h3>
      <div className="flex justify-center">
        <div className="flex gap-6 mb-16 w-[900px]">
          <input
            type="number"
            placeholder={`${(<FaRegCreditCard></FaRegCreditCard>)} Card number`}
            className="input input-bordered w-full"
          />
          <input
            type="date"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
      </div>
      <button className="btn btn-primary btn-wide">Pay</button>
    </div>
  );
};

export default Payment;
