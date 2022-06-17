import axios from "axios";

const instance = axios.create({
  baseURL: "https://assessment.api.vweb.app",
});

export default instance;
