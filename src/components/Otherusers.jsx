import React from "react";
import OtherUser from "./OtherUser";
import useGetOtheruser from "../hooks/useGetOtheruser";
import { useSelector } from "react-redux";

function Otherusers() {
  useGetOtheruser();
  const { otherUsers } = useSelector((store) => store.user);

  if (!otherUsers) return null; // Render nothing if otherUsers is null or undefined
  return (
    <div className="overflow-auto">
      {otherUsers?.map((user) => (
        <OtherUser key={user._id} user={user} />
      ))}
    </div>
  );
}

export default Otherusers;
