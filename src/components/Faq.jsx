import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Icon } from "./common/Icon";
const Faq = () => {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <>
      <div className="bg-bgfaq sm:pt-[70px] sm:pb-[60px] py-10">
        <div className="container mx-auto xl:max-w-[1264px] px-3">
          <p className="text-grey text-sm font-medium tracking-spacing text-center uppercase leading-leadingxl sm:mb-5 mb-4">
            still have questions?
          </p>
          <h2 className="ff_abril text-lightblack font-semibold lg:text-textlg text-textsm text-center lg:max-w-[438px] leading-leadinglg mx-auto md:mb-6 sm:mb-4 mb-0">
            Learn more with FAQ
          </h2>
          <div className="lg:pt-[60px] sm:pt-[30px] pt-0">
            <Accordion
              className={`${
                open.id === 1 ? "border-0" : ""
              } cursor-pointer sm:py-[18px] py-[14px] sm:px-4 px-3 border-b border-solid border-[#DDDDDF]`}
              open={open === 1}
              icon={<Icon id={1} open={open} />}
            >
              <AccordionHeader
                className={`${
                  open === 1 ? "" : ""
                } focus-visible:outline-none border-0 font-medium sm:text-lg sm:py-4 py-3 text-start text-sm text-lightblack`}
                onClick={() => handleOpen(1)}
              >
                Who is eligible for a Growth Plan?
              </AccordionHeader>
              <AccordionBody className="py-2 sm:text-sm text-xs leading-leadingsm font-normal text-lightblack opacity-70 pr-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias asperiores libero officia nemo qui? Id natus ratione
                quasi laboriosam atque veniam assumenda vel nemo. Suscipit omnis
                voluptatum velit quo tenetur.
              </AccordionBody>
            </Accordion>
            <Accordion
              className={`${
                open.id === 2 ? "border-0" : ""
              }cursor-pointer sm:py-[18px] py-[14px] sm:px-4 px-3 border-b border-solid border-[#DDDDDF]`}
              open={open === 2}
              icon={<Icon id={2} open={open} />}
            >
              <AccordionHeader
                className={`${
                  open === 2 ? "" : ""
                } focus-visible:outline-none border-0 sm:py-4 py-3 font-medium text-start sm:text-lg text-sm text-lightblack`}
                onClick={() => handleOpen(2)}
              >
                How much funding can I qualify for?
              </AccordionHeader>
              <AccordionBody className="py-2 sm:text-sm text-xs leading-leadingsm font-normal text-lightblack opacity-70 pr-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias asperiores libero officia nemo qui? Id natus ratione
                quasi laboriosam atque veniam assumenda vel nemo. Suscipit omnis
                voluptatum velit quo tenetur.
              </AccordionBody>
            </Accordion>
            <Accordion
              className={`${
                open.id === 3 ? "border-0" : ""
              }cursor-pointer sm:py-[18px] py-[14px] sm:px-4 px-3 border-b border-solid border-[#DDDDDF]`}
              open={open === 3}
              icon={<Icon id={3} open={open} />}
            >
              <AccordionHeader
                className={`${
                  open === 3 ? "" : ""
                } focus-visible:outline-none border-0 sm:py-4 py-3 text-start font-medium sm:text-lg text-sm text-lightblack`}
                onClick={() => handleOpen(3)}
              >
                What is the cost of the Growth Plan?
              </AccordionHeader>
              <AccordionBody className="py-2 sm:text-sm text-xs leading-leadingsm font-normal text-lightblack opacity-70 pr-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias asperiores libero officia nemo qui? Id natus ratione
                quasi laboriosam atque veniam assumenda vel nemo. Suscipit omnis
                voluptatum velit quo tenetur.
              </AccordionBody>
            </Accordion>
            <Accordion
              className={`${
                open.id === 4 ? "border-0" : ""
              }cursor-pointer sm:py-[18px] py-[14px] sm:px-4 px-3 border-b border-solid border-[#DDDDDF]`}
              open={open === 4}
              icon={<Icon id={4} open={open} />}
            >
              <AccordionHeader
                className={`${
                  open === 4 ? "" : ""
                } focus-visible:outline-none border-0 sm:py-4 py-3 text-start font-medium sm:text-lg text-sm text-lightblack`}
                onClick={() => handleOpen(4)}
              >
                Does 8fig charge money for its services?
              </AccordionHeader>
              <AccordionBody className="py-2 sm:text-sm text-xs leading-leadingsm font-normal text-lightblack opacity-70 pr-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias asperiores libero officia nemo qui? Id natus ratione
                quasi laboriosam atque veniam assumenda vel nemo. Suscipit omnis
                voluptatum velit quo tenetur.
              </AccordionBody>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
