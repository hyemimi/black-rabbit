import { instance } from "@/libs/api/client";
import { useQuery } from "@tanstack/react-query";

/* 전체 상품 조회 */

export interface AllProductQueryParam {
  page: number;
  size: number;
  category?: string;
}

export function useGetAllProduct(search?: AllProductQueryParam) {
  const fetchAllProduct = () => {
    return instance.get("/items/all", { params: search });
  };
  const { data: items, refetch } = useQuery(
    ["allProduct"],
    async () => await fetchAllProduct()
  );
  return { items, refetch };
}
