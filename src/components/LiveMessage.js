import React from "react";

const LiveMessage = ({name, message}) => {
  return (
    <div className="flex my-3 items-center shadow-sm rounded-md">
      <img
        className="w-7 h-7"
        alt="User Logo"
        src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
      />
      <span className="ml-2 font-bold">{name}</span>
      <span className="ml-2">{message}</span>
    </div>
  );
};

export default LiveMessage;
