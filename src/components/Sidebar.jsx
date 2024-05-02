import React from "react";
import { FaSearch } from "react-icons/fa";

import Otherusers from "./Otherusers";
function Sidebar() {
  return (
    <div className=" border-r border-zinc-400 p-4 flex flex-col">
      {" "}
      <form action="" className="flex items-center">
        <input
          type="text"
          className="input input-bordered rounded-md"
          placeholder="Search..."
        />
        <button type="submit" className="btn btn-circle bg-zinc-700 mx-2">
          <FaSearch />
        </button>
      </form>
      <div className="divider px-2 "></div>
      <Otherusers />
      <div className="mt-2">
        <button className="btn btn-sm btn-error">Logout</button>
      </div>
    </div>
  );
}

export default Sidebar;
