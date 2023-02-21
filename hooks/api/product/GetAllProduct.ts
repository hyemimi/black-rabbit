import { instance } from "@/libs/api/client";
import { useQuery } from "@tanstack/react-query";

/* 전체 상품 조회 */
export function useGetAllProduct() {
  const fetchAllProduct = () => {
    return instance.get("/items/all");
  };
  const { data: items } = useQuery(
    ["allProduct"],
    async () => await fetchAllProduct()
  );
  return { items };
}
