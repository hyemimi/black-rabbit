import { Box, BoxInput } from "@/components/common/Box";
import ListModal from "@/components/common/modal/listModal";
import Modal from "@/components/common/modal/Modal";
import ReviewModal from "@/components/common/modal/reviewModal";
import { TitleDiv } from "@/components/common/TitleDiv";
import { Wrapper } from "@/components/common/Wrapper";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

interface FormData {
  title: string;
  content: string;
}

export default function inquiry() {
  const [images, setImages] = useState<string[]>([]);
  const fileInput = useRef<HTMLInputElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
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
  const searchItem = (e: any) => {
    // 상품을 조회합니다
    e.preventDefault();
    setIsOpen(true);
  };
  return (
    <Wrapper>
      <TitleDiv>
        <h1>문의하기</h1>
      </TitleDiv>
      <Box height="1500px">
        <form>
          <Row>
            <H1>문의상품</H1>
            <Button onClick={searchItem}>상품조회</Button>
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
      {isOpen && (
        <Modal>
          <ListModal setIsOpen={setIsOpen}></ListModal>
        </Modal>
      )}
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
const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;

  width: 120%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
