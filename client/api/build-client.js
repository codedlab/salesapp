import axios from "axios";

const buildClient = ({ req }) => {
  if (typeof window === "undefined") {
    //we are on the server
    return axios.create({
      baseURL:
        "https://www.sales-tickets-app-prod.xyz",
      headers: req.headers,
    });
  } else {
    //we are on the browser
    return axios.create({
      baseURL: "/",
    });
  }
};
export default buildClient;
