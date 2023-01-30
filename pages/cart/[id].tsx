import { Wrapper } from "@/components/common/Wrapper";
import styled from "styled-components";

export default function Cart() {
  return (
    <Wrapper>
      <TitleDiv>
        <h1>장바구니🛍️</h1>
        <Hr />
      </TitleDiv>
    </Wrapper>
  );
}

const TitleDiv = styled.div`
  width: 900px;
  text-align: center;
  h1 {
    font-size: 30px;
  }
  padding: 10px;
`;
const Hr = styled.div`
  border: 2px solid gray;
  margin-top: 10px;
`;
