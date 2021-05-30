import React from "react";

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
