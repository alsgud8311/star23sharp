import { tokenRefresh } from "@/api/auth.api";
import logOnDev from "@/api/logging";
import { useRoomStore } from "@/store/useRoomStore";
import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_SERVER_BASE_URL,
  timeout: 3000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

declare module "axios" {
  interface InternalAxiosRequestConfig {
    _retry?: boolean;
  }
}

// 요청 인터셉터
instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const { method, baseURL, url } = config;
  logOnDev(`🚀 [API Request] ${method?.toUpperCase()} ${baseURL} ${url}`);
  const accessToken = useRoomStore.getState().token;
  config.headers["Authorization"] = `Bearer ${accessToken}`;
  return config;
});

// 응답 인터셉터
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    const { method, url } = response.config;
    const { status } = response;

    logOnDev(
      `🚀 [API Response] ${method?.toUpperCase()} ${url} | Response ${status}`,
    );

    return response;
  },
  async (error: AxiosError | Error) => {
    if (axios.isAxiosError(error)) {
      const originalRequest = error.config;

      logOnDev(`🚨 [API ERROR] ${error.message}`);

      if (!originalRequest) {
        logOnDev("🚨 [API ERROR] originalRequest is undefined");
        return Promise.reject(error);
      }

      if (!error.response) {
        return Promise.reject(error);
      }

      if (error.response.status === 401) {
        if (!originalRequest._retry) {
          try {
            logOnDev(`🚨 [API AUTHORIZATION RERTY] Token refresh...`);
            originalRequest._retry = true;
            const newAccessToken = await tokenRefresh();
            console.log("????", newAccessToken);
            originalRequest.headers["Authorization"] =
              `Bearer ${newAccessToken.access_token}`;
            useRoomStore.getState().refresh(newAccessToken.access_token);
            return instance(originalRequest);
          } catch (err) {
            logOnDev(`🚨 [API ERROR] Token refresh failed: ${err}`);
            useRoomStore.getState().signOut();
            return Promise.reject(err);
          }
        }
      }

      return Promise.reject(error);
    }

    logOnDev(`🚨 [API ERROR] ${error.message}`);
    return Promise.reject(error);
  },
);
