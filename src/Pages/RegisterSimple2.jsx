import React from "react";
import logo from "../Images/India_Post_Logo.png";
import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";

const RegisterSimple2 = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#c9252c45] to-[#ffbc004a]  flex items-center justify-center">
        <div className="grid grid-cols-2 px-[3%] py-[3%] max-[1000px]:grid-cols-1">
          {/*----first login section---*/}
          <div className="bg-white px-5 flex flex-col h-full py-[6%]">
            <div className="mx-auto pt-[10%]">
              <Link to="/">
                <img src={logo} className="w-[150px] mx-auto" alt="post-logo" />
              </Link>
              <h1 className="font-extrabold text-3xl my-[5%]">
                Department Of Post
              </h1>
              <p className="mb-[10%] w-[full] font-bold ">
                Register now and let the adventure begin
              </p>
            </div>
            {/*---firstname and lastname---*/}
            <div className="mx-[4%]">
              <div class="flex gap-3 mb-5 max-[600px]:flex-col">
                <div className="w-full">
                  <label
                    for="first name"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="name"
                    id="name"
                    name="name"
                    className="shadow appearance-none w-full rounded border border-gray-500 p-3  text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="w-full">
                  <label
                    for="last name"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="name"
                    id="name"
                    name="name"
                    className="shadow appearance-none w-full rounded border border-gray-500 p-3  text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              {/*---user id and email---*/}
              <div class="flex gap-3 mb-5  max-[600px]:flex-col">
                <div className="w-full">
                  <label
                    for="user id"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    User ID
                  </label>
                  <input
                    type="number"
                    id="number"
                    name="number"
                    className="shadow appearance-none  w-full rounded border border-gray-500 p-3  text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="w-full">
                  <label
                    for="last name"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    E-mail
                  </label>
                  <input
                    type="name"
                    id="name"
                    name="name"
                    className="shadow appearance-none  w-full rounded border border-gray-500 p-3  text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              {/*---password and confirm password---*/}
              <div class="flex gap-3 mb-5  max-[600px]:flex-col">
                <div className="w-full">
                  <label
                    for="user id"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="shadow appearance-none  w-full rounded border border-gray-500 p-3  text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="w-full">
                  <label
                    for="password"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="shadow appearance-none w-full rounded border border-gray-500 p-3  text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              {/*---Address---*/}
              <div className="w-full mb-5  max-[600px]:flex-col">
                <label
                  for="address"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="shadow appearance-none  w-full rounded border border-gray-500 p-3  text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              {/*--city and select state--*/}
              <div className="flex gap-3 w-full mb-5  max-[600px]:flex-col">
                <div className="w-full">
                  <label
                    for="city"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    className="pl-4 border w-full border-gray-500 p-2"
                  />
                </div>
                <div className="w-full">
                  <label
                    for="state"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    State
                  </label>
                  <select class="block w-full bg-white border border-gray-500 rounded-md shadow-sm py-2 px-4 ">
                    <option value="" disabled selected>
                      Select a state
                    </option>
                    <option value="AL">Assam</option>
                    <option value="AK">Andhra Pradesh</option>
                    <option value="AZ">Delhi</option>
                    <option value="AZ">Karnataka</option>
                  </select>
                </div>
              </div>
              {/*--pincode--*/}
              <div className="w-[50%] mb-5  max-[600px]:flex-col">
                <label
                  for="pincode"
                  className="block text-gray-500 text-sm font-bold mb-2"
                >
                  Pincode
                </label>
                <input
                  type="number"
                  placeholder="Pincode"
                  className="pl-4 border w-full border-gray-500 p-2"
                />
              </div>
              {/*----Login----*/}
              <button className="text-white bg-[#C9252C] w-full py-3 text-center font-bold">
                Register
              </button>
              <Link to="/loginoption1">
                <p className="w-full mx-auto mb-[8%] mt-2">
                  Already Register Login Here
                </p>
              </Link>
            </div>
          </div>
          {/*----login section close----*/}
          {/*--second section artery of nation---*/}
          <div className="bg-gradient-to-r px-[10%] py-9 from-[#930f14] to-[#FFBC00] text-white flex flex-col items-center justify-center h-full">
            <h1 className="text-3xl font-bold mb-[4%]">
              The Artery of the Nation
            </h1>
            <p className="mb-[5%]">
              India Post is the largest postal network in the world, with over
              155,000 post offices and 5.6 lakh postmen and mailwomen. It plays
              a vital role in connecting people and businesses across the
              country, both in urban and rural areas. India Post offers a wide
              range of services, including mail delivery, money transfer,
              banking, insurance, and retail services.
            </p>
            <Link to="/">
              <button className="text-white border-2 flex gap-2 p-2 font-bold  border-white">
                <IoArrowBackSharp size={20} className="" /> Back to Home
              </button>
            </Link>
          </div>

          {/*----second section close---*/}
        </div>
      </div>
      {/*---main div----*/}
    </div>
  );
};

export default RegisterSimple2;
