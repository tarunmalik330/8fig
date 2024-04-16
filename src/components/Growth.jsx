import React from "react";
import businessimg from "../assets/images/png/businessimg.png";
import trustpilot from "../assets/images/png/trustpilotimg.png";

const Growth = () => {
  return (
    <>
      <div className="bg-bgblack lg:py-[87.63px] sm:py-[60px] py-[40px]">
        <div className="container mx-auto xl:maw-w-[1191px] px-3">
          <div className="flex flex-wrap flex-row">
            <div className="lg:w-3/12 sm:w-6/12 w-full flex justify-center flex-col items-center">
              <img
                src={businessimg}
                alt="businessimg"
                className="w-full max-w-[83.5px] mb-[10px]"
              />
              <p className="capitalize font-semibold text-white ff_abril sm:text-xl text-5lg  leading-6sm">
                ‘A’ Rating{" "}
              </p>
            </div>
            <div className="lg:w-3/12 sm:w-6/12 w-full sm:pt-0 pt-6 flex flex-col justify-center items-center">
              <p className="sm:text-9sm text-6sm font-normal text-white leading-5lg mb-[10px]">
                Average store growth
              </p>
              <p className="sm:text-xl text-5lg ff_abril font-semibold text-white leading-3lg">
                400%
              </p>
            </div>
            <div className="lg:w-3/12 sm:w-6/12 w-full lg:pt-0 pt-6 flex justify-center flex-col items-center">
              <img
                src={trustpilot}
                alt="trustpilot"
                className="w-full max-w-[140px] mb-[10px]"
              />
              <p className="capitalize font-semibold text-white ff_abril sm:text-xl text-5lg  leading-6sm">
                Excellent
              </p>
            </div>
            <div className="lg:w-3/12 sm:w-6/12 w-full lg:pt-0 pt-6 flex flex-col justify-center items-center">
              <p className="sm:text-9sm text-6sm font-normal text-white leading-5lg mb-[10px]">
                Funding given
              </p>
              <p className="sm:text-xl text-5lg  ff_abril font-semibold text-white leading-6sm">
                $450M+
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Growth;
