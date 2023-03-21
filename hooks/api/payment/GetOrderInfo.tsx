import { useQuery } from "@tanstack/react-query";

/* 주문 정보 확인 (결제페이지)
기본 주소가 있으면 address에 포함되고, 없으면 null입니다!
isAllVisit이 true이면 전체 상품이 픽업인 경우입니다. */

/* export function useGetOrderList(basketIds: number[], userId: number) {
  const fetchOrderList = () => {
    return instance.get("/order/info", {
      params: { basketIds: basketIds, userId: userId },
    });
  };
  const { data: OrderList } = useQuery(
    ["allOrder"],
    async () => await fetchOrderList()
  );
  return { OrderList };
} */
