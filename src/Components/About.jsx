import React from "react";
import ab_img from "./Images/ab-img.png";

export default function About() {
  return (
    <section className="about w-full h-full flex mt-[360px] mb-[300px] justify-around bg-gradient-to-br from-blue-50 via-blue-50 to-blue-100">
      <div className="about-img">
        <img src={ab_img} alt="About" />
      </div>
      <div className="about-content flex flex-col justify-center align-middle w-[447px]">
        <h1 className="w-[422px] h-[26px] text-[45px] font-semibold leading-[27px] text-left text-[#0E2368]">
          About us
        </h1>
        <p className="mt-[40px] text-[#444957] text-[15px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </p>
        <button className="w-[150px] h-[43px] mt-[30px] border bg-[#e23744] text-white rounded-[40px] border-solid border-[#e23744]">
          Read more
        </button>
      </div>
    </section>
  );
}
