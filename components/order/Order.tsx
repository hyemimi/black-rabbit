import { IItem } from "@/temp/items";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Box, Item } from "../common/Box";

export default function Order({ brandName, modelName, image }: IItem) {
  const router = useRouter();
  return (
    <>
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
            <Button onClick={() => router.push("/mypage-user/writeReview")}>
              리뷰 작성하기
            </Button>
          </Item>
        </InnerBox>
      </Box>
    </>
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

const InnerBox = styled.div`
  display: flex;
`;
