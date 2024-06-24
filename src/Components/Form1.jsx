import React, { useState } from "react";
import bg from "../Images/bg.jpg";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import RadioCheck from "./RadioCheck";
const Form1 = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const [isChecked, setIsChecked] = useState(true);
  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
      <div id="content">
        {/*----Bg-img with heading ---*/}
        <div className="bg-container">
          <div className="bg-img w-full h-auto py-4">
            <div className="overlay"></div>
            <h1 className="text-4xl max-[600px]:text-xl text-center font-bold text-white Uppercase">
              Form One
            </h1>
          </div>
        </div>
        {/*Bg-img close*/}
        {/*---bread crumbs-----*/}
        <div className="p-11">
          <div>
            <span className="">
              <a href="/">🏠 Home</a> &gt;
            </span>
            <span className="ml-1">
              <a href="/">Form1</a>
            </span>
          </div>
        </div>
        {/*---bread Crumbs close---*/}
        {/*---form----*/}
        <div className="mx-8 border p-8 max-[600px]:p-2 border-gray-400 rounded-md bg-white">
          <div className="w-full p-5">
            <h1 className="text-2xl font-bold mb-[5%]">
              Register now and let the adventure begin!
            </h1>
            {/*---firstname and lastname----*/}
            <div className="flex gap-4 mb-4  max-[600px]:flex-col">
              <div className="w-1/2 max-[600px]:w-full">
                <label for="name" className="text-md w-full">
                  First Name
                </label>
                <input
                  type="name"
                  className="border border-gray-400 rounded-md w-full p-2 mt-2"
                />
              </div>
              <div className="w-1/2 max-[600px]:w-full">
                <label for="name" className="text-md w-full">
                  Last Name
                </label>
                <input
                  type="name"
                  className="border border-gray-400 rounded-md  w-full p-2 mt-2"
                />
              </div>
            </div>
            {/*---Gender and Date of birth---*/}
            <div className="flex gap-4 mb-4 w-full max-[600px]:flex-col">
              <div className="w-1/2 max-[600px]:w-full">
                <div>
                  <label
                    for="Gender"
                    value="Gender"
                    className="text-md font-normal"
                  >
                    Gender
                  </label>
                </div>
                <select
                  id="Gender"
                  className="border border-gray-400 rounded-md mt-2 p-2 w-full"
                  required
                >
                  <option>Select Your Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div className="w-1/2 max-[600px]:w-full">
                <div className="flex flex-col items-center">
                  <label
                    className="text-gray-700 text-sm font-bold mb-2  w-full "
                    for="dateOfBirth"
                  >
                    Date of Birth
                  </label>
                  <div className="relative w-full">
                    <DatePicker
                      id="dateOfBirth"
                      selected={selectedDate || new Date()} // Use selectedDate if available, otherwise use current date
                      onChange={(date) => setSelectedDate(date)}
                      placeholderText="Select Date of Birth"
                      className="w-full pl-8 border  border-gray-500 rounded-md shadow-sm py-2 px-4 focus:outline-none text-gray-600"
                      dateFormat="dd/MM/yyyy"
                      isClearable
                      showYearDropdown
                      scrollableYearDropdown
                    />
                    <div className="absolute inset-y-0 left-0 ml-2 py-2 flex items-center  pointer-events-none">
                      <FaCalendarAlt
                        className="h-5 w-5 text-gray-700"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*----E-mail and Phone Number-----*/}
            <div className="flex gap-4 mb-4  max-[600px]:flex-col">
              <div className="w-1/2 max-[600px]:w-full">
                <label for="name" className="text-md w-full">
                  E-Mail
                </label>
                <input
                  type="name"
                  className="border border-gray-400 rounded-md w-full p-2 mt-2"
                />
              </div>
              <div className="w-1/2 max-[600px]:w-full">
                <label for="phone number" className="text-md w-full">
                  Phone
                </label>
                <input
                  type="number"
                  className="border border-gray-400 rounded-md w-full p-2 mt-2"
                />
              </div>
            </div>
            {/*----Password and Confirm Password-----*/}
            <div className="flex gap-4 mb-4 w-full  max-[600px]:flex-col">
              <div className="w-1/2 max-[600px]:w-full">
                <label for="name" className="mb-4 text-md w-full">
                  Password
                </label>
                <input
                  type="name"
                  className="border border-gray-400 rounded-md w-full p-2 mt-2"
                />
              </div>
              <div className="w-1/2 max-[600px]:w-full">
                <label for="phone number" className="mb-4 text-md w-full">
                  Confirm Password
                </label>
                <input
                  type="number"
                  className="border border-gray-400 rounded-md w-full p-2 mt-2"
                />
              </div>
            </div>
            {/*----Pincode and state-----*/}
            <div className="flex gap-4 mb-4 max-[600px]:flex-col">
              <div className="w-1/2 max-[600px]:w-full">
                <label for="name" className="mb-4 text-md w-full">
                  Pincode
                </label>
                <input
                  type="name"
                  className="border border-gray-400 rounded-md w-full p-2 mt-2"
                />
              </div>
              <div className="w-1/2 max-[600px]:w-full">
                <label for="phone number" className="mb-4 text-md w-full">
                  State
                </label>
                <input
                  type="number"
                  className="border border-gray-400 rounded-md w-full p-2 mt-2"
                />
              </div>
            </div>
            {/*---District and Address-----*/}
            <div className="flex gap-4 mb-4 max-[600px]:flex-col">
              <div className="w-1/2 max-[600px]:w-full">
                <label for="name" className="mb-4 text-md w-full">
                  District
                </label>
                <input
                  type="name"
                  className="border border-gray-400 rounded-md w-full p-2 mt-2"
                />
              </div>
              <div className="w-1/2 max-[600px]:w-full">
                <label
                  htmlFor="comment"
                  className="w-full"
                  value="Your message"
                >
                  Address
                </label>
                <input
                  id="address"
                  required
                  rows={3}
                  className="border border-gray-400 rounded-md w-full p-2 mt-2"
                />
              </div>
            </div>
            {/*----RadioButtons and check boxes-----*/}
            <div className="mb-4">
              <RadioCheck />
            </div>
            {/*----RadioButtons and check boxes-closed----*/}
            {/*----all fields are closed---*/}
          </div>
          {/*---Register button----*/}
          <button className="bg-[#c9252c] text-white my-9 p-3 ml-5">
            Register Now
          </button>
          {/*---Register button closed----*/}
        </div>
      </div>
      {/*---form ended---*/}
    </div>
  );
};

export default Form1;
