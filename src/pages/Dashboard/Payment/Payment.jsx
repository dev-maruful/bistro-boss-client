import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import { Helmet } from "react-helmet-async";
import { FaRegCreditCard } from "react-icons/fa";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const Payment = () => {
  const stripePromise = loadStripe(`${import.meta.env.VITE_PAYMENT_GATEWAY}`);

  return (
    <div className="text-center w-full">
      <Helmet>
        <title>Bistro Boss | Payment</title>
      </Helmet>
      <h3 className="text-4xl mb-16">Payment</h3>
      <div className="mb-16 w-[500px] mx-auto">
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
