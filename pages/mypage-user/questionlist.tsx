import { Wrapper } from "@/components/common/Wrapper";
import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/router";
import { TitleDiv } from "@/components/common/TitleDiv";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import QuestionModal from "@/components/common/modal/QuestionModal";
import Modal from "@/components/common/modal/Modal";

interface IList {
  id: number;
  title: string;
  isAnswered: boolean;
  type: string;
  createdAt: string;
  answer: string;
  store: string;
  content: string;
}
const Questionlist = () => {
  const router = useRouter();
  const tempList = [
    {
      id: 1,
      title: "Canon EOS Rebel T7  18-55mm 번들 세트",
      isAnswered: true,
      type: "배송문의",
      createdAt: "2022-04-25",
      answer: "기다리세요",
      store: "언더독렌탈",
      content: "언제 배송되나요?",
    },
  ];
  const [questionlist, setQuestionList] = useState(tempList);
  const [targetquestion, setTargetQuestion] = useState<IList[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const onClickedQuestion = (id: number) => {
    let target = questionlist.filter((it) => it.id === id);
    setTargetQuestion(target);
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
        {questionlist.map((item, idx) => (
          <>
            <Title onClick={() => onClickedQuestion(item.id)}>
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
            <QuestionModal
              title={targetquestion[0]?.title}
              content={targetquestion[0]?.content}
              setIsOpen={setIsOpen}
              isAnswered={targetquestion[0]?.isAnswered}
              createdAt={targetquestion[0]?.createdAt}
              answer={targetquestion[0]?.answer}
              store={targetquestion[0]?.store}
            ></QuestionModal>
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
  cursor: pointer;
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
