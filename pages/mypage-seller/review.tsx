import styled from "styled-components";

const Review = () => {
  return (
    <Wrapper>
      <StyledDiv>
        <StyledTitle>상품평</StyledTitle>

        <GrayDiv>
          <Label>검색조건</Label>
          <Label>기간</Label>
          <select>
            <option>오늘</option>
            <option>지난 7일</option>
            <option>지난 30일</option>
          </select>

          <Label>별점</Label>
          <select>
            <option>5점</option>
            <option>4점</option>
            <option>3점</option>
            <option>2점</option>
            <option>1점</option>
          </select>
          <Label>판매상태</Label>
          <select>
            <option>판매중</option>
            <option>판매종료</option>
          </select>
        </GrayDiv>

        <LeftDiv>
          <TotalListTitle>총 0개</TotalListTitle>
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
export default Review;

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

const GrayDiv = styled.div`
  text-align: left;
  margin: 20px 0;
  background: #f1f1f1;
  border-radius: 30px;
  line-height: 50px;
  padding: 0 15px;
`;

const LeftDiv = styled.div`
  text-align: left;
  margin: 20px 0;
`;

const TotalListTitle = styled.h1`
  margin-top: 20px;
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
