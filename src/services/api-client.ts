import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fd5308ac24db4aa588037bf5d9e3311e",
  },
});
