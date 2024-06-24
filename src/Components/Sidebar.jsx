import React, { useState, useEffect } from "react";
import NavItems from "./NavItems";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(window.innerWidth > 700);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (itemId) => {
    setOpenDropdown((prev) => (prev === itemId ? null : itemId));
  };
  useEffect(() => {
    function handleResize() {
      setSidebarOpen(window.innerWidth > 700);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`bg-white  text-gray-600 font-bold h-screen ${
        isSidebarOpen ? "w-64" : "w-0"
      }`}
    >
      <div className="flex  items-center justify-between p-4">
        <button
          onClick={toggleSidebar}
          className="text-white  focus:outline-none hover:text-gray-300 cursor-pointer"
        >
          <div className="text-[#c9252c]">
            {isSidebarOpen ? (
              <IoClose size={24} />
            ) : (
              <MdKeyboardDoubleArrowRight
                size={24}
                className="absolute ml-[2%]  text-white bg-[#c9252c]"
              />
            )}
          </div>
        </button>
      </div>
      <div className="">
        {NavItems.map((item) => (
          <div key={item.id} className="p-4">
            <div className="flex items-center cursor-pointer">
              {/* Render main navigation item and arrow icon */}
              <Link to={item.link}>
                <span
                  className="flex gap-3 hover:bg-[#c9252c] hover:text-white focus:bg-[#c9252c] focus:text-white hover:p-3 focus:p-3"
                  onClick={() => toggleDropdown(item.id)}
                >
                  {item.icon}
                  {item.name}
                </span>
              </Link>
              {item.subItems && (
                <div
                  className={`ml-1 transition-transform ${
                    openDropdown === item.id ? "transform rotate-180" : ""
                  }`}
                  onClick={() => toggleDropdown(item.id)}
                >
                  <MdKeyboardArrowDown size={20} />
                </div>
              )}
            </div>
            {item.subItems && openDropdown === item.id && (
              <div className="pl-4">
                {item.subItems.map((subItems) => (
                  <div
                    key={subItems.id}
                    className="p-2  border border-gray-400"
                  >
                    {/* Render dropdown items */}
                    <Link to={subItems.url}>{subItems.name}</Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
