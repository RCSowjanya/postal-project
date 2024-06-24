import React from "react";
import option1img from "../Images/login-bg2.png";
import logo from "../Images/India_Post_Logo.png";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import { FaLock } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";

const LoginOption1 = () => {
  return (
    <div>
      <div className="h-screen grid grid-cols-2 max-[1000px]:grid-cols-1">
        {/*---Bg-image---*/}
        <img src={option1img} className="h-screen w-full" alt="loginimg" />
        {/*---Bg-image close---*/}
        {/*----form-----*/}
        <div className="flex flex-col space-y-6 justify-center max-[1000px]:py-8">
          <img src={logo} className=" w-40 mx-auto" alt="post-logo" />
          <h1 className="leading-80 text-3xl w-1/2 font-bold mx-auto ">
            Login to your account and start exploring!
          </h1>
          {/*----user name---*/}
          <div className="flex mx-auto w-[60%]">
            <div className="border border-gray-300  p-2">
              <FaUser size={16} className="text-gray-500 " />
            </div>
            <input
              type="name"
              placeholder="User ID"
              className="pl-4 border w-full border-gray-300 p-2"
            />
          </div>
          {/*----password----*/}
          <div className="flex mx-auto w-[60%]">
            <div className="border border-gray-300  p-2">
              <FaLock size={16} className="text-gray-500 " />
            </div>
            <input
              type="name"
              placeholder="************"
              className="pl-4 border w-full border-gray-300 p-2"
            />
          </div>
          {/*---Remember me----*/}
          <div className="flex gap-2 mx-auto w-[60%]">
            <div className="bg-[#C9252C] p-1 text-white">
              <FaCheck />
            </div>
            <p>Remember me </p>
          </div>
          {/*----sign in---*/}
          <button className="bg-[#C9252C] mx-auto text-center text-white uppercase w-[60%] p-2">
            sign in
          </button>
          <p className="mx-auto w-[60%]">Forgot password</p>
          {/*---Back to home button----*/}
          <div className="mx-auto">
            <Link to="/">
              <button className="text-[#C9252C] border-2 flex gap-2 p-2 font-bold  border-[#C9252C]">
                <IoArrowBackSharp size={20} className="" /> Back to Home
              </button>
            </Link>
          </div>
          {/*---Back to home button-close---*/}
        </div>
        {/*---from-close---*/}
      </div>
    </div>
  );
};

export default LoginOption1;
