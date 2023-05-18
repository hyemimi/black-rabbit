import styled from "styled-components";
import canon1 from "../../public/canon1.jpeg";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import Modal from "@/components/common/modal/Modal";
import ProductDeleteModal from "@/components/mypage/seller/Item/Modal/ProductDeleteModal";
import ProductAddModal from "@/components/mypage/seller/Item/Modal/ProductAddModal";
import SellerMypageSidebar from "@/layout/SellerMypageSidebar";
import {
  Title,
  WholeDiv,
  Wrapper,
  StatusDiv,
  StatusBox,
  StatusName,
  Number,
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
} from "@/components/detail/Seller";
import { random } from "nanoid";
import axios from "axios";

const ProductLists = () => {
  const ListsNum = 1;
  const router = useRouter();
  const [selectModal, setSelectModal] = useState<boolean>(false);
  const [selectAddModal, setSelectAddModal] = useState<boolean>(false);
  const [deleteItems, setDeleteItems] = useState<string[]>([]);
  const [checkItems, setCheckItems] = useState<number[]>([]);
  const [selectedName, setSelectedName] = useState<string>("전체");
  const [selectedMethod, setSelectedMehtod] = useState<string>("전체");

  const closeModal = (e: any) => {
    e.stopPropagation();
    setSelectModal((prev) => !prev);
    console.log(selectModal);
  };

  const closeAddModal = (e: any) => {
    e.stopPropagation();
    setSelectAddModal((prev) => !prev);
  };

  const ServerItemList = async () => {
    const response = await axios.get("/items/all");
    return response.data.content;
  };

  console.log(ServerItemList);

  const ItemList = [
    {
      itemId: 1,
      pricePerOne: 123,
      likeCount: 1,
      method: "PARCEL",
      img: canon1,
      reviewCount: 5,
      starAvg: 4.4,
      title: "Canon EOS Rebel T7 18-55mm 번들 세트",
      rentalable: 1,
      rentaling: 2,
      fixing: 3,
    },
    {
      itemId: 2,
      pricePerOne: 20000,
      img: canon1,
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
      img: canon1,
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
      img: canon1,
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

  var rentalable = 0;
  for (var i = 0; i < ItemList.length; i++) {
    rentalable = rentalable + ItemList[i].rentalable;
  }

  var rentaling = 0;
  for (var i = 0; i < ItemList.length; i++) {
    rentaling = rentaling + ItemList[i].rentaling;
  }

  var fixing = 0;
  for (var i = 0; i < ItemList.length; i++) {
    fixing = fixing + ItemList[i].fixing;
  }

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

  //선택한 아이템 삭제
  const deleteSelectedItems = () => {
    //삭제 api로 연결
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
          <StatusDiv>
            <StatusBox>
              <StatusName>대여가능</StatusName>
              <Number>{rentalable}건</Number>
            </StatusBox>

            <StatusBox>
              <StatusName>대여중</StatusName>
              <Number>{rentaling}건</Number>
            </StatusBox>
            <StatusBox>
              <StatusName>수리중</StatusName>
              <Number>{fixing}건</Number>
            </StatusBox>
          </StatusDiv>

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
            <DeleteButton> 선택삭제</DeleteButton>
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
                          <GrayButton onClick={closeModal}>상품삭제</GrayButton>
                          {selectModal && (
                            <Modal>
                              <ProductDeleteModal
                                closeModal={closeModal}
                                setDeleteItems={setDeleteItems}
                              ></ProductDeleteModal>
                            </Modal>
                          )}
                          <GrayButton onClick={closeAddModal}>
                            상품추가
                          </GrayButton>
                          {selectAddModal && (
                            <Modal>
                              <ProductAddModal
                                closeAddModal={closeAddModal}
                              ></ProductAddModal>
                            </Modal>
                          )}
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
