import { Wrapper } from "@/components/common/Wrapper";
import { GreenBox } from "@/components/common/GreenBox";
import styled from "styled-components";

export default function payment() {
  return (
    <Wrapper>
      <Box height="100%">
        <GreenBox>배송정보</GreenBox>
        <Box width="100%"></Box>
        <GreenBox>상품정보 / 결제금액</GreenBox>
        <Box width="100%"></Box>
        <GreenBox>결제정보</GreenBox>
        <Box width="100%"></Box>
      </Box>
    </Wrapper>
  );
}
export const Box = styled.div<{ height?: string; width?: string }>`
  width: ${(props) => (props.width ? props.width : "900px")};
  height: ${(props) => (props.height ? props.height : "300px")};
  border: 1px solid #d9d9d9;
  padding: 20px;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 15px;
`;
