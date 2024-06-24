import React from "react";
import ShareExport from "./ShareExport";
import bg from "../Images/bg.jpg";
import { IoMdSearch } from "react-icons/io";
import FromtoDate from "./FromtoDate";
import Settings from "./Settings";

import TableContent from "./TableContent";
const OrderSummary = () => {
  return (
    <div>
      <div id="content">
        {/*----Bg-img with heading ---*/}
        <div className="bg-container">
          <div className="bg-img w-full h-auto py-4">
            <div className="overlay"></div>
            <h1 className="text-4xl max-[600px]:text-xl text-center font-bold text-white Uppercase">
              Order Summary
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
              <a href="/">Table</a>
            </span>
          </div>
        </div>
        {/*---bread Crumbs close---*/}
        {/*---order summary---*/}
        <div className="mx-8">
          <div className="flex justify-between gap-11">
            <div>
              <h1 className="text-2xl mb-5">Order Summary</h1>
            </div>
            <ShareExport />
          </div>
          {/*---order summary close---*/}
          {/*----search orders----*/}
          <div className="flex gap-5 justify-between mt-8 max-[600px]:flex-col">
            <div className="flex mt-8">
              <div className="bg-[#c9252c] h-8 p-2">
                <IoMdSearch size={16} className="text-white" />
              </div>
              <input
                type="name"
                placeholder="Search"
                className="pl-4 border border-gray-300 h-8 "
              />
            </div>
            <div>
              <FromtoDate />
            </div>
            <div>
              <FromtoDate />
            </div>
            <div>
              <Settings />
            </div>
          </div>
          {/*----search orders close----*/}
          <div className="mt-8">
            <TableContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
