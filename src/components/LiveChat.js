import React from "react";
import LiveMessage from "./LiveMessage";

const LiveChat = ({ name, message }) => {
  return (
    <div className="h-[38rem] border border-gray-200 w-full rounded-lg p-4">
      <LiveMessage />
      <LiveMessage />
      <LiveMessage />
      <LiveMessage />
      <LiveMessage />
      <LiveMessage />
    </div>
  );
};

export default LiveChat;
