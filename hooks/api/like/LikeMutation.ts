import { instance } from "@/libs/api/client";
import { useMutation } from "@tanstack/react-query";

export interface LikeMutationRequest {
  itemId: number;
  userId: number;
}

/* 좋아요를 등록합니다 */
export default function useLikeMutation() {
  return useMutation((data: LikeMutationRequest) =>
    instance.post("/likes", data)
  );
}
