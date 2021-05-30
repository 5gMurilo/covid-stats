import React, { Component } from "react";

const Mortes = (props) => {
  return (
    <span
      className="self-center h-auto leading-none font-semibold text-2xl text-white"
      id="mor"
    >
      {props.deat}
    </span>
  );
};
export default Mortes;
