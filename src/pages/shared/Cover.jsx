import React from "react";
import { Parallax } from "react-parallax";

const Cover = ({ img, heading, subheading }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="hero h-[500px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-3xl">
            <h1 className="mb-2 text-7xl uppercase font-bold">{heading}</h1>
            <p className="text-2xl font-semibold">{subheading}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
