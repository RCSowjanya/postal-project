import React, { useState } from "react";
import NavItems from "./NavItems";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const Menubar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    setOpenDropdown(null);
  };
  const closeNavbar = () => {
    setIsOpen(false);
  };
  const toggleDropdown = (dropdownId) => {
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
  };
  const handleNavItemClick = () => {
    setIsOpen(false); // Close the navbar when a navitem is clicked
    setOpenDropdown(null); // Close the dropdown when a navitem is clicked
  };
  return (
    <nav className="bg-[#ffbc00] menu px-8 h-[70px] text-gray-700 font-medium">
      <div className="flex flex-wrap items-center justify-between">
        <div className="max-[1000px]:hidden space-x-4 min-[1100px]:space-x-9 flex flex-grow-1">
          {NavItems.map((item) => (
            <div
              key={item.id}
              className="relative group hover:bg-[#c9252c] hover:text-white hover:px-2"
            >
              {item.subItems ? (
                <button
                  onClick={() => toggleDropdown(item.id)}
                  className={`flex items-center text-gray-700 leading-[70px] group-hover:bg-[#c9252c] group-hover:text-white focus:outline-none focus:bg-[#c9252c] focus:text-white  ${
                    openDropdown === item.id ? "bg-white " : ""
                  }`}
                >
                  {item.name}
                  {openDropdown === item.id ? (
                    <MdOutlineKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown />
                  )}
                </button>
              ) : (
                <Link
                  to={item.link}
                  className="text-gray-700 font-medium leading-[70px] hover:text-white"
                  onClick={handleNavItemClick}
                >
                  {item.name}
                </Link>
              )}

              {item.subItems && openDropdown === item.id && (
                <div className="absolute z-[999] w-[300px] max-[600px]:w-auto bg-white text-gray-500">
                  {item.subItems.map((subItems) => (
                    <Link
                      key={subItems.id}
                      to={subItems.link}
                      className="block px-4 py-2"
                      onClick={handleNavItemClick}
                    >
                      {subItems.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Responsive Toggle Button */}
        <button
          className="min-[1001px]:hidden text-white  py-2 focus:outline-none focus:border-white focus:ring focus:ring-white"
          onClick={toggleNavbar}
        >
          <div className="bg-[#c9252c] p-2">
            <GiHamburgerMenu size={20} className="bg-[#c9252c]" />
          </div>
        </button>

        {/* Responsive Navbar Links */}
        {isOpen && (
          <div className="min-[1001px]:hidden absolute top-16 left-0 z-[999] right-0 bg-gray-800 text-white ">
            <div className="flex flex-col gap-5 p-8">
              {NavItems.map((item) => (
                <React.Fragment key={item.id}>
                  {item.subItems ? (
                    <button
                      onClick={() => toggleDropdown(item.id)}
                      className="flex items-center  text-left gap-3"
                    >
                      {item.name}
                      {openDropdown === item.id ? (
                        <MdOutlineKeyboardArrowUp />
                      ) : (
                        <MdKeyboardArrowDown />
                      )}
                    </button>
                  ) : (
                    <Link
                      to={item.link}
                      className="block"
                      onClick={handleNavItemClick}
                    >
                      {item.name}
                    </Link>
                  )}

                  {item.subItems && openDropdown === item.id && (
                    <div className="bg-white rounded-md py-2 text-gray-500">
                      {item.subItems.map((subItems) => (
                        <Link
                          key={subItems.id}
                          to={subItems.link}
                          className="block px-4 py-2"
                          onClick={handleNavItemClick}
                        >
                          {subItems.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </React.Fragment>
              ))}
              {/*----searchbar----*/}
              <div className="flex min-[1001px]:hidden">
                <input
                  type="name"
                  placeholder="Search"
                  className="pl-4 border border-gray-300"
                />
                <div className="bg-[#c9252c] p-2">
                  <IoMdSearch size={20} className="text-white" />
                </div>
              </div>
              {/*----searchbar-close---*/}
              {/* Close Icon for Mobile */}
              <button
                onClick={closeNavbar}
                className="flex items-center w-full text-left text-white focus:outline-none"
              >
                <IoClose size={20} className="ml-2 absolute top-8 right-8" />
              </button>
            </div>
          </div>
        )}
        {/*----searchbar----*/}
        <div className="flex max-[1000px]:hidden ">
          <input
            type="name"
            placeholder="Search"
            className="pl-4 border border-gray-300"
          />
          <div className="bg-[#c9252c] p-2">
            <IoMdSearch size={20} className="text-white" />
          </div>
        </div>
        {/*----searchbar-close---*/}
      </div>
    </nav>
  );
};

export default Menubar;
