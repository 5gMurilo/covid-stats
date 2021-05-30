import React, { Component } from "react";
import api from "../server/api";

const CasosAtivos = (props) => {
  return (
    <span
      className="self-center h-auto leading-none font-semibold text-2xl text-white"
      id="act"
    >
      {props.crit}
    </span>
  );
};

export default CasosAtivos;
