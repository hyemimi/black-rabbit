import { Box, BoxInput } from "@/components/common/Box";
import { TitleDiv } from "@/components/common/TitleDiv";
import { Wrapper } from "@/components/common/Wrapper";
import styled from "styled-components";
import { useState, useRef } from "react";
import tempimage from "../../public/help.png";
import Image from "next/image";

export default function writeReview() {
  const [images, setImages] = useState<string[]>([]);
  const fileInput = useRef<HTMLInputElement | null>(null);
  console.log(images);
  /* 이미지들의 url을 string 배열로 넣습니다 */
  const handleChange = (e: React.ChangeEvent) => {
    const targetFiles = (e.target as HTMLInputElement).files as FileList;
    const targetFilesArray = Array.from(targetFiles);
    const selectedFiles: string[] = targetFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setImages((prev) => prev.concat(selectedFiles));
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
            multiple
            onChange={handleChange}
          />
          <Button
            onClick={() => {
              fileInput.current?.click();
            }}
          >
            이미지 업로드
          </Button>
        </Row>
        <ImageDiv>
          {images.map((url, i) => (
            <div key={url}>
              <Image
                src={url}
                width="200"
                height="160"
                alt={`image${i}`}
              ></Image>
            </div>
          ))}
        </ImageDiv>
      </Box>
      <ButtonDiv>
        <Button>작성하기</Button>
      </ButtonDiv>
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
`;
const ButtonDiv = styled.div`
  margin-top: 100px;
  justify-content: center;
`;
const Button = styled.button`
  background-color: ${(props) => props.theme.pointColor};
  border: none;
  margin-left: 30px;
  height: 50px;
  width: 130px;
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
