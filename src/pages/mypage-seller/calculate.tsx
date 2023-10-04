import {
  Title,
  WholeDiv,
  Wrapper,
  StatusDiv,
  StatusBox,
  StatusName,
  Number,
  SearchDiv,
  FilterDiv,
  P,
  FilterName,
  Select,
  Option,
  ColumnDiv,
  DeleteButton,
  DeleteDiv,
  GreenButton,
  ItemTitle,
  Label,
  LeftTd,
  OverflowDiv,
  RightTd,
  Table,
  Tbody,
  Td,
  Thead,
  Tr,
  WholeLists,
  RowDiv,
} from "@/styles/MypageSellerStyle";

import styled from "styled-components";
import { ReactEventHandler, useState } from "react";
import { useRouter } from "next/router";
import Paycompleted from "@/src/components/mypage/seller/order/rental/paycompleted";
import DeliveryCompleted from "../../components/mypage/seller/order/rental/deliverycompleted";
import RentalCompleted from "@/src/components/mypage/seller/order/rental/rentalCompleted";
const Calculate = () => {
  const router = useRouter();
  const ItemList = [
    {
      itemId: 1,
      pricePerOne: 123,
      likeCount: 1,
      method: "PARCEL",

      reviewCount: 5,
      starAvg: 4.4,
      title: " Canon EOS Rebel T7 18-55mm 번들 세트",
    },
    {
      itemId: 2,
      pricePerOne: 20000,

      likeCount: 23,
      method: "PARCEL",
      reviewCount: 12,
      starAvg: 4.0,
      title: "[소니] FE 28-60mm F4-5.6 표준렌즈",
    },
    {
      itemId: 1,
      pricePerOne: 12324,

      likeCount: 1,
      method: "PARCEL",
      reviewCount: 5,
      starAvg: 4.4,
      title: "소니 A7M4 미러리스 카메라",
    },
    {
      itemId: 2,
      pricePerOne: 20000,

      likeCount: 23,
      method: "PARCEL",
      reviewCount: 12,
      starAvg: 4.0,
      title: "소니 FE 24-70mm GM F2.8",
    },
  ];
  const [tab, setTab] = useState<string>("결제완료");

  const handleTabClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const button: HTMLButtonElement = e.currentTarget;
    setTab(button.value);
  };
  return (
    <Wrapper>
      <WholeDiv>
        <Title>정산현황</Title>
        <StatusDiv>
          <StatusBox>
            <StatusName>?</StatusName>
            <Number>3건</Number>
          </StatusBox>

          <StatusBox>
            <StatusName>?</StatusName>
            <Number>2건</Number>
          </StatusBox>
          <StatusBox>
            <StatusName>?</StatusName>
            <Number>1건</Number>
          </StatusBox>
        </StatusDiv>

        <SearchDiv>
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              height: 20,
              width: 20,
              marginTop: 15,
              marginBottom: 15,
              marginLeft: 20,
              marginRight: 10,
            }}
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
          <P>검색조건</P>

          <FilterDiv>
            <FilterName>상품명</FilterName>
            <Select>
              <Option>Canon EOS Rebel T7 18-55mm 번들 세트</Option>
              <Option>[소니] FE 28-60mm F4-5.6 표준렌즈</Option>
              <Option>EOS 어쩌구</Option>
            </Select>
          </FilterDiv>
          <FilterDiv>
            <FilterName>기간</FilterName>
            <Select>
              <Option>지난 30일</Option>
              <Option>지난 1년</Option>
              <Option>지난 1주일</Option>
            </Select>
          </FilterDiv>
          <FilterDiv>
            <FilterName>처리상태</FilterName>
            <Select>
              <Option>결제완료</Option>
              <Option>배송진행</Option>
              <Option>배송완료</Option>
            </Select>
          </FilterDiv>
        </SearchDiv>
        <WholeLists>결제완료목록(총 {1}개)</WholeLists>
      </WholeDiv>
    </Wrapper>
  );
};
export default Calculate;

const StateButton = styled.button`
  width: 320px;
  margin: 0;
  padding: 10px;
  border: 1px solid #d9d9d9;
  font-size: 20px;
  background: #b6dcbe;
  &:active {
    background-color: #b6dcbe;
  }
`;

const WhiteButton = styled.button`
  width: 320px;
  margin: 0;
  padding: 10px;
  border: 1px solid #d9d9d9;
  font-size: 20px;
  background: white;
`;
