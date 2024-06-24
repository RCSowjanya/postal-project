import React from "react";
import FirstStatecard from "./FirstStatecard";
import SecondStatecard from "./SecondStatecard";
import ThirdStatecard from "./ThirdStatecard";

const Cards = () => {
  return (
    <div>
      <div id="content">
        {/*----Bg-img with heading ---*/}
        <div>
          <div className="bg-img  h-auto py-4">
            <div className="overlay"></div>
            <h1 className="text-4xl max-[600px]:text-xl text-center font-bold text-white Uppercase">
              Cards
            </h1>
          </div>
        </div>
        {/*Bg-img close*/}
        {/*---bread crumbs-----*/}
        <div className="p-11">
          <div className="bg-[#fff] p-2">
            <span className="">
              <a href="/">🏠 Home</a> &gt;
            </span>
            <span className="ml-1">
              <a href="/">Cards</a>
            </span>
          </div>
        </div>
        {/*---bread Crumbs close---*/}
        <div className="mx-8">
          {/*---first-state-card----*/}
          <div>
            <FirstStatecard />
          </div>
          {/*---first-state-card close----*/}
          {/*---Second-state-card----*/}
          <div>
            <SecondStatecard />
          </div>
          {/*---Second-state-card close----*/}
          {/*---Third-state-card----*/}
          <div>
            <ThirdStatecard />
          </div>
          {/*---Third-state-card close----*/}
        </div>
      </div>
    </div>
  );
};

export default Cards;
