import styled from "styled-components";
import { ModalDiv } from "./ModalDiv";
import {
  ModalSection,
  ModalHeader,
  HeaderButton,
  ModalMain,
  ModalButton,
  ModalFooter,
} from "./ModalComponent";
import { reviews } from "@/temp/reviews";
import { useMakeStars } from "@/hooks/review/useMakeStars";
export default function ReviewModal({ setIsOpen }: any) {
  const closeModal = () => {
    setIsOpen(false);
  };
  const review = reviews[0];
  const stars = useMakeStars(review.score);
  return (
    <ModalDiv>
      <ModalSection>
        <ModalHeader>
          (상품명)
          <HeaderButton onClick={closeModal}>X</HeaderButton>
        </ModalHeader>
        <ModalMain>
          {review.title}
          <Box>
            <h1>{review.detail}</h1>
          </Box>
        </ModalMain>
        <ModalFooter>
          <button onClick={closeModal}>닫기</button>
        </ModalFooter>
      </ModalSection>
    </ModalDiv>
  );
}
export const Box = styled.div`
  width: 750px;
  max-width: 750px;
  height: 100%;
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
