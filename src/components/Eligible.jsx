import { carddata } from "./common/Mapdata";

const Eligible = () => {
  return (
    <>
      <div className="sm:py-[60px] py-[40px]">
        <div className="container mx-auto xl:max-w-[1253px] px-3">
          <p className="uppercase font-medium text-sm text-grey leading-leadingxl text-center">
            make the cut
          </p>
          <h2 className="ff_abril text-lightblack font-semibold lg:text-textlg text-textsm text-center lg:max-w-[438px] leading-leadinglg mx-auto sm:my-[20px] py-[16px]">
            Who’s eligible for getting our AI funding?
          </h2>
          <button className="font-medium text-white text-xs py-[6px] px-[20px] rounded-radiusxs bg-purple leading-leadingxxl flex justify-center items-center mx-auto hover:border-[#4C57FF] hover:border hover:border-solid border-transparent border hover:text-purple hover:bg-white transition-colors ease-linear duration-300">
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
                    className={`${e.cardwidth} lg:py-10 sm:py-8 py-4 px-[22px] group h-full hover:shadow-[0px_-5px_10px_0px_rgba(0,0,0,0.2)] transition-all ease-linear duration-300 rounded-radiussm`}
                  >
                    {e.svg}
                    <p className="sm:my-4 my-3 tracking-spacing leading-leadingmd text-lightblack font-semibold text-base">
                      {e.heading}
                    </p>
                    <p
                      className={`${e.textwidth} sm:text-lg text-sm text-lightblack font-normal leading-leadingxs`}
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
