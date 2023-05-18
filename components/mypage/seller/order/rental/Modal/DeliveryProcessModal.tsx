import React, { useState, useRef } from "react";
import styled from "styled-components";
import {
  Tbody,
  Td,
  RightTd,
  Thead,
  Tr,
  LeftTd,
  Select,
  Option,
  P,
} from "@/components/detail/Seller";
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
} from "@/components/common/modal/ModalStyle";

interface closeModalProps {
  closeDeliveryModal: (e: any) => void;
  selectedItems: any;
}

interface InputItem {
  id: number;
  serialNum: string;
}

const DeliveryProcessModal = ({
  closeDeliveryModal,
  selectedItems,
}: closeModalProps) => {
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
          <BigTitle>베송처리</BigTitle>
          <Exit onClick={closeDeliveryModal}>닫기</Exit>
        </Header>
        <ContentsDiv>
          <Box>
            <P>선택상품목록</P>
            <ItemBox>
              <ModalTable>
                <Thead>
                  <tr>
                    <th>택배사</th>
                    <th>운송장번호</th>
                    <th>주문번호</th>
                    <th>상품명</th>
                    <th>고객명</th>
                    <th>결제금액</th>
                  </tr>
                </Thead>
                <Tbody>
                  {selectedItems.map((item: any, index: any) => (
                    <Tr key={index}>
                      <LeftTd>
                        <Select placeholder="택배사">
                          <Option>cj대한통운</Option>
                        </Select>
                      </LeftTd>
                      <Td>
                        {" "}
                        <Input placeholder="운송장번호" type="number" />{" "}
                      </Td>
                      <Td>{item.orderNum}</Td>
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
export default DeliveryProcessModal;
