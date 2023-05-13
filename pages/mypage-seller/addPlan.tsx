import { RowDiv } from "@/components/detail/Seller";
import UpdateItemPlan from "@/components/mypage/seller/Item/Calendar";
import styled from "styled-components";

const addPlan = () => {
  return (
    <Wrapper>
      <Div>
        <StyledTitle>상품 이용가능 현황</StyledTitle>
        <Hr />
        <RowDiv>
          <Circle className="렌탈중"></Circle>
          <H1>렌탈중 </H1>
          <Circle className="수리중"></Circle>
          <H1>수리중 </H1>
        </RowDiv>

        <UpdateItemPlan />
      </Div>
    </Wrapper>
  );
};
export default addPlan;

const Wrapper = styled.div`
  width: 100%;
  padding: 0;
  margin-left: 8rem;
  justify-content: center;
  text-align: left;
`;
const StyledTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: left;
  display: inline;
`;

const Div = styled.div`
  width: 65%;
  text-align: left;
  justify-content: left;
  margin: 0 auto;
  padding-bottom: 50px;
`;
const Hr = styled.hr`
  width: 100%;
  margin-bottom: 1rem;
`;

const Circle = styled.div`
  border-radius: 100px;
  margin: 5px;
  width: 20px;
  height: 20px;
  background: ${(props) =>
    props.className == "수리중" ? "#cacaf6" : "#B6DCBE"};
`;

const H1 = styled.h1`
  line-height: 20px;
  margin: 5px 0;
`;
