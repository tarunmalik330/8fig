import React from "react";
import pagelogo from "../assets/images/png/pagelogo.png";
import { footerlink } from "./common/Mapdata";

const Footer = () => {
  return (
    <div className="bg-lightblack pt-[53px] pb-[63.34px]">
      <div className="container mx-auto xl:max-w-[1359px] px-3">
        <div className="flex flex-row items-center flex-wrap justify-between">
          <div className="lg:w-3/12 sm:w-6/12 w-full max-sm:order-1">
            <div className="flex gap-[77.64px]">
              <a href="">
                <img
                  src={pagelogo}
                  alt="pagelogo"
                  className="w-full max-w-[69.36px]"
                />
              </a>
              <p className="text-lightgrey text-4sm font-medium tracking-8spacing">
                {" "}
                <span className="block">8fig, 1717 W 6th St,</span> Austin,
                Texas
              </p>
            </div>
          </div>
          <div className="lg:w-3/12 sm:w-6/12">
            <p className="text-center text-lightgrey tracking-8spacing font-medium text-4sm">
              © 2024 8fig - All Rights Reserved
            </p>
          </div>
          <div className="lg:w-3/12 sm:w-6/12 w-full max-sm:order-2 flex gap-[36px] items-baseline justify-end">
            {footerlink.map((a, link) => {
              return (
                <div key={link}>
                  <div>{a.footersvg}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
