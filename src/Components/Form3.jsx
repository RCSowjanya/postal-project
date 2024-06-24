import React from "react";
import bg from "../Images/bg.jpg";
import StickyForm from "./StickyForm";
import Home from "./Home";
const Form3 = () => {
  return (
    <div>
      <div id="content">
        {/*----Bg-img with heading ---*/}
        <div className="bg-container">
          <div className="bg-img  h-auto py-4">
            <div className="overlay"></div>
            <h1 className="text-4xl max-[600px]:text-xl text-center font-bold text-white Uppercase">
              Form Three
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
              <a href="/">Form3</a>
            </span>
          </div>
        </div>
        {/*---bread Crumbs close---*/}
        <div className="mx-11">
          {/*----form #1 and #2-----*/}
          <div className="flex justify-between max-[1100px]:flex-col gap-5">
            <div className="w-full">
              <StickyForm />
            </div>
            <div className="w-full">
              <StickyForm />
            </div>
          </div>
          {/*----form #1 and #2-----*/}
          {/*----table----*/}
          <div className="w-full mt-[5%]">
            <Home />
          </div>
          {/*----sample table close----*/}
        </div>
      </div>
    </div>
  );
};

export default Form3;
