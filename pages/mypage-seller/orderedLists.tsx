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
  OverflowDiv,
  RightTd,
  Table,
  Tbody,
  Td,
  Thead,
  Tr,
  WholeLists,
} from "@/components/detail/Seller";

import canon1 from "../../public/canon1.jpeg";
import Image from "next/image";
import { useState } from "react";
import Modal from "@/components/common/modal/Modal";

import OrderDetailModal from "@/components/mypage/seller/order/detail/OrderDetailModal";
const OrderedLists = () => {
  const [selectModal, setSelectModal] = useState<boolean>(false);

  const closeModal = () => {
    setSelectModal((prev) => !prev);
    console.log(selectModal);
  };
  const ItemList = [
    {
      itemId: 1,
      pricePerOne: 123,
      likeCount: 1,
      method: "PARCEL",
      img: canon1,
      reviewCount: 5,
      starAvg: 4.4,
      title: " Canon EOS Rebel T7 18-55mm 번들 세트",
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
    },
    {
      itemId: 1,
      pricePerOne: 12324,
      img: canon1,
      likeCount: 1,
      method: "PARCEL",
      reviewCount: 5,
      starAvg: 4.4,
      title: "소니 A7M4 미러리스 카메라",
    },
    {
      itemId: 2,
      pricePerOne: 20000,
      img: canon1,
      likeCount: 23,
      method: "PARCEL",
      reviewCount: 12,
      starAvg: 4.0,
      title: "소니 FE 24-70mm GM F2.8",
    },
  ];
  return (
    <Wrapper>
      <WholeDiv>
        <Title>주문내역조회</Title>
        <StatusDiv>
          <StatusBox>
            <StatusName>결제완료</StatusName>
            <Number>3건</Number>
          </StatusBox>

          <StatusBox>
            <StatusName>배송진행</StatusName>
            <Number>2건</Number>
          </StatusBox>
          <StatusBox>
            <StatusName>배송완료</StatusName>
            <Number>1건</Number>
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
            <Select>
              <Option>Canon EOS Rebel T7 18-55mm 번들 세트</Option>
              <Option>[소니] FE 28-60mm F4-5.6 표준렌즈</Option>
              <Option>EOS 어쩌구</Option>
            </Select>
          </FilterDiv>
          <FilterDiv>
            <FilterName>기간</FilterName>
            <Select>
              <Option>지난 30일</Option>
              <Option>지난 1년</Option>
              <Option>지난 1주일</Option>
            </Select>
          </FilterDiv>
          <FilterDiv>
            <FilterName>처리상태</FilterName>
            <Select>
              <Option>결제완료</Option>
              <Option>배송진행</Option>
              <Option>배송완료</Option>
            </Select>
          </FilterDiv>
        </SearchDiv>

        <WholeLists>상품 전체목록 (총 {1}개)</WholeLists>
        {/* <Hr /> */}
        <DeleteDiv>
          <Label>
            <input type="checkbox" />
            전체선택
          </Label>
          <DeleteButton> 선택삭제</DeleteButton>
        </DeleteDiv>

        <OverflowDiv>
          <Table>
            <Thead>
              <tr>
                <th>번호</th>
                <th>주문번호</th>
                <th>상품정보</th>
                <th>주문일시</th>
                <th>출고(예정)일</th>
                <th>텍베시</th>
                <th>운송장번호</th>
                <th>결제금액</th>
                <th>고객명</th>
              </tr>
            </Thead>
            <Tbody>
              {ItemList.map((item, index) => (
                <Tr key={item.itemId} onClick={closeModal}>
                  {selectModal && (
                    <Modal>
                      <OrderDetailModal
                        closeModal={closeModal}
                      ></OrderDetailModal>
                    </Modal>
                  )}
                  <LeftTd>
                    <input type="checkbox" key={item.itemId}></input>
                  </LeftTd>
                  <Td>{index + 1}</Td>
                  <Td>
                    <ColumnDiv>
                      <ItemTitle>{item.title}</ItemTitle>
                      {/* <ItemImg
                        src={item.img}
                        width="120"
                        height="80"
                        alt="itemImage"
                      ></ItemImg> */}
                    </ColumnDiv>
                  </Td>

                  <Td>
                    <p>
                      대여중 : 1 <br />
                      수리중 : 1<br /> 대여가능 : 1
                    </p>
                  </Td>
                  <Td>{item.starAvg}점</Td>
                  <Td>{item.reviewCount}개</Td>
                  <Td>{item.pricePerOne}원/일</Td>
                  <Td>{item.method}</Td>
                  <Td>100000원</Td>
                  <RightTd>
                    <ColumnDiv></ColumnDiv>
                  </RightTd>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </OverflowDiv>
      </WholeDiv>
    </Wrapper>
  );
};
export default OrderedLists;
