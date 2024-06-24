import React from "react";
import bg from "../Images/sample2.jpg";
import box from "../Images/box-white.png";
import warehouse from "../Images/warehouse.png";
const PageOption2 = () => {
  return (
    <div>
      <div id="content">
        {/*----Bg-img with heading ---*/}
        <div className="bg-container">
          <div className="bg-img  h-auto py-4">
            <div className="overlay"></div>
            <h1 className="text-4xl max-[600px]:text-xl text-center font-bold text-white Uppercase">
              Overview
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
              <a href="/">pageoption2</a>
            </span>
          </div>
        </div>
        {/*---bread Crumbs close---*/}
        {/*---inner content---*/}
        <div className="mx-11">
          <h1 className="text-2xl font-bold mb-4">Overview</h1>
          <div className="space-y-6">
            <p>
              India Post, the country's postal network, is a remarkable
              institution with a rich history and anenduring presence in the
              lives of millions of Indians. Its vast network, spanning the
              length and breadth of the nation, serves as a lifeline for
              communication and commerce, connecting people and businesses
              across diverse landscapes.
            </p>

            <p>
              With over 155,000 post offices, India Post boasts the world's
              largest postal network, reaching even the remotest corners of the
              country. It is a testament to its commitment to serving every
              citizen, regardless of location or socioeconomic status. This
              extensive reach has made India Post an indispensable part of the
              nation's infrastructure, facilitating the flow of information,
              goods, and financial services.
            </p>
            <p>
              India Post's commitment to rural development is evident in its
              tagline: "Connecting India, Bridging the Divide." India Post is
              playing a vital role in bridging the gap between urban and rural
              India, and in helping to ensure that all Indians have access to
              essential services.
            </p>
            <p>
              India Post is a valuable asset to the nation. It plays a vital
              role in connecting people and businesses, and in providing
              essential services to people in rural areas. India Post is
              committed to providing its customers with the best possible
              service, and it is constantly innovating to meet their changing
              needs.
            </p>
          </div>
          {/*---img---*/}
          <div className="my-9">
            <img src={bg} className="max-w-full" alt="bg-img" />
            <div className="flex max-[600px]:flex-col">
              <div className="bg-white p-7">
                <div className="flex gap-3">
                  <img
                    src={warehouse}
                    className="w-24 h-24 max-[600px]:w-11 max-[600px]:h-11"
                    alt="warehouse"
                  />
                  <div className="">
                    <h1 className="text-xl mb-5">Safe Warehousing</h1>
                    <p>
                      Warehousing options for storage of consignments prior to
                      dispatch/ delivery available for customers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1B4790] p-7 text-white">
                <div className="flex gap-3">
                  <img
                    src={box}
                    className="w-24 h-24 max-[600px]:w-11 max-[600px]:h-11"
                    alt="warehouse"
                  />
                  <div className="">
                    <h1 className="text-xl mb-5">Trusted Packaging</h1>
                    <p>
                      We care for the security of packages transported by air,
                      road and rail with high ethical standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*---img close---*/}
          <div className=""></div>
          <h1 className="text-3xl mb-8 font-bold">New Initiatives</h1>
          <p>
            In addition to its traditional services, India Post is also offering
            a number of new and innovative services. For example, India Post now
            offers Speed Post Next Day, which guarantees delivery of mail and
            parcels within the next business day. India Post is also offering a
            range of e-commerce services, such as e-post and cash on delivery
          </p>
          <br />
          <p>
            India Post is a valuable asset to the nation. It plays a vital role
            in connecting people and businesses, and in providing essential
            services to people in rural areas. India Post is committed to
            providing its customers with the best possible service, and it is
            constantly innovating to meet their changing needs.
          </p>
        </div>
        {/*---inner content close---*/}
      </div>
    </div>
  );
};

export default PageOption2;
