import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import { Helmet } from "react-helmet-async";
import { FaRegCreditCard } from "react-icons/fa";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../hooks/useCart";

const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));

  const stripePromise = loadStripe(`${import.meta.env.VITE_PAYMENT_GATEWAY}`);

  return (
    <div className="text-center w-full">
      <Helmet>
        <title>Bistro Boss | Payment</title>
      </Helmet>
      <h3 className="text-4xl mb-16">Payment</h3>
      <div className="mb-16 w-[500px] mx-auto">
        <Elements stripe={stripePromise}>
          <CheckoutForm price={price}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
