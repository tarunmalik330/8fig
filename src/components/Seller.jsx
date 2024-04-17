
import sellerimg from "../assets/images/webp/sellerimg.webp";

const Seller = () => {
  return (
    <>
      <div className="bg-white sm:pt-[47px] sm:pb-12 py-[40px]">
        <div className="container mx-auto xl:max-w-[1190px] px-3">
          <div className="flex flex-row flex-wrap items-center sm:justify-between justify-center">
            <div className="sm:w-5/12 w-full max-sm:flex flex-col max-sm:justify-center max-sm:items-center">
              <h2 className="ff_abril text-lightblack max-sm:text-center font-semibold lg:text-textlg text-textsm leading-leadinglg mx-auto sm:mb-[20px] mb-[16px]">
                <span className="lg:block"> Become an 8 figure </span>seller
                with AI funding
              </h2>
              <button className="sm:py-[10px] py-2 sm:px-[44px] px-[34px] font-medium text-base text-white bg-purple rounded-radiusxs hover:border-[#4C57FF] hover:border hover:border-solid border-transparent border hover:text-purple hover:bg-white transition-colors ease-linear duration-300">
                Apply now
              </button>
            </div>
            <div className="sm:w-5/12 w-full sm:pt-0 pt-7 flex sm:justify-end">
              <div className="overflow-hidden lg:rounded-md sm:rounded-radiussm rounded-radiusxs">
                <img
                  src={sellerimg}
                  alt="sellerimg"
                  className="w-full sm:max-w-[440px] lg:rounded-md sm:rounded-radiussm rounded-radiusxs hover:scale-[1.02] transition-all ease-linear duration-300
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
