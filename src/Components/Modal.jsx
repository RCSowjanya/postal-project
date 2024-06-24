import React, { useState } from "react";
import bg from "../Images/bg.jpg";
import { IoClose } from "react-icons/io5";
import FirstAlert from "./FirstAlert";
import SecondAlert from "./SecondAlert";

const Modal = () => {
  const [modals, setModals] = useState({
    showModal1: false,
    showModal2: false,
    showModal3: false,
    showModal4: false,
    // Add more modal states as needed
  });

  const openModal = (modalName) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalName]: true,
    }));
  };

  const closeModal = (modalName) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalName]: false,
    }));
  };
  return (
    <div>
      <div id="content">
        {/*----Bg-img with heading ---*/}
        <div className="bg-container">
          <div className="bg-img  h-auto py-4">
            <div className="overlay"></div>
            <h1 className="text-4xl max-[600px]:text-xl text-center font-bold text-white Uppercase">
              Modals & Alerts
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
              <a href="/modal">Modal</a>
            </span>
          </div>
        </div>
        {/*---bread Crumbs close---*/}
        {/*---modals----*/}
        <div className="mx-8 border-2 border-[#d9dadb] rounded-md bg-white p-8">
          <div className="bg-[#fff]  rounded-md">
            <h1 className="text-2xl font-bold mb-[3%]">Modals</h1>
            {/*---first backdrop modal----*/}
            {modals.showModal1 && (
              <div className="fixed h-screen w-screen top-0 left-0 flex justify-center items-center">
                <div className="bg-white rounded shadow-md w-[40%] max-[600px]:w-full z-[999]  ">
                  <div className="flex justify-between bg-[#C9252C] py-3 px-2 text-white">
                    <p className="font-bold">Welcome to post India </p>
                    <button onClick={() => closeModal("showModal1")}>
                      <IoClose size={22} className="text-white" />
                    </button>
                  </div>
                  <div className="p-3">
                    <p className="text-sm tracking-wide leading-9 font-bold">
                      Static backdrop Modal: This modal will not close if you
                      click outside. The keyboard escape key will nor work too.
                    </p>
                  </div>
                  <div className="flex justify-end gap-3 my-[5%] mr-[3%]">
                    <button
                      className="border border-[#C9252C] rounded-md py-1 px-4"
                      onClick={() => closeModal("showModal1")}
                    >
                      Close
                    </button>
                    <button
                      className="bg-[#C9252C] rounded-md  py-1 px-4 text-white"
                      onClick={() => closeModal("showModal1")}
                    >
                      Ok
                    </button>
                  </div>
                </div>
              </div>
            )}
            {/*----first backdrop modal closed---*/}
            {/*---second backdrop modal----*/}
            {modals.showModal2 && (
              <div className="fixed h-screen w-screen top-0 left-0 flex justify-center items-center ">
                <div className="bg-white rounded w-[40%] max-[600px]:w-full z-[999] shadow-md ">
                  <div className="flex justify-between bg-[#C9252C] py-3 px-2 text-white">
                    <p>Welcome to post India </p>
                    <button onClick={() => closeModal("showModal2")}>
                      <IoClose size={22} className="text-white" />
                    </button>
                  </div>
                  <div className="p-3">
                    <h1 className="font-bold text-xl">
                      Vertically Centered Modal
                    </h1>
                    <p className="text-sm tracking-wide leading-9">
                      Static backdrop Modal: This modal will not close if you
                      click outside. The keyboard escape key will nor work too.
                    </p>
                  </div>
                  <div className="flex justify-end gap-3 my-[5%] mr-[3%]">
                    <button
                      className="border border-[#C9252C] rounded-md py-1 px-4"
                      onClick={() => closeModal("showModal2")}
                    >
                      Close
                    </button>
                    <button
                      className=" bg-[#C9252C] rounded-md  py-1 px-4 text-white"
                      onClick={() => closeModal("showModal2")}
                    >
                      Ok
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/*----second backdrop modal closed---*/}
            {/*---Third backdrop modal----*/}
            {modals.showModal3 && (
              <div className="fixed h-screen w-screen  top-0 left-0 flex justify-center items-center">
                <div className="bg-white rounded shadow-md  w-[40%] max-[600px]:w-full z-[999]">
                  <div className="flex justify-between bg-[#C9252C] py-3 px-2 text-white">
                    <p>Modal Form with Elements </p>
                    <button onClick={() => closeModal("showModal3")}>
                      <IoClose size={22} className="text-white" />
                    </button>
                  </div>
                  <div className="p-4">
                    <div className="mb-5">
                      <label for="name" className="block mb-2">
                        Name
                      </label>
                      <input
                        type="name"
                        placeholder="Enter Your Name"
                        className="border border-gray-400 rounded-md w-full pl-3 py-2"
                      />
                    </div>
                    <div className="">
                      <label for="email" className="block mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="name@example.com"
                        className="border border-gray-400 rounded-md w-full pl-3 py-2"
                      />
                    </div>
                    <div>
                      <label for="address" className="block mb-2">
                        Address
                      </label>
                      <textarea
                        rows={3}
                        cols={5}
                        placeholder="Enter your Address"
                        className="w-full border border-gray-400 rounded-md pl-3 pt-2 "
                      />
                    </div>
                  </div>
                  <hr className="text-red-800" />
                  <div className="flex justify-end gap-3 my-[5%] mr-[3%]">
                    <button
                      className="border border-[#C9252C] rounded-md py-1 px-4"
                      onClick={() => closeModal("showModal3")}
                    >
                      Close
                    </button>
                    <button
                      className=" bg-[#C9252C] rounded-md  py-1 px-4 text-white"
                      onClick={() => closeModal("showModal3")}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/*----Third backdrop modal closed---*/}
            {/*---fourth backdrop modal----*/}
            {modals.showModal4 && (
              <div className="fixed h-screen w-screen top-0 left-0 flex justify-center items-center">
                <div className="bg-white rounded shadow-md  w-screen h-screen z-[9999]">
                  <div className="flex justify-between bg-[#C9252C] py-3 px-2 text-white">
                    <p>Welcome to post India </p>
                    <button onClick={() => closeModal("showModal4")}>
                      <IoClose size={22} className="text-white" />
                    </button>
                  </div>
                  <div className="p-3">
                    <p className="text-sm tracking-wide leading-9">
                      Body content
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/*----fourth backdrop modal closed---*/}

            {/*----modals closed---*/}
            {/*Trigger tabs */}
            <div className="flex gap-5 max-[600px]:flex-col">
              <div
                className="p-2 bg-white rounded-md  font-bold cursor-pointer text-[#C9252C] border-2 border-gray-400 hover:bg-[#C9252C] hover:text-white focus:bg-[#C9252C] focus:text-white"
                onClick={() => openModal("showModal1")}
              >
                Static Backdrop Modal
              </div>
              <div
                className="p-2 bg-white rounded-md font-bold cursor-pointer text-[#C9252C] border-2 border-gray-400 hover:bg-[#C9252C] hover:text-white focus:bg-[#C9252C] focus:text-white"
                onClick={() => openModal("showModal2")}
              >
                Vertically Centered Modal
              </div>
              <div
                className="p-2 bg-white rounded-md font-bold cursor-pointer text-[#C9252C] border-2 border-gray-400 hover:bg-[#C9252C] hover:text-white focus:bg-[#C9252C] focus:text-white"
                onClick={() => openModal("showModal3")}
              >
                Modal With Form elements
              </div>
              <div
                className="p-2 bg-white rounded-md font-bold cursor-pointer text-[#C9252C] border-2 border-gray-400 hover:bg-[#C9252C] hover:text-white focus:bg-[#C9252C] focus:text-white"
                onClick={() => openModal("showModal4")}
              >
                Full screen Modal
              </div>
            </div>
          </div>
          {/*Trigger tabs closed */}
          {/*----Alerts-----*/}
          <div className="mt-[6%]">
            <h1 className="mb-[3%] text-2xl font-bold">Alerts</h1>
            <div className="grid grid-cols-2 max-[600px]:grid-cols-1 gap-3">
              {/*----first alert----*/}
              <FirstAlert />
              {/*---first alert end----*/}
              {/*----second alert----*/}
              <SecondAlert />
              {/*---second alert end----*/}
            </div>
          </div>
          {/*--Alerts end---*/}
        </div>
      </div>
    </div>
  );
};

export default Modal;
