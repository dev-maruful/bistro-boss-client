import React from "react";
import useCart from "../../hooks/useCart";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Item has been deleted.", "success");
              refetch();
            }
          });
      }
    });
  };

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
        <div className="flex justify-between items-center mb-8">
          <h3 className="uppercase text-3xl font-bold">
            Total orders: {cart.length}
          </h3>
          <h3 className="uppercase text-3xl font-bold">
            total price: ${total}
          </h3>
          <Link to="/dashboard/payment">
            <button className="btn bg-[#D1A054] text-white border-none text-xl font-bold">
              pay
            </button>
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead className="uppercase font-semibold text-base">
              <tr>
                <th></th>
                <th>item image</th>
                <th>item name</th>
                <th>price</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody className="text-[#737373]">
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <th className="text-black">{index + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="w-20 rounded">
                        <img
                          src={item.image}
                          alt="Tailwind-CSS-Avatar-component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-error text-white p-3 w-12 h-12 flex justify-center items-center rounded-lg"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
