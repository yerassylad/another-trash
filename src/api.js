import axios from "axios";

const unsplash = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    "Accept-Version": "v1",
    Authorization:
      "Client-ID 521b026b88fd40f46026aa9432cd3d92dc050658a54e78c116fa60b624ebcfc8"
  }
});

export default unsplash;
