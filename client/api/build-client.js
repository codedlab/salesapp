import axios from "axios";

const buildClient = ({ req }) => {
  if (typeof window === "undefined") {
    //we are on the server
    return axios.create({
      baseURL: "http://www.saylab-ticketing-app-prod.xyz",
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
