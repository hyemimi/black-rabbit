import { baseURL, instance } from "@/libs/api/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

/* 좋아요 누른 상품을 조회합니다 */
export function useGetLikeList(userId: number) {
  const fetchList = () => {
    return instance.get(`/likes/${userId}`);
  };
  const { data: likeList } = useQuery(["like"], async () => await fetchList());
  return { likeList };
}
