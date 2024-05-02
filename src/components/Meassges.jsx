import React from "react";
import Meassage from "./Meassage";
import useGetmeassage from "../hooks/useGetmeassage";
import { useSelector } from "react-redux";

function Meassges() {
  useGetmeassage();
  const { messages } = useSelector((store) => store.message);
  if (!messages) return;
  return (
    <div className="px-4 flex-1 overflow-auto">
      {messages?.map((message) => {
        return <Meassage key={message._id} message={message} />;
      })}
    </div>
  );
}

export default Meassges;
