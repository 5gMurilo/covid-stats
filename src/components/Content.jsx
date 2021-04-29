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
import api from "./server/api";

class Content extends Component {
  state = {
    covidStat: [],
  };

  async componentDidMount() {
    const res = await api.get();

    this.setState({ covidStat: res.data });
  }

  render() {
    const { covidStat } = this.state;

    console.log("====================================");
    console.log(covidStat);
    console.log("====================================");

    return (
      <div
        className="
          sm:grid-cols-1 my-8 w-11/12 ml-0 mr-0
          md:grid-cols-2 mx-0 my-10 w-11/12 
          lg:grid w-full grid-cols-2 mx-16 my-12  
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
            <TotalCasos />
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
            <CasosAtivos />
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
            <CasosRecuperados />
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
            <Mortes />
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
