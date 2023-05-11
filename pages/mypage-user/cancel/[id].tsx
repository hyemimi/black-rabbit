import styled from "styled-components";
import { Wrapper } from "@/components/common/Wrapper";
import { Box } from "@/components/common/Box";
import { TitleDiv } from "@/components/common/TitleDiv";
import { BoxInput } from "@/components/common/Box";
import { useState } from "react";
import { Select } from "@/components/detail/Seller";
import { Option } from "@/components/detail/Seller";
import { useRouter } from "next/router";

export default function Cancel() {
  const [content, setContent] = useState<string>("");
  const router = useRouter();
  return (
    <Wrapper>
      <TitleDiv>
        <h1>환불신청</h1>
      </TitleDiv>
      <Box height="300px">
        <form>
          <Row>
            <H1>oo렌탈 Canon EOS Rebel T7 18-55mm 번들 세트</H1>
          </Row>
          <hr />
          <Row>
            <H1>환불사유</H1>
            <Select>
              <Option>단순 변심</Option>
              <Option>옵션 변경</Option>
              <Option>배송 지연</Option>
            </Select>
          </Row>
        </form>
      </Box>
      <Button onClick={() => router.push("/mypage-user/cancel/Success")}>
        환불신청
      </Button>
    </Wrapper>
  );
}
const Row = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  text-align: center;
  width: 100%;
`;
const H1 = styled.h1`
  font-weight: bold;
  font-size: 20px;
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.pointColor};
  border: none;
  margin-left: 30px;
  height: 50px;
  width: 130px;
  cursor: pointer;
`;
