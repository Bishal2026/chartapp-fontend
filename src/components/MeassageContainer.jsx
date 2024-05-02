import React from "react";
import Sendinput from "./Sendinput";
import Meassges from "./Meassges";
import { useSelector } from "react-redux";

function MeassageContainer() {
  const { seletedUser } = useSelector((store) => store.user);
  return (
    <div className="md:min-w-[550px] flex flex-col">
      <div className=" flex items-center  gap-4 bg-zinc-900 p-2 mb-2">
        <div>
          <div className="avatar online">
            <div className=" w-12 rounded-full">
              <img src={seletedUser.profilePhoto} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="avatar ">
            <div className="flex gap-2 flex-1">
              <p className="font-bold text-zinc-100">{seletedUser?.fullName}</p>
            </div>
          </div>
        </div>
      </div>
      <Meassges />
      <Sendinput />
    </div>
  );
}

export default MeassageContainer;
