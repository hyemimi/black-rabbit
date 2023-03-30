import styled from "styled-components";
import { ModalDiv } from "./ModalDiv";
import { reviews } from "@/temp/reviews";
import {
  ModalSection,
  ModalButton,
  ModalHeader,
  ModalFooter,
  ModalMain,
  HeaderButton,
} from "./ModalComponent";
import Searchbar from "../Searchbar";

export default function ListModal({ setIsOpen, isOpen }: any) {
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalDiv>
      <ModalSection>
        <ModalHeader>
          상품 조회
          <HeaderButton onClick={closeModal}>X</HeaderButton>
        </ModalHeader>
        <ModalMain>
          <Searchbar></Searchbar>
        </ModalMain>
        <ModalFooter>
          <ModalButton onClick={closeModal}>닫기</ModalButton>
        </ModalFooter>
      </ModalSection>
    </ModalDiv>
  );
}
export const Box = styled.div`
  width: 750px;
  max-width: 750px;
  height: 80px;
  font-weight: bold;
  background-color: rgb(230, 230, 230);
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
  margin: 10px;
  * {
    color: rgb(39, 39, 39);
    font-weight: bold;
  }
  button {
    color: rgb(230, 230, 230);
  }
`;

const Circle = styled.div`
  border-radius: 30px;
  background-color: ${(props) => props.theme.pointColor};
`;
