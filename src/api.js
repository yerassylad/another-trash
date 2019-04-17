import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 521b026b88fd40f46026aa9432cd3d92dc050658a54e78c116fa60b624ebcfc8"
  }
});
