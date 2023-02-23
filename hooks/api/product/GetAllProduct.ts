import { instance } from "@/libs/api/client";
import { useQuery } from "@tanstack/react-query";

/* 전체 상품 조회 */

export interface AllProductQueryParam {
  category?: string;
  offset?: number;
  paged?: boolean;
  pageNumber?: number;
  pageSize?: number;
  unpaged?: boolean;
}

export function useGetAllProduct(search: AllProductQueryParam) {
  const fetchAllProduct = () => {
    return instance.get("/items/all", { params: search });
  };
  const { data: items } = useQuery(
    ["allProduct"],
    async () => await fetchAllProduct()
  );
  return { items };
}
