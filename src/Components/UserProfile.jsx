import React from "react";
import bg from "../Images/bg.jpg";
import QuickLinks from "../Components/QuickLinks";
import Reports from "../Components/Reports";
import UserGeneralInf from "./UserGeneralInf";
import Profile from "./Profile";
const UserProfile = () => {
  return (
    <div>
      <div id="content">
        {/*----Bg-img with heading ---*/}
        <div className="bg-container">
          <div className="bg-img  h-auto py-4">
            <h1 className="text-4xl max-[600px]:text-xl text-center font-bold text-white Uppercase">
              User Profile
            </h1>
          </div>
        </div>
        {/*---Bg-img close----*/}

        {/*---bread crumbs-----*/}
        <div className="p-11">
          <div className="">
            <span className="">
              <a href="/">🏠 Home</a> &gt;
            </span>
            <span className="ml-1">
              <a href="/">User Profile</a>
            </span>
          </div>
        </div>
        {/*---bread Crumbs close---*/}
        {/*----Quick links and dropdown----*/}
        <div className="flex gap-4 justify-end mr-[4%] ">
          <QuickLinks />
          <Reports />
        </div>
        {/*----Quick links and dropdown-close---*/}
        {/*---inner content----*/}
        <div className="grid grid-cols-3 gap-4 max-[1000px]:grid-cols-1 p-6">
          {/*---first sec---*/}
          <div className="col-span-2 ">
            <UserGeneralInf />
          </div>
          {/*---second sec---*/}
          <div className="">
            <Profile />
          </div>
        </div>
        {/*---inner content-close---*/}
      </div>
    </div>
  );
};

export default UserProfile;
