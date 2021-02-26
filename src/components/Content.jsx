import React from "react";
import brasil from "../img/brasil.png";
import atenção from "../img/atenção.png";
import caveira from "../img/caveira.png";
import hospital from "../img/hospital.png";
import TotalCasos from "./dataComponents/TotalCasos";
import CasosAtivos from "./dataComponents/CasosAtivos";
import CasosRecuperados from "./dataComponents/CasosRecuperados";
import Mortes from "./dataComponents/Mortes";

export const Content = (_) => {
  return (
    <div className="grid grid-cols-2 mx-16 my-14">
      {/* total de casos */}
      <div className="box-content flow-root h-44 p-2 my-4 mx-10 flex bg-gradient-to-tl from-azure to-skyblue shadow-lg">
        <div className="flex h-14 w-96 inline-block ml-2">
          <img src={brasil} className="h-12 self-center " />
          <span className="font-bold text-xl p-0.5 self-center h-auto  leading-none m-2 object-fill tracking-wide text-white">
            Total de casos
          </span>
        </div>

        {/* dados */}
        <div className="flex h-14 w-full inline-block mt-4 align-middle justify-center">
          <TotalCasos />
        </div>
      </div>

      {/* casos ativos */}
      <div className="box-content flow-root h-44 p-2 my-4 mx-10 flex bg-gradient-to-tl from-sunglow to-atomicTangerine shadow-lg">
        <div className="flex h-14 w-96 inline-block ml-2">
          <img src={atenção} className="h-12 self-center" />
          <span className="font-bold text-2xl p-0.5 self-center h-auto  leading-none m-2 object-fill tracking-wide text-white">
            Casos ativos
          </span>
        </div>

        {/* dados */}
        <div className="flex h-14 w-full inline-block mt-4 align-middle justify-center">
          <CasosAtivos />
        </div>
      </div>

      {/* casos recuperados */}
      <div className="box-content flow-root h-44 p-2 my-4 mx-10 flex bg-gradient-to-tl from-seaGreenCrayola via-mediumAquamarine to-fluorescentBlue shadow-lg">
        <div className="flex h-14 w-96 inline-block ml-2">
          <img src={hospital} className="h-12 self-center" />
          <span className="font-bold text-xl p-0.5 self-center h-auto  leading-none m-2 object-fill tracking-wide text-white">
            Casos recuperados
          </span>
        </div>

        {/* dados */}
        <div className="flex h-14 w-full inline-block mt-4 align-middle justify-center">
          <CasosRecuperados />
        </div>
      </div>

      {/* mortes */}
      <div className="box-content flow-root h-44 p-2 my-4 mx-10 flex bg-gradient-to-tl from-charlestonGreen to-Onyx shadow-lg">
        <div className="flex h-14 w-96 inline-block ml-2">
          <img src={caveira} className="h-12 self-center" />
          <span className="font-bold text-xl p-0.5 self-center h-auto  leading-none m-2 object-fill tracking-wide text-white">
            Mortes
          </span>
        </div>

        {/* dados */}
        <div className="flex h-14 w-full inline-block mt-4 align-middle justify-center">
          <Mortes />
        </div>
      </div>
    </div>
  );
};

export default Content;
