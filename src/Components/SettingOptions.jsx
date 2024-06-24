import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const SettingOptions = () => {
  const [showData, setShowData] = useState(false);

  const handleChange = () => {
    setShowData(!showData);
  };
  return (
    <div>
      {/*---settings---*/}
      <div className="relative my-8 bg-white shadow-custom rounded-md hover:bg-gray-300 hover:border-4  hover:border-l-red-600  p-4 flex justify-between">
        <h1>Settings</h1>
        <div className="">
          <button onClick={handleChange}>
            <span>{showData ? <FaMinus /> : <FaPlus />}</span>
          </button>
          {showData && (
            <div className="absolute left-0 mt-5 w-full  bg-white  shadow-lg rounded-md py-2">
              {/* Dropdown content goes here */}
              <p className="bg-white border-b border-gray-400 p-3 ">
                Sub menu1
              </p>
              <p className="bg-white p-3">Sub menu2</p>
            </div>
          )}
        </div>
      </div>
      {/*---settings close---*/}
    </div>
  );
};

export default SettingOptions;
