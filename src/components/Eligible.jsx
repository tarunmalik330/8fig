import React from "react";
import { carddata } from "./common/Mapdata";

const Eligible = () => {
  return (
    <>
      <div className="bg-white sm:py-[60px] py-[40px]">
        <div className="container mx-auto xl:max-w-[1253px] px-3">
          <p className="uppercase font-medium text-4sm text-lightgrey leading-5lg text-center ">
            make the cut
          </p>
          <h2 className="ff_abril text-lightblack font-semibold lg:text-9md text-4md text-center lg:max-w-[438px] leading-6lg mx-auto my-[20px]">
            Who’s eligible for getting our AI funding?
          </h2>
          <button className="font-medium text-white text-2sm py-[6px] px-[20px] rounded-4xs bg-purple leading-xl flex justify-center items-center mx-auto hover:border-[#4C57FF] hover:border hover:border-solid border-transparent border hover:text-purple hover:bg-white transition-colors ease-linear duration-300">
            Apply now
          </button>
          <div className="flex flex-row flex-wrap justify-between">
            {carddata.map((e, index) => {
              return (
                <div
                  key={index}
                  className="xl:w-[22%] sm:w-6/12 w-full lg:pt-[65px] sm:pt-[50px] pt-[24px]"
                >
                  <div
                    className={`${e.cardwidth} lg:py-10 sm:py-8 py-4 px-[22px] group h-full hover:shadow-[0px_-5px_10px_0px_rgba(0,0,0,0.2)] transition-all ease-linear duration-500 rounded-3sm`}
                  >
                    {e.svg}
                    <p className="sm:my-4 my-3 tracking-8spacing leading-3lg text-lightblack font-semibold text-6sm">
                      {e.heading}
                    </p>
                    <p
                      className={`${e.textwidth} sm:text-8sm text-[4sm] text-lightblack font-normal leading-4sm`}
                    >
                      {e.paragraph}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Eligible;
