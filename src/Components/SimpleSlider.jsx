import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg from "../Images/sample2.jpg";
const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="w-full overflow-x-hidden">
      <Slider {...settings}>
        <div className="relative">
          <img src={bg} className="w-full h-auto" alt="Slide 1" />
          <h1 className="text-3xl font-bold absolute top-[50%] left-[50%] text-center transform translate-x-[-50%] translate-y-[-50%] text-white "></h1>
        </div>
        <div className="relative">
          <img src={bg} className="w-full h-auto" alt="Slide 2" />
          <h1 className="text-3xl font-bold absolute top-[50%] left-[50%] transform translate-[-50%] text-white"></h1>
        </div>
        <div className="relative">
          <img src={bg} className="w-full h-auto" alt="Slide 3" />
          <h1 className="text-3xl font-bold absolute top-[50%] left-[50%] transform translate-[-50%] text-white"></h1>
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
