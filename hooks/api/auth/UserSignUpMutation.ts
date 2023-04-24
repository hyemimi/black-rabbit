import { instance } from "@/libs/api/client";
import { useMutation } from "@tanstack/react-query";
import Router from "next/router";
import { baseURL } from "@/libs/api/client";
import { replaceAccessTokenForRequestInstance } from "@/libs/api/client";
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
  // const router = useRouter();

  return useMutation(
    (data: UserSignupMutationRequest) => instance.post("/sign/user", data),
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
    }
  );
}
