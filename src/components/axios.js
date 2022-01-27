import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-b33cf.cloudfunctions.net/api",
  // "http://localhost:5001/clone-b33cf/us-central1/api", //the API (cloud function) URL
});

export default instance;
