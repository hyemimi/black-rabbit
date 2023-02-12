import { Box } from "@/components/common/Box";
import { TitleDiv } from "@/components/common/TitleDiv";
import { Wrapper } from "@/components/common/Wrapper";
import { items } from "@/temp/items";
import styled from "styled-components";
export default function myreview() {
  return (
    <Wrapper>
      {" "}
      <TitleDiv>
        <h1>리뷰관리</h1>
      </TitleDiv>
      {items.map((item) => (
        <ReviewBox height="135px">
          <ImageDiv></ImageDiv>
          <H1>
            {item.brandName}
            {item.modelName}
          </H1>
          <h1>리뷰보기 &gt;</h1>
        </ReviewBox>
      ))}
    </Wrapper>
  );
}

const ImageDiv = styled.div`
  background-color: ${(props) => props.theme.searchColor};
  width: 200px;
  height: 100%;
`;
const H1 = styled.div`
  font-weight: bold;
  font-size: 20px;
`;
const ReviewBox = styled(Box)`
  text-align: center;
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 0px;
  padding-right: 10px;
`;
