import React, { useState } from "react";
import { MdOutlineNotifications } from "react-icons/md";
import OutsideClickHandler from "react-outside-click-handler";
import avatar from "../Images/avatar.png";
import { Link } from "react-router-dom";
const NotificationDropdown = () => {
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
          <div className="bg-gray-200 rounded-full p-3 cursor-pointer">
            <MdOutlineNotifications size={20} />
          </div>
        </button>
      </OutsideClickHandler>

      {showData && (
        <div className="origin-top-right absolute right-0 mt-2  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          {/* User Dropdown content goes here */}
          <div className="p-2" role="none">
            <Link
              to="#"
              className=" px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              <div className="flex">
                <img src={avatar} className="w-11 mr-3" alt="avatar" />
                <div className="mt-4">
                  <h2>
                    You have changed <b>your password </b> successfully
                  </h2>
                  <p>15 minutes ago</p>
                </div>
              </div>
            </Link>
            <Link
              to="#"
              className=" px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              <div className="flex">
                <img src={avatar} className="w-11 mr-3" alt="avatar" />
                <div className="mt-4">
                  <h2>
                    You have submited request in <b>ABC Category</b>
                  </h2>
                  <p>2 hours ago</p>
                </div>
              </div>
            </Link>
            <Link
              to="#"
              className=" px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              <div className="flex">
                <img src={avatar} className="w-11 mr-3" alt="avatar" />
                <div className="mt-4">
                  <h2>
                    You have changed <b>your password </b> successfully
                  </h2>
                  <p>15 hours ago</p>
                </div>
              </div>
            </Link>
            <Link
              to="#"
              className=" px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              <div className="flex">
                <img src={avatar} className="w-11 mr-3" alt="avatar" />
                <div className="mt-4">
                  <h2>
                    You have submited request in <b>ABC Category</b>
                  </h2>
                  <p>2 days ago</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
