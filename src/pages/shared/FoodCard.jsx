import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { price, image, name, recipe, _id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    // console.log(item);
    if (user && user.email) {
      const orderItem = {
        menuItemId: _id,
        name,
        image,
        price,
        email: user.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderItem),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            refetch();
            toast.success("Successfully added to cart");
          }
        });
    } else {
      toast.error("Please login for add to cart");
      navigate("/login", { state: { from: location } });
    }
  };

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
          <button
            onClick={handleAddToCart}
            className="btn border-0 border-b-4 font-medium border-[#BB8506] text-[#BB8506] bg-[#E8E8E8] hover:bg-[#111827] text-xl hover:border-[#BB8506]"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
