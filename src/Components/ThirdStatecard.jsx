import React from "react";
import { FaChartLine } from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa6";
const ThirdStatecard = () => {
  return (
    <div className=" border border-gray-400 p-8 mt-[5%] w-full h-full">
      <h1 className="mb-[2%]">Stats Cards Option 3</h1>
      <div className="grid grid-cols-3 gap-4 max-[1000px]:grid-cols-1">
        {/*---first card */}
        <div className="bg-gradient-to-r from-[#fdcb3e] to-[#ff3044] rounded-md p-4">
          <div className="flex justify-between text-white">
            <h1 className="text-md">Weekly Sales</h1>
            <FaChartLine size={22} />
          </div>
          <h1 className="text-2xl text-white mt-[5%] font-bold">RS.15,0000</h1>
          <div className="mt-[9%]">
            <p className="text-xs text-white font-bold">Increased by 60%</p>
          </div>
        </div>
        {/*---second card */}
        <div className="bg-gradient-to-r from-[#90caf9] to-[#047edf] rounded-md p-4">
          <div className="flex justify-between text-white">
            <h1 className="text-md">Weekly Orders</h1>
            <FaChartPie size={22} />
          </div>
          <h1 className="text-2xl text-white mt-[5%] font-bold">45,6334</h1>
          <div className="mt-[9%]">
            <p className="text-xs text-white font-bold">Decreased by 60%</p>
          </div>
        </div>
        {/*---third card */}
        <div className="bg-gradient-to-r from-[#84d9d2] to-[#07cdae] rounded-md p-4">
          <div className="flex justify-between text-white">
            <h1 className="text-md">Visitos Online</h1>
            <FaChartLine size={22} />
          </div>
          <h1 className="text-2xl text-white mt-[5%] font-bold">95,5741</h1>
          <div className="mt-[9%]">
            <p className="text-xs text-white font-bold">Increased by 5%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdStatecard;
