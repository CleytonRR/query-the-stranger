import axios from "axios";

const clientApi = axios.create({
  baseURL: "http://www.omdbapi.com",
});

export { clientApi };
