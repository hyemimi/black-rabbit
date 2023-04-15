import React, { ReactElement, useEffect, useState } from "react";
import ReactDom, { createPortal } from "react-dom";
import styled from "styled-components";
import { MultiSelect } from "./Multiselect";

interface closeModalProps {
  closeModal: () => void;
}

interface product {
  id: string;
  state: string;
  value: string;
}

const ProductDeleteModal = ({ closeModal }: closeModalProps) => {
  const handleClose = () => {};
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
          <BigTitle>개별 상품 삭제</BigTitle>
          <Exit onClick={closeModal}>닫기</Exit>
        </Header>
        <ContentsDiv>
          <Title>상품정보</Title>
          <Box>
            <ItemsRowDiv>
              <P>상품명 </P>
              <P>캐논오토보이 </P>
            </ItemsRowDiv>
            <P>개별상품목록(일련번호) </P>
            <ItemBox>
              <RowDiv>
                <State>대여가능 </State>
                <MultiSelect
                  items={selectedItems("rentalable")}
                  placeholder="삭제할 상품을 고르세요"
                ></MultiSelect>
              </RowDiv>
              <RowDiv>
                <State>대여중</State>
                <MultiSelect
                  items={selectedItems("rental")}
                  placeholder="삭제할 상품을 고르세요"
                ></MultiSelect>
              </RowDiv>

              <RowDiv>
                <State>수리중</State>
                <MultiSelect
                  items={selectedItems("fix")}
                  placeholder="삭제할 상품을 고르세요"
                ></MultiSelect>
              </RowDiv>
            </ItemBox>
          </Box>
          <ButtonDiv>
            <Button>삭제</Button>
          </ButtonDiv>
        </ContentsDiv>
      </ModalDiv>
    </Div>
  );
};
export default ProductDeleteModal;

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
`;

const ButtonDiv = styled.div`
  margin: 25px;
  text-align: center;
`;
