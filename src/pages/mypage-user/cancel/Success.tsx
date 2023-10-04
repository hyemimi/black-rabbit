import { useRouter } from "next/router";
import styled from "styled-components";
import { useEffect } from "react";
import { Wrapper } from "@/styles/Wrapper";

export default function Success() {
  const router = useRouter();

  return (
    <Wrapper>
      <Section>
        <h2>주문번호 : </h2>
        <Title>환불이 정상적으로 완료되었습니다</Title>

        <Button
          color="gray"
          onClick={() => router.push("/mypage-user/historylist")}
        >
          확인
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
