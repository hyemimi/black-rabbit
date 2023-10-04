import styled from "styled-components";
import { Wrapper } from "@/styles/Wrapper";

import Heartbutton from "@/src/components/common/Heartbutton";
import React, { useState } from "react";
import ReviewProduct from "@/src/components/itemDetail/ReviewProduct";
import { useRouter } from "next/router";

import DatePick from "@/src/components/common/DatePick";
import { GreenBox } from "@/styles/GreenBox";
import Question from "@/src/components/itemDetail/Question";

export default function Detail() {
  const [currentmenu, setCurrentMenu] = useState("detail");
  const [count, setCount] = useState<number>(1);
  const [method, setMethod] = useState<string | null>("");
  const [total, setTotal] = useState<number>(0);

  /* 탭 메뉴 관리 */
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.currentTarget.name === "detail") {
      setCurrentMenu("detail");
    } else if (event.currentTarget.name === "review") {
      setCurrentMenu("review");
    } else {
      setCurrentMenu("question");
    }
  };
  let user_id = 1;
  let pricePerOne = 10000;
  const goCartPage = (user_id: number) => {
    if (window.confirm("장바구니로 이동하시겠습니까?")) {
      router.push(`/cart/${user_id}`);
    } else {
    }
  };

  const router = useRouter();
  const onSelectHandler = (event: any) => {
    if (event.currentTarget.name === "count") {
      setCount(event.currentTarget.value);
    }
    if (event.currentTarget.name === "method") {
      setMethod(event.currentTarget.value);
    }
  };

  /* 이미지 슬라이더 */
  const onToggleImage = (idx: number) => {
    setClicked(idx);
  };
  const data = ["0", "1", "2", "3", "4"];
  const [clicked, setClicked] = useState(0);

  return (
    <Wrapper>
      <InfoDiv>
        <div>
          <h1>카테고리 {`>`} 카메라</h1>
          <ProductImage width="464px" height="380px">
            {data[clicked]}
          </ProductImage>
          <Row>
            {data.map((ele, idx) => (
              <>
                <ProductImage
                  highlight={idx === clicked}
                  onClick={() => onToggleImage(idx)}
                  width="80px"
                  height="80px"
                  key={ele}
                >
                  {ele}
                </ProductImage>
              </>
            ))}
          </Row>
        </div>
        <DetailDiv>
          <h1>언더독렌탈</h1>
          <TitleDiv>
            <Title>Canon EOS Rebel T7 18-55mm 번들 세트</Title>
            <Heartbutton />
          </TitleDiv>
          <ContentDiv>
            <GreenBox>가격정보</GreenBox>
            <TitleItem>
              <GrayBox>1일 대여료</GrayBox>
              <GrayBox>{pricePerOne}</GrayBox>
            </TitleItem>
            <TitleItem>
              <GrayBox>5일 이상 대여시</GrayBox>
              <GrayBox>{pricePerOne}</GrayBox>
            </TitleItem>
            <TitleItem>
              <GrayBox>10일 이상 대여시</GrayBox>
              <GrayBox>{pricePerOne}</GrayBox>
            </TitleItem>
            <GreenBox>옵션선택</GreenBox>

            <TitleItem>
              <BoxName>거래 방법</BoxName>{" "}
              <Select onChange={onSelectHandler} name="method">
                <option value="">선택</option>
                <option value="픽업">픽업</option>
                <option value="직거래">직거래</option>
                <option value="배송">배송</option>
              </Select>
            </TitleItem>
            <TitleItem>
              <BoxName>예약기간</BoxName>
              <DatePick
                pricePerOne={pricePerOne}
                count={count}
                setTotal={setTotal}
              />
            </TitleItem>
          </ContentDiv>
          <GreenBox>내역</GreenBox>
          <PriceDiv>
            <Pricebox> {total >= 0 && total} </Pricebox>원
          </PriceDiv>
          <ButtonDiv>
            <Button
              onClick={() => router.push("/reservation")}
              color="reservation"
            >
              예약하기
            </Button>
            <Button
              onClick={() => {
                goCartPage(user_id);
              }}
            >
              장바구니
            </Button>
          </ButtonDiv>
        </DetailDiv>
      </InfoDiv>

      <Div>
        <TabDiv>
          <Tab name="detail" onClick={onClick} selected={currentmenu}>
            상품 설명
          </Tab>
          <Tab name="review" onClick={onClick} selected={currentmenu}>
            상품 리뷰
          </Tab>
          <Tab name="question" onClick={onClick} selected={currentmenu}>
            Q & A
          </Tab>
        </TabDiv>
        {currentmenu === "review" && <ReviewProduct />}
        {currentmenu === "question" && <Question />}
      </Div>
    </Wrapper>
  );
}

const InfoDiv = styled.div`
  display: flex;
  width: 900px;
`;

const DetailDiv = styled.div`
  margin-left: 50px;
  padding: 10px;
  width: 100%;
`;
const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ProductImage = styled.div<{
  width?: string;
  height?: string;
  highlight?: boolean;
}>`
  background-color: ${(props) => props.theme.searchColor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.highlight && "2px solid red"};
  position: relative;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 460px;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
`;

const Div = styled.div`
  padding: 30px;
`;
const Select = styled.select`
  width: 150px;
  height: 30px;
  background-color: #ececec;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;
  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

const GrayBox = styled.div`
  padding: 5px;
  width: 100%;
`;
const TitleItem = styled.div`
  display: flex;
  margin: 10px;
`;
const BoxName = styled.div`
  font-size: 20px;
  width: 100px;
`;
const Box = styled.div`
  background-color: #ececec;
  border: none;
  cursor: pointer;
  width: 150px;
  height: 30px;
  font-size: 15px;
  text-align: center;
  align-items: center;
  margin-left: 10px;
`;
const ContentDiv = styled.div`
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;
const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 100px;
`;

const Button = styled.button`
  background-color: ${(props) =>
    props.color ? props.theme.pointColor : props.theme.searchColor};
  border: none;
  cursor: pointer;
  width: 145px;
  height: 54px;
  font-size: 15px;
`;
const TabDiv = styled.div`
  display: flex;
  width: 900px;
`;
const Tab = styled(Button)<{ name: string; selected: string }>`
  background-color: ${(props) =>
    props.selected === props.name
      ? props.theme.pointColor
      : props.theme.searchColor};
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`;
const PriceDiv = styled.div`
  display: flex;

  justify-content: center;
  text-align: center;
  align-items: center;
  font-size: 35px;
  margin-top: 20px;
`;
const Pricebox = styled.div`
  width: 250px;
  height: 50px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.searchColor};
  cursor: pointer;
  text-align: center;
`;
