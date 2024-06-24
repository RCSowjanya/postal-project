import React, { useState } from "react";
import { Link } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdHistory } from "react-icons/md";
import { FaReceipt } from "react-icons/fa";
const Reports = () => {
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
          Reports
          <IoMdArrowDropdown size={20} className="" />
        </button>
      </OutsideClickHandler>

      {showData && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          {/* User Dropdown content goes here */}
          <div className="p-2">
            <Link
              to="#"
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              <span className="flex gap-2">
                <MdHistory size={20} />
                Order History
              </span>
            </Link>
            <Link
              to="#"
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              <span className="flex gap-2">
                <FaReceipt size={20} />
                All Reports
              </span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reports;
