import React from "react";
import { CirclePlay } from "lucide-react";
import { LayoutGrid } from "lucide-react";
import ImageItems from "../../assets/hero.png";

const Banner = () => {
  return (
    <div>
      {/* text itmes:-------- */}
      <div className="text-center mt-10 ">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          We Build <br /> <span className="text-[#632EE3]">Productive</span>{" "}
          Apps
        </h1>
        <p className="text-gray-400 mb-5 ">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>

        <a
          href="https://play.google.com/store/games?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline border-[#9F62F2] text-[#9F62F2] hover:bg-[#9F62F2] hover:text-white mr-3.5"
        >
          <CirclePlay />
          Google Play
        </a>
        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline border-[#9F62F2] text-[#9F62F2] hover:bg-[#9F62F2] hover:text-white  "
        >
          <LayoutGrid />
          App Store
        </a>
      </div>
      {/* image items */}
      <div>
        <img
          className="flex justify-between items-center mt-10 ml-12 lg:ml-64 w-3/4 lg:w-3/5 "
          src={ImageItems}
          alt=""
        />
        <div className=" bg-gradient-to-r from-[#632EE3] via-[#9F62F2] to-[#6B35E5] p-5 lg:p-15 ">
          <p className="text-white text-xl lg:text-3xl font-bold flex justify-center mb-5">
            Trusted by Millions, Built for You
          </p>
          <div className="flex justify-center gap-5 lg:gap-40  lg:w-full">
            <div className="">
              <small className="text-gray-200">Total Downloads</small>
              <h2 className="text-white lg:text-3xl font-semibold">29.6M</h2>
              <small className="text-gray-200">21% more than last month</small>
            </div>
            <div className="">
              <small className="text-gray-200">Total Reviews</small>
              <h2 className="text-white lg:text-3xl font-semibold">906K</h2>
              <small className="text-gray-200">46% more than last month</small>
            </div>
            <div className="">
              <small className="text-gray-200">Active Apps</small>
              <h2 className="text-white lg:text-3xl font-semibold">132+</h2>
              <small className="text-gray-200">31 more will Launch</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
