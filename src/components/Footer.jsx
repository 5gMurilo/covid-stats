import github from "../img/github.svg";
import React from "react";

const Footer = (_) => {
  return (
    <footer
      className="
                lg: h-full bg-silver w-full text-lg
                md: text-base
                sm: text-xs
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
            href="https://rapidapi.com/Gramzivi/api/covid-19-data/"
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
