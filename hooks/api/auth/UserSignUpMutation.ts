import { instance } from "@/libs/api/client";
import { useMutation } from "@tanstack/react-query";
<<<<<<< HEAD
import { useUser } from "@/hooks/user/login";
import { useState } from "react";
import { replaceAccessTokenForRequestInstance } from "@/libs/api/client";
import { useQueryClient } from "@tanstack/react-query";
=======
import Router from "next/router";
import { baseURL } from "@/libs/api/client";
import { replaceAccessTokenForRequestInstance } from "@/libs/api/client";
import axios from "axios";
>>>>>>> b8052aa2e834724c7768f47c086b3764e68cb764

interface UserSignupMutationRequest {
  email: string;
  nickname: string;
  pw: string;
}

interface UserSignupMutationResponse {
  nickname: string;
  pk: number;
  role: string;
}

/*회원가입 - 개인 유저*/

export default function UseUserSignupMutation() {
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
    replaceAccessTokenForRequestInstance(accessToken);
    console.log(accessToken);
    localStorage.setItem("dayfilm-user", accessToken);
    localStorage.setItem("dayfilm-user-re", refreshToken);
  };
=======
  // const router = useRouter();

>>>>>>> b8052aa2e834724c7768f47c086b3764e68cb764
  return useMutation(
    (data: UserSignupMutationRequest) =>
      instance.post("/sign/user", data).then((res) => {
        let accessToken = res.headers.authorization;
        let refreshToken = res.headers.authorization;
        userLogin({ accessToken, refreshToken });
      }),
    {
      onSuccess: (res) => {
        console.log(res);
        const { accessToken } = res.headers.authorization;
        console.log(accessToken);
        replaceAccessTokenForRequestInstance(accessToken);
        axios.defaults.headers.common["Authorization"] = accessToken;

        alert("회원가입 성공");
        Router.push({
          pathname: "/signup/completed",
          query: { nickname: res.data.nickname },
        });
      },
      onError: (res: any) => {
        confirm("회원가입 실패");
        console.log(res.data.detail);
      },
      onSuccess: () => {
        console.log("회원가입 성공");
      },
    }
  );
}
