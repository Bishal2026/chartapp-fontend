import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

function Meassage({ message }) {
  const scroll = useRef();

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  });
  const { authUser, seletedUser } = useSelector((store) => store.user);
  return (
    <div>
      <div
        ref={scroll}
        className={`chat ${
          authUser?._id === message?.senderId ? "chat-end" : "chat-start"
        } `}
      >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src={
                message?.senderId === authUser?._id
                  ? authUser?.profilePhoto
                  : seletedUser?.profilePhoto
              }
            />
          </div>
        </div>
        <div className="chat-header"></div>
        <div
          className={`chat-bubble ${
            authUser?._id === message?.senderId
              ? "bg-zinc-300 text-zinc-900"
              : ""
          } `}
        >
          {message?.message}
        </div>
        <div className="chat-footer opacity-50"></div>
      </div>
    </div>
  );
}

export default Meassage;
