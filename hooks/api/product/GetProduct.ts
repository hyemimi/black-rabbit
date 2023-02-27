import { useQuery } from "@tanstack/react-query";
import { instance } from "@/libs/api/client";

/* 특정 상품 조회 */
export function useGetProduct(itemId: number) {
  const fetchProduct = () => {
    return instance.get(`/items/${itemId}`);
  };
  const { data: product } = useQuery(
    ["Product", itemId],
    async () => await fetchProduct()
  );
  return { product };
}
