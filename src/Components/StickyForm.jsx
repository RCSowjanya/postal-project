import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";

const StickyForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const [isChecked, setIsChecked] = useState(true);
  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
      {/*---sticky form---*/}
      <div className="shadow-custom p-5">
        <h1 className="mb-6">Sample Form #1 (Sticky)</h1>
        {/*----Full Name----*/}
        <div className="mb-4">
          <label for="full name">Full Name</label>
          <input
            type="name"
            className="shadow appearance-none w-full rounded border border-gray-500 p-3  text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        {/*----Last Name----*/}
        <div className="mb-4">
          <label for="last name">Last Name</label>
          <input
            type="name"
            className="shadow appearance-none w-full rounded border border-gray-500 p-3  text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        {/*----Gender----*/}
        <div className="w-full mb-4">
          <label for="Gender" className=" text-gray-700 text-sm font-bold mb-2">
            Gender
          </label>
          <select class="w-full bg-white border text-gray-600 border-gray-500 rounded-md shadow-sm py-2 px-4 focus:outline-none ">
            <option value="" disabled selected>
              Select Gender
            </option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>
        {/*----Date of Birth----*/}
        <div className="flex flex-col items-center w-full mb-4">
          <label
            className=" text-gray-700 text-sm font-bold mb-2 w-full"
            for="dateOfBirth"
          >
            Date of Birth
          </label>
          <div className="relative">
            <DatePicker
              id="dateOfBirth"
              selected={selectedDate || new Date()} // Use selectedDate if available, otherwise use current date
              onChange={(date) => setSelectedDate(date)}
              placeholderText="Select Date of Birth"
              className="w-full pl-8  border  border-gray-500 rounded-md shadow-sm py-2 px-4 focus:outline-none text-gray-600"
              dateFormat="dd/MM/yyyy"
              isClearable
              showYearDropdown
              scrollableYearDropdown
            />
            <div className="absolute inset-y-0 left-0 ml-2 py-2 flex items-center  pointer-events-none">
              <FaCalendarAlt
                className="h-5 w-5 text-gray-700 "
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
        {/*----email---*/}
        <div className="mb-4">
          <label for="full name">Email</label>
          <input
            type="email"
            className="shadow appearance-none w-full rounded border border-gray-500 p-3  text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        {/*---Register Now----*/}
        <button className="bg-[#C9252C] font-bold mt-5 rounded-md  text-white px-4 py-2">
          Register Now
        </button>
        {/*---Register Now close----*/}
      </div>
      {/*---sticky form close---*/}
    </div>
  );
};

export default StickyForm;
