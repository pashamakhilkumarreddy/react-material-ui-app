import axios from "axios";
import config from "../config";

export default {
  fetchWords({ lang = "en", word }) {
    return axios.get(`${config.API_URL}/${lang}/${word}`);
  },
};
