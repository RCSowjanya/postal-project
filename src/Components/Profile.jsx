import React from "react";
import bg from "../Images/cover.jpg";
import user from "../Images/user.jpg";
import { FaCloudArrowUp } from "react-icons/fa6";
const Profile = () => {
  return (
    <div>
      <div className="mb-6 shadow-custom pb-4">
        {/*---bg image---*/}
        <div>
          <div className="cover-img">
            <img
              src={bg}
              className="bg-cover w-full bg-no-repeat bg-right-bottom"
              alt="userprofile-bg"
            />
            <img
              src={user}
              className="rounded-full  text-center mx-auto  mt-[-8%]"
              alt="user-img"
            />
            <div className="text-center my-8 space-y-4">
              <h1 className="text-3xl font-bold w-[50%] mx-auto">
                Pushpendra Chouhan
              </h1>
              <p className="text-xl">pushpendra.eci@gmail.com</p>
              <p className="text-md">Laxmi Nagar, Delhi</p>
              <button className="border border-[#C9252C] text-red bg-gray-200 px-4 py-2">
                Logout
              </button>
            </div>
          </div>
        </div>
        {/*---bg image sec close----*/}
        {/*---select profile photo----*/}
        <div className="shadow-custom px-5 py-3">
          <h1 className="pb-6 text-2xl">Select Profile photo</h1>
          <div className="flex max-[1100px]:flex-col gap-5">
            <img src={user} className="w-[125px] h-auto" alt="user-img" />
            <div className="flex bg-gray-300 border p-3">
              <FaCloudArrowUp size={20} className="mr-3" />
              <div>
                <div className="fw-normal text-dark mb-1">Choose Image</div>
                <div className="text-gray small">
                  JPG, GIF or PNG. Max size of 800K
                  <input
                    className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="file"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*----user image close----*/}
        {/*----cover photo image----*/}
        <div className="shadow-custom px-8 py-3">
          <h1 className="pb-6 text-2xl">Select Profile photo</h1>
          <div className="flex  max-[1100px]:flex-col gap-5">
            <img src={bg} className="w-[125px] h-auto" alt="coverphoto" />
            <div className="flex bg-gray-300 border p-3 ">
              <FaCloudArrowUp size={20} className="mr-3" />
              <div>
                <div className="fw-normal text-dark mb-1">Choose Image</div>
                <div className="text-gray small">
                  JPG, GIF or PNG. Max size of 800K
                  <input
                    className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="file"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*----cover photo image close----*/}
      </div>
    </div>
  );
};

export default Profile;
