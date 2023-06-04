import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { Helmet } from "react-helmet-async";
import { FaUtensils } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";

const img_hosting_token = import.meta.env.VITE_IMAGE_HOSTING_API;

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgRes) => {
        if (imgRes.success) {
          const imgUrl = imgRes.data.display_url;
          const { name, price, recipe, category } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            recipe,
            category,
            image: imgUrl,
          };
          console.log(newItem);
          axiosSecure.post("/menu", newItem).then((data) => {
            console.log(data.data);
            if (data.data.insertedId) {
              reset();
              toast.success("Item successfully added");
            }
          });
        }
      });
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Bistro Boss | Add Item</title>
      </Helmet>
      <div className="mb-16 mt-12">
        <SectionTitle
          heading="add an item"
          subHeading="What's New?"
        ></SectionTitle>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#F3F3F3] w-[900px] p-12 mb-32"
      >
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
            {...register("name", { required: true })}
          />
        </div>
        <div className="flex w-full gap-6">
          <div className="form-control mb-3 w-1/2">
            <label className="label">
              <span className="label-text text-xl font-semibold mb-2">
                Category*
              </span>
            </label>
            <select
              defaultValue="Pick category"
              className="select select-bordered w-full border-none"
              {...register("category", { required: true })}
            >
              <option disabled>Pick category</option>
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
              {...register("price", { required: true })}
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
            {...register("recipe", { required: true })}
          ></textarea>
        </div>
        <div className="form-control mb-3">
          <input
            type="file"
            className="file-input file-input-ghost w-full max-w-xs"
            {...register("image", { required: true })}
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
