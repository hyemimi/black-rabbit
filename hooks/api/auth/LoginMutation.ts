import { instance } from "@/libs/api/client";
import { useMutation } from "@tanstack/react-query";
<<<<<<< HEAD
import axios from "axios";
import { replaceAccessTokenForRequestInstance } from "@/libs/api/client";
=======
import { useRouter } from "next/router";

>>>>>>> b8052aa2e834724c7768f47c086b3764e68cb764
export interface LoginMutationRequest {
  email: string;
  pw: string;
}
export interface LoginMutationResponse {
  nickname: string;
  role: string;
}

export default function useLoginMutation() {
<<<<<<< HEAD
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
=======
  const router = useRouter();
  return useMutation(
    (data: LoginMutationRequest) =>
      instance.post<LoginMutationResponse>("/login", data),
    {
      onSuccess: (res) => {
        console.log(res);
        alert("로그인 되었습니다.");
        router.push("/");
      },
      onError: (error) => {
        console.log(error);
        alert(error);
      },
    }
>>>>>>> b8052aa2e834724c7768f47c086b3764e68cb764
  );
}
