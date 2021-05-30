import React from "react";

const CasosRecuperados = (props) => {
  return (
    <span
      className="self-center h-auto leading-none font-semibold text-2xl text-white"
      id="rec"
    >
      {props.reco}
    </span>
  );
};

export default CasosRecuperados;
