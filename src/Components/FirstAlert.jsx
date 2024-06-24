import React, { useState } from "react";
import { GoAlertFill } from "react-icons/go";
import { IoClose } from "react-icons/io5";
const FirstAlert = () => {
  const [showContent, setShowContent] = useState(true);

  const handleAlertClick = () => {
    setShowContent(true);
  };

  const handleCloseClick = () => {
    setShowContent(false);
  };
  return (
    <div>
      {/*---first Alert----*/}
      {showContent ? (
        <div>
          <div className="bg-[#f8d7da] border border-[#f1aeb5] rounded-md p-6">
            <div className="flex items-center justify-between">
              <div className="flex ">
                <span>
                  <GoAlertFill size={22} className="mr-2 text-[#C9252C] mt-1" />
                </span>
                <p className="text-2xl text-[#C9252C] font-bold">
                  Oh! You got an error!
                </p>
              </div>
              <div className="">
                <button onClick={handleCloseClick}>
                  <IoClose size={24} className="text-gray-600 cursor-pointer" />
                </button>
              </div>
            </div>
            <div className="mt-5 text-[#C9252C]">
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
          className="text-[#C9252C] border-2 border-gray-400 p-2 w-[35%] cursor-pointer font-bold"
          onClick={handleAlertClick}
        >
          Show Error Alert
        </div>
      )}
      {/*----first alert completed*/}
    </div>
  );
};

export default FirstAlert;
