import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID DyM0i9Hjhq9cIiVu_s0KOT8GeD05cKMQBS558uFIo_M",
  },
});
