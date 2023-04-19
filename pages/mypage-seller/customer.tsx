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
  Hr,
  WholeLists,
} from "@/components/detail/Seller";
import addItem from "./addItem";
import canon1 from "../../public/canon1.jpeg";
import Image from "next/image";

const Customer = () => {
  const ItemList = [
    {
      itemId: 1,
      customerId: "감자",
      date: "22/03/14 13:32",
      title: " Canon EOS Rebel T7 18-55mm 번들 세트",
      starAvg: 4.4,
      Inquirytitle: "상품 상태 관련 ~",
      status: "답변완료",
    },
    {
      itemId: 2,
      customerId: "감자",
      date: "22/03/14 13:32",
      title: "[소니] FE 28-60mm F4-5.6 표준렌즈",
      starAvg: 4.4,
      Inquirytitle: "너무조하용~",
      status: "답변완료",
    },
    {
      itemId: 3,
      customerId: "감자",
      date: "22/03/14 13:32",
      title: "소니 A7M4 미러리스 카메라",
      starAvg: 4.4,
      Inquirytitle: "너무조하용~",
      status: "답변완료",
    },
    {
      itemId: 4,
      customerId: "감자",
      date: "22/03/14 13:32",
      title: "소니 FE 24-70mm GM F2.8",
      starAvg: 4.4,
      Inquirytitle: "너무조하용~",
      status: "답변완료",
    },
  ];
  return (
    <Wrapper>
      <WholeDiv>
        <Title>고객문의</Title>
        <StatusDiv>
          <StatusBox>
            <StatusName>
              24시간<br></br>이내
            </StatusName>
            <Number>3건</Number>
          </StatusBox>

          <StatusBox>
            <StatusName>
              24시간~
              <br />
              72시간
            </StatusName>
            <Number>2건</Number>
          </StatusBox>
          <StatusBox>
            <StatusName>
              72시간~
              <br />
              30일 이내
            </StatusName>
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

        <WholeLists>고객문의목록 (총 {ItemList.length}개)</WholeLists>
        <Hr />

        <OverflowDiv>
          <Table>
            <Thead>
              <tr>
                <th>번호</th>
                <th>고객명</th>
                <th>상품명</th>
                <th>제목</th>
                <th>처리상태</th>
                <th>문의일</th>
                <th>처리</th>
              </tr>
            </Thead>
            <Tbody>
              {ItemList.map((item, index) => (
                <Tr key={item.itemId}>
                  <LeftTd>{item.itemId}</LeftTd>
                  <Td>{item.customerId}</Td>
                  <Td>{item.title}</Td>
                  <Td>{item.Inquirytitle}</Td>
                  <Td>{item.status}</Td>
                  <Td>{item.date}</Td>
                  <RightTd>
                    <ColumnDiv>
                      <button>답변</button>
                      <button>수정</button>
                      <button>삭제</button>
                    </ColumnDiv>
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
export default Customer;
