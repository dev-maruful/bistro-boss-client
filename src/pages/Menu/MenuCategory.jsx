import React from "react";
import Cover from "../shared/Cover";
import MenuItem from "../shared/MenuItem";
import SharedBtn from "../shared/SharedBtn";
import { Link } from "react-router-dom";

const MenuCategory = ({
  items,
  itemImg,
  itemHeading,
  itemSubheading,
  btnText,
}) => {
  return (
    <div>
      <div className="mb-24">
        <Cover
          img={itemImg}
          heading={itemHeading}
          subheading={itemSubheading}
        ></Cover>
      </div>
      <div className="mb-12">
        <div className="grid grid-cols-2 gap-6 mb-12">
          {items.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <Link to={`/orderPage/${itemHeading}`}>
          <SharedBtn text={btnText}></SharedBtn>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
