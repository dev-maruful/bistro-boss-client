import React from "react";
import SectionTitle from "../../components/SectionTitle";
import MenuItem from "../shared/MenuItem";
import SharedBtn from "../shared/SharedBtn";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularItems = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-32">
      <SectionTitle
        heading="from our menu"
        subHeading="Check it out"
      ></SectionTitle>
      <div className="grid grid-cols-2 gap-6 mb-12">
        {popularItems.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <SharedBtn text="view full menu"></SharedBtn>
    </section>
  );
};

export default PopularMenu;
