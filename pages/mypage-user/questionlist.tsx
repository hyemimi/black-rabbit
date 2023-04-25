import { Wrapper } from "@/components/common/Wrapper";
import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/router";
import { TitleDiv } from "@/components/common/TitleDiv";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import QuestionModal from "@/components/common/modal/QuestionModal";
import Modal from "@/components/common/modal/Modal";
const Questionlist = () => {
  const router = useRouter();
  const tempList = [
    {
      title: "Canon EOS Rebel T7  18-55mm 번들 세트",
      isAnswered: true,
      type: "배송문의",
      createdAt: "2022-04-25",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const onClickedQuestion = () => {
    setIsOpen(true);
  };

  return (
    <Wrapper>
      <TitleDiv>
        <h1>문의목록</h1>

        <MenuBar>
          <Title>
            <NameTag>상품정보</NameTag>
            <Name>답변여부</Name>
            <Name>유형</Name>
            <Name>등록일</Name>
          </Title>
        </MenuBar>
        <Hr />
        {tempList.map((item) => (
          <>
            <Title onClick={() => setIsOpen(true)}>
              <NameTag>{item.title}</NameTag>
              <Name>
                {item.isAnswered ? (
                  <ColorText isAnswered={item.isAnswered}>완료</ColorText>
                ) : (
                  <ColorText isAnswered={item.isAnswered}>미완료</ColorText>
                )}
              </Name>
              <Name>{item.type}</Name>
              <Name>{item.createdAt}</Name>
            </Title>
            <HrBright />
          </>
        ))}
      </TitleDiv>
      {isOpen && (
        <AnimatePresence>
          <Overlay
            onClick={() => setIsOpen(false)}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
          <Modal>
            <QuestionModal setIsOpen={setIsOpen}></QuestionModal>
          </Modal>
        </AnimatePresence>
      )}
    </Wrapper>
  );
};
export default Questionlist;

const Hr = styled.hr`
  border: 1.5px solid gray;
  margin-top: 10px;
`;
const HrBright = styled.hr`
  border: 1px solid #ececec;
  margin-top: 20px;
`;

const ColorText = styled.h2<{ isAnswered: boolean }>`
  color: ${(props) => (props.isAnswered ? "green" : "red")};
  font-style: bold;
`;
const MenuBar = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  margin-top: 20px;
`;

const Title = styled.div`
  display: flex;
  text-align: center;
  width: 900px;
`;
const Name = styled.div`
  margin-left: 100px;
  width: 100px;
`;
const NameTag = styled.div`
  width: 400px;
`;
const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;

  width: 120%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;
