import React from "react";

const LiveMessage = () => {
  return (
    <div className="flex my-3 items-center shadow-sm p-1 rounded-md">
      <img
        className="w-7 h-7"
        alt="User Logo"
        src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
      />
      <span className="ml-2 font-bold">Lakshay Chauhan</span>
      <span className="ml-2">Hello World!</span>
    </div>
  );
};

export default LiveMessage;
