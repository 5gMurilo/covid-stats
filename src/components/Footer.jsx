import github from "../img/github.svg";
import React from "react";

const Footer = (_) => {
  return (
    <footer
      className="
                lg: h-full bg-silver w-full text-lg p-3
                md: text-base p-1
                sm: text-xs p-0
            "
    >
      {/* github link */}
      <div className="w-full flex flex-row items-center mb-3 pt-1">
        <img src={github} alt="github icon" className="w-10 opacity-40 " />
        <p className="w-full text-left">
          <a
            href="https://github.com/5gMurilo"
            target="_blank"
            rel="noopener noreferrer"
            className="m-0 text-left underline md: text-base
            sm: text-xs"
          >
            follow me in github!
          </a>
        </p>
      </div>

      <div
        className=" md: text-base pb-2
                sm: text-xs pb-1"
      >
        <p>
          Application made with love by Murilo Cardoso dos Santos, using react
          Js for project structure and tailwindCss for give beaty and style for
          the components.
        </p>
        <p>
          The API used in project can find clicking{" "}
          <a
            href="https://rapidapi.com/api-sports/api/covid-193?endpoint=apiendpoint_2feca6f0-0f58-40b7-9196-98c45c7d5083"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            here
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
