import React from "react";
import Sidebar from "./Sidebar";
import MeassageContainer from "./MeassageContainer";

function Homepage() {
  return (
    <div className="flex rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 sm:h-[450px] md:h-[550px]">
      <Sidebar />
      <MeassageContainer />
    </div>
  );
}

export default Homepage;
