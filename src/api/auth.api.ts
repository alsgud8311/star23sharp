import { instance } from "@/api";
import logOnDev from "@/api/logging";
import axios, { InternalAxiosRequestConfig } from "axios";

export type RoomSignInRequest = {
  room_signature: string;
  password: string;
};

export type RoomSignInResponse = {
  access_token: string;
};

export async function roomSignIn({
  room_signature,
  password,
}: RoomSignInRequest): Promise<RoomSignInResponse> {
  const { data } = await instance.post("/room/signin", {
    room_signature,
    password,
  });
  return data;
}

const refreshInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_SERVER_BASE_URL,
  withCredentials: true,
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
});
// 요청 인터셉터
refreshInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const { method, baseURL, url } = config;
    logOnDev(`♻️ [Refresh Request] ${method?.toUpperCase()} ${baseURL} ${url}`);
    return config;
  },
);

type TokenRefreshResponse = {
  access_token: string;
};

export async function tokenRefresh(): Promise<TokenRefreshResponse> {
  const { data } = await refreshInstance.post("/room/token/reissue");
  return data;
}

export function roomSignOut() {
  return refreshInstance.post("/room/signout");
}
