import React, { useEffect } from "react";
import Sendinput from "./Sendinput";
import Meassges from "./Meassges";
import { useDispatch, useSelector } from "react-redux";
import { setAuthUser, setSeletedUser } from "../redux/userSlice";

function MeassageContainer() {
  const { seletedUser } = useSelector((store) => store.user);
  const { authUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => dispatch(setSeletedUser(null));
  }, []);
  return (
    <>
      {seletedUser != null ? (
        <div className="md:min-w-[550px] flex flex-col justify-between ">
          <div className=" flex items-center  gap-4 bg-zinc-900 p-2 mb-2">
            <div>
              <div className="avatar online">
                <div className=" w-12 rounded-full">
                  <img src={seletedUser?.profilePhoto} alt="" />
                </div>
              </div>
            </div>
            <div>
              <div className="avatar ">
                <div className="flex gap-2 flex-1">
                  <p className="font-bold text-zinc-100">
                    {seletedUser?.fullName}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Meassges />
          <Sendinput />
        </div>
      ) : (
        <div className="md:min-w-[550px] flex flex-col justify-center items-center ">
          <h1 className="text-3xl font-semibold text-zinc-700">
            {" "}
            Hi , {authUser?.fullName}
          </h1>
          <h1 className="text-2xl font-bold text-zinc-900">
            Let's start conversation!!
          </h1>
        </div>
      )}
    </>
  );
}

export default MeassageContainer;
