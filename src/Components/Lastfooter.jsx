import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className="flex items-center flex-wrap justify-center gap-5 mt-[8%] mb-[2%]">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
        <Link to="/">FAQ's</Link>
        <Link to="/">Feedback</Link>
      </div>
      <div className="text-center py-3 bg-[#390920]">
        <p className="text-[#FFBC00] text-xs">
          Designed and Developed by CEPT © Copyright Department of Posts
        </p>
      </div>
    </div>
  );
};

export default Footer;
