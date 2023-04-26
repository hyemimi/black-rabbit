//import { instance } from "@/libs/api/client";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
/* 해당 상품을 장바구니에 추가 한 뒤, 주문 정보로 Redirect됩니다.
해당 상품이 장바구니에 존재하는 경우, 예약할 때 넣은 정보로 수정됩니다.*/

export interface createReserveMutationRequest {
  ended: string;
  method: string;
  productId: number;
  started: string;
  userId: number;
}
export default function useReserveMutation() {
  return useMutation((data: createReserveMutationRequest) =>
    axios.post<any>("15.165.101.95:8080/order/reserve", data)
  );
}
