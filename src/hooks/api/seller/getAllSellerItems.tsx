import { instance } from "@/src/libs/api/client";
import { useQuery } from "@tanstack/react-query";

/* 판매자 전체 상품 조회 */

export interface AllSellerItemQueryParam {}

export function useGetAllSellerItem() {
  const fetchAllSellerItem = () => {
    return instance.get("/items/all");
  };

  const { data: items, refetch } = useQuery(
    ["allProduct"],
    async () => await fetchAllSellerItem()
  );
  return { items, refetch };
}
