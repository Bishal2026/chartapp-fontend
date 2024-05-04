import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { baseUrl } from "../baseUrl";

function Signup() {
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const navigate = useNavigate();
  const handelCheckbox = (gender) => {
    setUser({ ...user, gender });
  };

  const onSubmitHandeler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${baseUrl}/api/v1/user/register`, user, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.messsage);
      }
    } catch (error) {
      console.log(error);
    }
    setUser({
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: "",
    });
  };
  return (
    <div className="">
      <div className=" w-full p-10 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
        <h1 className="text-3xl font-bold text-center text-black ">Signup</h1>
        <form onSubmit={onSubmitHandeler} action="">
          <div>
            <label htmlFor="" className=" label p-2">
              <span className="text-base label-text ">Full Name</span>
            </label>
            <input
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              type="text"
              placeholder=" Enter your name"
              className=" rounded-lg outline-none p-2"
            />
          </div>
          <div>
            <label htmlFor="" className=" label p-2">
              <span className="text-base label-text ">username</span>
            </label>
            <input
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              type="text"
              placeholder=" Enter your username"
              className=" rounded-lg outline-none p-2"
            />
          </div>

          <div>
            <label htmlFor="" className=" label p-2">
              <span className="text-base label-text ">password</span>
            </label>
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              type="password"
              placeholder=" Enter your password"
              className=" rounded-lg outline-none p-2"
            />
          </div>
          <div>
            <label htmlFor="" className=" label p-2">
              <span className="text-base label-text ">confirm password</span>
            </label>
            <input
              value={user.confirmPassword}
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
              type="password"
              placeholder=" Enter your password"
              className=" rounded-lg outline-none p-2"
            />
          </div>

          <div className=" flex items-center gap-4 my-4 ">
            <div className="flex gap-2 ">
              <p>Male</p>
              <input
                checked={user.gender === "male"}
                onChange={() => handelCheckbox("male")}
                type="checkbox"
                defaultChecked
                className="checkbox"
              />
            </div>
            <div className="flex gap-2">
              <p>Female</p>
              <input
                checked={user.gender === "female"}
                onChange={() => handelCheckbox("female")}
                type="checkbox"
                defaultChecked
                className="checkbox"
              />
            </div>
          </div>
          <p>
            Aready have a account ?{" "}
            <Link className="font-bold text-zinc-900" to="/login">
              Login
            </Link>
          </p>

          <div>
            <button type="submit" className="btn btn-accent  w-full my-2">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
