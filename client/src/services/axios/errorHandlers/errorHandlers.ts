import { axiosInstance } from "../configs/configs";

axiosInstance.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (err) => {
    const status = err.response.status;
    let message = "";
    if (status === 401) {
      message = "Unauthorized access. Please log in.";
    } else if (status === 403) {
      message = "You don't have permission to access this resource.";
    } else if (status === 404) {
      message = "The requested resource was not found.";
    } else if (status === 429) {
      message =
        "You've exceeded the allowed request rate. Please try again later.";
    }
    err.message = message;
    return Promise.reject(err);
  }
);
