import React, { useState } from "react";
import TopHeader from "../Components/TopHeader";
import Menubar from "../Components/Menubar";
import Help from "../Components/Help";
import SimpleSlider from "../Components/SimpleSlider";
import { Link } from "react-router-dom";
import SettingOptions from "../Components/SettingOptions";
import CardsData from "../Components/CardsData";
const PageOption3 = () => {
  const [showData, setShowData] = useState(false);

  const handleChange = () => {
    setShowData(!showData);
  };

  return (
    <div className="bg-gray-200">
      <TopHeader />
      <Menubar />
      <SimpleSlider />
      {/*---inner content----*/}
      <div className="mx-8 my-9 ">
        <div className="flex gap-5 justify-between max-[600px]:flex-col">
          {/*---left content---*/}
          <div className="w-4/5 max-[600px]:w-full">
            {/*---Welcome to india post----*/}
            <div className="bg-white shadow-custom rounded-md p-6">
              <h1 className="text-3xl font-bold mb-6">Welcome to the Post</h1>
              <p className="leading-80">
                The Post Office of India Post offers variety of online Postal
                services to the users. One can avail services such as sending an
                Electronic Money Order (EMO), Instant Money Order (IMO),
                philately etc. Users can also track and trace Speed Post, EMO,
                WorldNet Express (WNX), international mail, paying premium and
                searching pin codes. Information related to Postal Life
                Insurance (PLI), banking, speed post, business post, logistics
                post and other related services is also provided.
              </p>
              <br />
              <p>
                Track your postal consignment and mail items online with the
                help of consignment number as provided by the Indian Post. The
                tracking system is updated periodically to provide you with the
                most current information available about the location and status
                of your item. Services come under this facility are speed post
                (domestic EMS), international EMS, electronic money order,
                registered mail, express parcel, electronic value payable parcel
                etc.
              </p>
              <div className="mt-6">
                <Link to="/">
                  <button className="text-[#C9252C] border-2 flex gap-2 p-2 font-bold  border-[#C9252C]">
                    Read More ...
                  </button>
                </Link>
              </div>
            </div>
            {/*---Welcome to india post close----*/}
            {/*---Sample heading----*/}
            <div className="bg-white shadow-custom rounded-md p-6 my-8">
              <h1 className="text-3xl font-bold mb-6">Services</h1>
              <div className="space-y-5">
                <p className="leading-80">
                  Lodge or file your complaints online for postal services of
                  Department of Posts. A complaint can be filed or lodged for
                  cases of loss of parcels, non-delivery or wrong delivery of
                  article, non-refund of charges, non receipt of
                  acknowledgement, etc. For lodging complaints, users have to
                  fill up an online form with particulars such as transaction
                  type, complaint type, date of transaction, details of
                  transaction and destination post offices, sender and addressee
                  details etc. Search options for post offices across different
                  states and districts are also provided in the form to assist
                  users while filing complaints.
                </p>
                <p>
                  Search online for Electronic Indian Postal Order (eIPO)
                  details with the Department of Posts, Ministry of
                  Communications and Information Technology. Users can check
                  eIPO details by eIPO number, Indian passport number and
                  security code. This facility is available only for Indian
                  Citizens abroad to facilitate them to file Right to
                  Information (RTI) application.
                </p>
                <p>
                  Book and check the status of your Instant Money Order (iMO)
                  online through e-post office service of India Post. Users have
                  to register themselves to avail the iMO booking facility. One
                  can also check the iMO status by entering the transaction
                  number. Find the list of National Speed Post Centres in
                  different parts of the country. Details of the Centres such as
                  location, address, pin code, phone number, fax, email, officer
                  in charge, etc. are given. Users can also access state wise
                  list of the centres.
                </p>
              </div>
              <div className="mt-6">
                <Link to="/">
                  <button className="text-[#C9252C] border-2 flex gap-2 p-2 font-bold  border-[#C9252C]">
                    Read More ...
                  </button>
                </Link>
              </div>
            </div>
            {/*---Sample heading close----*/}
          </div>
          {/*---left content close---*/}
          {/*----right side sticky note---*/}
          <div className="w-1/5 max-[600px]:w-full">
            <div className="bg-white shadow-custom rounded-md p-4">
              <h1 className="text-2xl mb-3 italic">Note</h1>
              <p className="">
                India Post, the world's largest postal network, Connects every
                corner of the nation, Delivering messages with care and
                dedication.
              </p>
            </div>
            {/*---settings---*/}
            <SettingOptions />
            {/*---settings close---*/}
            {/*----Account---*/}
            <div className="bg-white rounded-md shadow-custom p-4 mb-8 hover:bg-gray-300 hover:border-4  hover:border-l-red-600">
              <p>Account</p>
            </div>
            {/*----Account close---*/}
            {/*----Profile---*/}
            <div className="bg-white rounded-md shadow-custom p-4 hover:bg-gray-300 hover:border-4  hover:border-l-red-600">
              <p>Profile</p>
            </div>
            {/*----Profile close---*/}
            {/*---Help---*/}
            <Help />
            {/*---Help close---*/}
            {/*----Profile---*/}
            <div className="bg-white rounded-md shadow-custom p-4 hover:bg-gray-300 hover:border-4  hover:border-l-red-600">
              <p>FAQ</p>
            </div>
            {/*----Profile close---*/}
          </div>
          {/*----right side sticky note close---*/}
        </div>
        {/*----list of items----*/}
        <div className="grid lg:grid-cols-4 gap-3 grid-cols-1 mt-[4%] mx-5">
          {CardsData.map((e) => (
            <div className="">
              <li className="h-full bg-white shadow-custom  p-6">
                <img src={e.img} alt="post-img" className="p-2 w-24" />
                <h1 className="text-2xl">{e.heading}</h1>
                <p className="">{e.description}</p>
              </li>
            </div>
          ))}
        </div>
        {/*---list of items closed----*/}
      </div>

      {/*---inner content close----*/}
    </div>
  );
};

export default PageOption3;
