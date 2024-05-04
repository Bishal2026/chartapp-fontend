import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/userSlice";
import { baseUrl } from "../baseUrl";

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmitHandeler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${baseUrl}/api/v1/user/login`, user, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      if (res.data.success) {
        navigate("/");
        dispatch(setAuthUser(res.data));

        toast.success(res.data.messsage);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    setUser({
      username: "",
      password: "",
    });
  };
  return (
    <div className="">
      <div className=" w-full p-10 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
        <h1 className="text-3xl font-bold text-center text-black ">Login</h1>
        <form onSubmit={onSubmitHandeler} action="">
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

          <p className="my-2">
            Don't have a account ?{" "}
            <Link className="font-bold text-zinc-900" to="/register">
              Siginup
            </Link>
          </p>

          <div>
            <button type="submit" className="btn btn-accent  w-full my-2">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
