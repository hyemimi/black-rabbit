import { Box, BoxInput } from "@/components/common/Box";
import { TitleDiv } from "@/components/common/TitleDiv";
import { Wrapper } from "@/components/common/Wrapper";
import styled from "styled-components";

export default function writeReview() {
  return (
    <Wrapper>
      <TitleDiv>
        <h1>상품은 어떠셨나요? 별점을 남겨주세요</h1>
      </TitleDiv>
      <Box height="1200px">
        <Row>
          <ReviewBox height="135px">
            <ImageDiv></ImageDiv>
            <H1>상품명</H1>
          </ReviewBox>
        </Row>
        <hr />
        <Row>
          <H1>제목</H1>
          <BoxInput height="65px"></BoxInput>
        </Row>
        <Row>
          <H1>내용</H1>
          <BoxInput as="textarea" height="400px"></BoxInput>
        </Row>
        <Row>
          <input type="file" accept="image/*" />
        </Row>
        <ImageDiv></ImageDiv>
        <Button>작성하기</Button>
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
  color: gray;
`;
const Button = styled.button`
  background-color: ${(props) => props.theme.pointColor};
  border: none;
  margin-left: 30px;
  height: 50px;
  width: 130px;
  margin-left: 400px;
  cursor: pointer;
`;
const ReviewBox = styled(Box)`
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 0px;
  padding-right: 10px;
`;
