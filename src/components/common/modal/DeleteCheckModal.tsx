import React from "react";

import {
  Button,
  ButtonDiv,
  ContentsDiv,
  Div,
  CheckQuestion,
} from "@/src/components/common/modal/ModalStyle";

import { FcHighPriority } from "react-icons/fc";

import styled from "styled-components";

interface closeModalProps {
  closeModal: (e: any) => void;
  selectedItems: any;
}

interface InputItem {
  id: number;
  serialNum: string;
}

const DeleteCheckModal = ({ closeModal, selectedItems }: closeModalProps) => {
  return (
    <Div>
      <ConfirmModalDiv>
        <ConfirmHeader color="point">
          <ConfirmBigTitle>삭제</ConfirmBigTitle>
        </ConfirmHeader>

        <ContentsDiv>
          {/* <MiddleDiv>
            <FcHighPriority size={50} />
          </MiddleDiv> */}
          <CheckQuestion>
            총 {selectedItems.length}개 항목을 삭제하시겠습니까?
          </CheckQuestion>
          <ButtonDiv>
            <Button onClick={closeModal}>취소</Button>
            <Button color="pointColor">확인</Button>
          </ButtonDiv>
        </ContentsDiv>
      </ConfirmModalDiv>
    </Div>
  );
};
export default DeleteCheckModal;

export const ConfirmModalDiv = styled.div`
  position: fixed;
  width: 400px;
  height: 200px;
  right: 10;
  left: 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.modalColor};
  top: 50%;
  left: 55%;
  transform: translate(-50%, -50%);
  align-items: center;
`;

export const ConfirmHeader = styled.div`
  background-color: #e01c1c;
`;
export const ConfirmBigTitle = styled.h2`
  padding: 10px;
  font-size: 15px;
  position: relative;
  font-weight: 400;
  color: white;
`;

const MiddleDiv = styled.div`
  text-align: center;
`;
