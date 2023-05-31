import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.name} is an Admin now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDelete = (id) => {};

  return (
    <div className="bg-[#F3F3F3] w-full h-screen">
      <Helmet>
        <title>Bistro Boss | All Users</title>
      </Helmet>
      <div className="mb-16 mt-12">
        <SectionTitle
          heading="manage all users"
          subHeading="How Many??"
        ></SectionTitle>
      </div>
      <div className="bg-white max-w-[900px] mx-auto p-12">
        <h3 className="uppercase text-3xl font-bold mb-8">
          Total users: {users.length}
        </h3>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead className="uppercase font-semibold text-base">
              <tr>
                <th></th>
                <th>name</th>
                <th>email</th>
                <th className="text-center">role</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody className="text-[#737373]">
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th className="text-black">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role == "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn bg-[#D1A054] border-none text-white p-3 w-12 h-12 flex justify-center items-center rounded-lg"
                      >
                        <FaUsers></FaUsers>
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(user._id)}
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

export default AllUsers;
