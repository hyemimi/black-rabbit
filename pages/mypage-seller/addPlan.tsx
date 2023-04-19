import UpdateItemPlan from "@/components/mypage/seller/Item/UpdateItemPlan";
import styled from "styled-components";

const addPlan = () => {
  return (
    <Wrapper>
      <Div>
        <StyledTitle>상품 이용가능 현황</StyledTitle>
      </Div>
      <UpdateItemPlan />
    </Wrapper>
  );
};
export default addPlan;

const Wrapper = styled.div`
  width: 90%;
  padding: 0;
  margin-left: 10rem;
  justify-content: center;
  text-align: center;
`;
const StyledTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  display: inline;
  padding: 5rem 1rem 5rem 10rem;
`;

const Div = styled.div`
  text-align: left;
  justify-content: left;
`;
