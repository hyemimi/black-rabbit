//import { instance } from "@/libs/api/client";
import { useMutation } from "@tanstack/react-query";

/* 회원 정보와 장바구니 정보를 토대로 결제 정보를 생성합니다. 
해당 객체를 갖고 결제 생성 API를 호출해주시면 됩니다..*/
/* export interface CreatePaymentMutationRequest {
  addressId: number;
  basketIds: number[];
  deliveryMethod: string;
  payMethod: string;
  shipmentRequired: string;
  userId: number;
}
export interface CreatePaymentMutationResponse {
  amount: number;
  appScheme: string;
  cardCompany: string;
  easyPay: string;
  failUrl: string;
  flowMode: string;
  method: string;
  orderId: number;
  orderName: string;
  successUrl: string;
}

export default function useCreatePaymentMutation() {
  return useMutation((data: CreatePaymentMutationRequest) =>
    instance.post<CreatePaymentMutationResponse>("/toss/create", data)
  );
} */
