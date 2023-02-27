import axios from "axios";

export const baseURL = "http://15.165.101.95:8080";

export const instance = axios.create({
  //baseURL: baseURL,
  withCredentials: true,
  timeout: 15000,
});

/* 로그인 성공시 호출, 요청마다 header에 token 달아서 보냄 */
export function replaceAccessTokenForRequestInstance(token: string) {
  instance.defaults.headers.common["Authorization"] = token;
}
