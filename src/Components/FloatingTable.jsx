import React, { useState } from "react";
import bg from "../Images/bg.jpg";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import RadioCheck from "./RadioCheck";
const FloatingTable = () => {
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
              <a href="/">🏠Page</a> &gt;
            </span>
            <span className="ml-1">
              <a href="/">Home</a>
            </span>
          </div>
        </div>
        {/*---bread Crumbs close---*/}
        {/*---Registration----*/}
        <div className="mx-8 border border-gray-300 p-6 max-[600px]:p-3">
          <div className="w-full max-[1000px]:px-[2%] flex flex-col space-y-6 justify-center items-center ">
            <h1 className="leading-80 text-3xl  font-bold text-center ">
              Register now and let the adventure begin!
            </h1>
            {/*----first name-last name--*/}
            <div className="flex gap-4 w-full mb-4 max-[600px]:flex-col">
              <input
                type="name"
                placeholder="First Name"
                className="pl-4 border w-full  border-gray-300 p-2"
              />
              <input
                type="name"
                placeholder="Last Name"
                className="pl-4 border w-full border-gray-300 p-2"
              />
            </div>

            {/*---Date of Birth and gender ----*/}
            <div class="flex gap-4 mb-4 max-[600px]:flex-col ">
              <div className="w-full">
                <div>
                  <label
                    for="Gender"
                    value="Gender"
                    className="text-md font-normal w-full"
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
              <div className="w-full">
                <div className="flex flex-col items-center w-full">
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
                      className="w-full pl-8 border  border-gray-500 rounded-md shadow-sm py-2 px-4 focus:outline-none text-gray-600"
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
              </div>
            </div>
            {/*---Phone number and email address---*/}
            <div className="flex gap-4 w-full max-[600px]:flex-col">
              <input
                type="email"
                placeholder="Email"
                className="pl-4 border w-full border-gray-300 p-2"
              />
              <input
                type="number"
                placeholder="phone Number"
                className="pl-4 border w-full border-gray-300 p-2"
              />
            </div>
            {/*---password and confirm password---*/}
            <div className="flex gap-4 w-full max-[600px]:flex-col">
              <input
                type="password"
                placeholder="Password"
                className="pl-4 border w-full border-gray-300 p-2"
              />
              <input
                type="password"
                placeholder="Password"
                className="pl-4 border w-full border-gray-300 p-2"
              />
            </div>
            {/*--Pincode and select state--*/}
            <div className="flex gap-3 w-full mb-5 max-[600px]:flex-col">
              <div className="w-full">
                <label
                  for="pincode"
                  className="block text-gray-500 text-sm  mb-2"
                >
                  Pincode
                </label>
                <input
                  type="text"
                  className="pl-4 border w-full border-gray-300 p-2"
                />
              </div>
              <div className="w-full">
                <label
                  for="state"
                  className="block text-gray-500 text-sm  mb-2"
                >
                  State
                </label>
                <select class="block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 ">
                  <option value="" disabled selected></option>
                  <option value="AL">Assam</option>
                  <option value="AK">Andhra Pradesh</option>
                  <option value="AZ">Delhi</option>
                  <option value="AZ">Karnataka</option>
                </select>
              </div>
            </div>
            {/*---District and Address---*/}
            <div className="flex gap-3 w-full max-[600px]:flex-col">
              <div className="w-full">
                <label
                  for="District"
                  className="block text-gray-500 text-sm  mb-2"
                >
                  District
                </label>
                <input
                  type="text"
                  className="pl-4 border w-full border-gray-300 p-2"
                />
              </div>
              <fieldset className="border border-gray-600  rounded p-4 w-full">
                <legend className="mb-2 text-xs font-light p-2">Address</legend>
              </fieldset>
            </div>
            {/*--Radio button and checkboxes----*/}
            <RadioCheck />
            {/*--Radio button and checkboxes-close---*/}
          </div>
        </div>
        {/*---Registartion close---*/}
      </div>
    </div>
  );
};

export default FloatingTable;
