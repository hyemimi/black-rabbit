import { Box } from "@/styles/Box";
import { TitleDiv } from "@/styles/TitleDiv";
import { Wrapper } from "@/styles/Wrapper";
import { items } from "@/src/temp/items";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import Modal from "@/src/components/common/modal/Modal";
import ReviewModal from "@/src/components/common/modal/reviewModal";
export default function Myreview() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const onClickedReview = () => {
    setIsOpen(true);
  };

  return (
    <Wrapper>
      {" "}
      <TitleDiv>
        <h1>리뷰관리</h1>
      </TitleDiv>
      {items.map((item) => (
        <ReviewBox height="135px" key={item.Item_id}>
          <ImageDiv></ImageDiv>
          <H1>
            {item.brandName}
            {item.modelName}
          </H1>
          <Button
            onClick={() => {
              onClickedReview();
            }}
          >
            리뷰보기 &gt;
          </Button>
        </ReviewBox>
      ))}
      {isOpen && (
        <AnimatePresence>
          <Overlay
            onClick={() => setIsOpen(false)}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
          <Modal>
            <ReviewModal setIsOpen={setIsOpen}></ReviewModal>
          </Modal>
        </AnimatePresence>
      )}
    </Wrapper>
  );
}

const ImageDiv = styled.div`
  background-color: ${(props) => props.theme.searchColor};
  width: 200px;
  height: 100%;
`;
const H1 = styled.div`
  font-weight: bold;
  font-size: 20px;
`;
const Button = styled.button`
  border: none;
  cursor: pointer;
`;
const ReviewBox = styled(Box)`
  text-align: center;
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 0px;
  padding-right: 10px;
`;
const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;

  width: 120%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;
