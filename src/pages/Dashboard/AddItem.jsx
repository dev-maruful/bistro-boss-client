import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { Helmet } from "react-helmet-async";
import { FaUtensils } from "react-icons/fa";

const AddItem = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Add Item</title>
      </Helmet>
      <div className="mb-16 mt-12">
        <SectionTitle
          heading="add an item"
          subHeading="What's New?"
        ></SectionTitle>
      </div>
      <form className="bg-[#F3F3F3] w-[900px] p-12 mb-32">
        <div className="form-control mb-3">
          <label className="label">
            <span className="label-text text-xl font-semibold mb-2">
              Recipe Name*
            </span>
          </label>
          <input
            type="text"
            placeholder="Recipe Name"
            className="input input-bordered w-full pl-7 py-6 border-none"
          />
        </div>
        <div className="flex w-full gap-6">
          <div className="form-control mb-3 w-1/2">
            <label className="label">
              <span className="label-text text-xl font-semibold mb-2">
                Category*
              </span>
            </label>
            <select className="select select-bordered w-full border-none">
              <option disabled selected>
                Pick category
              </option>
              <option>Pizza</option>
              <option>Salad</option>
              <option>Dessert</option>
              <option>Soup</option>
              <option>Drinks</option>
            </select>
          </div>
          <div className="form-control mb-3 w-1/2">
            <label className="label">
              <span className="label-text text-xl font-semibold mb-2">
                Price*
              </span>
            </label>
            <input
              type="text"
              placeholder="Price"
              className="input input-bordered w-full pl-7 py-6 border-none"
            />
          </div>
        </div>
        <div className="form-control mb-3">
          <label className="label">
            <span className="label-text text-xl font-semibold mb-2">
              Recipe Details*
            </span>
          </label>
          <textarea
            placeholder="Recipe Details"
            className="textarea textarea-bordered textarea-lg w-full pl-7 py-6 border-none"
          ></textarea>
        </div>
        <div className="form-control mb-3">
          <input
            type="file"
            className="file-input file-input-ghost w-full max-w-xs"
          />
        </div>
        <div className="form-control w-44">
          <button className="btn bg-[#835D23] border-none rounded-none">
            <span className="mr-2">Add Item</span> <FaUtensils></FaUtensils>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
