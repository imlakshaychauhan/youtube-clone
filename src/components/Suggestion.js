import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Suggestion = ({ suggestion }) => {
    // console.log(suggestion);
  return (
    <Link to={"/results?search_query=" + suggestion}>
      <button className="w-full text-left py-2 pl-4 text-xl hover:bg-gray-200 cursor-pointer border border-t-1">
        {suggestion}
      </button>
    </Link>
  );
};

export default Suggestion;
