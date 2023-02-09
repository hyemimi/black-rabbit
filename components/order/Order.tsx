import { IItem } from "@/temp/items";
import styled from "styled-components";

export default function Order({ brandName, modelName, image }: IItem) {
  return (
    <ItemDiv>
      <Box>
        <Header>
          <H1>2022.2.2 주문</H1>
          <H1>주문 상세보기 &gt;</H1>
        </Header>
        <InnerBox>
          <ImageDiv></ImageDiv>
          <Item width="500px">
            {brandName} {modelName}
          </Item>
          <Item width="200px">
            <Button>배송상태</Button>
            <Button>교환/반품 신청</Button>
            <Button>리뷰 작성하기</Button>
          </Item>
        </InnerBox>
      </Box>
    </ItemDiv>
  );
}

const ItemDiv = styled.div`
  display: flex;
`;
const H1 = styled.h1`
  font-size: 18px;
  font-weight: bold;
`;
const Button = styled.button`
  margin-bottom: 20px;
  border: none;
  font-size: 15px;
  cursor: pointer;
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const ImageDiv = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.theme.pointColor};
  margin-top: 25px;
`;
const Box = styled.div`
  width: 900px;
  height: 300px;
  border: 1px solid #d9d9d9;
  padding: 20px;
`;

const InnerBox = styled.div`
  display: flex;
`;
const Item = styled.div<{ width: string }>`
  margin: 10px;
  width: ${(props) => props.width};
  align-items: center;
  justify-content: center;
  padding: 30px;
  font-size: 30px;
`;
