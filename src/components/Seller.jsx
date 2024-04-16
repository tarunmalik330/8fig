import React from "react";
import sellerimg from "../assets/images/png/sellerimg.png";

const Seller = () => {
  return (
    <>
      <div className="bg-white pt-[47px] pb-12">
        <div className="container mx-auto xl:max-w-[1190px] px-3">
          <div className="flex flex-row flex-wrap items-center sm:justify-between justify-center">
            <div className="sm:w-5/12 w-full max-sm:flex flex-col max-sm:justify-center max-sm:items-center">
              <h2 className="ff_abril text-lightblack max-sm:text-center font-semibold lg:text-9md text-4md leading-6lg mx-auto mb-[20px]">
                <span className="lg:block"> Become an 8 figure </span>seller
                with AI funding
              </h2>
              <button className="py-[10px] px-[44px] font-medium text-6sm text-white bg-purple rounded-4xs">
                Apply now
              </button>
            </div>
            <div className="sm:w-5/12 w-full sm:pt-0 pt-7 flex sm:justify-end">
              <div className=" overflow-hidden rounded-md">
                <img
                  src={sellerimg}
                  alt="sellerimg"
                  className="w-full sm:max-w-[440px] rounded-md hover:scale-[1.02] transition-all ease-linear duration-500
              "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Seller;
