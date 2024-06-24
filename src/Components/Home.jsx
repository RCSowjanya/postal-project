import React from "react";
import bg from "../Images/bg.jpg";
import CardsData from "./CardsData";

const Home = () => {
  return (
    <div>
      <div id="content">
        {/*----Bg-img with heading ---*/}
        <div>
          <div className="bg-img  h-auto py-4">
            <div className="overlay"></div>
            <h1 className="text-4xl max-[600px]:text-xl text-center font-bold text-white Uppercase">
              Home Page
            </h1>
          </div>
        </div>
        {/*Bg-img close*/}
        {/*---bread crumbs-----*/}
        <div className="p-11">
          <div className="bg-[#fff] p-2">
            <span className="">
              <a href="/">🏠 Page</a> &gt;
            </span>
            <span className="ml-1">
              <a href="/">Home</a>
            </span>
          </div>
        </div>
        {/*---bread Crumbs close---*/}
        {/*---inner content----*/}
        <div className="mx-8 bg-[#fff] p-7 rounded-md max-[600px]:mx-0">
          <h1 className="text-2xl pb-4 font-bold">Welcome to India Post</h1>
          <p className="leading-relaxed">
            The Post Office of India Post offers variety of online Postal
            services to the users. One can avail services such as sending an
            Electronic Money Order (EMO), Instant Money Order (IMO), philately
            etc. Users can also track and trace Speed Post, EMO, WorldNet
            Express (WNX), international mail, paying premium and searching pin
            codes. Information related to Postal Life Insurance (PLI), banking,
            speed post, business post, logistics post and other related services
            is also provided.
          </p>
          <br />
          <p className="leading-relaxed">
            Track your postal consignment and mail items online with the help of
            consignment number as provided by the Indian Post. The tracking
            system is updated periodically to provide you with the most current
            information available about the location and status of your item.
            Services come under this facility are speed post (domestic EMS),
            international EMS, electronic money order, registered mail, express
            parcel, electronic value payable parcel etc.
          </p>
          <button class="rounded-md mt-6 bg-[#C9252C] p-2 text-[#fff]">
            Read More
          </button>
        </div>
        <div className="mt-[4%] mx-5 bg-[#fff] p-7 rounded-md max-[600px]:mx-0">
          <h1 className="text-2xl pb-4 font-bold">
            Lodge your complaint for postal services
          </h1>
          <p className="leading-relaxed">
            Lodge or file your complaints online for postal services of
            Department of Posts. A complaint can be filed or lodged for cases of
            loss of parcels, non-delivery or wrong delivery of article,
            non-refund of charges, non receipt of acknowledgement, etc. For
            lodging complaints, users have to fill up an online form with
            particulars such as transaction type, complaint type, date of
            transaction, details of transaction and destination post offices,
            sender and addressee details etc. Search options for post offices
            across different states and districts are also provided in the form
            to assist users while filing complaints.
          </p>
          <br />
          <p className="leading-relaxed">
            Search online for Electronic Indian Postal Order (eIPO) details with
            the Department of Posts, Ministry of Communications and Information
            Technology. Users can check eIPO details by eIPO number, Indian
            passport number and security code. This facility is available only
            for Indian Citizens abroad to facilitate them to file Right to
            Information (RTI) application.
          </p>
          <br />
          <p className="leading-relaxed">
            Book and check the status of your Instant Money Order (iMO) online
            through e-post office service of India Post. Users have to register
            themselves to avail the iMO booking facility. One can also check the
            iMO status by entering the transaction number. Find the list of
            National Speed Post Centres in different parts of the country.
            Details of the Centres such as location, address, pin code, phone
            number, fax, email, officer in charge, etc. are given. Users can
            also access state wise list of the centres.
          </p>
        </div>
        <div>
          {/*----list of items----*/}
          <div className="grid lg:grid-cols-4 gap-3 grid-cols-1 mt-[4%] mx-5 max-[600px]:mx-0">
            {CardsData.map((e) => (
              <div className="">
                <li className="h-full bg-white shadow-custom  p-6 mx-5">
                  <img src={e.img} alt="post-img" className="p-2 w-24" />
                  <h1 className="text-2xl">{e.heading}</h1>
                  <p className="">{e.description}</p>
                </li>
              </div>
            ))}
          </div>
          {/*---list of items closed----*/}
        </div>
      </div>
      {/*--inner content close----*/}
    </div>
  );
};

export default Home;
