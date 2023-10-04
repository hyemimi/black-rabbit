import React from "react";
import {
  Tbody,
  Td,
  RightTd,
  Thead,
  Tr,
  LeftTd,
  P,
} from "@/styles/MypageSellerStyle";
import {
  BigTitle,
  Box,
  Button,
  ButtonDiv,
  ContentsDiv,
  Div,
  Exit,
  Header,
  Input,
  ItemBox,
  ModalDiv,
  ModalTable,
  CheckQuestion,
} from "@/styles/ModalStyle";

interface closeModalProps {
  closeModal: (e: any) => void;
  selectedItems: any;
}

const RefundCheckModal = ({ closeModal, selectedItems }: closeModalProps) => {
  return (
    <Div>
      <ModalDiv>
        <Header color="point"></Header>
        <ContentsDiv>
          <P>환불처리목록</P>
          <ItemBox>
            <ModalTable>
              <Thead>
                <tr>
                  <th></th>
                  <th>주문번호</th>
                  <th>상품명</th>
                  <th>주문일시</th>
                  <th>환불신청일</th>
                  <th>결제금액</th>
                  <th>고객명</th>
                </tr>
              </Thead>
              <Tbody>
                {selectedItems.map((item: any, index: any) => (
                  <Tr key={index}>
                    <LeftTd>{index + 1}</LeftTd>
                    <Td>{item.orderNum}</Td>
                    <Td>{item.title}</Td>
                    <Td>{item.orderedDate}</Td>
                    <Td>{item.refundDate}</Td>
                    <Td>{item.price}</Td>
                    <RightTd>{item.customerName}</RightTd>
                  </Tr>
                ))}
              </Tbody>
            </ModalTable>
          </ItemBox>
          <CheckQuestion>
            총 {selectedItems.length}건에 대해 환불처리 하시겠습니까?
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
export default RefundCheckModal;
