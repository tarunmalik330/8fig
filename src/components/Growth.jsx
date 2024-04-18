import businessimg from "../assets/images/webp/businessimg.webp";
import trustpilot from "../assets/images/webp/trustpilotimg.webp";

const Growth = () => {
  return (
    <>
      <div className="bg-bgblack lg:pt-[87.63px] lg:pb-[89.63px] sm:py-[60px] py-[40px]">
        <div className="container mx-auto xl:maw-w-[1191px] px-3">
          <div className="flex flex-wrap flex-row">
            <div className="lg:w-3/12 sm:w-6/12 w-full flex justify-center flex-col items-center">
              <img
                src={businessimg}
                alt="businessimg"
                className="w-full max-w-[83.5px] h-[31.73px] mb-[10px]"
              />
              <p className="capitalize font-semibold text-white ff_abril lg:text-textxxl md:text-textxl sm:text-textlg text-textmd  leading-leadingsm">
                ‘A’ Rating{" "}
              </p>
            </div>
            <div className="lg:w-3/12 sm:w-6/12 w-full sm:pt-0 pt-4 flex flex-col justify-center items-center">
              <p className="sm:text-textxs text font-normal text-white leading-leadingxl mb-[10px]">
                Average store growth
              </p>
              <p className="lg:text-textxxl md:text-textxl sm:text-textlg text-textmd ff_abril font-semibold text-white leading-leadingmd">
                400%
              </p>
            </div>
            <div className="lg:w-3/12 sm:w-6/12 w-full lg:pt-0 pt-4 flex justify-center flex-col items-center">
              <img
                src={trustpilot}
                alt="trustpilot"
                className="w-full max-w-[140px] h-[34px] mb-[10px]"
              />
              <p className="capitalize font-semibold text-white ff_abril lg:text-textxxl md:text-textxl sm:text-textlg text-textmd  leading-leadingsm">
                Excellent
              </p>
            </div>
            <div className="lg:w-3/12 sm:w-6/12 w-full lg:pt-0 pt-4 flex flex-col justify-center items-center">
              <p className="sm:text-textxs text-base font-normal text-white leading-leadingxl mb-[10px]">
                Funding given
              </p>
              <p className="lg:text-textxxl md:text-textxl sm:text-textlg text-textmd ff_abril font-semibold text-white leading-leadingsm">
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
