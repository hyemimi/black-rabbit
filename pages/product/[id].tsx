import styled from "styled-components";
import { Wrapper } from "@/components/common/Wrapper";
import Image from "next/image";
import tempimage from "../../public/help.png";
import Heartbutton from "@/components/common/Heartbutton";
import React, { useState } from "react";
import ReviewProduct from "@/components/detail/ReviewProduct";
import { useRouter } from "next/router";
import DatePicker from "react-datepicker";
import DatePick from "@/components/common/DatePick";

export default function detail() {
  const [selected, setSelected] = useState(true);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.currentTarget.name === "detail") {
      setSelected(true);
    } else {
      setSelected(false);
    }
  };
  var user_id = 1;
  const goCartPage = (user_id: number) => {
    if (window.confirm("장바구니로 이동하시겠습니까?")) {
      router.push(`/cart/${user_id}`);
    } else {
    }
  };

  const router = useRouter();

  return (
    <Wrapper>
      <InfoDiv>
        <div>
          <h1>카테고리 {`>`} 카메라</h1>
          <ProductImage></ProductImage>
        </div>
        <DetailDiv>
          <h1>언더독렌탈</h1>
          <TitleDiv>
            <Title>Canon EOS Rebel T7 18-55mm 번들 세트</Title>
            <Heartbutton />
          </TitleDiv>
          <hr />
          <ContentDiv>
            <TitleItem>
              <BoxName>가격</BoxName>
              <Box>10000원 / 1일</Box>
            </TitleItem>
            <TitleItem>
              <BoxName>수량</BoxName>{" "}
              <Select>
                <option value="">선택</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Select>
            </TitleItem>
            <TitleItem>
              <BoxName>거래 방법</BoxName>{" "}
              <Select>
                <option value="">선택</option>
                <option value="픽업">픽업</option>
                <option value="직거래">직거래</option>
                <option value="배송">배송</option>
              </Select>
            </TitleItem>
            <TitleItem>
              <BoxName>예약기간</BoxName>

              <DatePick />
            </TitleItem>
          </ContentDiv>
          <br />
          <ButtonDiv>
            <Button color="reservation">예약하기</Button>
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
          <Tab name="detail" onClick={onClick} selected={selected}>
            상품 설명
          </Tab>
          <Tab name="review" onClick={onClick} selected={!selected}>
            상품 리뷰
          </Tab>
        </TabDiv>
        {selected ? <></> : <ReviewProduct />}
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
const ProductImage = styled.div`
  background-color: ${(props) => props.theme.searchColor};
  width: 464px;
  height: 380px;
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
const Tab = styled(Button)<{ selected: boolean }>`
  background-color: ${(props) =>
    props.selected ? props.theme.pointColor : props.theme.searchColor};
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`;
