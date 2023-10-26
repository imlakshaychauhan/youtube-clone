import React, { useEffect, useState } from "react";
import LiveMessage from "./LiveMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { generateRandomNames, generateRandomMessages } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [myMessage, setMyMessage] = useState("");
  const liveMessages = useSelector((store) => store.chat.liveMessages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      dispatch(
        addMessages({
          name: generateRandomNames(),
          message: generateRandomMessages(),
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="h-[38rem] border border-gray-200 w-full rounded-lg p-4 overflow-y-scroll flex flex-col-reverse">
        {liveMessages.map((c) => (
          <LiveMessage name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="w-full my-3 text-center border border-gray-200 rounded-lg p-2 flex"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(myMessage);
          setMyMessage("");
          dispatch(
            addMessages({
              name: "Lakshay Chauhan",
              message: myMessage,
            })
          );
        }}
      >
        <input
          className="text-lg font-semibold w-full p-2 mx-1 border-b border-b-gray-300"
          type="text"
          placeholder="Type.."
          value={myMessage}
          onChange={(e) => setMyMessage(e.target.value)}
        />
        <button
          type="submit"
          className="p-2 ml-3 font-bold bg-green-300 rounded-lg"
        >
          <img className="w-9 h-9" alt="Send" src="send.png" />
        </button>
      </form>
    </>
  );
};

export default LiveChat;
