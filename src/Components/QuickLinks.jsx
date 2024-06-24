import React, { useState } from "react";
import { Link } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaTruckFast } from "react-icons/fa6";
import { RiMailCheckFill } from "react-icons/ri";
import { FaUserPlus } from "react-icons/fa6";
const QuickLinks = () => {
  const [showData, setShowData] = useState(false);
  return (
    <div>
      <OutsideClickHandler
        onOutsideClick={(e) => {
          setShowData(false);
        }}
      >
        <button
          className="flex border-2 font-bold border-gray-400 hover:border-[#cccccc]  text-[#C9252C] hover:bg-[#C9252C] hover:text-white rounded-sm  focus:text-white px-4 py-2"
          onClick={() => {
            setShowData(!showData);
          }}
        >
          Quick Links
          <IoMdArrowDropdown
            size={20}
            className="-mr-1 ml-1 h-5 w-5"
            aria-hidden="true"
          />
        </button>
      </OutsideClickHandler>

      {showData && (
        <div className="origin-top-right absolute right-0 mr-[3%] mt-2 w-64 rounded-md shadow-lg bg-white  focus:outline-none">
          {/* User Dropdown content goes here */}
          <div className="p-1">
            <Link
              to="#"
              className="px-3 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              <span className="flex gap-2">
                <FaTruckFast size={20} />
                Track Your Consignment
              </span>
            </Link>
            <Link
              to="#"
              className="px-3 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              <span className="flex gap-2">
                <RiMailCheckFill size={20} />
                Mail Booking
              </span>
            </Link>
            <Link
              to="#"
              className="px-3 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              <span className="flex gap-2">
                <FaUserPlus size={20} />
                Open a philatelic account
              </span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickLinks;
