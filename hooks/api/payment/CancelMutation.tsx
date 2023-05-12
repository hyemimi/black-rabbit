import { instance } from "@/libs/api/client";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

/*주문의 PK와 취소 사유를 보냅니다.
결제 전 주문이라면 주문을 삭제하고 장바구니로 옮깁니다. */
export interface CancelMutationRequest {
  cancelReason: string;
  orderPk: number;
}

export default function useCancelMutation() {
  const router = useRouter();
  return useMutation((data: CancelMutationRequest) =>
    instance.post<any>("/user/items/cancel", data)
  );
}
