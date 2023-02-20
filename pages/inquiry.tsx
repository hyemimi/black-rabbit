import { Box, BoxInput } from "@/components/common/Box";
import { TitleDiv } from "@/components/common/TitleDiv";
import { Wrapper } from "@/components/common/Wrapper";
import styled from "styled-components";

export default function inquiry() {
  return (
    <Wrapper>
      <TitleDiv>
        <h1>문의하기</h1>
      </TitleDiv>
      <Box height="1500px">
        <Row>
          <H1>문의상품</H1>
          <Button>상품조회</Button>
        </Row>
        <hr />
        <Row>
          <H1>제목</H1>
          <BoxInput height="65px"></BoxInput>
        </Row>
        <Row>
          <H1>내용</H1>
          <BoxInput as="textarea" height="600px"></BoxInput>
        </Row>
        <Row>
          <input type="file" accept="image/*" />
        </Row>
        <ImageDiv></ImageDiv>
      </Box>
    </Wrapper>
  );
}

const Row = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
`;
const H1 = styled.h1`
  font-weight: bold;
  font-size: 20px;
`;

const ImageDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Button = styled.button`
  background-color: ${(props) => props.theme.pointColor};
  border: none;
  margin-left: 30px;
  height: 50px;
  width: 130px;
  cursor: pointer;
`;
