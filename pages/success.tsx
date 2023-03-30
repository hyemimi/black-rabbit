import { Wrapper } from "@/components/common/Wrapper";
import Card from "@/layout/Card";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useEffect } from "react";
import { instance } from "@/libs/api/client";
export default function Success() {
  const router = useRouter();
  const { paymentKey, orderId, amount } = router.query;
  useEffect(() => {
    const init = async () => {
      // ... 대충 결제에 성공하면 백단에 정보 저장하는 API
      await instance
        .get("/toss/redirect/success", {
          params: { amount: amount, orderId: orderId, paymentKey: paymentKey },
        })
        .then((res) => console.log(res));
    };
  }, []);
  return (
    <Wrapper>
      <Section>
        <h2>주문번호 : </h2>
        <Title>결제가 정상적으로 완료되었습니다</Title>

        <Button color="gray" onClick={() => router.push("/orderlist")}>
          주문확인
        </Button>
        <Button color="gray" onClick={() => router.push("/")}>
          홈으로 가기
        </Button>
      </Section>
    </Wrapper>
  );
}

export const Section = styled.div`
  background-color: ${(props) => props.theme.pointColor};
  margin-top: 100px;
  width: 900px;
  height: 500px;
  text-align: center;
  padding: 120px;
`;
export const Title = styled.h1`
  font-size: 40px;
`;
const Button = styled.button<{ color?: string }>`
  background-color: ${(props) =>
    props.color ? props.theme.searchColor : props.theme.pointColor};
  border: none;
  height: 50px;
  width: 100px;
  cursor: pointer;
  margin: 50px;
`;
