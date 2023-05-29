import React from "react";
import {
  FaBars,
  FaCalendarAlt,
  FaCalendarCheck,
  FaComments,
  FaEnvelope,
  FaHome,
  FaRegComments,
  FaShoppingBag,
  FaShoppingCart,
  FaWallet,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 text-base-content">
          <li className="mb-2 text-base uppercase font-medium">
            <Link>
              <FaHome className="mr-3"></FaHome>
              user home
            </Link>
          </li>
          <li className="mb-2 text-base uppercase font-medium">
            <Link>
              <FaCalendarAlt className="mr-3"></FaCalendarAlt>
              reservation
            </Link>
          </li>
          <li className="mb-2 text-base uppercase font-medium">
            <Link>
              <FaWallet className="mr-3"></FaWallet>
              payment history
            </Link>
          </li>
          <li className="mb-2 text-base uppercase font-medium">
            <Link>
              <FaShoppingCart className="mr-3"></FaShoppingCart>
              my cart
            </Link>
          </li>
          <li className="mb-2 text-base uppercase font-medium">
            <Link>
              <FaComments className="mr-3"></FaComments>
              add review
            </Link>
          </li>
          <li className="mb-2 text-base uppercase font-medium">
            <Link>
              <FaCalendarCheck className="mr-3"></FaCalendarCheck>
              my booking
            </Link>
          </li>
          <hr className="text-white mb-2" />
          <li className="mb-2 text-base uppercase font-medium">
            <Link to="/">
              <FaHome className="mr-3"></FaHome>
              home
            </Link>
          </li>
          <li className="mb-2 text-base uppercase font-medium">
            <Link to="/menu">
              <FaBars className="mr-3"></FaBars>
              menu
            </Link>
          </li>
          <li className="mb-2 text-base uppercase font-medium">
            <Link to="/orderPage/salad">
              <FaShoppingBag className="mr-3"></FaShoppingBag>
              shop
            </Link>
          </li>
          <li className="mb-2 text-base uppercase font-medium">
            <Link>
              <FaEnvelope className="mr-3"></FaEnvelope>
              contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
