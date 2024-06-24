import React from "react";
import logo from "../Images/India_Post_Logo.png";
import emblem from "../Images/emblem-of-india.png";
import { Link } from "react-router-dom";
import UserDropdown from "./UserDropdown";
import NotificationDropdown from "./NotificationDropdown";
const TopHeader = () => {
  return (
    <div className="flex items-center max-[600px]:flex-col max-[600px]:gap-y-6 justify-between px-[2%] py-[1%]">
      {/*logo section*/}
      <div className="flex">
        <Link to="/">
          <img src={logo} className="w-32 h-16" alt="post-logo" />
        </Link>
        <div className="border border-r-gray-400 ml-[5%] mr-[10%]"></div>
        <img src={emblem} className="w-9 h-16" alt="emblem-of-India" />
      </div>
      {/*heading*/}
      <div className="text-center">
        <h2 className="mb-[3%] text-2xl font-bold">
          Department of Posts (DoP)
        </h2>
        <p className="font-medium">
          Ministry of Communications, Government of India
        </p>
      </div>
      {/*login icons*/}
      <div className="flex gap-5">
        <UserDropdown />
        <NotificationDropdown />
      </div>
    </div>
  );
};

export default TopHeader;
