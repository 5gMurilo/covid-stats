import React from "react";

const Header = (_) => {
  return (
    <header
      className="
        sm: w-full h-auto align-middle justify-center p-4 mb-6
        md: w-full h-auto align-middle justify-center p-4 mb-6 
        lg: w-full h-auto align-middle justify-center p-4 mb-6
     "
    >
      <p className="text-center font-sans text-2xl font-medium tracking-wide">
        Status da covid-19 no Brasil
      </p>
    </header>
  );
};

export default Header;
