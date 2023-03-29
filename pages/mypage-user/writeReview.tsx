import { Box, BoxInput } from "@/components/common/Box";
import { TitleDiv } from "@/components/common/TitleDiv";
import { Wrapper } from "@/components/common/Wrapper";
import styled from "styled-components";
import { useState, useRef } from "react";
import tempimage from "../../public/help.png";
import Image from "next/image";

export default function writeReview() {
  const [image, setImage] = useState(tempimage);
  const fileInput = useRef<HTMLInputElement | null>(null);
  const handleImage = async (e: any) => {
    // 내가 받을 파일은 하나기 때문에 index 0값의 이미지를 가짐
    const file = e.target.files[0];
    if (!file) return;

    // 이미지 화면에 띄우기
    const reader = new FileReader();
    // 파일을 불러오는 메서드, 종료되는 시점에 readyState는 Done(2)이 되고 onLoad 시작
    reader.readAsDataURL(file);
    reader.onload = (e: any) => {
      if (reader.readyState === 2) {
        // 파일 onLoad가 성공하면 2, 진행 중은 1, 실패는 0 반환
        setImage(e.target.result);
      }
    };
  };
  return (
    <Wrapper>
      <TitleDiv>
        <h1>상품은 어떠셨나요? 별점을 남겨주세요</h1>
      </TitleDiv>
      <Box height="1200px">
        <Row>
          <ReviewBox height="135px">
            <ImageDiv></ImageDiv>
            <H1>상품명</H1>
          </ReviewBox>
        </Row>
        <hr />
        <Row>
          <H1>제목</H1>
          <BoxInput height="65px"></BoxInput>
        </Row>
        <Row>
          <H1>내용</H1>
          <BoxInput as="textarea" height="400px"></BoxInput>
        </Row>
        <Row>
          <input
            type="file"
            name="image_URL"
            id="input-file"
            accept="image/*"
            style={{ display: "none" }}
            ref={fileInput}
            onChange={handleImage}
          />
          <button
            onClick={() => {
              fileInput.current?.click();
            }}
          >
            이미지 업로드
          </button>
        </Row>
        <ImageDiv>
          <Image
            src={image}
            alt="이미지를 업로드 해주세요"
            width={200}
            height={100}
          ></Image>
        </ImageDiv>
        <Button>작성하기</Button>
      </Box>
    </Wrapper>
  );
}

const Row = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
`;
const H1 = styled.h1`
  font-weight: bold;
  font-size: 20px;
`;

const ImageDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: gray;
`;
const Button = styled.button`
  background-color: ${(props) => props.theme.pointColor};
  border: none;
  margin-left: 30px;
  height: 50px;
  width: 130px;
  margin-left: 400px;
  cursor: pointer;
`;
const ReviewBox = styled(Box)`
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 0px;
  padding-right: 10px;
`;
