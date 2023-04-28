import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

export default function Question() {
  const templist = [
    {
      num: 1,
      type: "배송문의",
      title: "문의합니다",
      isAnswerd: true,
      user: "김토끼",
      createdAt: "2023-04-27",
    },
  ];
  const [questionlist, setQuestionList] = useState(templist);
  const router = useRouter();
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
      {questionlist.map((question) => (
        <ReviewDiv>
          <Name>{question.num}</Name>
          <Name>{question.type}</Name>
          <Name>{question.title}</Name>
          <Name>{question.isAnswerd ? "완료" : "미완료"}</Name>
          <Name>{question.user}</Name>
          <Name>{question.createdAt}</Name>
        </ReviewDiv>
      ))}
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
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px;
`;

const Content = styled.div`
  width: 100%;
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
