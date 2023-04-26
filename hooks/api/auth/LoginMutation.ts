import {
  instance,
  replaceAccessTokenForRequestInstance,
} from "@/libs/api/client";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import axios, { AxiosError } from "axios";
import { useGetAllProduct } from "../product/GetAllProduct";

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
        console.log("키");
        console.log(typeof res.headers.authorization);
        console.log("성공");
        alert("로그인 되었습니다.");
        router.push("/");
        const accessToken = res.headers.authorization;
        // localStorage.setItem("accessToken", accessToken);
        replaceAccessTokenForRequestInstance(accessToken);
        axios.defaults.headers.common["Authorization"] = accessToken;
      },
      onError: (error: AxiosError) => {
        const ob = Object(error.response!.data);
        alert(ob.detail);
        console.log(axios.defaults.headers);
        axios.defaults.headers.common["Authorization"] = "";
      },
    }
  );
}
