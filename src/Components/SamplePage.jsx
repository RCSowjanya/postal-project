import React from "react";
import bg from "../Images/bg.jpg";
import CardsData from "./CardsData";
const SamplePage = () => {
  return (
    <div>
      <div id="content">
        {/*----Bg-img with heading ---*/}
        <div>
          <div className="bg-img  h-auto py-4">
            <div className="overlay"></div>
            <h1 className="text-4xl max-[600px]:text-xl text-center font-bold text-white Uppercase">
              Sample Page
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
              <a href="/">SamplePage</a>
            </span>
          </div>
        </div>
        {/*---bread Crumbs close---*/}
        {/*---inner content----*/}
        <div className="mx-8 bg-[#fff] p-7 rounded-md">
          <h1 className="text-2xl pb-4 font-bold">Welcome to India Post</h1>
          <p className="leading-relaxed">
            Etiam nec urna sed lectus tincidunt aliquam. Aliquam id interdum
            leo. Donec tellus mauris, pharetra nec feugiat non, semper ac neque.
            Curabitur auctor erat arcu, ut scelerisque risus egestas a. Mauris
            molestie porttitor dui, id aliquet lorem fermentum sed. Duis congue
            quam et turpis porttitor egestas. Ut et arcu risus. Nunc ac laoreet
            erat, sit amet placerat arcu.
          </p>
          <br />
          <p className="leading-relaxed">
            Quisque id convallis nisl, ut pulvinar justo. Donec vitae leo
            tellus. Aliquam placerat nec quam a euismod. Praesent nisi ipsum,
            commodo vitae euismod et, malesuada ut tellus. Mauris at nisl
            pharetra, malesuada turpis eu, accumsan tellus. Nunc ac orci
            tincidunt, sodales purus vel, congue ligula. Pellentesque in auctor
            sapien. Curabitur quis odio maximus, aliquam metus sit amet, tempor
            leo. In non luctus tortor, at consequat turpis. Nunc eget felis
            venenatis, pellentesque mi vel, mattis mauris. Morbi at hendrerit
            quam. Etiam quis ligula tortor.
          </p>
          <button class="rounded-md mt-6 bg-[#C9252C] p-2 text-[#fff]">
            Read More
          </button>
        </div>
        <div className="mt-[4%] mx-5 bg-[#fff] p-7 rounded-md">
          <h1 className="text-2xl pb-4 font-bold">Sample Heading</h1>
          <p className="leading-relaxed">
            Etiam nec urna sed lectus tincidunt aliquam. Aliquam id interdum
            leo. Donec tellus mauris, pharetra nec feugiat non, semper ac neque.
            Curabitur auctor erat arcu, ut scelerisque risus egestas a. Mauris
            molestie porttitor dui, id aliquet lorem fermentum sed. Duis congue
            quam et turpis porttitor egestas. Ut et arcu risus. Nunc ac laoreet
            erat, sit amet placerat arcu.
          </p>
          <br />
          <p className="leading-relaxed">
            Quisque id convallis nisl, ut pulvinar justo. Donec vitae leo
            tellus. Aliquam placerat nec quam a euismod. Praesent nisi ipsum,
            commodo vitae euismod et, malesuada ut tellus. Mauris at nisl
            pharetra, malesuada turpis eu, accumsan tellus. Nunc ac orci
            tincidunt, sodales purus vel, congue ligula. Pellentesque in auctor
            sapien. Curabitur quis odio maximus, aliquam metus sit amet, tempor
            leo. In non luctus tortor, at consequat turpis. Nunc eget felis
            venenatis, pellentesque mi vel, mattis mauris. Morbi at hendrerit
            quam. Etiam quis ligula tortor.
          </p>
          <br />
          <p className="leading-relaxed">
            Suspendisse eu lacus in nibh commodo maximus in quis tortor. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Etiam mollis velit in scelerisque dapibus. Ut id
            tristique eros. Nulla nec magna vehicula, placerat nibh elementum,
            imperdiet libero. Donec bibendum tempus turpis ut vulputate. Fusce
            in tellus ut odio fermentum scelerisque. Aliquam erat volutpat. Cras
            viverra, metus eu lobortis ornare, leo mi feugiat nisl, non
            imperdiet urna massa ac enim. Quisque volutpat sed nibh vitae
            ornare. Integer dictum nec ex in luctus. Fusce mattis dignissim
            maximus. Integer eu diam lacinia, rutrum est vitae, pharetra libero.
            Nulla eu congue massa, sed condimentum est.
          </p>
        </div>
        <div>
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
      </div>
      {/*--inner content close----*/}
    </div>
  );
};

export default SamplePage;
