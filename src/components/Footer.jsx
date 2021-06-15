import github from "../img/github.svg";
import React from "react";

const Footer = (_) => {
  return (
    <footer
      className="
      sm: text-xs p-0 h-auto fixed mt-20
      md: text-base h-auto p-1 fixed 
      lg: h-40 bg-silver w-screen text-lg p-3 fixed bottom-0 table-footer-group	
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
        className=" 
                lg: text-base pb-4 mt-0
                md: text-sm pb-2 mt-4
                sm: text-xs pb-1 mt-8"
      >
        <p>
          Application made with love by Murilo Cardoso dos Santos, using react
          Js for project structure and tailwindCss for give beauty and style for
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
