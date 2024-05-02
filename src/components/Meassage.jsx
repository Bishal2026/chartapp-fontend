import React from "react";
import { useSelector } from "react-redux";

function Meassage({ message }) {
  const { seletedUser } = useSelector((store) => store.user);
  return (
    <div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src={seletedUser.profilePhoto}
            />
          </div>
        </div>
        <div className="chat-header">
          <time className="text-xs opacity-50 text-zinc-100">12:45</time>
        </div>
        <div className="chat-bubble">{message?.message}</div>
        <div className="chat-footer opacity-50"></div>
      </div>
    </div>
  );
}

export default Meassage;
