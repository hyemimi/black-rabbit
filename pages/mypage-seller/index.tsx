import styled from "styled-components";
import canon1 from "../../public/canon1.jpeg";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const ProductLists = () => {
  const ListsNum = 1;
  const router = useRouter();
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

  const handlePlan = () => {
    console.log("r");
    const id = 1;
    router.push(`mypage-seller/addPlan/${id}`);
  };

  const deleteItem = () => {
    console.log("delete");
  };
  const addItem = () => {
    console.log("add");
  };

  const handlDetailPage = () => {
    console.log("300");
  };

  return (
    <Wrapper>
      <WholeDiv>
        <Title>상품 조회 및 수정 </Title>
        <StatusDiv>
          <StatusBox>
            <StatusName>대여가능</StatusName>
            <Number>3건</Number>
          </StatusBox>

          <StatusBox>
            <StatusName>대여중</StatusName>
            <Number>2건</Number>
          </StatusBox>
          <StatusBox>
            <StatusName>수리중</StatusName>
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

        <WholeLists>상품 전체목록 (총 {ListsNum}개)</WholeLists>
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
                <th>선택</th>
                <th>번호</th>
                <th>상품 정보</th>
                <th>상태</th>
                <th>평균별점</th>
                <th>리뷰 수</th>
                <th>대여가격</th>
                <th>거래방법</th>
                <th>일정</th>
                <th>수정</th>
              </tr>
            </Thead>
            <Tbody>
              {ItemList.map((item, index) => (
                <Tr key={item.itemId} onClick={handlDetailPage}>
                  <LeftTd>
                    <input type="checkbox" key={item.itemId}></input>
                  </LeftTd>
                  <Td>{index + 1}</Td>
                  <Td>
                    <ColumnDiv>
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
                      대여중 : 1 <br />
                      수리중 : 1<br /> 대여가능 : 1
                    </p>
                  </Td>
                  <Td>{item.starAvg}점</Td>
                  <Td>{item.reviewCount}개</Td>
                  <Td>{item.pricePerOne}원/일</Td>
                  <Td>{item.method}</Td>
                  <Td>
                    <GreenButton onClick={handlePlan}>일정변경</GreenButton>
                  </Td>
                  <RightTd>
                    <ColumnDiv>
                      <GrayButton onClick={deleteItem}>상품삭제</GrayButton>
                      <GrayButton onClick={addItem}>상품추가</GrayButton>
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
export default ProductLists;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0 100px 100px 350px;
`;

const WholeDiv = styled.div`
  margin: 0 auto;
  align: left;
`;
const Title = styled.h1`
  text-align: left;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2rem;
  margin-left: 10px;
`;

const StatusDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
const StatusBox = styled.div`
  box-sizing: border-box;
  border: 1px solid #d9d9d9;
  margin: 10px;
  width: 110px;
  height: 100px;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
`;

const StatusName = styled.h1`
  font-size: 18px;
  text-align: center;
  margin: 10px;
  font-weight: 400;
`;

const Number = styled.h1`
  font-size: 20px;
  text-align: center;
  padding: 5px;
`;

// 검색 및 필터링
const SearchDiv = styled.div`
  width: 960px;
  height: 50px;
  background: #f1f1f1;
  border-radius: 10px;
  margin: 20px 5px;
  display: flex;
  flex-direction: row;
`;

const P = styled.p`
  line-height: 50px;
  font-weight: 400;
  margin: 0px 5px 0px 0px;
`;

const FilterDiv = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 40px;
  width: max-content;
  height: 30px;
  margin: 10px 5px;
  border: 1px solid #329d3d;
  background: #ffffff;
  vertical-align: middle;
`;

const FilterName = styled.p`
  margin: 6px 0px 5px 10px;
  font-size: 15px;
  font-weight: 400;
  vertical-align: middle;
`;

const Option = styled.option`
  margin: 5px 5px 5px 5px;
  color: #329d3d;
  font-weight: 400;
  font-size: 15px;
  border: none;
  border-radius: 40px;
  vertical-align: middle;
`;

const Select = styled.select`
  margin: 5px 5px 5px 5px;
  border: none;
  width: max-content;
  border-radius: 40px;
  color: #329d3d;
  font-size: 15px;
`;

//전체 상품 목록

const WholeLists = styled.h1`
  margin: 30px 10px 10px 10px;
`;

const Hr = styled.hr`
  margin: 10px 100px 0px 10px;
  width: 960px;
`;

const DeleteDiv = styled.div`
  margin: 0 0 0 10px;
  border-top: 1px solid #d9d9d9;
  height: 50px;
  width: 960px;
  background: #b6dcbe;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 5px;
`;

const Label = styled.label`
  line-height: 50px;
  margin-left: 10px;
  margin-right: 10px;
  font-weight: 400;
`;

const DeleteButton = styled.button`
  height: 30px;
  margin: 10px 10px 10px auto;
  background: #fafafa;
  border: 1px #d9d9d9;
  border-radius: 5px;
  padding: 5px 10px;
`;

const Table = styled.table`
  width: 960px;
  text-align: center;
  margin-left: 10px;
  border-collapse: separate;
  border-spacing: 0 10px;
  white-space: nowrap;
`;

const Thead = styled.thead`
  width: 960px;
  border: 1px solid;
  font-weight: 400;
`;

const Tr = styled.tr`
  width: 960px;
`;

const Td = styled.td`
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  padding: 10px;
  vertical-align: center;
  vertical-align: middle;
`;

const LeftTd = styled.td`
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  border-left: 1px solid #d9d9d9;
  padding: 10px;
  border-radius: 5px 0 0 5px;
  box-shadow: 0 0 0 1px #f1f1f1;
  vertical-align: middle;
`;
const RightTd = styled.td`
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  border-right: 1px solid #d9d9d9;
  padding: 10px;
  border-radius: 0 5px 5px 0;
  box-shadow: 0 0 0 1px #f1f1f1;
  vertical-align: middle;
`;

const Tbody = styled.tbody`
  background: #f1f1f1;
  oveflow-x: auto;
`;

const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  vertical-align: middle;
`;

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const ItemTitle = styled.h1`
  width: min-content;
`;

const ItemImg = styled(Image)`
  vertical-align: center;
  margin-right: 10px;
`;

const OverflowDiv = styled.div`
  oveflow-x: auto;
  width: 100%;
`;

const GreenButton = styled.button`
  background: #b6dcbe;
  border-radius: 5px;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background: #2f3640;
    color: white;
  }
`;

const GrayButton = styled.button`
  background: #d9d9d9;
  border-radius: 5px;
  border: none;
  padding: 5px 10px;
  margin: 5px;
  cursor: pointer;
  &:hover {
    background: #2f3640;
    color: white;
  }
`;
