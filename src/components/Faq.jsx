import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
function Icon({ id, open }) {
  return (
    <>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={`${open === id ? "hidden" : ""}`}
          d="M10 4V16"
          stroke="#0E1122"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4 10H16"
          stroke="#0E1122"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
}
const Faq = () => {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <>
      <div className="bg-bggrey sm:pt-[70px] sm:pb-[60px] py-[40px]">
        <div className="container mx-auto xl:max-w-[1264px] px-3">
          <p className="text-lightgrey text-4sm font-medium tracking-8spacing text-center uppercase pb-[20px]">
            still have questions?
          </p>
          <h2 className="ff_abril text-lightblack font-semibold lg:text-9md text-4md text-center lg:max-w-[438px] leading-6lg mx-auto mb-6">
            Learn more with FAQ
          </h2>
          <div>
            <Accordion
              className={`${
                open.id === 1 ? "border-0" : ""
              } cursor-pointer pb-[20px] sm:px-4 px-3 border-b border-solid border-[#DDDDDF]`}
              open={open === 1}
              icon={<Icon id={1} open={open} />}
            >
              <AccordionHeader
                className={`${
                  open === 1 ? "" : ""
                } focus-visible:outline-none border-0 font-medium sm:text-8sm text-6sm text-lightblack`}
                onClick={() => handleOpen(1)}
              >
                Who is eligible for a Growth Plan?
              </AccordionHeader>
              <AccordionBody className="py-2 text-4sm leading-6sm font-normal text-lightblack opacity-70">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias asperiores libero officia nemo qui? Id natus ratione
                quasi laboriosam atque veniam assumenda vel nemo. Suscipit omnis
                voluptatum velit quo tenetur.
              </AccordionBody>
            </Accordion>
            <Accordion
              className={`${
                open.id === 2 ? "border-0" : ""
              }cursor-pointer py-[20px] sm:px-4 px-3 border-b border-solid border-[#DDDDDF]`}
              open={open === 2}
              icon={<Icon id={2} open={open} />}
            >
              <AccordionHeader
                className={`${
                  open === 2 ? "" : ""
                } focus-visible:outline-none border-0 font-medium sm:text-8sm text-6sm text-lightblack`}
                onClick={() => handleOpen(2)}
              >
                How much funding can I qualify for?
              </AccordionHeader>
              <AccordionBody className="py-2 text-4sm leading-6sm font-normal text-lightblack opacity-70">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias asperiores libero officia nemo qui? Id natus ratione
                quasi laboriosam atque veniam assumenda vel nemo. Suscipit omnis
                voluptatum velit quo tenetur.
              </AccordionBody>
            </Accordion>
            <Accordion
              className={`${
                open.id === 3 ? "border-0" : ""
              }cursor-pointer py-[20px] sm:px-4 px-3 border-b border-solid border-[#DDDDDF]`}
              open={open === 3}
              icon={<Icon id={3} open={open} />}
            >
              <AccordionHeader
                className={`${
                  open === 3 ? "" : ""
                } focus-visible:outline-none border-0 font-medium sm:text-8sm text-6sm text-lightblack`}
                onClick={() => handleOpen(3)}
              >
                What is the cost of the Growth Plan?
              </AccordionHeader>
              <AccordionBody className="py-2 text-4sm leading-6sm font-normal text-lightblack opacity-70">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias asperiores libero officia nemo qui? Id natus ratione
                quasi laboriosam atque veniam assumenda vel nemo. Suscipit omnis
                voluptatum velit quo tenetur.
              </AccordionBody>
            </Accordion>
            <Accordion
              className={`${
                open.id === 4 ? "border-0" : ""
              }cursor-pointer py-[20px] sm:px-4 px-3 border-b border-solid border-[#DDDDDF]`}
              open={open === 4}
              icon={<Icon id={4} open={open} />}
            >
              <AccordionHeader
                className={`${
                  open === 4 ? "" : ""
                } focus-visible:outline-none border-0 font-medium sm:text-8sm text-6sm text-lightblack`}
                onClick={() => handleOpen(4)}
              >
                Does 8fig charge money for its services?
              </AccordionHeader>
              <AccordionBody className="py-2 text-4sm leading-6sm font-normal text-lightblack opacity-70">
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
