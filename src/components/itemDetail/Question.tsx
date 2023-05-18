import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import Modal from "../common/modal/Modal";
import QuestionModal from "../common/modal/QuestionModal";
import { motion } from "framer-motion";

interface IList {
  id: number;
  title: string;
  isAnswered: boolean;
  type: string;
  createdAt: string;
  answer: string;
  store: string;
  content: string;
  user: string;
}

export default function Question() {
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
      user: "김토끼",
    },
  ];
  const [questionlist, setQuestionList] = useState(tempList);
  const [targetquestion, setTargetQuestion] = useState<IList[]>([]);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const onClickedQuestion = (id: number) => {
    let target = questionlist.filter((it) => it.id === id);
    setTargetQuestion(target);
    setIsOpen(true);
  };

  return (
    <>
      <Div>
        <Button onClick={() => router.push("/mypage-user/inquiry")}>
          작성하기
        </Button>
      </Div>
      <MenuBar>
        <Name>번호</Name>
        <Name>유형</Name>
        <Name>제목</Name>
        <Name>답변여부</Name>
        <Name>작성자</Name>
        <Name>등록일</Name>
      </MenuBar>
      <Hr />
      {questionlist.map((question, idx) => (
        <ReviewDiv onClick={() => onClickedQuestion(question.id)}>
          <Name>{idx + 1}</Name>
          <Name>{question.type}</Name>
          <Name>{question.title}</Name>
          <Name>{question.isAnswered ? "완료" : "미완료"}</Name>
          <Name>{question.user}</Name>
          <Name>{question.createdAt}</Name>
        </ReviewDiv>
      ))}
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
    </>
  );
}

const Hr = styled.div`
  border: 2px solid gray;
`;

const Button = styled.button`
  background-color: #329d3d;
  border: none;
  color: #ececec;
  cursor: pointer;
  width: 80px;
  height: 40px;
`;
const Div = styled.div`
  justify-content: flex-end;
  display: flex;
  margin: 20px;
`;
const ReviewDiv = styled.div`
  justify-content: space-between;
  width: 100%;
  display: grid;
  grid-template-columns: 100px 100px 300px 100px 100px 100px;
  text-align: center;
  border-bottom: 1px solid gray;
  padding: 5px;
`;

const MenuBar = styled.div`
  padding: 10px;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%;
  display: grid;
  text-align: center;
  grid-template-columns: 100px 100px 300px 100px 100px 100px;
`;

const Name = styled.div``;
const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 1000px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;
