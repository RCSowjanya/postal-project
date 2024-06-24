import React from "react";
import { FaRankingStar } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { FaChartBar } from "react-icons/fa";
import { FaLifeRing } from "react-icons/fa6";
const FirstStatecard = () => {
  return (
    <div>
      {/* first stats card option */}

      <div className="border border-gray-400 p-6 w-full h-full">
        <h1 className="mb-[2%]">Stats Cards Option</h1>
        <div className="grid grid-cols-4 gap-4 max-[1000px]:grid-cols-1">
          {/*----1st  card---*/}
          <div className="border border-gray-400 p-8 shadow-md rounded-md">
            <div className="flex justify-between">
              <div>
                <h1 className="text-[#C9252C] text-2xl font-extrabold mb-[16%]">
                  2780
                </h1>
                <p>New User</p>
              </div>
              <div>
                <FaUsers size={44} className="text-[#C9252C]" />
              </div>
            </div>
            {/* Progress */}
            <div className="rounded-full bg-gray-300 w-full">
              <div className="h-2 w-[80%] bg-[#C9252C] rounded-l-lg mt-[2%]"></div>
            </div>
            {/* End Progress */}
          </div>
          {/*----2nd card---*/}
          <div className="border border-gray-400 p-6 shadow-md rounded-md">
            <div className="flex justify-between">
              <div>
                <h1 className="text-[#fdcb3e] text-xl font-extrabold mb-[16%]">
                  1561
                </h1>
                <p>New Transition</p>
              </div>
              <div>
                <FaChartBar size={44} className="text-[#fdcb3e]" />
              </div>
            </div>
            {/* Progress */}
            <div className="rounded-full bg-gray-300 w-full">
              <div className="h-2 w-[35%] bg-[#fdcb3e] rounded-l-lg mt-[2%]"></div>
            </div>
            {/* End Progress */}
          </div>
          {/*----3rd card---*/}
          <div className="border border-gray-400 p-6 shadow-md rounded-md">
            <div className="flex justify-between">
              <div>
                <h1 className="text-[#2d9163] text-xl font-extrabold mb-[16%]">
                  64.89 %
                </h1>
                <p>Growth Rate</p>
              </div>
              <div>
                <FaRankingStar size={44} className="text-[#2d9163]" />
              </div>
            </div>
            {/* Progress */}
            <div className="rounded-full bg-gray-300 w-full">
              <div className="h-2 w-[60%] bg-[#2d9163] rounded-l-lg mt-[2%]"></div>
            </div>
            {/* End Progress */}
          </div>
          {/*----4th card---*/}
          <div className="border border-gray-400 p-6 shadow-md rounded-md">
            <div className="flex justify-between">
              <div>
                <h1 className="text-[#1B4790] text-xl font-extrabold mb-[16%]">
                  423
                </h1>
                <p>Support Ticket</p>
              </div>
              <div>
                <FaLifeRing size={40} className="text-[#1B4790]" />
              </div>
            </div>
            {/* Progress */}
            <div className=" rounded-full bg-gray-300 w-full">
              <div className="h-2 w-[40%] bg-[#1B4790] rounded-l-lg mt-[2%]"></div>
            </div>
            {/* End Progress */}
          </div>
        </div>
      </div>
      {/*----first state card close----*/}
    </div>
  );
};

export default FirstStatecard;
