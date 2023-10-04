import { instance } from "@/src/libs/api/client";
import { useMutation } from "@tanstack/react-query";
import { useUser } from "@/src/hooks/user/login";
import { useState } from "react";
import { replaceAccessTokenForRequestInstance } from "@/src/libs/api/client";
import { useRouter } from "next/router";
import axios from "axios";

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
  const router = useRouter();
  return useMutation(
    (data: UserSignupMutationRequest) => instance.post("/sign/user", data),
    {
      onSuccess: (res) => {
        alert("회원가입 성공");
        router.push({
          pathname: "/signup/completed",
          query: { nickname: res.data.nickname },
        });
      },
      onError: (errors) => {
        alert("회원가입실패");
        console.log(errors);
      },
    }
  );
}
