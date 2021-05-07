import axios from "axios";

const api = axios.create({
  method: "GET",
  url: "https://covid-193.p.rapidapi.com/countries",
  headers: {
    "x-rapidapi-key": "227fc38c13msh95037b604a11f7ep15fbb7jsn580a81f4bf6d",
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
  },
});

export default api;
