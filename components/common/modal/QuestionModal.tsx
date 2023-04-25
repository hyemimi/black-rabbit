import styled from "styled-components";
import { ModalDiv } from "./ModalDiv";
import {
  ModalSection,
  ModalButton,
  ModalHeader,
  ModalFooter,
  ModalMain,
  HeaderButton,
} from "./ModalComponent";

export default function QuestionModal({ setIsOpen, isOpen }: any) {
  const closeModal = () => {
    setIsOpen(false);
  };
  const addresslist = [
    {
      name: "집",
      postalCode: 1234,
      address: "경기 화성시 서동탄로 11",
      addressDetail: "205동 개인정보 어쩌구",
    },
    {
      name: "자취방",
      postalCode: 1234,
      address: "경기 용인시 국",
      addressDetail: "전자정보대...가기싫다",
    },
  ];

  return (
    <ModalDiv>
      <ModalSection>
        <ModalHeader>
          문의합니다
          <HeaderButton onClick={closeModal}>X</HeaderButton>
        </ModalHeader>
        <ModalMain>
          <ContentDiv>야호~</ContentDiv>
        </ModalMain>
        <ModalFooter>
          <ModalButton onClick={closeModal}>닫기</ModalButton>
        </ModalFooter>
      </ModalSection>
    </ModalDiv>
  );
}

const ContentDiv = styled.div`
  min-width: 700px;
`;
