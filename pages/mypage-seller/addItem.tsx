import styled from "styled-components";
import { StyledButton } from "@/components/common/Button";
import { useState, useRef } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import Link from "next/link";
import AddressSelectModal from "@/components/mypage/seller/AddressSlelectModal";
import InnerModal from "../../components/mypage/seller/InnerModal";

const QuillEditor = dynamic(
  () => import("../../components/mypage/seller/QuilEditor"),
  {
    ssr: false,
  }
);

interface ItemForm {
  storeId: number;
  itemTitle: string;
  itemCategory: string;
  itemNumber: number;
  itemBrand: string;
  itemModel: string;
  transactionWay: string;
  postalCode: number;
  address: string;
  addressDetail: string;
  feePerDay: number;
  fee5Day: number;
  fee10Day: number;
  itemDescription: HTMLImageElement;
  itemImages: HTMLImageElement;
}

const addItem = () => {
  //state
  const [showImages, setShowImages] = useState([]);
  const [htmlStr, setHtmlStr] = useState<string>("");
  const [selectModal, setSelectModal] = useState<boolean>(false);
  const [itemCategory, setItemCategory] = useState<string>("CAMERA");
  const [transMethod, setTransMethod] = useState<string>("PARCEL");
  const [postalCode, setPostalCode] = useState<string>(null);
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

  const itemCategoryHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemCategory(e.target!.value);
    //콘솔시 이전값 찍히는데 왜?
  };

  const transMethodHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTransMethod(e.target!.value);
    //콘솔시 이전값 찍히는데 왜?
  };

  const closeModal = () => {
    setSelectModal((prev) => !prev);
    console.log(selectModal);
  };

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

  const handleDeleteImage = (id: number) => {
    setShowImages(showImages.filter((_, index) => index !== id));
    setImageList(imageList.filter((_, index) => index !== id));
  };

  const SubmitHandler = (event: React.FormEvent) => {
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
    formData.append("quantity", JSON.stringify(enteredQuantity));
    formData.append("brandName", JSON.stringify(enteredBrand));
    formData.append("modelName", JSON.stringify(enteredModel));
    formData.append("method", JSON.stringify(transMethod));
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
      for (let value of formData.values()) {
        console.log(value);
      }
    } catch (e) {}
  };

  return (
    <Wrapper>
      <WholeDiv>
        <StyledTitle>상품 등록</StyledTitle>
        <hr />
        <form onSubmit={SubmitHandler}>
          <Div>
            <Label>제목</Label>
            <Input
              type="text"
              name="title"
              ref={itemTitleRef}
              placeholder="브랜드명 + 모델명으로 구성된 제목을 적어주세요."
            />
            {/* {errors?.itemTitle && <span>{errors?.itemTitle?.message}</span>} */}
          </Div>

          <Div>
            <Label htmlFor="category">카테고리</Label>
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

            <Label htmlFor="quantity">수량</Label>
            <Input
              type="number"
              name="quantity"
              ref={itemNumberRef}
              placeholder="수량"
            />
          </Div>

          <Div>
            <Label>브랜드명</Label>
            <Input
              type="text"
              name="itemBrand"
              ref={itemBrandRef}
              placeholder="예) 캐논"
            />
            <Label>모델명</Label>
            <Input
              type="text"
              name="itemModel"
              ref={itemModelRef}
              placeholder="예) ES303"
            />
          </Div>
          <Div>
            <Label htmlFor="method">거래방법</Label>
            <Select name="method" onChange={transMethodHandler}>
              <option value="PARCEL">택배수령</option>
              <option value="VISIT">방문수령</option>
            </Select>
          </Div>

          <AddressDiv>
            <Label htmlFor="address">거래주소</Label>
            <ButtonDiv>
              <Input
                type="number"
                name="postalCode"
                value={postalCode}
                placeholder="우편번호"
              />
              <Button onClick={closeModal}>선택</Button>
              <Link href={"/mypage-seller/addAddress"}>
                <Button>추가</Button>
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
            <Input
              type="text"
              name="address"
              value={address}
              placeholder="기본주소"
            />
            <Input
              type="text"
              name="addressDetail"
              value={addressDetail}
              placeholder="상세주소"
            />
          </AddressDiv>

          <Prices>
            <Label>대여료</Label>
            <AddressDiv>
              <PriceDiv>
                <Label htmlFor="pricePerOne">1일</Label>
                <Input
                  type="price"
                  name="pricePerOne"
                  ref={pricePerOneRef}
                  placeholder="가격/1일"
                />
                <Label>원</Label>
              </PriceDiv>
              <PriceDiv>
                <Label htmlFor="pricePerFive">5일 이상</Label>
                <Input
                  type="text"
                  name="pricePerFive"
                  ref={pricePerFiveRef}
                  placeholder="가격/1일"
                />
                <Label>원</Label>
              </PriceDiv>
              <PriceDiv>
                <Label htmlFor="pricePerTen">10일 이상</Label>
                <Input
                  type="text"
                  name="pricePerTen"
                  ref={pricePerTenRef}
                  placeholder="가격/1일"
                />
                <Label>원</Label>
              </PriceDiv>
            </AddressDiv>
          </Prices>

          <Div>
            <EditorContainer>
              <Label>상품 상세설명</Label>
              <QuillEditor htmlStr={htmlStr} setHtmlStr={setHtmlStr} />
            </EditorContainer>
          </Div>

          <ImageDiv>
            <Label>이미지등록</Label>
            <ImageUploadLabel htmlFor="itemImages">사진 선택</ImageUploadLabel>
            <P>최대 열장까지 업로드 가능</P>

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
  margin: 0.5rem 0;
  line-height: 30px;
  vertical-align: center;
`;

const Prices = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
  width: 100%;
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

const Button = styled.button`
  width: 40px;
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
  text-align: left;
  vertical-align: center;
`;

const AddressDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
  width: 100%;
  margin-bottom: 1rem;
`;

const PriceDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: left;
  text-align: left;
  margin: 0rem 0;
  line-height: 30px;
  vertical-align: center;
`;
