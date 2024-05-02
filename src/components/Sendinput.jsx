import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";

function Sendinput() {
  const [message, setMessage] = useState("");
  const { seletedUser } = useSelector((store) => store.user);
  const { messages } = useSelector((store) => store.message);

  const dispatch = useDispatch();
  const sentmessageHandeler = async (e) => {
    e.preventDefault();
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.post(
        `http://localhost:8000/api/v1/message/send/${seletedUser?._id}`,
        { message },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      dispatch(setMessages([...messages, res?.data?.newMeassge]));
    } catch (error) {
      console.log(error);
    }
    setMessage("");
  };
  return (
    <form onSubmit={sentmessageHandeler} className="px-4 my-3  " action="">
      <div className="w-full relative ">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder="send amessage ..."
          className="border text-sm rounded-lg w-full bg- bg-zinc-700 text-zinc-100 p-3 outline-none  "
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pr-4 "
        >
          <IoSend />
        </button>
      </div>
    </form>
  );
}

export default Sendinput;
