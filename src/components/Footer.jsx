import pagelogo from "../assets/images/webp/pagelogo.webp";
import { footerlink } from "./common/Mapdata";

const Footer = () => {
  return (
    <div className="bg-bgblack sm:pt-[53px] sm:pb-[63.34px] py-10">
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
              <p className="text-grey text-sm font-medium tracking-spacing">
                {" "}
                8fig, 1717 W 6th St, Austin, Texas
              </p>
            </div>
          </div>
          <div className="lg:w-7/12 w-full">
            <div className="flex flex-row flex-wrap justify-between items-center max-lg:flex-col-reverse">
              <div className="lg:w-5/12 w-full sm:pt-8 pt-4 lg:pt-0">
                <p className="lg:text-center text-grey leading-leadingxl tracking-spacing font-medium text-base">
                  © {new Date().getFullYear()} 8fig - All Rights Reserved
                </p>
              </div>
              <div className="lg:w-3/12 w-full flex gap-[36px] items-baseline lg:justify-end sm:pt-8 pt-4 lg:pt-0">
                {footerlink.map((icon, index) => {
                  return (
                    <div key={index}>
                      <a href={icon.link} aria-label={icon.label}>
                        {icon.footersvg}
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
