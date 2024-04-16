import React from "react";
import pagelogo from "../assets/images/png/pagelogo.png";
import { footerlink } from "./common/Mapdata";

const Footer = () => {
  return (
    <div className="bg-lightblack sm:pt-[53px] sm:pb-[63.34px] py-[40px]">
      <div className="container mx-auto xl:max-w-[1359px] px-3">
        <div className="flex flex-row items-center flex-wrap justify-between">
          <div className="lg:w-3/12 w-full">
            <div className="flex max-lg:flex-col lg:gap-[77.64px] gap-4">
              <a href="">
                <img
                  src={pagelogo}
                  alt="pagelogo"
                  className="w-full max-w-[69.36px]"
                />
              </a>
              <p className="text-lightgrey text-4sm font-medium tracking-8spacing">
                {" "}
                <span className="lg:block">8fig, 1717 W 6th St,</span> Austin,
                Texas
              </p>
            </div>
          </div>
          <div className="lg:w-7/12 w-full">
            <div className="flex flex-row flex-wrap justify-between items-center max-lg:flex-col-reverse">
              <div className="lg:w-5/12 w-full pt-8 lg:pt-0">
                <p className="lg:text-center text-lightgrey tracking-8spacing font-medium text-4sm">
                  © 2024 8fig - All Rights Reserved
                </p>
              </div>
              <div className="lg:w-3/12 w-full flex gap-[36px] items-baseline lg:justify-end pt-8 lg:pt-0">
                {footerlink.map((a, link) => {
                  return (
                    <div key={link}>
                      <a
                        href={a.link}
                        className="hover:scale-110 transition-all ease-linear duration-500"
                      >
                        {a.footersvg}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
