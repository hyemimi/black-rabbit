import { instance } from "@/libs/api/client";
import { useMutation } from "@tanstack/react-query";
import { useUser } from "@/hooks/user/login";
import { useState } from "react";
import { replaceAccessTokenForRequestInstance } from "@/libs/api/client";
import { useQueryClient } from "@tanstack/react-query";

interface UserSignupMutationRequest {
  email: string;
  nickname: string;
  pw: string;
}

interface UserSignupMutationResponse {
  nickname: string;
  role: string;
}

/*회원가입 - 개인 유저*/

export default function UseUserSignupMutation() {
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
  return useMutation(
    (data: UserSignupMutationRequest) =>
      instance.post("/sign/user", data).then((res) => {
        let accessToken = res.headers.authorization;
        let refreshToken = res.headers.authorization;
        userLogin({ accessToken, refreshToken });
      }),
    {
      onError: (error) => {
        console.log("회원가입 실패");
      },
      onSuccess: () => {
        console.log("회원가입 성공");
      },
    }
  );
}
