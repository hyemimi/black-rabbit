import { instance } from "@/src/libs/api/client";
import { useMutation } from "@tanstack/react-query";

/* 리뷰를 생성합니다 */

export interface createReviewMutationRequest {
  content: string;
  itemId: string;
  star: number;
  userId: string;
}
export default function useCreateReviewMutation() {
  return useMutation((data: createReviewMutationRequest) =>
    instance.post<any>("/reviews/user-write", data)
  );
}
