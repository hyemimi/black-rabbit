import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  Title,
  WholeDiv,
  Wrapper,
  SearchDiv,
  FilterDiv,
  P,
  FilterName,
  Select,
  Option,
  ColumnDiv,
  DeleteButton,
  DeleteDiv,
  GreenButton,
  ItemTitle,
  Label,
  LeftTd,
  Th,
  OverflowDiv,
  RightTd,
  Table,
  Tbody,
  Td,
  Thead,
  Tr,
  WholeLists,
  GrayButton,
} from "@/styles/MypageSellerStyle";
import axios from "axios";
import { useModal } from "@/src/components/common/modal/useModal";
import { MultiSelect } from "@/src/components/mypage/seller/Item/Multiselect";
import { useGetAllSellerItem } from "@/src/hooks/api/seller/getAllSellerItems";

interface InputItem {
  id: number;
  serialNum: string;
}

const ProductLists = () => {
  const ListsNum = 1;
  const router = useRouter();
  const [deleteItems, setDeleteItems] = useState<string[]>([]);
  const [checkItems, setCheckItems] = useState<number[]>([]);
  const [selectedName, setSelectedName] = useState<string>("전체");
  const [selectedMethod, setSelectedMehtod] = useState<string>("전체");
  const { openModal, closeModal, modalDataState } = useModal();

  const Products = [
    { id: "1", state: "fix", value: "12344" },
    { id: "2", state: "rental", value: "234234" },
    { id: "3", state: "rentalable", value: "4443" },
    { id: "4", state: "fix", value: "afdd" },
    { id: "5", state: "fix", value: "123sdf4" },
  ];

  const selectedItems = (select: string) => {
    const selected = Products.filter((item) => item.state === select);
    return selected;
  };

  //아이템 리스트 받아오기
  const { items, refetch } = useGetAllSellerItem();
  console.log("items  : ", items);

  var ItemList = [
    {
      itemId: 1,
      pricePerOne: 123,
      likeCount: 1,
      method: "PARCEL",
      img: "/static/images/canon1.jpg",
      reviewCount: 5,
      starAvg: 4.4,
      title: "Canon EOS Rebel T7 18-55mm 번들 세트",
      productStates: { rentalable: 1, rental: 2, fix: 3 },
    },
    {
      itemId: 2,
      pricePerOne: 20000,
      img: "/static/images/canon1.jpg",
      likeCount: 23,
      method: "PARCEL",
      reviewCount: 12,
      starAvg: 4.0,
      title: "[소니] FE 28-60mm F4-5.6 표준렌즈",
      rentalable: 1,
      rentaling: 3,
      fixing: 3,
    },
    {
      itemId: 3,
      pricePerOne: 12324,
      img: "/static/images/canon1.jpg",
      likeCount: 1,
      method: "VISIT",
      reviewCount: 5,
      starAvg: 4.4,
      title: "소니 A7M4 미러리스 카메라",
      rentalable: 1,
      rentaling: 3,
      fixing: 3,
    },
    {
      itemId: 4,
      pricePerOne: 20000,
      img: "/static/images/canon1.jpg",
      likeCount: 23,
      method: "PARCEL",
      reviewCount: 12,
      starAvg: 4.0,
      title: "소니 FE 24-70mm GM F2.8",
      rentalable: 1,
      rentaling: 1,
      fixing: 3,
    },
  ];

  //list 삭제
  const handleDeleteItems = () => {
    ItemList = ItemList.filter(
      (item: any) => !checkItems.includes(item.itemId)
    );
  };

  const modalData = {
    title: "삭제",
    content: `선택된 상품 ${checkItems.length}개를 삭제하시겠습니까?`,
    callback: handleDeleteItems,
  };

  //제품 삭제 모달
  const ProductDeleteModalData = {
    title: "상품평",
    content: (
      <Div>
        <ModalDiv>
          <Header>
            <BigTitle>개별 상품 삭제</BigTitle>
            <Exit onClick={closeModal}>닫기</Exit>
          </Header>
          <ContentsDiv>
            <ModalTitle>상품정보</ModalTitle>
            <Box>
              <ItemsRowDiv>
                <ModalP>상품명 </ModalP>
                <ModalP>캐논오토보이 </ModalP>
              </ItemsRowDiv>
              <P>개별상품목록(일련번호) </P>
              <ItemBox>
                <RowDiv>
                  <State>대여가능 </State>
                  <MultiSelect
                    items={selectedItems("rentalable")}
                    placeholder="삭제할 상품을 고르세요"
                  ></MultiSelect>
                </RowDiv>
                <RowDiv>
                  <State>대여중</State>
                  <MultiSelect
                    items={selectedItems("rental")}
                    placeholder="삭제할 상품을 고르세요"
                  ></MultiSelect>
                </RowDiv>

                <RowDiv>
                  <State>수리중</State>
                  <MultiSelect
                    items={selectedItems("fix")}
                    placeholder="삭제할 상품을 고르세요"
                  ></MultiSelect>
                </RowDiv>
              </ItemBox>
            </Box>
            <ButtonDiv>
              <Button>삭제</Button>
            </ButtonDiv>
          </ContentsDiv>
        </ModalDiv>
      </Div>
    ),
    callback: () => {
      alert("modal");
    },
  };

  //제품 추가 모달
  const nextId = useRef<number>(1);
  const [inputItems, setInputItems] = useState<InputItem[]>([
    {
      id: 0,
      serialNum: "",
    },
  ]);
  const addInput = () => {
    const inputContents = {
      id: nextId.current,
      serialNum: "",
    };
    setInputItems([...inputItems, inputContents]);
    nextId.current += 1;
  };

  function deleteInput(index: number) {
    // 인덱스 값을 받아서
    setInputItems(inputItems.filter((item) => item.id !== index)); // 인덱스 값과 같지 않은 애들만 남겨둔다
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>, index: number) {
    // ↓ 이벤트 객체를 받고, 인덱스를 받자
    if (index > inputItems.length) return; // 혹시 모르니 예외처리

    // 인풋배열을 copy 해주자
    const inputItemsCopy: InputItem[] = JSON.parse(JSON.stringify(inputItems));
    inputItemsCopy[index].serialNum = e.target.value; // 그리고 해당 인덱스를 가진 <input>의 내용을 변경해주자
    setInputItems(inputItemsCopy); // 그걸 InputItems 에 저장해주자
  }

  const ProductAddModalData = {
    title: "상품평",
    content: (
      <Div>
        <ModalDiv>
          <Header>
            <BigTitle>개별 상품 추가</BigTitle>
            <Exit onClick={closeModal}>닫기</Exit>
          </Header>
          <ContentsDiv>
            <ModalTitle>상품정보</ModalTitle>
            <Box>
              <ItemsRowDiv>
                <ModalP>상품명 </ModalP>
                <ModalP>캐논오토보이 </ModalP>
              </ItemsRowDiv>
              <ModalP>추가할 상품정보</ModalP>
              <ItemBox>
                <RowDivWithMargin>
                  <State>일련번호 </State>
                  <ColumnDiv>
                    {inputItems.map((item, index) => (
                      <RowDiv key={index}>
                        <Input
                          type="text"
                          id={`serialNum-${index}`}
                          onChange={(e) => handleChange(e, index)}
                          value={item.serialNum}
                        />
                        {index === 0 && inputItems.length < 10 && (
                          <PlusButton onClick={addInput}> + </PlusButton>
                        )}
                        {index > 0 && inputItems[index - 1] ? (
                          <PlusButton onClick={() => deleteInput(item.id)}>
                            -
                          </PlusButton>
                        ) : (
                          ""
                        )}
                      </RowDiv>
                    ))}
                  </ColumnDiv>
                </RowDivWithMargin>
              </ItemBox>
            </Box>
            <ButtonDiv>
              <Button onClick={modalDataState.callBack}>등록</Button>
            </ButtonDiv>
          </ContentsDiv>
        </ModalDiv>
      </Div>
    ),
    callback: () => {
      alert("modal");
    },
  };

  // 체크박스 단일 선택
  const handleSingleCheck = (checked: boolean, itemId: number) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckItems((prev: number[]) => [...prev, itemId]);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckItems(checkItems.filter((el: any) => el !== itemId));
    }
  };

  // 체크박스 전체 선택
  const handleAllCheck = (checked: boolean) => {
    if (checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray: number[] = [];
      ItemList.forEach((el) => idArray.push(el.itemId));
      setCheckItems(idArray);
    } else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([]);
    }
  };

  const handleNameFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedName(e.target.value);
  };
  const handleMethodFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMehtod(e.target.value);
    const FilteredList = ItemList.map((item) => {
      return item.method === selectedMethod;
    });
    return FilteredList;
  };

  return (
    <>
      <Wrapper>
        <WholeDiv>
          <Title>상품 조회 및 수정 </Title>

          <SearchDiv>
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                height: 20,
                width: 20,
                marginTop: 15,
                marginBottom: 15,
                marginLeft: 20,
                marginRight: 10,
              }}
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
            <P>검색조건</P>
            <FilterDiv>
              <FilterName>상품명</FilterName>
              <Select onChange={handleNameFilter} value={selectedName}>
                <Option selected={true}>전체</Option>
                {ItemList.map((item, index) => (
                  <Option key={index}>{item.title}</Option>
                ))}
              </Select>
            </FilterDiv>
            <FilterDiv>
              <FilterName>거래방법</FilterName>
              <Select onChange={handleMethodFilter} value={selectedMethod}>
                <Option selected={true}>전체</Option>
                <Option>PARCEL</Option>
                <Option>VISIT</Option>
              </Select>
            </FilterDiv>
          </SearchDiv>

          <WholeLists>상품 전체목록 (총 {ListsNum}개)</WholeLists>

          <DeleteDiv>
            <Label>
              <input
                type="checkbox"
                onChange={(e) => handleAllCheck(e.target.checked)}
                // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
                checked={checkItems.length === 4 ? true : false}
              />
              전체선택
            </Label>
            <DeleteButton onClick={() => openModal(modalData)}>
              {" "}
              선택삭제
            </DeleteButton>
          </DeleteDiv>

          <OverflowDiv>
            <Table>
              <Thead>
                <Tr>
                  <Th>선택</Th>
                  <Th>번호</Th>
                  <Th>상품 정보</Th>
                  <Th>상태</Th>
                  <th>평균별점</th>
                  <th>리뷰 수</th>
                  <th>대여가격</th>
                  <th>거래방법</th>
                  <th>일정</th>
                  <th>수정</th>
                </Tr>
              </Thead>
              <Tbody>
                {ItemList.filter((item) => {
                  return selectedMethod === "전체"
                    ? item.method.length >= 0
                    : item.method === selectedMethod;
                })
                  .filter((item) => {
                    return selectedName === "전체"
                      ? item.title.length >= 0
                      : item.title === selectedName;
                  })
                  .map((item, index) => (
                    <Tr key={item.itemId}>
                      <>
                        <LeftTd>
                          <input
                            type="checkbox"
                            key={item.itemId}
                            onChange={(e: any) => {
                              e.stopPropagation();
                              handleSingleCheck(e.target.checked, item.itemId);
                            }}
                            // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
                            checked={
                              checkItems.includes(item.itemId) ? true : false
                            }
                          ></input>
                        </LeftTd>

                        <Td>{index + 1}</Td>
                        <Td>
                          <ColumnDiv
                            onClick={() => {
                              router.push(`/mypage-seller/item/${item.itemId}`);
                            }}
                          >
                            <ItemTitle>{item.title}</ItemTitle>
                            <ItemImg
                              src={item.img}
                              width="120"
                              height="80"
                              alt="itemImage"
                            ></ItemImg>
                          </ColumnDiv>
                        </Td>

                        <Td>
                          <p>
                            대여가능 : {item.rentalable} <br />
                            대여중 : {item.rentaling} <br />
                            수리중 : {item.fixing}
                          </p>
                        </Td>
                        <Td>{item.starAvg}점</Td>
                        <Td>{item.reviewCount}개</Td>
                        <Td>{item.pricePerOne}원/일</Td>
                        <Td>{item.method}</Td>
                      </>

                      <Td>
                        <GreenButton
                          onClick={(e: any) => {
                            e.stopPropagation();
                            router.push(`/mypage-seller/plan/${item.itemId}`);
                          }}
                        >
                          일정변경
                        </GreenButton>
                      </Td>
                      <RightTd>
                        <ColumnDiv>
                          <GrayButton
                            onClick={() => openModal(ProductDeleteModalData)}
                          >
                            상품삭제
                          </GrayButton>
                          <GrayButton
                            onClick={() => openModal(ProductAddModalData)}
                          >
                            상품추가
                          </GrayButton>
                        </ColumnDiv>
                      </RightTd>
                    </Tr>
                  ))}
              </Tbody>
            </Table>
          </OverflowDiv>
        </WholeDiv>
      </Wrapper>
    </>
  );
};
export default ProductLists;

const ItemImg = styled(Image)`
  vertical-align: center;
  margin-right: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration-line: none;
  margin: 0;
  padding: 0;
`;

const Div = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  weight: 100vw;
  height: 100vhv;
  background-color: rgba(0, 0, 0, 0.2);
  align-items: center;
`;
const Header = styled.div`
  background-color: ${(props) => props.theme.pointColor};
`;
const BigTitle = styled.h2`
  padding: 20px;
  font-size: 20px;
  position: relative;
  font-weight: 400;
`;

export const ModalDiv = styled.div`
  position: fixed;
  width: 800px;
  height: 600px;
  right: 0;
  left: 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.modalColor};
  top: 50%;
  overflow-y: scroll;
  left: 55%;
  transform: translate(-50%, -50%);
  align-items: center;
`;

const Exit = styled.button`
  position: absolute;
  width: 50px;
  height: 40px;
  margin: 10px;
  right: 0;
  top: 0;
  border: 0;
  background: #d9d9d9;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: #2f3640;
    color: white;
  }
`;

const ContentsDiv = styled.div`
  margin: 0 auto;
  padding: 5px 20px;
  align-items: center;
  border-radius: 10px;
`;

const ModalTitle = styled.h1`
  padding: 20px 0 0px 20px;
  font-size: 20px;
  position: relative;
  font-weight: 400;
  text-align: left;
`;

const Box = styled.div`
  margin: 10px;
  padding: 20px 20px;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
`;

const ModalP = styled.p`
  margin: 10px;
  font-weight: 400;
`;

const ItemBox = styled.div`
  background: #f1f1f1;
  border-radius: 10px;
  padding: 10px;
`;

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px 10px;
`;

const State = styled.h1`
  width: 60px;
  margin: 10px;
  font-weight: 400;
`;

const Button = styled.button`
  width: 80px;
  background: #cee8d3;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  cursor: pointer;
`;
const ItemsRowDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const ButtonDiv = styled.div`
  margin: 25px;
  text-align: center;
`;
const RowDivWithMargin = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px 10px;
`;

const PlusButton = styled.div`
  border: none;
  border-radius: 5px;
  background: #d9d9d9;
  width: 20px;
  text-align: center;
  vertical-align: middle;
  font-weight: 400;
`;

const Input = styled.input`
  width: 120px;
  height: 30px;
  border: 1px solid;
  border-radius: 5px;
  margin: 3px;
`;
