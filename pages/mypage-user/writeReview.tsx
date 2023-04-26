import { Box, BoxInput } from "@/components/common/Box";
import { TitleDiv } from "@/components/common/TitleDiv";
import { Wrapper } from "@/components/common/Wrapper";
import styled from "styled-components";
import { useState, useRef } from "react";
import tempimage from "../../public/help.png";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { AnimatePresence } from "framer-motion";
import { useMakeStars } from "@/hooks/review/useMakeStars";
interface FormData {
  title: string;
  content: string;
  image: string[];
  star: number;
}

export default function writeReview() {
  const [images, setImages] = useState<string[]>([]);
  const fileInput = useRef<HTMLInputElement | null>(null);
  const [rating, setRating] = useState(0);

  const [hoverRating, setHoverRating] = useState(0);
  const onMouseEnter = (index: number) => setHoverRating(index);
  // 마우스가 별 위에 올라가면 스테이트를 변경.
  const onMouseLeave = () => setHoverRating(0);
  // 마우스가 별 밖으로 나가면 스테이트를 0으로 변경.
  const onSaveRating = (index: number) => setRating(index);
  // 클릭시, 별 인덱스를 스테이트에 저장.

  /* 이미지들의 url을 string 배열로 넣습니다 */
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

  /* 폼 */
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const handleValid = ({ title, content, image }: FormData) => {
    //Api 호출
    setValue("title", "");
    setValue("content", "");
  };
  return (
    <Wrapper>
      <form>
        <TitleDiv>
          <h1>상품은 어떠셨나요? 리뷰와 별점을 남겨주세요</h1>
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
                minLength: { value: 5, message: "5글자 이상 입력해주세요" },
              })}
              as="textarea"
              height="400px"
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
              onClick={() => {
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
        </Box>
      </form>
      <ButtonDiv>
        <Button onClick={handleSubmit(handleValid)}>작성하기</Button>
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
const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
