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

export interface IQuestion {
  setIsOpen: any;
  title: string;
  isAnswered: boolean;
  createdAt: string;
  answer: string;
  store: string;
  content: string;
}

export default function QuestionModal({
  setIsOpen,
  createdAt,
  isAnswered,
  title,
  answer,
  store,
  content,
}: IQuestion) {
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalDiv>
      <ModalSection>
        <ModalHeader>
          문의합니다
          <HeaderButton onClick={closeModal}>X</HeaderButton>
        </ModalHeader>
        <ModalMain>
          <ContentDiv>
            <DetailDiv>
              문의일 : {createdAt} 답변여부 : {isAnswered ? "완료" : "미완료"}
            </DetailDiv>
            {content}
            <Hr />
          </ContentDiv>

          <ContentDiv>
            <DetailDiv>{store}</DetailDiv>
            {answer}
          </ContentDiv>
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
const Hr = styled.hr`
  border: 1.5px solid black;
  margin-top: 50px;
`;

const DetailDiv = styled.div`
  justify-content: space-end;
  text-align: right;
  margin-bottom: 30px;
`;
