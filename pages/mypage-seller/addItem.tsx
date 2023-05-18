import styled from "styled-components";
import { useState, useRef } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import Link from "next/link";
import AddressSelectModal from "@/components/mypage/seller/Item/Modal/AddressSlelectModal";
import InnerModal from "../../components/mypage/seller/Item/Modal/InnerModal";
import { InputItem } from "@/Interfaces";
import { Wrapper, WholeDiv, Title, Hr } from "@/components/detail/Seller";

const QuillEditor = dynamic(
  () => import("../../components/mypage/seller/Item/QuilEditor"),
  {
    ssr: false,
  }
);

const AddItem = () => {
  //state
  const [showImages, setShowImages] = useState([]);
  const [htmlStr, setHtmlStr] = useState<string>("");
  const [selectModal, setSelectModal] = useState<boolean>(false);
  const [itemCategory, setItemCategory] = useState<string>("CAMERA");
  const [transMethod, setTransMethod] = useState<string>("PARCEL");
  const [postalCode, setPostalCode] = useState<number>(1);
  const [address, setAddress] = useState<string>("");
  const [addressDetail, setAddressDetail] = useState<string>("");
  const [imageList, setImageList] = useState<File[]>([]);

  // ref
  const viewContainerRef = useRef<HTMLDivElement>(null);
  const itemTitleRef = useRef<HTMLInputElement>(null);
  const itemNumberRef = useRef<HTMLInputElement>(null);
  const itemBrandRef = useRef<HTMLInputElement>(null);
  const itemModelRef = useRef<HTMLInputElement>(null);
  const pricePerOneRef = useRef<HTMLInputElement>(null);
  const pricePerFiveRef = useRef<HTMLInputElement>(null);
  const pricePerTenRef = useRef<HTMLInputElement>(null);
  const itemImagesRef = useRef<HTMLImageElement>(null);
  const nextID = useRef<number>(1);
  const [inputItems, setInputItems] = useState<InputItem[]>([
    { id: 0, title: "" },
  ]);

  const onValid = () => {
    if (Number(itemNumberRef.current!.value) === inputItems.length) {
      return true;
    }
  };

  //상품별 일련번호
  function addInput() {
    const input = {
      // 새로운 인풋객체를 하나 만들고,
      id: nextID.current, // id 값은 변수로 넣어주고,
      title: "", // 내용은 빈칸으로 만들자
    };

    setInputItems([...inputItems, input]); // 기존 값에 새로운 인풋객체를 추가해준다.
    nextID.current += 1; // id값은 1씩 늘려준다.
  }

  // 삭제
  function deleteInput(index: number) {
    // 인덱스 값을 받아서
    setInputItems(inputItems.filter((item) => item.id !== index)); // 인덱스 값과 같지 않은 애들만 남겨둔다
  }

  function handleTitleChange(
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    // ↓ 이벤트 객체를 받고, 인덱스를 받자
    if (index > inputItems.length) return; // 혹시 모르니 예외처리

    // 인풋배열을 copy 해주자
    const inputItemsCopy: InputItem[] = JSON.parse(JSON.stringify(inputItems));
    inputItemsCopy[index].title = e.target.value; // 그리고 해당 인덱스를 가진 <input>의 내용을 변경해주자
    setInputItems(inputItemsCopy); // 그걸 InputItems 에 저장해주자
  }

  const itemCategoryHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemCategory(e.target!.value);
    //콘솔시 이전값 찍히는데 왜?
  };

  const transMethodHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTransMethod(e.target!.value);
    //콘솔시 이전값 찍히는데 왜?
  };

  //모달
  const closeModal = () => {
    setSelectModal((prev) => !prev);
    console.log(selectModal);
  };

  //아이템이미지 등록
  const handleAddImages = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null && imageList.length < 10) {
      const imageLists = event.target.files;
      let imageUrlLists: any = [...showImages];
      for (let i = 0; i < imageLists.length; i++) {
        const currentImageUrl = URL.createObjectURL(imageLists[i]);
        imageUrlLists.push(currentImageUrl);
        setImageList([...imageList, imageLists[i]]);
      }
      if (imageUrlLists.length > 10) {
        imageUrlLists = imageUrlLists.slice(0, 10);
        alert("사진은 최대 10장까지만 등록 가능합니다.");
      }
      setShowImages(imageUrlLists);
    }
  };

  //아이템 이미지 삭제
  const handleDeleteImage = (id: number) => {
    setShowImages(showImages.filter((_, index) => index !== id));
    setImageList(imageList.filter((_, index) => index !== id));
  };

  //제출 폼데이터

  const SubmitHandler = (event: React.FormEvent) => {
    if (onValid()) {
      event.preventDefault();
      const enteredItemTitle = itemTitleRef.current!.value;
      const enteredQuantity = itemNumberRef.current!.value;
      const enteredBrand = itemBrandRef.current!.value;
      const enteredModel = itemModelRef.current!.value;
      const enteredPricePerOne = pricePerOneRef.current!.value;
      const enteredPricePerFive = pricePerFiveRef.current!.value;
      const enteredPricePerTen = pricePerTenRef.current!.value;

      const formData = new FormData();

      formData.append("title", JSON.stringify(enteredItemTitle));
      formData.append("category", JSON.stringify(itemCategory));
      formData.append("method", JSON.stringify(transMethod));
      formData.append("brandName", JSON.stringify(enteredBrand));
      formData.append("modelName", JSON.stringify(enteredModel));
      formData.append("quantity", JSON.stringify(enteredQuantity));
      for (var i = 0; i < inputItems.length; i++) {
        formData.append("serialNumbers", inputItems[i].title);
      }

      formData.append("postalCode", JSON.stringify(postalCode));
      formData.append("address", JSON.stringify(address));
      formData.append("addressDetail", JSON.stringify(addressDetail));
      formData.append("pricePerOne", JSON.stringify(enteredPricePerOne));
      formData.append("pricePerFive ", JSON.stringify(enteredPricePerFive));
      formData.append("pricePerTen", JSON.stringify(enteredPricePerTen));
      formData.append("detail", JSON.stringify(htmlStr));

      for (var i = 0; i < imageList.length; i++) {
        formData.append("images", imageList[i]);
      }

      for (var i = 0; i < imageList.length; i++) {
        formData.append("infoImages", imageList[i]);
      }

      try {
        axios.post("15.165.101.95:8080/items/store-write", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        // for (let value of formData.values()) {
        //   console.log(value);
        // }
      } catch (e) {}
    }
  };

  return (
    <Wrapper>
      <WholeDiv>
        <Title>상품 등록</Title>
        <Hr />
        <form onSubmit={SubmitHandler}>
          <ItemDiv>
            <OneLabel htmlFor="title">제목</OneLabel>
            <Input
              type="text"
              id="title"
              ref={itemTitleRef}
              placeholder="브랜드명 + 모델명으로 구성된 제목을 적어주세요."
            />
            {/* {errors?.itemTitle && <span>{errors?.itemTitle?.message}</span>} */}
          </ItemDiv>

          <ItemDiv>
            <OneLabel htmlFor="category">카테고리</OneLabel>
            <Select name="category" onChange={itemCategoryHandler}>
              <option value="CAMERA">카메라</option>
              <option value="LENS">렌즈</option>
              <option value="CAMCORDER">캠코더</option>
              <option value="DRONE">드론</option>
              <option value="MIC">마이크</option>
              <option value="LIGHT">조명</option>
              <option value="ACCESSORY">액세서리</option>
              <option value="ETC">기타</option>
            </Select>

            <OneLabel htmlFor="method">거래방법</OneLabel>
            <Select name="method" onChange={transMethodHandler}>
              <option value="PARCEL">택배수령</option>
              <option value="VISIT">방문수령</option>
            </Select>
          </ItemDiv>

          <ItemDiv>
            <OneLabel>브랜드명</OneLabel>
            <Input
              type="text"
              name="itemBrand"
              ref={itemBrandRef}
              placeholder="예) 캐논"
            />
            <OneLabel>모델명</OneLabel>
            <Input
              type="text"
              name="itemModel"
              ref={itemModelRef}
              placeholder="예) ES303"
            />
          </ItemDiv>
          <ItemDiv>
            <OneLabel htmlFor="quantity">수량</OneLabel>
            <Input
              type="number"
              name="quantity"
              ref={itemNumberRef}
              placeholder="수량"
            />

            <OneLabel htmlFor="quantity">
              상품별 <br />
              일련번호
            </OneLabel>
            <ColumnDiv>
              {inputItems.map((item, index) => (
                <ProductDiv key={index}>
                  <ProductLabel>제품{index + 1}</ProductLabel>
                  <ProductInput
                    type="text"
                    className={`title-${index}`}
                    onChange={(e) => handleTitleChange(e, index)}
                    value={item.title}
                  />

                  {index === 0 && inputItems.length < 30 && (
                    <ProductButton type="button" onClick={addInput}>
                      +
                    </ProductButton>
                  )}

                  {index > 0 && inputItems[index - 1] ? (
                    <ProductButton
                      type="button"
                      onClick={() => deleteInput(item.id)}
                    >
                      -
                    </ProductButton>
                  ) : (
                    ""
                  )}
                </ProductDiv>
              ))}
            </ColumnDiv>
          </ItemDiv>

          <AddressDiv>
            <BigTitle>거래주소</BigTitle>
            <ButtonDiv>
              <Input
                type="number"
                name="postalCode"
                value={postalCode}
                placeholder="우편번호"
              />
              <Button type="button" onClick={closeModal}>
                선택
              </Button>
              <Link
                href={"/mypage-seller/addAddress"}
                style={{ padding: "0", margin: "0" }}
              >
                <Button type="button">추가</Button>
              </Link>
            </ButtonDiv>
            <div>
              {selectModal && (
                <AddressSelectModal>
                  <InnerModal
                    closeModal={closeModal}
                    setPostalCode={setPostalCode}
                    setAddress={setAddress}
                    setAddressDetail={setAddressDetail}
                  ></InnerModal>
                </AddressSelectModal>
              )}
            </div>
            <AddressInput
              type="text"
              name="address"
              value={address}
              placeholder="기본주소"
            />
            <AddressInput
              type="text"
              name="addressDetail"
              value={addressDetail}
              placeholder="상세주소"
            />
          </AddressDiv>

          <AddressDiv>
            <BigTitle>대여료</BigTitle>
            <PriceDiv>
              <OneLabel htmlFor="pricePerOne">1일</OneLabel>
              <PriceInput
                type="price"
                name="pricePerOne"
                ref={pricePerOneRef}
                placeholder="가격/1일"
              />
              <OneLabel>원</OneLabel>
            </PriceDiv>
            <PriceDiv>
              <OneLabel htmlFor="pricePerFive">5일 이상</OneLabel>
              <PriceInput
                type="text"
                name="pricePerFive"
                ref={pricePerFiveRef}
                placeholder="가격/1일"
              />
              <OneLabel>원</OneLabel>
            </PriceDiv>
            <PriceDiv>
              <OneLabel htmlFor="pricePerTen">10일 이상</OneLabel>
              <PriceInput
                type="text"
                name="pricePerTen"
                ref={pricePerTenRef}
                placeholder="가격/1일"
              />
              <OneLabel>원</OneLabel>
            </PriceDiv>
          </AddressDiv>

          <AddressDiv>
            <BigTitle>상품 상세설명</BigTitle>
            <EditorContainer>
              <QuillEditor htmlStr={htmlStr} setHtmlStr={setHtmlStr} />
            </EditorContainer>
          </AddressDiv>

          <ImageDiv>
            <BigTitle>이미지등록</BigTitle>
            <ImageUploadLabel htmlFor="itemImages">사진 선택</ImageUploadLabel>
            <P>※ 직접 촬영한 사진으로 업로드 해주세요 (최대 10장)</P>

            <Div>
              <FileInput
                name="image"
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

export default AddItem;

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: left;
  text-align: left;
  margin: 0.5rem 0;
  line-height: 30px;
  vertical-align: center;
`;

const ItemDiv = styled.div`
  width: 960px;
  margin: 10px 10px;
  display: flex;
  flex-direction: row;
`;

const OneLabel = styled.label`
  width: 70px;
  text-align: left;
  font-weight: 400;
  vertical-align: center;
  margin: 0 10px;
  display: inline-block;
  line-height: 40px;
`;

const Input = styled.input`
  border-radius: 10px;
  width: 370px;
  height: 40px;
  color: black;
  font-size: 16px;
  border: 1px solid #d9d9d9;
  margin: 0 10px;
  inline: inline-block;
  padding: 0.5rem;
`;

const ProductDiv = styled.div`
  width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  text-align: left;
  text-align: left;
  margin: 5px 0;
`;

const ProductLabel = styled.label`
  text-align: left;
  width: 50px;
  margin: 10px 10px;
  font-weight: 400;
  text-align: left;
`;

const ProductInput = styled.input`
  border-radius: 10px;
  width: 250px;
  height: 40px;
  color: black;
  font-size: 16px;
  border: 1px solid #d9d9d9;
  margin: 0 5px;
  inline: inline-block;
  padding: 0.5rem;
`;

const ProductButton = styled.button`
  width: 45px;
  height: 2rem;
  margin: 5px 5px;
  float: right;
  border: 0;
  background: #d9d9d9;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: #b9d9c0;
  }
`;

const Select = styled.select`
  width: 370px;
  height: 40px;
  margin: 0 10px;
  inline: inline-block;
  font-size: 16px;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
`;

//거래주소
const BigTitle = styled.h1`
  text-align: left;
  width: 180px;
  margin: 10px 10px;
  font-weight: 400;
  background: 5px;
`;
const AddressDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
  width: 960px;
  margin: 20px 10px;
`;

const AddressInput = styled.input`
  border-radius: 10px;
  width: 600px;
  height: 40px;
  color: black;
  font-size: 16px;
  border: 1px solid #d9d9d9;
  margin: 5px 10px;
  inline: inline-block;
  padding: 0.5rem;
`;

const Button = styled.button`
  width: 50px;
  height: 40px;
  margin: 0 3px;
  border: 0;
  background: #d9d9d9;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: #2f3640;
    color: white;
  }
`;

const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: left;
  vertical-align: center;
  padding-right: 0.7rem;
  margin: 5px 0;
`;

//대여료

const PriceInput = styled.input`
  border-radius: 10px;
  width: 490px;
  height: 40px;
  color: black;
  font-size: 16px;
  border: 1px solid #d9d9d9;
  margin: 0;
  inline: inline-block;
`;

const PriceDiv = styled.div`
  width: 700px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  text-align: left;
  margin: 5px 0px;
  line-height: 30px;
  vertical-align: center;
`;

//상품 상세설명
//이미지 등록
const FileInput = styled.input`
  display: none;
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
  margin: 20px 10px;
  padding: 2rem 0;
  text-align: left;
  width: 960px;
`;

const EditorContainer = styled.div`
  width: 955px;
  height: fit-content;
  padding : 0 10px;
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
  overflow-x: scroll;
  display: flex;
`;

const DeleteButton = styled.button`
  width: 15%;
  height: 2rem;
  margin: 5px 0px;
  float: right;
  border: 0;
  background: #d9d9d9;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: #b9d9c0;
  }
`;

const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 0.7rem;
  width: 300px;
`;

const StyledButton = styled.button`
  width: 940px;
  height: 40px;
  margin: 10px 20px 10px 20px;
  border: 0;
  background: #d9d9d9;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: #b9d9c0;
  }
`;
