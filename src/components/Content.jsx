import React, { Component } from "react";

import brasil from "../img/brasil.png";
import atenção from "../img/atenção.png";
import caveira from "../img/caveira.png";
import hospital from "../img/hospital.png";

import TotalCasos from "./dataComponents/TotalCasos";
import CasosAtivos from "./dataComponents/CasosAtivos";
import CasosRecuperados from "./dataComponents/CasosRecuperados";
import Mortes from "./dataComponents/Mortes";
import Title from "./Title";

class Content extends Component {
  render() {
    let conf = this.props.confirmados != null ? this.props.confirmados : 0; //confirmados
    let deat = this.props.mortos != null ? this.props.mortos : 0; //mortos
    let crit = this.props.criticos != null ? this.props.criticos : 0; //criticos
    let reco = this.props.recuperados != null ? this.props.recuperados : 0; //recuperados

    function numberFormat(value) {
      return value.toLocaleString("pt-BR");
    }

    return (
      <div
        className="
          sm:grid-cols-1 w-11/12 ml-0 mr-0 my-10  
          md:grid-cols-2 mx-0 my-10 w-11/12 
          lg:grid w-full grid-cols-2 mx-16 my-10  
        "
      >
        {/* total de casos */}
        <div
          className=" md: wd-11/12 box-content flow-root mx-4
                      md: wd-11/12 box-content flow-root mx-8
                      lg: box-content flow-root h-44 p-2 my-4 mx-10 flex bg-gradient-to-tl from-azure to-skyblue shadow-lg"
        >
          <div className="flex h-14 w-full inline-block ml-2">
            <Title photo={brasil} mainTitle="total de casos" />
          </div>

          {/* dados */}
          <div className="flex h-14 w-full inline-block mt-4 align-middle justify-center">
            <TotalCasos conf={numberFormat(conf)} />
          </div>
        </div>

        {/* casos ativos */}
        <div
          className=" md: wd-11/12 box-content flow-root mx-4
                      md: wd-11/12 box-content flow-root mx-8
                      lg: box-content flow-root h-44 p-2 my-4 mx-10 flex bg-gradient-to-tl from-sunglow to-atomicTangerine shadow-lg"
        >
          <div className="flex h-14 w-full inline-block ml-2">
            <Title photo={atenção} mainTitle="Casos ativos" />
          </div>

          {/* dados */}
          <div className="flex h-14 w-full inline-block mt-4 align-middle justify-center">
            <CasosAtivos crit={numberFormat(crit)} />
          </div>
        </div>

        {/* casos recuperados */}
        <div
          className=" md: wd-11/12 box-content flow-root mx-4
                      md: wd-11/12 box-content flow-root mx-8
                      lg: box-content flow-root h-44 p-2 my-4 mx-10 flex bg-gradient-to-tl bg-gradient-to-tl from-seaGreenCrayola via-mediumAquamarine to-fluorescentBlue shadow-lg"
        >
          <div className="flex h-14 w-full inline-block ml-2">
            <Title photo={hospital} mainTitle="Recuperados" />
          </div>

          {/* dados */}
          <div className="flex h-14 w-full inline-block mt-4 align-middle justify-center">
            <CasosRecuperados reco={numberFormat(reco)} />
          </div>
        </div>

        {/* mortes */}
        <div
          className=" md: wd-11/12 box-content flow-root mx-4
                      md: wd-11/12 box-content flow-root mx-8
                      lg: box-content flow-root h-44 p-2 my-4 mx-10 flex bg-gradient-to-tl from-charlestonGreen to-Onyx shadow-lg"
        >
          <div className="flex h-14 w-full inline-block ml-2">
            <Title photo={caveira} mainTitle="Mortes" />
          </div>

          {/* dados */}
          <div className="flex h-14 w-full inline-block mt-4 align-middle justify-center">
            <Mortes deat={numberFormat(deat)} />
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
