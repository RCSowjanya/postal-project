import React, { useState } from "react";
import { MdOutlineNotifications } from "react-icons/md";
import OutsideClickHandler from "react-outside-click-handler";
import { IoSettings } from "react-icons/io5";
import { Link } from "react-router-dom";

const Settings = () => {
  const [showData, setShowData] = useState(false);

  return (
    <div>
      <OutsideClickHandler
        onOutsideClick={() => {
          setShowData(false);
        }}
      >
        <button
          onClick={() => {
            setShowData(!showData);
          }}
        >
          <div className="bg-gray-200 rounded-full p-3 cursor-pointer mt-6">
            <IoSettings size={20} />
          </div>
        </button>
      </OutsideClickHandler>
      {showData && (
        <div className="origin-top-right absolute border-2 border-gray-400 right-0 mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          {/* User Dropdown content goes here */}
          <div className="p-2">
            <Link
              to="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              show
            </Link>
            <Link
              to="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              10
            </Link>
            <Link
              to="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              20
            </Link>
            <Link
              to="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              30
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
