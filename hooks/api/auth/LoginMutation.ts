import { instance } from "@/libs/api/client";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { replaceAccessTokenForRequestInstance } from "@/libs/api/client";
export interface LoginMutationRequest {
  email: string;
  pw: string;
}
export interface LoginMutationResponse {
  nickname: string;
  role: string;
}

export default function useLoginMutation() {
  const userLogin = ({
    accessToken,
    refreshToken,
  }: {
    accessToken: string;
    refreshToken: string;
  }) => {
    if (
      accessToken === undefined ||
      refreshToken === undefined ||
      accessToken === "" ||
      refreshToken === ""
    ) {
      throw Error("로그인 토큰이 올바르지 않습니다.");
    }
    console.log(accessToken);
    localStorage.setItem("dayfilm-user", accessToken);
    localStorage.setItem("dayfilm-user-re", refreshToken);
  };
  return useMutation(
    (data: LoginMutationRequest) =>
      instance.post<LoginMutationResponse>("/login", data).then((res) => {
        let accessToken = res.headers.authorization;
        let refreshToken = res.headers.authorization;
        userLogin({ accessToken, refreshToken });
      }),
    { onSuccess: () => console.log("로그인 성공") }
  );
}
