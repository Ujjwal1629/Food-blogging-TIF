import React from "react";
import icon from "./Images/icon.png";
//react icons
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="footer w-full h-[362px] flex mt-[80px] justify-evenly">
      <div className="foot w-full flex bg-[#F8F8F8] justify-evenly py-[90px] ">
        <div className="foot-img">
          <img className="w-161px h-125px" src={icon} alt="" />
        </div>
        <div className="foot-contact w-[232px] h-[186px]">
          <div className="address flex flex-col">
            <h1 className="text-19px text-[#0E2368]">Contact us</h1>
            <p className="text-15px text-[#646874] mt-[10px]">
              Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
              Market, XYZ-343434
            </p>
            <span className="text-15px text-[#646874] mt-[10px]">
              example2020@gmail.com
            </span>
            <span className="text-15px text-[#646874] mt-[10px]">
              (904) 443-0343
            </span>
          </div>
        </div>
        <div className="foot-more">
          <h1 className="text-19px text-[#0E2368]">More</h1>
          <p className="text-15px text-[#646874] mt-[13px]">About us</p>
          <p className="text-15px text-[#646874] mt-[13px]">Products</p>
          <p className="text-15px text-[#646874] mt-[13px]">Career</p>
          <p className="text-15px text-[#646874] mt-[13px]">Contact us</p>
        </div>
        <div className="foot-links">
          <h1 className="text-19px text-[#0E2368]">Social Links</h1>
          <div className="social flex mt-[10px]">
            <FaInstagram />
            <FaTwitter className="ml-2.5" />
            <FaFacebookF className="ml-2.5" />
          </div>
          <div className="copyright mt-[100px]">
            <span className="text-15px text-[#646874]">
              © 2022 Food Truck Example
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
