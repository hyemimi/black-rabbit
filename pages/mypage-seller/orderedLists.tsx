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
  ItemTitle,
  Hr,
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
import styled from "styled-components";

import canon1 from "../../public/canon1.jpeg";
import { useState } from "react";
import Modal from "@/components/common/modal/Modal";

import OrderDetailModal from "@/components/mypage/seller/order/detail/OrderDetailModal";
const OrderedLists = () => {
  const [selectModal, setSelectModal] = useState<boolean>(false);
  const [selectedName, setSelectedName] = useState<string>("전체");
  const [selectedStatus, setSelectedStatus] = useState<string>("전체");
  const [selectedPeriod, setSelectedPeriod] = useState<string>("전체");

  const handleNameFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedName(e.target.value);
  };
  const handleStatusFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(e.target.value);
    const FilteredList = ItemList.map((item) => {
      return item.productStatus === selectedStatus;
    });
    return FilteredList;
  };

  const closeModal = () => {
    setSelectModal((prev) => !prev);
    console.log(selectModal);
  };

  // 연도 차이
  const getYearDiff = (d1: string, d2: string) => {
    const date1 = new Date(d1);
    const date2 = new Date(d2);

    const diffDate = date1.getTime() - date2.getTime();

    return Math.floor(Math.abs(diffDate / (1000 * 60 * 60 * 24 * 365)));
  };

  getYearDiff("2001-09-01", "2021-09-01");
  // 20

  var stDate = new Date();

  var year = stDate.getFullYear(); // 연도
  var month = stDate.getMonth() + 1; // 월
  var day = stDate.getDate();
  var endDate = new Date(year, month, day);

  const ItemList = [
    {
      itemId: 1,
      title: "Canon EOS Rebel T7 18-55mm 번들 세트",
      orderedDate: "23/3/13 16:45",
      deliveryDate: "23-03-15",
      parcelCompany: "cj대한통운",
      waybillNumber: "203310022",
      price: "100000",
      customerName: "슈슈숩",
      productStatus: "결제완료",
      orderNum: 1234,
    },
    {
      itemId: 2,
      title: "[소니] FE 28-60mm F4-5.6 표준렌즈",
      orderedDate: "23/3/13 16:45",
      deliveryDate: "23/3/15",
      parcelCompany: "cj대한통운",
      waybillNumber: "203310022",
      price: "100000",
      customerName: "슈슈숩",
      productStatus: "결제완료",
      orderNum: 1234,
    },
    {
      itemId: 3,
      title: "소니 A7M4 미러리스 카메라",
      orderedDate: "23/3/13 16:45",
      deliveryDate: "23/3/15",
      parcelCompany: "cj대한통운",
      waybillNumber: "203310022",
      price: "100000",
      customerName: "슈슈숩",
      productStatus: "결제완료",
      orderNum: 1234,
    },
    {
      itemId: 4,
      title: "소니 FE 24-70mm GM F2.8",
      orderedDate: "23/3/13 16:45",
      deliveryDate: "23/3/15",
      parcelCompany: "cj대한통운",
      waybillNumber: "203310022",
      price: "100000",
      customerName: "슈슈숩",
      productStatus: "결제완료",
      orderNum: 1234,
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
            <Select onChange={handleNameFilter} value={selectedName}>
              <Option selected={true}>전체</Option>
              {ItemList.map((item, index) => (
                <Option key={index}>{item.title}</Option>
              ))}
            </Select>
          </FilterDiv>
          <FilterDiv>
            <FilterName>주문기간</FilterName>
            <Select>
              <Option>전체</Option>
              <Option>지난 30일</Option>
              <Option>지난 1년</Option>
              <Option>지난 1주일</Option>
            </Select>
          </FilterDiv>
          <FilterDiv>
            <FilterName>처리상태</FilterName>
            <Select onChange={handleStatusFilter} value={selectedStatus}>
              <Option>전체</Option>
              <Option>결제완료</Option>
              <Option>배송진행</Option>
              <Option>배송완료</Option>
            </Select>
          </FilterDiv>
        </SearchDiv>

        <WholeLists>상품 전체목록 (총 {1}개)</WholeLists>
        <Hr />

        <OverflowDiv>
          <OverflowTable>
            <Thead>
              <tr>
                <th></th>
                <th>주문번호</th>
                <th>상품정보</th>
                <th>처리상태</th>
                <th>주문일시</th>
                <th>출고(예정)일</th>
                <th>택배사</th>
                <th>운송장번호</th>
                <th>결제금액</th>
                <th>고객명</th>
              </tr>
            </Thead>
            <Tbody>
              {ItemList.filter((item) => {
                return selectedStatus === "전체"
                  ? item.productStatus.length >= 0
                  : item.productStatus === selectedStatus;
              })
                .filter((item) => {
                  return selectedName === "전체"
                    ? item.title.length >= 0
                    : item.title === selectedName;
                })
                .filter((item) => {
                  return selectedPeriod === "전체"
                    ? item.orderedDate.length >= 0
                    : item.orderedDate === selectedPeriod;
                })
                .map((item, index) => (
                  <Tr key={item.itemId} onClick={closeModal}>
                    {selectModal && (
                      <Modal>
                        <OrderDetailModal
                          closeModal={closeModal}
                        ></OrderDetailModal>
                      </Modal>
                    )}
                    <LeftTd>{index + 1}</LeftTd>
                    <Td>{item.orderNum}</Td>
                    <Td>
                      <ColumnDiv>
                        <ItemTitle>{item.title}</ItemTitle>
                      </ColumnDiv>
                    </Td>
                    <Td>{item.productStatus}</Td>
                    <Td>{item.orderedDate}</Td>
                    <Td>{item.deliveryDate}</Td>
                    <Td>{item.parcelCompany}</Td>
                    <Td>{item.waybillNumber}</Td>
                    <Td>{item.price}원</Td>
                    <RightTd>{item.customerName}</RightTd>
                  </Tr>
                ))}
            </Tbody>
          </OverflowTable>
        </OverflowDiv>
      </WholeDiv>
    </Wrapper>
  );
};
export default OrderedLists;

const OverflowTable = styled(Table)`
  overflow-x: scroll;
`;
