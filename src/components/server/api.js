import axios from "axios";

const api = axios.create({
  url: "https://api.covid19api.com/live/country/brazil/status/confirmed",
  headers: {},
});

export default api;
