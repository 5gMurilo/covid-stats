import React from "react";
import brasil from "../img/brasil.png";
import atenção from "../img/atenção.png";
import caveira from "../img/caveira.png";
import hospital from "../img/hospital.png";

export const Content = (_) => {
  return (
    <div className="flex w-11/12 h-auto grid grid-flow-col grid-rows-2 ">
      <div className="box-content h-40 p-2 m-2 flex">
        <img src={brasil} className="h-12 m-2" />
      </div>

      <div className="box-content h-40 p-2 m-2 flex">
        <img src={atenção} className="h-12 m-2" />
      </div>

      <div className="box-content h-40 p-2 m-2 flex">
        <img src={hospital} className="h-12 m-2" />
      </div>

      <div className="box-content h-40 p-2 m-2 flex">
        <img src={caveira} className="h-12 m-2" />
      </div>
    </div>
  );
};

export default Content;
