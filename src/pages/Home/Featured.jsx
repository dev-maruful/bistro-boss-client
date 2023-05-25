import React from "react";
import SectionTitle from "../../components/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <section className="featured-section py-32 text-white mb-32">
      <SectionTitle
        heading="from our menu"
        subHeading="Check it out"
      ></SectionTitle>
      <div className="flex gap-16">
        <div className="w-1/2 flex justify-end">
          <img className="w-[500px]" src={featuredImg} alt="" />
        </div>
        <div className="w-1/2 flex items-center">
          <div>
            <h4 className="text-2xl">March 20, 2023 WHERE CAN I GET SOME?</h4>
            <p className="text-xl mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn border-0 border-b-4 font-medium border-white text-white bg-transparent text-xl hover:bg-[#111827] hover:border-[#BB8506] hover:text-[#BB8506]">
              read more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
