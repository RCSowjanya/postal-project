import React from "react";
import postmanimg from "../Images/reg-bg.jpg";
import logo from "../Images/India_Post_Logo.png";
import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
const RegisterSimple = () => {
  return (
    <div>
      <div className="flex max-[600px]:flex-col">
        {/*---Bg-image---*/}
        <div className="w-full min-[1000px]:w-1/3">
          <img src={postmanimg} className="" alt="loginimg" />
        </div>
        {/*---Bg-image close---*/}
        {/*----form-----*/}
        <div className=" px-10 py-6 w-full flex flex-col items-center justify-center min-[1000px]:w-2/3">
          <div>
            <img src={logo} className="w-40 mx-auto" alt="post-logo" />
            <h1 className="leading-80 text-3xl  font-bold text-center mb-4">
              Register now and let the adventure begin!
            </h1>
            {/*----first name-last name--*/}
            <div className="flex gap-4 w-full max-[600px]:flex-col mb-4">
              <input
                type="name"
                placeholder="First Name"
                className="pl-4 border w-full border-gray-300 p-2"
              />
              <input
                type="name"
                placeholder="Last Name"
                className="pl-4 border w-full border-gray-300 p-2"
              />
            </div>
            {/*---User id and email address---*/}
            <div className="flex gap-4 w-full max-[600px]:flex-col mb-4">
              <input
                type="user id"
                placeholder="User ID"
                className="pl-4 border w-full border-gray-300 p-2"
              />
              <input
                type="email"
                placeholder="E-Mail Address"
                className="pl-4 border w-full border-gray-300 p-2"
              />
            </div>
            {/*---password and confirm password---*/}
            <div className="flex gap-4 w-full max-[600px]:flex-col mb-4">
              <input
                type="password"
                placeholder="Password"
                className="pl-4 border w-full border-gray-300 p-2"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="pl-4 border w-full border-gray-300 p-2"
              />
            </div>
            {/*---password and confirm password---*/}
            <div className="w-full max-[600px]:flex-col mb-4">
              <input
                type="text"
                placeholder="Address"
                className="pl-4 border w-full border-gray-300 p-2"
              />
            </div>
            {/*--city and select state--*/}
            <div className="flex gap-4 w-full max-[600px]:flex-col mb-4">
              <input
                type="text"
                placeholder="City"
                className="pl-4 border w-full border-gray-300 p-2"
              />
              <select class="block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 ">
                <option value="" disabled selected>
                  Select a state
                </option>
                <option value="AL">Assam</option>
                <option value="AK">Andhra Pradesh</option>
                <option value="AZ">Delhi</option>
                <option value="AZ">Karnataka</option>
              </select>
            </div>
            {/*--pincode--*/}
            <div className="flex gap-4 w-full max-[600px]:flex-col mb-8">
              <input
                type="number"
                placeholder="Pincode"
                className="pl-4 border w-full border-gray-300 p-2"
              />
              <input className="w-full" />
            </div>
            {/*----sign in---*/}
            <button className="bg-[#C9252C] mx-auto text-center text-white uppercase w-[60%] p-2">
              Register
            </button>
            <Link to="/loginoption1">
              <p className="mx-auto w-full mb-8 mt-1">
                Already Registered! Login here
              </p>
            </Link>
          </div>
          {/*---Back to home button----*/}
          <div className="mx-auto">
            <Link to="/">
              <button className="text-[#C9252C]  border-2 flex gap-2 p-2 font-bold mb-5 border-[#C9252C]">
                <IoArrowBackSharp size={20} className="" /> Back to Home
              </button>
            </Link>
          </div>
        </div>
        {/*---from-close---*/}
      </div>
    </div>
  );
};

export default RegisterSimple;
