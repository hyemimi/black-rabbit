import { baseURL, instance } from "@/libs/api/client";
import { useMutation } from "@tanstack/react-query";

export interface BasketMutationRequest {
  ended: string;
  itemId: number;
  method: string;
  started: string;
  userId: number;
}

/* 좋아요를 등록합니다 */
export default function useBasketMutation() {
  return useMutation((data: BasketMutationRequest) =>
    instance.post("/basket", data)
  );
}
