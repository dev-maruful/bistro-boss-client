import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle";
import useMenu from "../../hooks/useMenu";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const ManageItems = () => {
  const [menu] = useMenu();

  return (
    <div className="min-h-screen bg-[#F3F3F3] w-full">
      <Helmet>
        <title>Bistro Boss | Manage Items</title>
      </Helmet>
      <div className="mb-16 mt-12">
        <SectionTitle
          heading="manage all items"
          subHeading="Hurry Up!"
        ></SectionTitle>
      </div>
      <div className="bg-white max-w-[900px] mx-auto p-12">
        <h3 className="uppercase text-3xl font-bold mb-8">
          Total Items: {menu.length}
        </h3>
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
                <th>action</th>
              </tr>
            </thead>
            <tbody className="text-[#737373]">
              {menu.map((item, index) => (
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
                    <button className="btn bg-[#D1A054] border-none text-xl text-white p-3 w-12 h-12 flex justify-center items-center rounded-lg">
                      <FaEdit></FaEdit>
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-error text-white p-3 w-12 text-xl h-12 flex justify-center items-center rounded-lg"
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

export default ManageItems;
