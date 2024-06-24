import React from "react";
import { IoIosRadioButtonOff } from "react-icons/io";
import { MdRadioButtonChecked } from "react-icons/md";
import { FaRegSquareCheck } from "react-icons/fa6";
const RadioCheck = () => {
  return (
    <div>
      <div className="flex gap-5 max-[600px]:flex-col">
        {/*----RadioButtons and check boxes-----*/}
        <div className="mb-4 w-1/2 max-[600px]:w-full border border-gray-400 rounded-md p-3">
          <fieldset className="flex flex-wrap gap-6">
            <div className="flex items-center">
              <label htmlFor="germany">Radio Buttons</label>
            </div>
            <div className="flex items-center gap-2">
              <radio id="germany" name="countries" value="Germany" />
              <IoIosRadioButtonOff className="text-gray-400" />
              <label htmlFor="germany">Option1</label>
            </div>
            <div className="flex items-center gap-2">
              <radio id="germany" name="countries" value="Germany" />
              <IoIosRadioButtonOff className="text-gray-400" />
              <label htmlFor="germany">Option2</label>
            </div>

            <div className="flex items-center gap-2">
              <radio
                id="china"
                name="countries"
                value="China"
                defaultChecked
                disabled
                className="text-red-400"
              />
              <MdRadioButtonChecked className="text-red-400" />
              <label htmlFor="china" disabled>
                Option3 (disabled)
              </label>
            </div>
          </fieldset>
        </div>
        <div className="mb-4  w-1/2 max-[600px]:w-full border border-gray-400 rounded-md p-3">
          <div className="flex flex-wrap gap-6" id="checkbox">
            <div className="flex items-center">
              <label htmlFor="germany">Check Boxes</label>
            </div>
            <div className="flex items-center gap-2">
              <checkbox id="accept" defaultChecked className="text-[#c9252c]" />
              <FaRegSquareCheck className="bg-[#c9252c] text-white" />
              <label htmlFor="accept" className="flex">
                Option1
              </label>
            </div>
            <div className="flex items-center gap-2">
              <checkbox id="promotion" />
              <label htmlFor="promotion">Option2</label>
            </div>
            <div className="flex items-center gap-2">
              <checkbox id="promotion" disabled />
              <label htmlFor="promotion" disabled>
                Option3 (disabled)
              </label>
            </div>
          </div>
        </div>
        {/*----RadioButtons and check boxes-closed----*/}
      </div>
    </div>
  );
};

export default RadioCheck;
