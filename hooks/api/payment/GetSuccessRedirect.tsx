import { useQuery } from "@tanstack/react-query";
import { instance } from "@/libs/api/client";

/* 장바구니에 있는 상품을 지우고, 결제로 넘깁니다.
상품 주문 시 Redirect되면 결제 승인을 요청합니다. 
대충 결제에 성공하면 백단에 정보 저장하는 API
*/

export function useSuccessRedirect(
  amount: number,
  orderId: string,
  paymentKey: string
) {
  const Success = () => {
    return instance.get("/toss/redirect/success", {
      params: { amount: amount, orderId: orderId, paymentKey: paymentKey },
    });
  };
  const { data: successData } = useQuery(
    ["paymentSuccess"],
    async () => await Success()
  );
  return { successData };
}
