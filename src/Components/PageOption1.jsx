import React from "react";
import sampleimg from "../Images/sample1.jpg";
import s1 from "../Images/s1.png";
import s2 from "../Images/s2.png";
import s3 from "../Images/s3.png";
import s4 from "../Images/s4.png";
const PageOption1 = () => {
  return (
    <div>
      <div id="content">
        {/*----Bg-img with heading ---*/}
        <div className="bg-container">
          <div className="bg-img  h-auto py-4">
            <div className="overlay"></div>
            <h1 className="text-4xl max-[600px]:text-xl text-center font-bold text-white Uppercase">
              Logistic Resolution
            </h1>
          </div>
        </div>
        {/*Bg-img close*/}
        {/*---bread crumbs-----*/}
        <div className="p-11">
          <div>
            <span className="">
              <a href="/">🏠 Page</a> &gt;
            </span>
            <span className="ml-1">
              <a href="/">Home</a>
            </span>
          </div>
        </div>
        {/*---bread Crumbs close---*/}
        {/*----inner content---*/}
        <div className="mx-11">
          <div className="flex justify-between max-[1100px]:flex-col">
            {/*---Resolution----*/}
            <div className="w-2/5 max-[1100px]:w-full mb-[6%]">
              <p className="text-md uppercase text-[#C9252C]">India post</p>
              <h1 className="font-bold text-3xl mb-[8%]">
                The New Logistic Resolution
              </h1>
              <div className="flex gap-4 mb-8">
                <img src={s1} className="w-16 h-16" alt="postpageimg-1" />
                <div className="">
                  <h1 className="text-xl font-bold">Safe Warehousing</h1>
                  <p className="text-md">
                    Warehousing options for storage of consignments prior to
                    dispatch/delivery available for customers. Warehousing
                    options for storage of consignments prior to dispatch/
                    delivery available for customers.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 mb-8">
                <img src={s2} className="w-16 h-16" alt="postpageimg-2" />
                <div className="">
                  <h1 className="text-xl font-bold">Multi-modal transport</h1>
                  <p className="text-md">
                    Consignments are transmitted by road, rail or air depending
                    upon the requirements of the customer. Consignments are
                    transmitted by road, rail or air depending upon the
                    requirements of the customer.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 mb-8">
                <img src={s3} className="w-16 h-16" alt="postpageimg-3" />
                <div className="">
                  <h1 className="text-xl font-bold">Package Protection</h1>
                  <p className="text-md">
                    We care for the security of packages transported by air,
                    road and rail with high ethical standards. We care for the
                    security of packages transported by air, road and rail with
                    high ethical standards.
                  </p>
                </div>
              </div>
            </div>
            {/*---Resolution close----*/}
            {/*---our values---*/}
            <div className="max-[1100px]:w-full">
              <div className="relative">
                <img
                  src={sampleimg}
                  className="max-w-full h-auto md:max-w-[455px] md:max-h-[455px]"
                  alt="sample-img"
                />

                <div className="absolute bottom-8 left-[8] rounded shadow-lg  bg-white p-6  max-w-[300px] max-h-auto max-[600px]:max-w-[200px] max-[600px]:max-h-[250px]">
                  <div className="border-2 border-[#dc3545] border-dotted p-4">
                    <img
                      src={s4}
                      className="w-16 max-[600px]:w-4"
                      alt="award"
                    />
                    <h1 className="my-[3%] max-[600px]:my-0 max-[600px]:text-sm text-xl font-bold">
                      Our Values
                    </h1>
                    <p className="max-[600px]:text-xs">
                      Our qualified human team guarantees you an essential
                      experience and professionalism.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*---our values close---*/}
          </div>
        </div>
        {/*----inner content close---*/}
      </div>
    </div>
  );
};

export default PageOption1;
