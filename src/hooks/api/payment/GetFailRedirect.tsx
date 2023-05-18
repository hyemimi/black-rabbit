import { useQuery } from "@tanstack/react-query";
import { instance } from "@/src/libs/api/client";

/* 주문 정보를 삭제하고 장바구니로 옮깁니다.
실패 메시지와 주문 정보를 내려드리면 재주문 요청 화면을 보여주면 될 것 같아요.
*/

export function useFailRedirect(
  code: string,
  message: string,
  orderId: string
) {
  const Fail = () => {
    return instance.get("/toss/redirect/fail", {
      params: { code: code, message: message, orderId: orderId },
    });
  };
  const { data: failData } = useQuery(
    ["paymentSuccess"],
    async () => await Fail()
  );
  return { failData };
}
