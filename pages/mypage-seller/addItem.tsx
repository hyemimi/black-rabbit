import styled from "styled-components";
import QuilEditor from "@/components/mypage/seller/QuilEditor";
import { StyledButton } from "@/components/common/Button";
// import AddImage from "@/components/mypage/seller/addImage";

import { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import { Url } from "url";

const QuillEditor = dynamic(
  () => import("../../components/mypage/seller/QuilEditor"),
  {
    ssr: false,
  }
); // client 사이드에서만 동작되기 때문에 ssr false로 설정

interface ItemForm {
  itemTitle: string;
  itemCategory: string;
  itemNumber: number;
  itemBrand: string;
  itemModel: string;
  transactionWay: string;
  region: string;
  feePerDay: number;
  fee5Day: number;
  fee10Day: number;
  itemDescription: HTMLImageElement;
  itemImages: HTMLImageElement;
}

const addItem = () => {
  const [showImages, setShowImages] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm();

  console.log(watch("image"));
  const onSubmit = (data: ItemForm) => {
    console.log(data);
  };

  const [htmlStr, setHtmlStr] = useState<string>("");

  // ref
  const viewContainerRef = useRef<HTMLDivElement>(null);

  // useEffect
  useEffect(() => {
    if (viewContainerRef.current) {
      viewContainerRef.current.innerHTML =
        "<h2>html 코드를 이용하여 만들어지는 View입니다.</h2>";
      viewContainerRef.current.innerHTML += htmlStr;
    }
  }, [htmlStr]);

  const handleAddImages = (event: any) => {
    const imageLists = event.target.files;
    let imageUrlLists: any = [...showImages];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 10) {
      imageUrlLists = imageUrlLists.slice(0, 10);
    }

    setShowImages(imageUrlLists);
  };

  const handleDeleteImage = (id: number) => {
    setShowImages(showImages.filter((_, index) => index !== id));
  };

  return (
    <Wrapper>
      <WholeDiv>
        <StyledTitle>상품 등록</StyledTitle>
        <hr />
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <Div>
            <Label>제목</Label>
            <Input
              type="text"
              {...register("itemTitle", {
                required: "해당 필드는 필수입니다.",
                minLength: { value: 1, message: "1글자 이상 입력해주세요" },
              })}
            />
            {/* {errors?.itemTitle && <span>{errors?.itemTitle?.message}</span>} */}
          </Div>

          <Div>
            <Label htmlFor="itemCategory">카테고리</Label>
            <Select name="itemCategory">
              <option value="CAMERA">카메라</option>
              <option value="LENS">렌즈</option>
              <option value="CAMCORDER">캠코더</option>
              <option value="DRONE">드론</option>
              <option value="MIC">마이크</option>
              <option value="LIGHT">조명</option>
              <option value="ACCESSORY">액세서리</option>
              <option value="ETC">기타</option>
            </Select>

            <Label htmlFor="itemNumber">수량</Label>
            <Input
              type="number"
              {...register("itemNumber", {
                required: "해당 필드는 필수입니다.",
                min: { value: 1, message: "1개 이상을 입력해주세요." },
              })}
            />
          </Div>

          <Div>
            <Label>브랜드명</Label>
            <Input
              type="text"
              {...register("itemBrand", {
                required: "해당 필드는 필수입니다.",
                minLength: { value: 1, message: "1글자 이상 입력해주세요." },
              })}
            />
            <Label>모델명</Label>
            <Input
              type="text"
              {...register("itemModel", {
                required: "해당 필드는 필수입니다.",
                minLength: { value: 1, message: "1글자 이상 입력해주세요." },
              })}
            />
          </Div>
          <Div>
            <Label htmlFor="transactionWay">거래방법</Label>
            <Select name="transactionWay">
              <option value="PARCEL">택배수령</option>
              <option value="VISIT">방문수령</option>
            </Select>

            <Label htmlFor="region">지역</Label>
            <Input
              type="text"
              {...register("region", {
                required: "해당 필드는 필수입니다.",
                minLength: { value: 1, message: "1글자 이상 입력해주세요." },
              })}
            />
          </Div>

          <Prices>
            <Rlabel>대여료</Rlabel>
            <Prices>
              <Div>
                <Label htmlFor="feePerDay">1일</Label>
                <Input
                  type="price"
                  {...register("feePerDay", {
                    required: "해당 필드는 필수입니다.",
                    min: {
                      value: 1,
                      message: "1원 이상 입력해주세요.",
                    },
                  })}
                />
                <Label>원</Label>
              </Div>
              <Div>
                <Label htmlFor="fee5Day">5일 이상</Label>
                <Input
                  type="text"
                  {...register("fee5Day", {
                    required: "해당 필드는 필수입니다.",
                    min: {
                      value: 1,
                      message: "1원 이상 입력해주세요.",
                    },
                  })}
                />
                <Label>원</Label>
              </Div>
              <Div>
                <Label htmlFor="fee10Day">10일 이상</Label>
                <Input
                  type="text"
                  {...register("fee10Day", {
                    required: "해당 필드는 필수입니다.",
                    min: {
                      value: 1,
                      message: "1원 이상 입력해주세요.",
                    },
                  })}
                />
                <Label>원</Label>
              </Div>
            </Prices>
          </Prices>

          <Div>
            <EditorContainer>
              <Label>상품 상세설명</Label>
              <QuillEditor htmlStr={htmlStr} setHtmlStr={setHtmlStr} />
            </EditorContainer>
          </Div>

          {/* <Div>
            <Contents.Container>
              <Contents.ViewContainer ref={viewContainerRef} />
            </Contents.Container>
          </Div> */}

          {/* <Contents.Container>
              <Contents.HtmlContainer>
                <h2>Editor를 통해 만들어진 html 코드입니다.</h2>
                {htmlStr}
              </Contents.HtmlContainer>

              <Contents.ViewContainer ref={viewContainerRef} />
            </Contents.Container> */}

          <ImageDiv>
            <Label>이미지등록</Label>
            <ImageUploadLabel htmlFor="itemImages">사진 선택</ImageUploadLabel>
            <P>최대 열장까지 업로드 가능</P>

            <Div>
              <FileInput
                {...register("image")}
                id="itemImages"
                type="file"
                accept="image/*"
                multiple
                onChange={handleAddImages}
              />
              {/* <ImageBlank width={"200px"} height={"200px"} src={imageSrc} /> */}
              <ImagePreview>
                {showImages.map((image, id) => (
                  <div key={id}>
                    <DeleteButton onClick={() => handleDeleteImage(id)}>
                      x
                    </DeleteButton>
                    <ImageBlank src={image} alt={`${image}-${id}`} />
                  </div>
                ))}
              </ImagePreview>
            </Div>

            {/* <AddImage control={control} /> */}
          </ImageDiv>

          <StyledButton type="submit">등록</StyledButton>
        </form>
      </WholeDiv>
    </Wrapper>
  );
};
export default addItem;

const StyledTitle = styled.h1`
  text-align: left;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 0;
  margin: 0 auto;
  justify-content: space-between;
  text-align: center;
`;
const Label = styled.label`
  text-align: left;
  width: 10rem;
  margin: 0.5rem 0rem 0.5rem 0.2rem;

  font-weight: 400;
`;

const Input = styled.input`
  position: relative;
  border-radius: 10px;
  width: 100%;
  height: 2.5rem;
  color: black;
  font-size: 16px;
  border: 1px solid #d9d9d9;
  margin: 0.2rem 0.5rem 0.5rem 0.2rem;
  inline: inline-block;
`;
const Select = styled.select`
  width: 100%;
  height: 2.5rem;
  margin: 0 0.5rem 0 0.5rem;
  inline: inline-block;
  font-size: 16px;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
`;

const FileInput = styled.input`
  display: none;
`;

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: left;
  text-align: left;
  margin: 1rem 0;
  line-height: 30px;
  vertical-align: center;
`;

const Prices = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
  width: 100%;
  margin-top: 2rem;
`;

const Rlabel = styled.label`
  text-align: left;
  width: 10rem;
  font-weight: 400;
`;

const ImageUploadLabel = styled.label`
  background: #d9d9d9;
  border-radius: 5px;
  padding: 5px;
  margin: 3px 3px 3px 10px;
  font-weight: 350;
  font-size: 15px;
  width: 100px;
  text-align: center;
  &:hover {
    background: #b9d9c0;
    cursor: pointer;
  }
`;
const P = styled.p`
  display: inline;
  font-size: small;
  margin: 5px;
`;
const ImageBlank = styled.img`
  background: #b9d9c0;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  font-weight: 350;
  width: 230px;
  height: 250px;
  border: none;
  object-fit: cover;
`;

const ImageDiv = styled.div`
  maargin: 2rem;
  padding: 2rem 0;
  text-align: left;
  width: 690px;
`;

const EditorContainer = styled.div`
  width: 100%;
  height: 400px;
  margin: 3 auto;
  display ; block;
`;

const Contents = {
  Container: styled.div`
    width: 1200px;

    margin: 0 auto;

    display: flex;
    gap: 40px;

    & > div {
      width: 600px;

      padding: 16px;

      box-sizing: border-box;
    }
  `,

  HtmlContainer: styled.div`
    border: 2px solid orange;
  `,

  ViewContainer: styled.div`
    border: 2px solid olive;
    width: 100%;
    // quill에서 가운데 정렬을 한 경우
    .ql-align-center {
      text-align: center;
    }

    // quill에서 코드 블럭을 사용한 경우
    .ql-syntax {
      background-color: #23241f;
      color: #f8f8f2;
      border-radius: 3px;
      padding: 5px;
      margin: 0 10px;
    }
  `,
};

const ImagePreview = styled.div`
  width: 100%;
  overflow: scroll;
  display: flex;
`;

const WholeDiv = styled.div`
  margin: 0 auto 5rem auto;
`;

const DeleteButton = styled.button`
  width: 15%;
  height: 2rem;
  margin: 5px auto;
  float: right;
  border: 0;
  background: #d9d9d9;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: #b9d9c0;
  }
`;
