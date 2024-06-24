import React, { useState, useEffect } from "react";
import NavItems from "./NavItems";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { RiArrowUpSFill } from "react-icons/ri";
const Sn = () => {
  const [openItemIndex, setOpenItemIndex] = useState(null);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(
    window.innerWidth > 700
  );

  const toggleDropdown = (index) => {
    setOpenItemIndex(index === openItemIndex ? null : index);
  };
  useEffect(() => {
    function handleResize() {
      setIsMobileSidebarOpen(window.innerWidth > 700);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };
  return (
    <div>
      <div className="flex flex-col md:w-64 bg-white text-gray-600">
        {/* Mobile Sidebar */}
        <div className="">
          <button onClick={toggleMobileSidebar} className="">
            {isMobileSidebarOpen ? (
              <IoClose size={20} className="pt-[5%] pl-[5%]" />
            ) : (
              <RiArrowRightDoubleFill
                size={20}
                className="bg-[#C9252C] text-white absolute"
              />
            )}
          </button>
        </div>

        {/* Sidebar Content */}
        <div
          className={`flex flex-col ${isMobileSidebarOpen ? "flex" : "hidden"}`}
        >
          <nav className="p-4">
            <ul className="space-y-4">
              <p className="text-xs mb-2">Components</p>
              {NavItems.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="flex items-center justify-between text-gray-600 w-full py-2 px-4 hover:bg-[#C9252C] hover:text-white focus:outline-none"
                  >
                    <a href={item.url}>
                      <span>{item.name}</span>
                    </a>
                    {item.subItems && (
                      <RiArrowUpSFill
                        className={`h-5 w-5 ${
                          openItemIndex === index ? "transform rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>
                  {openItemIndex === index && item.subItems && (
                    <ul className="border border-gray-600 mt-2 w-full">
                      {item.subItems.map((subItems, subIndex) => (
                        <li
                          key={subIndex}
                          className="border border-gray-400 cursor-pointer"
                        >
                          <a
                            href={subItems.url}
                            className="block py-2 px-4 text-gray-600 hover:text-[#C9252C]"
                          >
                            {subItems.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sn;
