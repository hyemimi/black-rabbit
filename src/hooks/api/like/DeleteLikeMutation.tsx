import { instance } from "@/src/libs/api/client";
import { useMutation } from "@tanstack/react-query";

export interface DeleteLikeMutationRequest {
  itemId: number;
  userId: number;
}

/* 좋아요를 삭제합니다 */
export default function useDeleteLikeMutation() {
  return useMutation((data: DeleteLikeMutationRequest) =>
    instance.post("/likes", data)
  );
}
