import React, { useState, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";
import NavItems from "./NavItems";
import { Link } from "react-router-dom";

const SideNavbar = () => {
  const [open, setOpen] = useState(window.innerWidth > 768);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (itemId) => {
    setActiveDropdown(activeDropdown === itemId ? null : itemId);
  };

  const handleNavItemClick = () => {
    if (window.innerWidth <= 768) {
      setOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="">
      <div
        className={`bg-white pt-4 ${
          open ? "w-64" : "w-0"
        } transition-width duration-200`}
      >
        <IoMdArrowRoundForward
          className={`bg-[#C9252C] ml-4 p-1 z-[999] text-white text-3xl rounded-full top-9 -right-3 cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="">
          <h1 className="text-xs mt-3 pl-5">Components</h1>
        </div>

        <ul className="pt-2 pl-5">
          {NavItems.map((item) => (
            <div key={item.id}>
              <li
                className={`text-gray-900 text-sm flex items-center gap-x-5 cursor-pointer p-2 hover:text-[#C9252C] rounded-md ${
                  item.spacing ? "mt-9" : "mt-2"
                }`}
                onClick={() => item.submenu && toggleDropdown(item.id)}
              >
                <span className="text-2xl float-left">{item.icon}</span>
                <span
                  className={`text-base font-medium flex-1 duration-200 ${
                    !open && "hidden"
                  }`}
                >
                  <Link to={item.link} onClick={handleNavItemClick}>
                    {item.name}
                  </Link>
                </span>

                {item.submenu && (
                  <IoMdArrowDropdown
                    size={20}
                    className={`${activeDropdown === item.id && "rotate-180"}`}
                  />
                )}
              </li>
              {item.submenu && activeDropdown === item.id && open && (
                <ul className="mt-3 border border-gray-400 mx-4">
                  {item.subItems.map((subItem) => (
                    <Link
                      to={subItem.link}
                      key={subItem.id}
                      onClick={handleNavItemClick}
                    >
                      <li className="block text-gray-900 text-sm border border-b-gray-400 items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-[#C9252C] rounded-md">
                        {subItem.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideNavbar;
