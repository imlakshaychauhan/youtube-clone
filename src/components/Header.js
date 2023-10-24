import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API_URL } from "../utils/constants";
import {cacheResults} from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleToggleMenu = () => dispatch(toggleMenu());
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector(store => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchCache[searchText]) setSuggestions(searchCache[searchText]);
      else getSuggestions();
    }, 200);
    return () => {clearTimeout(timer); };
  }, [searchText]);

  const getSuggestions = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_SUGGESTION_KEY,
      },
    };

    try {
      const response = await fetch(
        YOUTUBE_SEARCH_API_URL + searchText,
        options
      );
      const result = await response.json();
      // console.log(result);
      if (searchText !== "") {
        setSuggestions(result);
        dispatch(cacheResults({
          [searchText]: result
        }))
      }
      else setSuggestions([]);
    } catch (error) {
      console.error(error);
    }
  };

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
            className="ml-6 p-3 cursor-pointer"
            width="140"
            height="45"
            alt=""
            src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png"
          />
        </Link>
      </div>
      <div className="my-auto flex h-12">
        <input
          className="text-lg p-2 pl-4 border border-gray-300 font-normal rounded-l-full w-60"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
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
        <div className="absolute mt-16 shadow-lg w-80 bg-white rounded-xl">
          <ul>
            {showSuggestions &&
              suggestions.map((suggestion, index) => (
                <li key={index} className="py-2 pl-4 text-xl hover:bg-gray-200 cursor-pointer border border-t-1">
                  {suggestion}
                </li>
              ))}
          </ul>
        </div>
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
