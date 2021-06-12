import axios from "axios";

const api = axios.create({
  // url: "https://covid-19-data.p.rapidapi.com/country",
  url: "https://covid-193.p.rapidapi.com/statistics",
  params: { name: "Brazil" },
  headers: {
  //   "x-rapidapi-key": "227fc38c13msh95037b604a11f7ep15fbb7jsn580a81f4bf6d",
  //   "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
  // },
  headers: {
    'x-rapidapi-key': '227fc38c13msh95037b604a11f7ep15fbb7jsn580a81f4bf6d',
    'x-rapidapi-host': 'covid-193.p.rapidapi.com'
  }
});

export default api;
