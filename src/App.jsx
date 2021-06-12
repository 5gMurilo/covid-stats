import React, { Component } from "react";
import Content from "./components/Content";
import Header from "./components/header";
import axios from "axios";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    covidStat: [],
  };

  componentDidMount() {
    const headers = {
      "x-rapidapi-key": "227fc38c13msh95037b604a11f7ep15fbb7jsn580a81f4bf6d",
      "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
    };
    axios
      .get("https://covid-19-data.p.rapidapi.com/country/code?code=Br", {
        headers,
      })
      .then((response) => this.setState({ covidStat: response.data }));
  }

  render() {
    let pageContent = <> </>;

    if (this.state.covidStat.length !== 0) {
      pageContent = this.state.covidStat.map((apiData) => (
        <main
          className="
          lg:flex w-full flow-root min-h-auto items-center  justify-center
          md:flex w-11/12 flow-root items-center justify-center
          sm:flex w-11/12 flow-root items-center justify-center
          "
        >
          <Content
            mortos={apiData.deaths}
            confirmados={apiData.confirmed}
            criticos={apiData.critical}
            recuperados={apiData.recovered}
          />
        </main>
      ));
    }

    return (
      <>
        <Header />

        {pageContent}

        <Footer />
      </>
    );
  }
}

export default App;
