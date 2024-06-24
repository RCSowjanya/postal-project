import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
const SecondAlert = () => {
  const [showContent, setShowContent] = useState(true);

  const handleAlertClick = () => {
    setShowContent(true);
  };

  const handleCloseClick = () => {
    setShowContent(false);
  };
  return (
    <div>
      {/*----second alert----*/}
      {showContent ? (
        <div>
          <div className="bg-[#d1e7dd] border border-[#c4e1d3] rounded-md p-6">
            <div className="flex items-center justify-between">
              <div className="flex ">
                <span>
                  <FaCheckCircle
                    size={22}
                    className="mr-2 text-[#448844] mt-1"
                  />
                </span>
                <p className="text-2xl text-[#448844] font-bold">
                  Oh! You got an error!
                </p>
              </div>
              <div className="">
                <button onClick={handleCloseClick}>
                  <IoClose size={24} className="text-gray-600 cursor-pointer" />
                </button>
              </div>
            </div>
            <div className="mt-5 text-[#448844]">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum condimentum maximus ex, sit amet dapibus nisl
                pulvinar quis.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="text-[#C9252C] border-2 border-gray-400 p-2 cursor-pointer w-[35%] font-bold"
          onClick={handleAlertClick}
        >
          Show Error Alert
        </div>
      )}
      {/*----second alert completed*/}
    </div>
  );
};

export default SecondAlert;
