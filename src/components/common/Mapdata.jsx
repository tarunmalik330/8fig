import {
  Location,
  Period,
  AnnualRevenue,
  MonthlyRevenue,
  FacebookSvg,
  InstagramSvg,
  LinkedInSvg,
  TwitterSvg,
} from "./Icon";

export const carddata = [
  {
    svg: <Location />,
    heading: "Location",
    paragraph:
      "The business must be based in the US or Canada, excluding Quebec.",
    textwidth: "lg:max-w-[255px]",
  },
  {
    svg: <Period />,
    heading: "Operation period",
    paragraph: "The store’s operational period should be at least 6 months.",
    textwidth: "lg:max-w-[255px]",
  },
  {
    svg: <AnnualRevenue />,
    heading: "Annual Revenue",
    paragraph: "Annual revenue must exceed $100,000.",
    textwidth: "lg:max-w-[255px]",
  },
  {
    svg: <MonthlyRevenue />,
    heading: "Monthly Revenue",
    paragraph:
      "The average monthly revenue over the past 3 months must exceed $8,000.",
    textwidth: "lg:max-w-[216px]",
  },
];

export const footerlink = [
  {
    link: "https://www.facebook.com/",
    footersvg: <FacebookSvg />,
  },
  {
    link: "https://www.instagram.com/",
    footersvg: <InstagramSvg />,
  },
  {
    link: "https://in.linkedin.com/",
    footersvg: <LinkedInSvg />,
  },
  {
    link: "https://twitter.com/",
    footersvg: <TwitterSvg />,
  },
];
