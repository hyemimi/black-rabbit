import React from "react";
import {
  Tbody,
  Td,
  RightTd,
  Thead,
  Tr,
  LeftTd,
  P,
} from "@/components/detail/Seller";
import {
  Button,
  ButtonDiv,
  ContentsDiv,
  Div,
  Header,
  ItemBox,
  ModalDiv,
  ModalTable,
  CheckQuestion,
} from "@/components/common/modal/ModalStyle";
import styled from "styled-components";

interface closeModalProps {
  closeModal: (e: any) => void;
  selectedItems: any;
}

const ReturnProcessModal = ({ closeModal, selectedItems }: closeModalProps) => {
  return (
    <Div>
      <ModalDiv>
        <Header color="point"></Header>
        <ContentsDiv>
          <P>반납처리목록</P>
          <ItemBox>
            <ModalTable>
              <Thead>
                <tr>
                  <th></th>
                  <th>주문번호</th>
                  <th>주문일시</th>
                  <th>상품명</th>
                  <th>반납일</th>
                  <th>거래방법</th>
                  <th>고객명</th>
                </tr>
              </Thead>
              <Tbody>
                {selectedItems.map((item: any, index: any) => (
                  <Tr key={index}>
                    <LeftTd>{index + 1}</LeftTd>
                    <Td>{item.orderNum}</Td>
                    <Td>{item.orderedDate}</Td>
                    <Td>{item.title}</Td>
                    <Td>{item.returnDate}</Td>
                    <Td>{item.method}</Td>
                    <RightTd>{item.customerName}</RightTd>
                  </Tr>
                ))}
              </Tbody>
            </ModalTable>
          </ItemBox>
          <CheckQuestion>
            위 총 {selectedItems.length}건에 대해 반납처리 하시겠습니까?
          </CheckQuestion>
          <ButtonDiv>
            <Button onClick={closeModal}>취소</Button>
            <Button>확인</Button>
          </ButtonDiv>
        </ContentsDiv>
      </ModalDiv>
    </Div>
  );
};
export default ReturnProcessModal;
