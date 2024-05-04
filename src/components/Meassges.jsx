import React from "react";
import Meassage from "./Meassage";
import useGetmeassage from "../hooks/useGetmeassage";
import { useSelector } from "react-redux";
import useGetRealTimeMessage from "../hooks/useGetRealTimeMessage";

function Meassges() {
  useGetmeassage();
  useGetRealTimeMessage();
  const { messages } = useSelector((store) => store.messages);
  if (!messages) return;
  return (
    <div className="px-4 flex-1 overflow-auto">
      {messages &&
        messages?.map((message) => {
          return <Meassage key={message._id} message={message} />;
        })}
    </div>
  );
}

export default Meassges;
