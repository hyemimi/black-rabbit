import { Box, BoxInput } from "@/styles/Box";
import { TitleDiv } from "@/styles/TitleDiv";
import Image from "next/image";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Wrapper } from "@/styles/Wrapper";

interface FormData {
  title: string;
  content: string;
}

export default function Inquiry() {
  const [images, setImages] = useState<string[]>([]);
  const fileInput = useRef<HTMLInputElement | null>(null);
  const [selected, setSelected] = useState<string>("");
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const handleChange = (e: React.ChangeEvent) => {
    const targetFiles = (e.target as HTMLInputElement).files as FileList;
    const targetFilesArray = Array.from(targetFiles);
    const selectedFiles: string[] = targetFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setImages((prev) => prev.concat(selectedFiles));
  };

  const deleteImage = (url: string) => {
    let newImageList = images.filter((image) => image !== url);
    setImages(newImageList);
  };

  const handleValid = ({ title, content }: FormData) => {
    //Api 호출
    setValue("title", "");
    setValue("content", "");
  };
  return (
    <Wrapper>
      <TitleDiv>
        <h1>문의하기</h1>
      </TitleDiv>
      <Box height="1500px">
        <form>
          <Row>
            <H1>문의상품 : Canon EOS Rebel T7 18-55mm 번들 세트</H1>
          </Row>
          <Row>
            <H1>문의유형</H1>
            <TypeDiv
              onClick={() => setSelected("상품문의")}
              isSelected={selected === "상품문의"}
            >
              상품문의
            </TypeDiv>
            <TypeDiv
              onClick={() => setSelected("배송문의")}
              isSelected={selected === "배송문의"}
            >
              배송문의
            </TypeDiv>
            <TypeDiv
              onClick={() => setSelected("배송전변경")}
              isSelected={selected === "배송전변경"}
            >
              배송전변경
            </TypeDiv>
          </Row>
          <hr />
          <Row>
            <H1>제목</H1>
            <BoxInput
              {...register("title", {
                required: "제목을 입력해주세요",
                minLength: { value: 3, message: "3글자 이상 입력해주세요" },
              })}
              height="65px"
            ></BoxInput>
          </Row>
          <Row>
            <H1>내용</H1>
            <BoxInput
              {...register("content", {
                required: "내용을 입력해주세요",
                minLength: { value: 10, message: "3글자 이상 입력해주세요" },
              })}
              as="textarea"
              height="600px"
            ></BoxInput>
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
              onClick={(e: any) => {
                e.preventDefault();
                fileInput.current?.click();
              }}
            >
              이미지 업로드
            </Button>
          </Row>
          <ImageDiv>
            {images.map((url, i) => (
              <Div key={url}>
                <button onClick={() => deleteImage(url)}>❌</button>
                <Image
                  src={url}
                  width="200"
                  height="160"
                  alt={`image${i}`}
                ></Image>
              </Div>
            ))}
          </ImageDiv>
          <ImageDiv></ImageDiv>
        </form>
      </Box>
      <Button onClick={handleSubmit(handleValid)}>문의하기</Button>
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
const Button = styled.button`
  background-color: ${(props) => props.theme.pointColor};
  border: none;
  margin-left: 30px;
  height: 50px;
  width: 130px;
  cursor: pointer;
`;
const TypeDiv = styled.div<{ isSelected: boolean }>`
  background-color: ${(props) =>
    props.isSelected ? props.theme.pointColor : props.theme.searchColor};
  border: none;
  text-align: center;
  margin-left: 30px;
  height: 50px;
  width: 130px;
  cursor: pointer;
  padding: 15px;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
