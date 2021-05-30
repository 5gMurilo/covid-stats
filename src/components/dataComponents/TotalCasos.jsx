import React, { Component, useState } from "react";

const TotalCasos = (props) => {
  return (
    <span className="self-center h-auto leading-none font-semibold text-2xl text-white">
      {props.conf}
    </span>
  );
};

export default TotalCasos;
