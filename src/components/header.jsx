import React from "react";

const Header = (_) => {
  return (
    <header
      className="
        sm: w-full h-20 align-middle justify-center
        md: w-full h-20 align-middle justify-center 
        lg: w-full h-20 align-middle justify-center
     "
    >
      <p className="text-center font-sans text-2xl font-medium tracking-wide">
        Status da covid-19 no Brasil
      </p>
    </header>
  );
};

export default Header;
