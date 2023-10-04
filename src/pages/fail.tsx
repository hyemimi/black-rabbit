import { Wrapper } from "@/styles/Wrapper";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Section, Title } from "./success";
import { instance } from "@/src/libs/api/client";
import { useEffect } from "react";

export default function Success() {
  const router = useRouter();
  const { code, message, orderId } = router.query;
  useEffect(() => {
    const init = async () => {
      // ... 대충 결제에 성공하면 백단에 정보 저장하는 API
      await instance
        .get("/toss/redirect/fail", {
          params: { code: code, message: message, orderId: orderId },
        })
        .then((res) => console.log(res.data));
      // 재주문 요청 data 받아와서 보여줘야 함. (to-do)
    };
  }, []);
  return (
    <Wrapper>
      <Section>
        <Title>결제가 취소되었습니다</Title>

        <Button color="gray" onClick={() => router.push("/")}>
          홈
        </Button>
      </Section>
    </Wrapper>
  );
}
const Button = styled.button<{ color?: string }>`
  background-color: ${(props) =>
    props.color ? props.theme.searchColor : props.theme.pointColor};
  border: none;
  height: 50px;
  width: 100px;
  cursor: pointer;
  margin: 50px;
`;
