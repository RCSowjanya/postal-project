import React from "react";
import { FaChartBar } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa6";
const SecondStatecard = () => {
  return (
    <div className="border border-gray-400 p-6 w-full mt-[5%] h-full">
      <h1 className="mb-[2%]">Stats Cards Option 2</h1>
      <div className="grid grid-cols-4 gap-4 max-[1000px]:grid-cols-1">
        {/*----1st card---*/}
        <div className="border border-gray-400 p-8 shadow-md rounded-md">
          <div className="flex justify-between flex-wrap">
            <div>
              <p className="text-gray-600 text-sm uppercase">Traffic</p>
              <h1>350,897</h1>
            </div>
            <div>
              <div className="bg-[#C9252C] p-3 rounded-full">
                <FaChartBar size={22} className=" text-white" />
              </div>
            </div>
          </div>
          {/* Progress */}
          <div className="mt-[5%]">
            <p className="text-[#2d9163]">3.48%</p>
            <p className="text-gray-600 text-sm uppercase">Since Last Month</p>
          </div>
          {/* End Progress */}
        </div>
        {/*----2nd card---*/}
        <div className="border border-gray-400 p-6 shadow-md rounded-md h-full">
          <div className="flex justify-between flex-wrap">
            <div>
              <p className="text-gray-600 text-sm uppercase">New users</p>
              <h1>2356</h1>
            </div>

            <div className="bg-[#fdcb3e] rounded-full p-3">
              <FaUsers size={22} className="text-white" />
            </div>
          </div>
          {/* Progress */}
          <div className="mt-[5%]">
            <p className="text-[#2d9163]">3.48%</p>
            <p className="text-gray-600 text-sm">Since Last week</p>
          </div>
          {/* End Progress */}
        </div>
        {/*----3rd card---*/}
        <div className="border border-gray-400 p-6 shadow-md rounded-md h-full">
          <div className="flex justify-between flex-wrap">
            <div>
              <p className="text-gray-600 text-sm uppercase">Sales</p>
              <h1>924</h1>
            </div>
            <div className="bg-[#1B4790] p-3 rounded-full">
              <FaChartPie size={22} className="text-white" />
            </div>
          </div>
          {/* Progress */}
          <div className="mt-[5%]">
            <p className="text-[#fdcb3e]">1.10%</p>
            <p className="text-gray-600 text-sm">Since Yesterday</p>
          </div>
          {/* End Progress */}
        </div>
        {/*----4th card---*/}
        <div className="border border-gray-400 p-6 shadow-md rounded-md h-full">
          <div className="flex justify-between flex-wrap">
            <div>
              <p className="text-gray-600 text-sm uppercase">Performance</p>
              <h1>49.65%</h1>
            </div>
            <div className="bg-[#1B4790] p-3 rounded-full">
              <FaChartLine size={22} className="text-white" />
            </div>
          </div>
          {/* Progress */}
          <div className="mt-[5%]">
            <p className="text-[#2d9163]">12%</p>
            <p className="text-gray-600 text-sm">Since LastMonth</p>
          </div>
          {/* End Progress */}
        </div>
      </div>
    </div>
  );
};

export default SecondStatecard;
