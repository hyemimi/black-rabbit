import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { instance } from "@/libs/api/client";

/* 회원 주문 목록 조회 */

export function useGetUserOrderList(userId: number, isCanceled: boolean) {
  const fetchOrderList = () => {
    return instance.get("/user/items", {
      params: { userId: userId, isCanceled: isCanceled },
    });
  };
  const { data: orderList } = useQuery(
    ["allOrder", userId],
    async () => await fetchOrderList()
  );
  return { orderList };
}
