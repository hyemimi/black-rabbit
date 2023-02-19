import styled from "styled-components";
import Link from "next/link";

const SearchItem = () => {
  return (
    <Wrapper>
      <StyledDiv>
        <StyledTitle>상품 조회 및 수정</StyledTitle>
        <FlexDiv>
          <StateBox>
            <StateTitle>대기 상품</StateTitle>
            <Number>0</Number>
            <Unit>건</Unit>
          </StateBox>
          <StateBox>
            <StateTitle>대여 중</StateTitle>
            <Number>0</Number>
            <Unit>건</Unit>
          </StateBox>
          <StateBox>
            <StateTitle>반납 완료</StateTitle>
            <Number>0</Number>
            <Unit>건</Unit>
          </StateBox>
        </FlexDiv>

        <LeftDiv>
          <Label>검색</Label>
          <Input placeholder="브랜드명"></Input>

          <Label>필터링</Label>
          <select>
            <option>대기상태</option>
            <option>대여중</option>
            <option>반납완료</option>
          </select>
        </LeftDiv>

        <LeftDiv>
          <TotalListTitle>상품 전체 목록 (총 0개)</TotalListTitle>
          <hr />
          <Tabel>
            <thead>
              <tr>
                <th>상품상태</th>
                <th>상품정보</th>
                <th>대여기간</th>
                <th>대여가격</th>
                <th>수령방법</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>대여중</td>
                <td>(업체명+브랜드명) 50000원/1일</td>
                <td>2023.3.1~3.3(2일)</td>
                <td>100000원</td>
                <td>픽업</td>
              </tr>

              <tr>
                <td>Lorem</td>
                <td>Ipsum</td>
                <td>Dolor</td>
                <td>Dolor</td>
                <td>Dolor</td>
              </tr>
            </tbody>
          </Tabel>
        </LeftDiv>
      </StyledDiv>
    </Wrapper>
  );
};
export default SearchItem;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  margin-left: 20px;
  justify-content: left;
  text-align: center;
`;
const StyledDiv = styled.div`
  margin-left: 20rem;
  margin-right: 10rem;
  margin-top: 3rem;

  justify-content: center;
  text-align: center;
`;
const StateBox = styled.div`
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  width: 100px;
  height: 100px;
  padding: 10px 2px;
  margin: 30px 10px;
  display: table;
  text-align: center;
  line-height: 40px;
`;
const StyledTitle = styled.h1`
  text-align: left;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 20px;
  justify-content: left;
`;

const StateTitle = styled.div`
  font-weight: medium;
  font-size: 1rem;
  font-weight: 400;
`;

const Number = styled.h1`
  display : inline
  font-weight: 500;
  font-size: 1.5rem;
  margin : 0 4px;

`;

const Unit = styled.h1`
  display: inline;
  font-weight: 400;
  font-size: 1rem;
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const LeftDiv = styled.div`
  text-align: left;
  margin: 20px 0;
`;

const TotalListTitle = styled.h1`
  text-align: left;
`;

const Label = styled.label`
  margin: 0.5rem 0.5rem 0.5rem 0;
`;

const Input = styled.input`
  margin: 0.5rem 0.5rem;
`;

const Tabel = styled.table`
  width: 100%;
`;
