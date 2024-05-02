import React from "react";
import { IoSend } from "react-icons/io5";

function Sendinput() {
  return (
    <form className="px-4 my-3 " action="">
      <div className="w-full relative ">
        <input
          type="text"
          placeholder="send amessage ..."
          className="border text-sm rounded-lg w-full bg- bg-zinc-700 text-zinc-100 p-3 outline-none  "
        />
        <button className="absolute inset-y-0 end-0 flex items-center pr-4 ">
          <IoSend />
        </button>
      </div>
    </form>
  );
}

export default Sendinput;
