import React, { Component } from "react";
import Content from "./components/Content";
import Header from "./components/header";
import axios from "axios";
import Footer from "./components/Footer";
import covid from "./img/covid.svg";

class App extends Component {
  state = {
    covidStat: [],
  };

  componentDidMount() {
    const headers = {
      "x-rapidapi-key": "227fc38c13msh95037b604a11f7ep15fbb7jsn580a81f4bf6d",
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
    };
    axios
      .get("https://covid-193.p.rapidapi.com/statistics?country=brazil", {
        headers,
      })
      .then((response) => this.setState({ covidStat: response.data }));
  }

  render() {
    let pageContent = (
      <>
        <div className=" w-full h-full grid grid-cols-1 gap-6 place-items-center ">
          <img src={covid} alt="corona virus icon" />

          <h3>Aguarde, os dados estão sendo carregados </h3>
        </div>
      </>
    );

    if (this.state.covidStat.length !== 0) {
      pageContent = this.state.covidStat.response.map((apiData, i) => (
        <>
          <Header />
          <main
            className="
          lg:flex w-full flow-root min-h-auto items-center  justify-center
          md:flex w-11/12 flow-root items-center justify-center
          sm:flex w-11/12 flow-root items-center justify-center mb-44
          "
          >
            <Content
              key={i}
              mortos={apiData.deaths.total}
              confirmados={apiData.cases.total}
              criticos={apiData.cases.active}
              recuperados={apiData.cases.recovered}
            />
          </main>
          <Footer />
        </>
      ));
    }

    console.log(this.state.covidStat.response);

    return <>{pageContent}</>;
  }
}

export default App;
