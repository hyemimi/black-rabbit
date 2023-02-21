import { instance } from "@/libs/api/client";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export interface LoginMutationRequest {
  email: string;
  pw: string;
}
export interface LoginMutationResponse {
  nickname: string;
  role: string;
}

export default function useLoginMutation() {
  return useMutation((data: LoginMutationRequest) =>
    instance.post<LoginMutationResponse>("/login", data)
  );
}
