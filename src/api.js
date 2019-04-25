import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 7ae6287041b27d388038d2ec48a2ae344b50c30def017efa2e2fcecc9625c270",
    "Accept-Version": "v1"
  }
});
