import {
  instance,
  replaceAccessTokenForRequestInstance,
} from "@/src/libs/api/client";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Router from "next/router";

interface StoreSignupMutationRequest {
  businessNumber: string;
  storeName: string;
  postalCode: number;
  address: string;
  addressDetail: string;
  registrationNumber: string;
  managerName: string;
  bank: string;
  accountNumber: number;
  accountHolder: string;
  email: string;
  pw: string;
}

interface StoreSignupMutationResponse {
  nickname: string;
  role: string;
  pk: number;
}

/* 회원가입 - 가게 */

export default function useStoreSignupMutation() {
  return useMutation(
    (data: StoreSignupMutationRequest) => instance.post("/sign/store", data),
    {
      onSuccess: (res) => {
        alert("회원가입 성공");
        Router.push({
          pathname: "/signup/completed",
          query: { nickname: res.data.nickname },
        });
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
}
