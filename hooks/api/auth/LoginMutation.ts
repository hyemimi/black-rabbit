import { instance } from "@/libs/api/client";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

export interface LoginMutationRequest {
  email: string;
  pw: string;
}
export interface LoginMutationResponse {
  nickname: string;
  role: string;
}

export default function useLoginMutation() {
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
  );
}
