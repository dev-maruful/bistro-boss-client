import React from "react";
import { Helmet } from "react-helmet-async";
import menuImg from "../../assets/menu/banner3.jpg";
import Cover from "../shared/Cover";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle";
import MenuItem from "../shared/MenuItem";
import SharedBtn from "../shared/SharedBtn";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import MenuCategory from "./MenuCategory";
import { Link } from "react-router-dom";

const Menu = () => {
  const [menu] = useMenu();
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <div className="mb-32">
        <Cover
          img={menuImg}
          heading="our menu"
          subheading="Would you like to try a dish?"
        ></Cover>
      </div>

      {/* todays offer */}
      <div className="mb-12">
        <SectionTitle
          heading="today's offer"
          subHeading="Don't Miss"
        ></SectionTitle>
        <div className="grid grid-cols-2 gap-6 mb-12">
          {offered.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <Link to="/orderPage/salad">
          <SharedBtn text="order your favorite food"></SharedBtn>
        </Link>
      </div>

      {/* desserts */}
      <MenuCategory
        itemImg={dessertImg}
        items={dessert}
        itemHeading="dessert"
        itemSubheading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        btnText="order your favorite food"
      ></MenuCategory>

      {/* pizza */}
      <MenuCategory
        itemImg={pizzaImg}
        items={pizza}
        itemHeading="pizza"
        itemSubheading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        btnText="order your favorite food"
      ></MenuCategory>

      {/* salads */}
      <MenuCategory
        itemImg={saladImg}
        items={salad}
        itemHeading="salad"
        itemSubheading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        btnText="order your favorite food"
      ></MenuCategory>

      {/* soups */}
      <MenuCategory
        itemImg={soupImg}
        items={soup}
        itemHeading="soup"
        itemSubheading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        btnText="order your favorite food"
      ></MenuCategory>
    </div>
  );
};

export default Menu;
