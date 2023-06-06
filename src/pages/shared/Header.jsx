import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-hot-toast";
import { FaCartPlus } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  const handleLogout = () => {
    logout()
      .then(() => toast.success("Logout successful"))
      .catch((err) => {
        toast.error(err.code);
      });
  };

  const navItems = (
    <>
      <li className="uppercase text-base font-bold">
        <Link to="/">Home</Link>
      </li>
      <li className="uppercase text-base font-bold">
        <Link to="">Contact Us</Link>
      </li>
      {isAdmin ? (
        <li className="uppercase text-base font-bold">
          <Link to="/dashboard/adminhome">Dashboard</Link>
        </li>
      ) : (
        <li className="uppercase text-base font-bold">
          <Link to="/dashboard/userhome">Dashboard</Link>
        </li>
      )}
      <li className="uppercase text-base font-bold">
        <Link to="/menu">our menu</Link>
      </li>
      <li className="uppercase text-base font-bold">
        <Link to="/orderPage/salad">our shop</Link>
      </li>
      <li>
        <Link to="/dashboard/mycart">
          <button className="btn bg-transparent border-none hover:bg-transparent">
            <FaCartPlus className="text-2xl"></FaCartPlus>
            <div className="badge badge-error">+{cart?.length || 0}</div>
          </button>
        </Link>
      </li>
      {user ? (
        <li>
          <button
            onClick={handleLogout}
            className="uppercase text-base font-bold mr-0 pr-1"
          >
            Logout
          </button>
          <div className="avatar">
            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src={
                  user?.photoURL
                    ? user?.photoURL
                    : "https://img.freepik.com/free-icon/user_318-552176.jpg?size=626&ext=jpg&ga=GA1.1.857116354.1678803730&semt=sph"
                }
              />
            </div>
          </div>
        </li>
      ) : (
        <li className="uppercase text-base font-bold">
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar fixed z-10 max-w-7xl bg-opacity-30 bg-black text-white px-14 pt-6 pb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <div>
          <span className="text-3xl font-black uppercase">Bistro boss</span>
          <br />
          <span className="uppercase text-2xl font-bold tracking-[0.2em]">
            restaurant
          </span>
        </div>
      </div>
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
    </div>
  );
};

export default Header;
