import { useQuery } from "@tanstack/react-query";
import { instance } from "@/src/libs/api/client";

/* 전체 장바구니 리스트 조회 */
export function useGetBasketList() {
  const fetchAllBasket = () => {
    return instance.get("/basket/all");
  };
  const { data: basketList } = useQuery(
    ["allBasket"],
    async () => await fetchAllBasket()
  );
  return { basketList };
}
