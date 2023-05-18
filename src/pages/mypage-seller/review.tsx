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
} from "@/styles/MypageSellerStyle";
import styled from "styled-components";

const Review = () => {
  const ItemList = [
    {
      itemId: 1,
      customerId: "감자",
      date: "22/03/14 13:32",
      title: " Canon EOS Rebel T7 18-55mm 번들 세트",
      starAvg: 4.4,
      reviewContents: "너무조하용~",
    },
    {
      itemId: 2,
      customerId: "감자",
      date: "22/03/14 13:32",
      title: "[소니] FE 28-60mm F4-5.6 표준렌즈",
      starAvg: 4.4,
      reviewContents: "너무조하용~",
    },
    {
      itemId: 3,
      customerId: "감자",
      date: "22/03/14 13:32",
      title: "소니 A7M4 미러리스 카메라",
      starAvg: 4.4,
      reviewContents: "너무조하용~",
    },
    {
      itemId: 4,
      customerId: "감자",
      date: "22/03/14 13:32",
      title: "소니 FE 24-70mm GM F2.8",
      starAvg: 4.4,
      reviewContents: "너무조하용~",
    },
  ];
  return (
    <Wrapper>
      <WholeDiv>
        <Title>상품평</Title>

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
            <FilterName>별점</FilterName>
            <Select>
              <Option>5점</Option>
              <Option>4점</Option>
              <Option>3점</Option>
              <Option>2점</Option>
              <Option>1점</Option>
            </Select>
          </FilterDiv>
        </SearchDiv>

        <WholeLists>상품평목록(총 {ItemList.length}개)</WholeLists>
        <Hr />

        <OverflowDiv>
          <Table>
            <Thead>
              <tr>
                <th>번호</th>
                <th>고객명</th>
                <th>등록일</th>
                <th>상품명</th>
                <th>별점</th>
                <th>상품평</th>
              </tr>
            </Thead>
            <Tbody>
              {ItemList.map((item, index) => (
                <Tr key={item.itemId}>
                  <LeftTd>{item.itemId}</LeftTd>
                  <Td>{item.customerId}</Td>
                  <Td>{item.date}</Td>
                  <Td>{item.title}</Td>
                  <Td>{item.starAvg}점</Td>
                  <RightTd>{item.reviewContents}</RightTd>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </OverflowDiv>
      </WholeDiv>
    </Wrapper>
  );
};
export default Review;
