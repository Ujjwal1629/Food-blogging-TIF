import React from "react";
import icon from "./Images/icon.png";
import pizza from "./Images/pizza.png";
import curve from "./Images/curve.png";
export default function Header() {
  return (
    <section className="header w-full h-full flex ">
      <div className="left-container flex flex-col ml-[100px] mt-[33px]">
        <img className="icon w-[107px] h-[83px]" src={icon} alt="" />
        <h1 className="w-[355px] h-[207px] text-[62px] font-bold leading-[69px] text-left text-[#0e2368] mt-[107px]">
          Discover the <span className="text-red-500">Best</span> Food and
          Drinks
        </h1>
        <p className="para text-[16.44px] font-normal leading-[27.41px] text-left w-[345px] h-[55px] py-[30px] text-[#444957]">
          Naturally made Healthcare Products for the better care & support of
          your body.
        </p>
        <button className="explore_btn w-[190px] h-[63px] mt-[60px] font-bold border bg-[#e23744] text-white rounded-[40px] px-[34px] py-3.5 border-solid border-[#e23744]">
          Explore Now!
        </button>
      </div>
      <div className="right-container w-full h-full flex justify-end relative md:w-full md:h-full">
        <img
          className="w-[735px] h-[804px] self-center rounded-bl-[198px]"
          src={pizza}
          alt=""
        />
        <div className="absolute top-0 right-0 flex flex-col items-center justify-center mt-4 mr-4 z-10">
          <button className="button text-white mt-2 px-6 py-2 border border-solid rounded-[21px] ">
            Get in Touch
          </button>
        </div>
        <img
          className="absolute top-0 right w-[752px] h-[839px]"
          src={curve}
          alt=""
        />
      </div>
    </section>
  );
}
