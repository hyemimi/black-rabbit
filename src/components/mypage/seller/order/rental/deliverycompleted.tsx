import {
  ColumnDiv,
  DeleteButton,
  DeleteDiv,
  ItemTitle,
  LeftTd,
  OverflowDiv,
  RightTd,
  Table,
  Tbody,
  Td,
  Thead,
  Tr,
} from "@/styles/MypageSellerStyle";
import styled from "styled-components";

const DeliveryCompleted = ({ ItemList }: any) => {
  return (
    <>
      <DeleteDiv></DeleteDiv>

      <OverflowDiv>
        <Table>
          <Thead>
            <tr>
              <th></th>
              <th>주문번호</th>
              <th>상품정보</th>
              <th>배송현황</th>
              <th>주문일시</th>
              <th>출고(예정)일</th>
              <th>택배사</th>
              <th>운송장번호</th>
              <th>결제금액</th>
              <th>고객명</th>
            </tr>
          </Thead>
          <Tbody>
            {ItemList.filter(
              (item: any) => item.productStatus === "배송진행"
            ).map((item: any, index: any) => (
              <Tr key={item.title}>
                <LeftTd>{index + 1}</LeftTd>
                <Td>{item.orderNum}</Td>
                <Td>
                  <ColumnDiv>
                    <ItemTitle>{item.title}</ItemTitle>
                  </ColumnDiv>
                </Td>
                <Td>
                  <DeleteButton>배송조회</DeleteButton>
                </Td>
                <Td>{item.orderedDate}</Td>
                <Td>{item.deliveryDate}</Td>
                <Td>{item.parcelCompany}</Td>
                <Td>{item.waybillNumber}</Td>
                <Td>{item.price}원</Td>
                <RightTd>{item.customerName}</RightTd>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </OverflowDiv>
    </>
  );
};
export default DeliveryCompleted;

const StateButton = styled.button`
  width: 320px;
  margin: 0;
  padding: 10px;
  border: 1px solid #d9d9d9;
  font-size: 20px;
  background: ${(props) => (props.value === "배송완료" ? "#b6dcbe" : "white")};
  &:active {
    background-color: #b6dcbe;
  }
`;
