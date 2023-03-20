import { Wrapper } from "@/components/common/Wrapper";
import Card from "@/layout/Card";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Section, Title } from "./success";
export default function Success() {
  const router = useRouter();
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
