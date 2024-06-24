import React from "react";
import logo from "../Images/India_Post_Logo.png";
import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
const ForgotPassword = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#c9252c45] to-[#ffbc004a] flex items-center justify-center">
        <div className="grid grid-cols-2 p-[3%] max-[1000px]:grid-cols-1">
          {/*----first login section---*/}
          <div className="bg-white px-5 flex flex-col h-screen py-[6%]">
            <div className="mx-auto pt-[10%]">
              <Link to="/">
                <img src={logo} className="w-[150px] mx-auto" alt="post-logo" />
              </Link>
              <h1 className="font-extrabold text-3xl my-[5%]">
                Department Of Post
              </h1>
              <p className="mb-[10%] w-[80%] font-bold text-center">
                Login to access your exclusive features
              </p>
            </div>
            {/*---user id---*/}
            <div class="mb-8 w-[60%] mx-auto">
              <label
                for="user Id"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email ID
              </label>
              <input
                type="number"
                id="user Id"
                name="user Id"
                className="shadow appearance-none border w-full rounded  p-3  text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            {/*---password---*/}
            <div class="mb-8 w-[60%] mx-auto">
              <label
                for="otp"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                OTP
              </label>
              <input
                type="text"
                id="user Id"
                name="user Id"
                className="shadow appearance-none border w-full rounded  p-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            {/*----Login----*/}
            <button className="text-white bg-[#C9252C] mx-auto py-3 text-center font-bold w-[60%]">
              Validate OTP
            </button>
            <Link to="/loginoption2">
              <p className="w-[60%] mx-auto mb-[8%] mt-2">Back to login Page</p>
            </Link>
          </div>
          {/*----login section close----*/}
          {/*--second section artery of nation---*/}
          <div className="bg-gradient-to-r p-[10%] from-[#930f14] to-[#FFBC00] text-white flex flex-col items-center justify-center h-full">
            <h1 className="text-3xl font-bold mb-[4%] ">
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

export default ForgotPassword;
