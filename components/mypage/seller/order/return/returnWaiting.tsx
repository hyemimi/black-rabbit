import {
  ColumnDiv,
  DeleteButton,
  DeleteDiv,
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
} from "@/components/detail/Seller";
import { useState } from "react";

const ReturnWaiting = () => {
  const ItemList = [
    {
      itemId: 1,
      pricePerOne: 123,
      likeCount: 1,
      method: "PARCEL",

      reviewCount: 5,
      starAvg: 4.4,
      title: " Canon EOS Rebel T7 18-55mm 번들 세트",
    },
    {
      itemId: 2,
      pricePerOne: 20000,

      likeCount: 23,
      method: "PARCEL",
      reviewCount: 12,
      starAvg: 4.0,
      title: "[소니] FE 28-60mm F4-5.6 표준렌즈",
    },
    {
      itemId: 1,
      pricePerOne: 12324,

      likeCount: 1,
      method: "PARCEL",
      reviewCount: 5,
      starAvg: 4.4,
      title: "소니 A7M4 미러리스 카메라",
    },
    {
      itemId: 2,
      pricePerOne: 20000,

      likeCount: 23,
      method: "PARCEL",
      reviewCount: 12,
      starAvg: 4.0,
      title: "소니 FE 24-70mm GM F2.8",
    },
  ];

  return (
    <>
      <DeleteDiv>
        <Label>
          <input type="checkbox" />
          전체선택
        </Label>
        <DeleteButton>반납처리</DeleteButton>
      </DeleteDiv>

      <OverflowDiv>
        <Table>
          <Thead>
            <tr>
              <th>선택</th>
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
              <Tr key={item.title}>
                <LeftTd>
                  <input type="checkbox" key={item.itemId}></input>
                </LeftTd>
                <Td>{index + 1}</Td>
                <Td>
                  <ColumnDiv>
                    <ItemTitle>{item.title}</ItemTitle>
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
    </>
  );
};
export default ReturnWaiting;
