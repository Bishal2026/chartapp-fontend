import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSeletedUser } from "../redux/userSlice";

function OtherUser(props) {
  const dispatch = useDispatch();
  const user = props.user;
  const { seletedUser } = useSelector((store) => store.user);
  const seletedUserhandeler = (user) => {
    dispatch(setSeletedUser(user));
  };

  return (
    <div>
      <div
        onClick={() => seletedUserhandeler(user)}
        className={`${
          seletedUser?._id === user?._id ? "bg-zinc-200 " : ""
        } flex items-center  gap-4 hover:bg-zinc-200 rounded p-1 cursor-pointer`}
      >
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
