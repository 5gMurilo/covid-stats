import React from "react";

import brasil from "../img/brasil.png";
import atenção from "../img/atenção.png";
import caveira from "../img/caveira.png";
import hospital from "../img/hospital.png";

const Title = (props) => {
  return (
    <>
      <img src={props.photo} className="h-12 self-center " />
      <span className="font-bold text-xl p-0.5 self-center h-auto  leading-none m-2 object-fill tracking-wide text-white">
        {props.mainTitle}
      </span>
    </>
  );
};

export default Title;
