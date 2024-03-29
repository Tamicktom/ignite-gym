//* Libraries imports
import axios from "axios";

//* Local imports
import { AppError } from "@utils/AppError";

const api = axios.create({
  baseURL: "http://192.168.100.10:3333/",
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(new AppError(error.response.data.message));
    } else {
      return Promise.reject(
        new AppError(error)
      );
    }
  }
);

export { api };
