import React, { useState, useRef } from "react";
import styled from "styled-components";
import {
  OverflowDiv,
  Table,
  Tbody,
  Td,
  RightTd,
  Thead,
  Tr,
  LeftTd,
  ItemTitle,
} from "@/styles/MypageSellerStyle";
import {
  Div,
  BigTitle,
  Exit,
  ContentsDiv,
  ItemBox,
  ModalTable,
  Input,
  ButtonDiv,
  Button,
  Header,
  Box,
  ModalDiv,
  P,
} from "@/styles/ModalStyle";

interface closeModalProps {
  closeModal: (e: any) => void;
  selectedItems: any;
}

interface InputItem {
  id: number;
  serialNum: string;
}

const ShippingDateModal = ({ closeModal, selectedItems }: closeModalProps) => {
  const nextId = useRef<number>(1);
  const [inputItems, setInputItems] = useState<InputItem[]>([
    {
      id: 0,
      serialNum: "",
    },
  ]);
  const addInput = () => {
    const inputContents = {
      id: nextId.current,
      serialNum: "",
    };
    setInputItems([...inputItems, inputContents]);
    nextId.current += 1;
  };

  function deleteInput(index: number) {
    // 인덱스 값을 받아서
    setInputItems(inputItems.filter((item) => item.id !== index)); // 인덱스 값과 같지 않은 애들만 남겨둔다
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>, index: number) {
    // ↓ 이벤트 객체를 받고, 인덱스를 받자
    if (index > inputItems.length) return; // 혹시 모르니 예외처리

    // 인풋배열을 copy 해주자
    const inputItemsCopy: InputItem[] = JSON.parse(JSON.stringify(inputItems));
    inputItemsCopy[index].serialNum = e.target.value; // 그리고 해당 인덱스를 가진 <input>의 내용을 변경해주자
    setInputItems(inputItemsCopy); // 그걸 InputItems 에 저장해주자
  }
  return (
    <Div>
      <ModalDiv>
        <Header color="#B6DCBE">
          <BigTitle>출고예정일 선택</BigTitle>
          <Exit onClick={closeModal}>닫기</Exit>
        </Header>
        <ContentsDiv>
          <Box>
            <P>선택상품목록</P>
            <ItemBox>
              <ModalTable>
                <Thead>
                  <tr>
                    <th>출고예정일</th>
                    <th>주문번호</th>
                    <th>주문일시</th>
                    <th>상품명</th>
                    <th>고객명</th>
                    <th>결제금액</th>
                  </tr>
                </Thead>
                <Tbody>
                  {selectedItems.map((item: any, index: any) => (
                    <Tr key={index}>
                      <LeftTd>
                        <Input></Input>
                      </LeftTd>
                      <Td>{item.orderNum}</Td>
                      <Td>{item.orderedDate}</Td>
                      <Td>{item.title}</Td>
                      <Td>{item.customerName}</Td>
                      <RightTd>{item.price}</RightTd>
                    </Tr>
                  ))}
                </Tbody>
              </ModalTable>
            </ItemBox>
          </Box>
          <ButtonDiv>
            <Button>등록</Button>
          </ButtonDiv>
        </ContentsDiv>
      </ModalDiv>
    </Div>
  );
};
export default ShippingDateModal;
