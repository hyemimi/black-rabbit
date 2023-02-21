import { baseURL, instance } from "@/libs/api/client";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface StoreSignupMutationRequest {
  accountHolder: string;
  accountNumber: number;
  address: string;
  addressDetail: string;
  bank: string;
  businessNumber: string;
  email: string;
  managerName: string;
  postalCode: number;
  pw: string;
  registrationNumber: string;
  storeName: string;
}

interface StoreSignupMutationResponse {
  nickname: string;
  role: string;
}

/* 회원가입 - 가게 */

export default function useStoreSignupMutation() {
  return useMutation(
    (data: StoreSignupMutationRequest) =>
      instance.post<StoreSignupMutationResponse>("/sign/store", data),
    {
      onError: (error) => {
        console.log("회원가입 실패");
      },
    }
  );
}
