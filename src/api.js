import axios from "axios";

const unsplash = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    "Accept-Version": "v1",
    Authorization:
      "Client-ID 7ae6287041b27d388038d2ec48a2ae344b50c30def017efa2e2fcecc9625c270"
  }
});

export default unsplash;

// 521b026b88fd40f46026aa9432cd3d92dc050658a54e78c116fa60b624ebcfc8
