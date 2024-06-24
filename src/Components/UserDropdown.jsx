import React, { useState } from "react";
import { HiOutlineUser } from "react-icons/hi";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-router-dom";
const UserDropdown = () => {
  const [showData, setShowData] = useState(false);

  return (
    <div>
      <OutsideClickHandler
        onOutsideClick={(e) => {
          setShowData(false);
        }}
      >
        <button
          onClick={() => {
            setShowData(!showData);
          }}
        >
          <div className="bg-[#e4e4e4] rounded-full p-3 cursor-pointer">
            <HiOutlineUser size={20} className="" />
          </div>
        </button>
      </OutsideClickHandler>

      {showData && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          {/* User Dropdown content goes here */}
          <div className="p-2">
            <Link
              to="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Login/Logout
            </Link>
            <Link
              to="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Update Profile
            </Link>
            <Link
              to="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Forgot password
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
