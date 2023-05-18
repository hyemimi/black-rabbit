import React, { ReactElement, useEffect, useState } from "react";
import ReactDom, { createPortal } from "react-dom";
import styled from "styled-components";

interface closeModalProps {
  closeAnswerModal: () => void;
}

interface product {
  id: string;
  state: string;
  value: string;
}

const InquiryModal = ({ closeAnswerModal }: closeModalProps) => {
  const onDeleteItem = () => {
    //선택된 아이템 서버로 보냄
  };
  const items = [
    { id: "1", state: "fix", value: "12344" },
    { id: "2", state: "rental", value: "234234" },
    { id: "3", state: "rentalable", value: "4443" },
    { id: "4", state: "fix", value: "afdd" },
    { id: "5", state: "fix", value: "123sdf4" },
  ];
  const selectedItems = (select: string) => {
    const selected = items.filter((item) => item.state === select);
    return selected;
  };
  return (
    <Div>
      <ModalDiv>
        <Header>
          <BigTitle>주문상세조회</BigTitle>
          <Exit onClick={closeAnswerModal}>닫기</Exit>
        </Header>
        <ContentsDiv>
          <Title>주문정보</Title>
          <Box>
            <GridRow>
              <ItemsRowDiv>
                <P>주문번호 </P>
                <P>1244 </P>
              </ItemsRowDiv>
              <ItemsRowDiv>
                <P>주문일시</P>
                <P>23/1/4 </P>
              </ItemsRowDiv>
            </GridRow>
            <GridRow>
              <ItemsRowDiv>
                <P>결제금액 </P>
                <P>1244원 </P>
              </ItemsRowDiv>
              <ItemsRowDiv>
                <P>주문자명</P>
                <P>정나리</P>
              </ItemsRowDiv>
            </GridRow>
            <GridRow>
              <ItemsRowDiv>
                <P>배송비 </P>
                <P>3000원 </P>
              </ItemsRowDiv>
              <ItemsRowDiv>
                <P>주문자명</P>
                <P>정나리</P>
              </ItemsRowDiv>
            </GridRow>
          </Box>
          <Title>상품정보</Title>
          <Box>
            <GridRow>
              <ItemsRowDiv>
                <P>상품명 </P>
                <P>Canon EOS Rebel T7 18-55mm 번들 세트 </P>
              </ItemsRowDiv>
              <ItemsRowDiv>
                <P>금액</P>
                <P>20000원 </P>
              </ItemsRowDiv>
            </GridRow>
            <GridRow>
              <ItemsRowDiv>
                <P>출고예정일 </P>
                <P>23.5.6 </P>
              </ItemsRowDiv>
              <ItemsRowDiv>
                <P>운송장번호</P>
                <P>23/1/4 </P>
              </ItemsRowDiv>
            </GridRow>
            <GridRow>
              <ItemsRowDiv>
                <P>배송상태 </P>
                <P>23.5.6 </P>
              </ItemsRowDiv>
              <ItemsRowDiv>
                <P>운송장번호</P>
                <P>23/1/4 </P>
              </ItemsRowDiv>
            </GridRow>
          </Box>{" "}
          <Title>배송정보</Title>
          <Box>
            <ItemsRowDiv>
              <P>수취인명 </P>
              <P>정나리 </P>
            </ItemsRowDiv>
            <ItemsRowDiv>
              <P>배송주소</P>
              <P>경기도 안산시 단원구 </P>
            </ItemsRowDiv>
            <ItemsRowDiv>
              <P>배송메모</P>
              <P>빠른배송부탁드립니다. </P>
            </ItemsRowDiv>
          </Box>
          <ButtonDiv>
            <Button>닫기</Button>
          </ButtonDiv>
        </ContentsDiv>
      </ModalDiv>
    </Div>
  );
};
export default InquiryModal;

const Div = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  weight: 100vw;
  height: 100vhv;
  background-color: rgba(0, 0, 0, 0.2);
  align-items: center;
`;
const Header = styled.div`
  background-color: ${(props) => props.theme.searchColor};
`;
const BigTitle = styled.h2`
  padding: 20px;
  font-size: 20px;
  position: relative;
  font-weight: 400;
`;

export const ModalDiv = styled.div`
  position: fixed;
  width: 800px;
  height: 600px;
  right: 0;
  left: 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.modalColor};
  top: 50%;
  overflow-y: scroll;
  left: 55%;
  transform: translate(-50%, -50%);
  align-items: center;
`;

const Exit = styled.button`
  position: absolute;
  width: 50px;
  height: 40px;
  margin: 10px;
  right: 0;
  top: 0;
  border: 0;
  background: #d9d9d9;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: #2f3640;
    color: white;
  }
`;

const ContentsDiv = styled.div`
  margin: 0 auto;
  padding: 5px 20px;
  align-items: center;
  border-radius: 10px;
`;

const Title = styled.h1`
  padding: 20px 0 0px 20px;
  font-size: 20px;
  position: relative;
  font-weight: 400;
  text-align: left;
`;

const Box = styled.div`
  margin: 10px;
  padding: 20px 20px;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
`;

const P = styled.p`
  margin: 10px;
  font-weight: 400;
  width: 100px;
`;

const ItemBox = styled.div`
  background: #f1f1f1;
  border-radius: 10px;
  padding: 10px;
`;

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px 10px;
`;

const State = styled.h1`
  width: 60px;
  margin: 10px;
  font-weight: 400;
`;

const Button = styled.button`
  width: 80px;
  background: #cee8d3;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  cursor: pointer;
`;
const ItemsRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px 20px;
`;

const ButtonDiv = styled.div`
  margin: 25px;
  text-align: center;
`;

const GridRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
