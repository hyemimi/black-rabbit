import { instance } from "@/libs/api/client";
import { useMutation } from "@tanstack/react-query";
import { useUser } from "@/hooks/user/login";
import { useState } from "react";
import { replaceAccessTokenForRequestInstance } from "@/libs/api/client";
import { useQueryClient } from "@tanstack/react-query";
import Router from "next/router";
import { baseURL } from "@/libs/api/client";
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
  return useMutation(
    (data: UserSignupMutationRequest) => instance.post("/sign/user", data),
    {
      onSuccess: (res) => {
        alert("회원가입 성공");
        Router.push({
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
