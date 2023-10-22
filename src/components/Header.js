import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const handleToggleMenu = () => dispatch(toggleMenu());

  return (
    <div className="flex m-1 justify-between shadow-lg p-3 rounded-2xl">
      <div className="my-auto flex">
        <img
          onClick={() => handleToggleMenu()}
          className="p-1 cursor-pointer"
          width="50"
          height="50"
          alt=""
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
        />
        <Link to="/">
          <img
            // onClick={() => handleToggleMenu()}
            className="ml-6 p-3 cursor-pointer"
            width="140"
            height="45"
            alt=""
            src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png"
          />
        </Link>
      </div>
      <div className="my-auto flex text-center h-12">
        <input
          className="text-lg p-2 pl-4 border border-gray-300 font-normal rounded-l-full w-60"
          placeholder="Search"
        />
        <button className="p-2 border border-gray-300 rounded-r-full w-20">
          <img
            className="p-1 mx-auto mb-4"
            width="30"
            height="30"
            alt=""
            src="https://cdn-icons-png.flaticon.com/512/49/49116.png"
          />
        </button>
      </div>
      <div className="my-auto flex">
        <img
          className="p-2"
          width="50"
          height="20"
          alt=""
          src="https://freeiconshop.com/wp-content/uploads/edd/notification-outline.png"
        />
        <img
          className="p-2"
          width="50"
          height="50"
          alt=""
          src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
        />
      </div>
    </div>
  );
};

export default Header;
