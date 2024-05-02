import React from "react";

function OtherUser(props) {
  const user = props.user;
  return (
    <div>
      <div className=" flex items-center  gap-4 hover:bg-zinc-200 rounded p-1 cursor-pointer">
        <div>
          <div className="avatar online">
            <div className=" w-12 rounded-full">
              <img src={user?.profilePhoto} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="avatar ">
            <div className="flex gap-2 flex-1">
              <p className="font-bold text-zinc-900">{user?.fullName}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="divider my-2 "></div>
    </div>
  );
}

export default OtherUser;
