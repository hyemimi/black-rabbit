import { Wrapper } from "@/components/common/Wrapper";
import Card from "@/layout/Card";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function Success() {
  const router = useRouter();
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

const Section = styled.div`
  background-color: ${(props) => props.theme.pointColor};
  margin-top: 100px;
  width: 900px;
  height: 500px;
  text-align: center;
  padding: 120px;
`;
const Title = styled.h1`
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
