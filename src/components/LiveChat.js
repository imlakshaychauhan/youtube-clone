import React, { useEffect } from "react";
import LiveMessage from "./LiveMessage";
import { useDispatch, useSelector } from "react-redux";
import {addMessages} from "../utils/chatSlice";
import {generateRandomNames, generateRandomMessages} from "../utils/helper"

const LiveChat = () => {

  const dispatch = useDispatch();

  const liveMessages = useSelector(store => store.chat.liveMessages);

  useEffect(() => {
    const i = setInterval(() =>{
      // API Polling
      dispatch(addMessages({
        name: generateRandomNames(),
        message: generateRandomMessages()
      }));
    }, 1500);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="h-[38rem] border border-gray-200 w-full rounded-lg p-4 overflow-y-scroll flex flex-col-reverse">
    { liveMessages.map((c) => <LiveMessage name={c.name} message={c.message} />) }
    </div>
  );
};

export default LiveChat;
