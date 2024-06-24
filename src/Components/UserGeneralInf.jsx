import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
const UserGeneralInf = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const [isChecked, setIsChecked] = useState(true);
  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      {/*----first div----*/}
      <div className="">
        {/*---General Information---*/}
        <div className="shadow-custom p-5">
          <h1 className="mb-5 text-2xl">General Information</h1>
          {/*---firstname and lastname----*/}
          <div class="flex gap-3 mb-5 max-[1100px]:flex-col">
            <div className="w-full">
              <label
                for="first name"
                className=" text-gray-700 text-sm font-bold mb-2"
              >
                First Name
              </label>
              <input
                type="name"
                id="name"
                name="name"
                placeholder="pushpendra"
                className="shadow appearance-none w-full rounded border border-gray-500 p-3  text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="w-full">
              <label
                for="last name"
                className=" text-gray-700 text-sm font-bold mb-2"
              >
                Last Name
              </label>
              <input
                type="name"
                id="name"
                name="name"
                placeholder="Chouhan"
                className="shadow appearance-none w-full rounded border border-gray-500 p-3  text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          {/*---Date of Birth and gender ----*/}
          <div class="flex gap-3 mb-5  max-[1100px]:flex-col">
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
            <div className="w-full">
              <label
                for="Gender"
                className=" text-gray-700 text-sm font-bold mb-2"
              >
                Gender
              </label>
              <select class=" w-full bg-white border text-gray-600 border-gray-500 rounded-md shadow-sm py-2 px-4 focus:outline-none ">
                <option value="" disabled selected>
                  Select Gender
                </option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
            </div>
          </div>
          {/*---email and phone number----*/}
          <div class="flex gap-3 mb-5  max-[1100px]:flex-col">
            <div className="w-full">
              <label
                for="email"
                className=" text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="pushpendra@gmail.com"
                className="shadow appearance-none w-full rounded border border-gray-500 p-3  text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="w-full">
              <label
                for="phone number"
                className=" text-gray-700 text-sm font-bold mb-2"
              >
                Phone Number
              </label>
              <input
                type="number"
                id="number"
                name="phone"
                placeholder="9098987906"
                className="shadow appearance-none w-full rounded border border-gray-500 p-3  text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          {/*----location----*/}
          <h1 className="my-6 text-2xl">Location</h1>
          {/*----address----*/}
          <div className="w-full mb-5">
            <label
              for="address"
              className=" text-gray-700 text-sm font-bold mb-2"
            >
              Address
            </label>
            <input
              type="number"
              id="number"
              name="phone"
              placeholder="Laxmi Nagar, Vikas Marg, New Delhi"
              className="shadow appearance-none w-full rounded border border-gray-500 p-3  text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {/*-----city and state----*/}
          <div class="flex gap-3 mb-5  max-[1100px]:flex-col">
            <div className="w-full">
              <label
                for="city"
                className=" text-gray-700 text-sm font-bold mb-2"
              >
                City
              </label>
              <input
                type="number"
                id="number"
                name="phone"
                placeholder="City"
                className="shadow appearance-none w-full rounded border border-gray-500 p-3  text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="w-full">
              <label
                for="Gender"
                className=" text-gray-700 text-sm font-bold mb-2"
              >
                State
              </label>
              <select class=" w-full bg-white border text-gray-600 border-gray-500 rounded-md shadow-sm py-2 px-4 focus:outline-none ">
                <option value="" disabled selected>
                  Select State
                </option>
                <option value="M">Delhi</option>
                <option value="A">Assam</option>
                <option value="P">Andhra Pradesh</option>
                <option value="M">Mumbai</option>
                <option value="K">Karnataka</option>
              </select>
            </div>
          </div>
          {/*--pincode--*/}
          <div className="w-[50%] max-[1100px]:w-full">
            <label
              for="pincode"
              className=" text-gray-700 text-sm font-bold mb-2"
            >
              Pincode
            </label>
            <input
              type="number"
              placeholder="110092"
              className="pl-4 border w-full border-gray-500 text-gray-600 p-2"
            />
          </div>
          {/*----update button---*/}
          <button className="bg-[#C9252C] font-bold mt-5 rounded-md  text-white px-4 py-2">
            Update All
          </button>
        </div>
        {/*---General Information close---*/}
        {/*--change password---*/}
        <div className="shadow-custom my-[3%] p-5">
          <h1 className="mb-4 text-2xl">Change Password</h1>
          {/*----old password new password---*/}
          <div class="flex gap-3 mb-5 max-[1100px]:flex-col">
            <div className="w-full">
              <label
                for="password"
                className=" text-gray-700 text-sm font-bold mb-2"
              >
                Old Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="shadow appearance-none w-full rounded border border-gray-500 p-3  text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="w-full">
              <label
                for="password"
                className=" text-gray-700 text-sm font-bold mb-2"
              >
                New Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="shadow appearance-none w-full rounded border border-gray-500 p-3  text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          {/*----old password new password close---*/}
          {/*---confirm password and OTP----*/}
          <div class="flex gap-3 mb-5  max-[1100px]:flex-col">
            <div className="w-full">
              <label
                for="password"
                className=" text-gray-700 text-sm font-bold mb-2"
              >
                Old Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="shadow appearance-none w-full rounded border border-gray-500 p-3  text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="w-full">
              <label
                for="password"
                className=" text-gray-700 text-sm font-bold mb-2"
              >
                New Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="shadow appearance-none w-full rounded border border-gray-500 p-3  text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          {/*----confirm password and OTP---*/}
          {/*---update Password---*/}
          <button className="bg-[#C9252C] font-bold mt-2 rounded-md  text-white px-4 py-2">
            Update Password
          </button>
          {/*---update password close---*/}
        </div>
        {/*--change password div close---*/}
        {/*---Alerts and Notifications---*/}
        <div className="shadow-custom my-[3%] p-5">
          <h1 className="mb-4 text-2xl">Alerts & Notifications</h1>
          <div className="flex justify-between">
            <div className="">
              <h2 className="text-md">SMS Notifications</h2>
              <p className="text-xs">
                Get SMS notification for your consignment status
              </p>
            </div>

            <div className="flex mt-5 items-center justify-between w-16 bg-white rounded-full p-1">
              <input
                type="checkbox"
                id="smsToggle"
                checked={isChecked}
                onChange={handleChange}
                className="hidden"
              />
              <label
                htmlFor="smsToggle"
                className={`cursor-pointer bg-white border-2 ${
                  isChecked ? "border-red-700 bg-red-700" : "border-gray-200"
                } rounded-full w-10 h-5 flex items-center transition-all duration-300`}
              >
                <span
                  className={`inline-block w-4 h-4 bg-white rounded-full shadow-md transform ${
                    isChecked ? "translate-x-full" : "translate-x-0"
                  } transition-transform duration-300`}
                ></span>
              </label>
            </div>
          </div>
          {/*---email---*/}
          <div className="flex justify-between mt-[3%] max-[1100px]:flex-col">
            <div className="">
              <h2 className="text-md">Email Notifications</h2>
              <p className="text-xs">
                Get Email notification for your consignment status
              </p>
            </div>

            <div className="flex mt-5 items-center justify-between w-16 bg-white rounded-full p-1">
              <input
                type="checkbox"
                id="smsToggle"
                checked={isChecked}
                onChange={handleChange}
                className="hidden"
              />
              <label
                htmlFor="smsToggle"
                className={`cursor-pointer bg-white border-2 ${
                  isChecked ? "border-red-700 bg-red-700" : "border-gray-200"
                } rounded-full w-10 h-5 flex items-center transition-all duration-300`}
              >
                <span
                  className={`inline-block w-4 h-4 bg-white rounded-full shadow-md transform ${
                    isChecked ? "translate-x-full" : "translate-x-0"
                  } transition-transform duration-300`}
                ></span>
              </label>
            </div>
          </div>
        </div>
        {/*---Alerts and Notifications close---*/}
      </div>
      {/*---first div close---*/}
    </div>
  );
};

export default UserGeneralInf;
