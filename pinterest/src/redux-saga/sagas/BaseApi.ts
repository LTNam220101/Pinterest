import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_REST_ENDPOINT}`,
  headers: {
    Accept: "application/json"
  }
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken && !config.headers!.Authorization) {
      config.headers!.Authorization = `Bearer ${accessToken}`;
    }
    if (config.headers!["Content-Type"] !== "multipart/form-data")
      config.headers!["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    if (originalConfig.url !== "/auth/sign-in" && err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          const rs = await instance.post("/auth/refresh", undefined, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("refreshToken")}`,
              "Content-Type": "application/json"
            }
          });

          const { accessToken, refreshToken } = rs.data;
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);
          return instance(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }
    return Promise.reject(err);
  }
);

export default instance;
