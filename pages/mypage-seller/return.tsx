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
} from "@/components/detail/Seller";

import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/router";
import ReturnCompleted from "@/components/mypage/seller/order/return/returnCompleted";
import ReturnWaiting from "@/components/mypage/seller/order/return/returnWaiting";

const Return = () => {
  const router = useRouter();
  const [tab, setTab] = useState<string>("반납대기");
  const handleTabClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const button: HTMLButtonElement = e.currentTarget;
    setTab(button.value);
  };

  return (
    <Wrapper>
      <WholeDiv>
        <Title>반납관리</Title>
        <StatusDiv>
          <StatusBox>
            <StatusName>반납대기</StatusName>
            <Number>3건</Number>
          </StatusBox>

          <StatusBox>
            <StatusName>반납완료</StatusName>
            <Number>2건</Number>
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

        {tab == "반납대기" ? (
          <>
            <DeleteDiv>
              <StateButton onClick={handleTabClick} value="반납대기">
                반납대기
              </StateButton>
              <WhiteButton onClick={handleTabClick} value="반납완료">
                반납완료
              </WhiteButton>
            </DeleteDiv>
            <ReturnWaiting />
          </>
        ) : null}
        {tab == "반납완료" ? (
          <>
            <DeleteDiv>
              <WhiteButton onClick={handleTabClick} value="반납대기">
                반납대기
              </WhiteButton>
              <StateButton onClick={handleTabClick} value="반납완료">
                반납완료
              </StateButton>
            </DeleteDiv>
            <ReturnCompleted />
          </>
        ) : null}
      </WholeDiv>
    </Wrapper>
  );
};
export default Return;

const StateButton = styled.button`
  width: 480px;
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
  width: 480px;
  margin: 0;
  padding: 10px;
  border: 1px solid #d9d9d9;
  font-size: 20px;
  background: white;
`;
