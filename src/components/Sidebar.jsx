import React from "react";
import { FaSearch } from "react-icons/fa";
import Otherusers from "./Otherusers";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const naviagate = useNavigate();
  const logoutHandeler = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/v1/user/logout");
      if (res.data.success) {
        naviagate("/login");
        toast.success(res.data.messsage);
      }
    } catch (error) {
      console.log(error);
    }
  };
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
        <button onClick={logoutHandeler} className="btn btn-sm btn-error">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
