import axios from "axios";

const api = axios.create({
  url: "https://covid-19-data.p.rapidapi.com/country",
  params: { name: "Brazil" },
  headers: {
    "x-rapidapi-key": "227fc38c13msh95037b604a11f7ep15fbb7jsn580a81f4bf6d",
    "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
  },
});

export default api;
