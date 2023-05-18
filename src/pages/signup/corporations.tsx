import Distinguisher from "@/src/components/common/Distinguisher";
import CorporationSignUpForm from "@/src/components/signup/CorporationSignUpForm";
import SignUpForm from "@/src/components/signup/IndividualSignUpForm";
import styled from "styled-components";

const CorporationsSignUp = () => {
  return (
    <Wrapper>
      <StyledDiv>
        <FlexDiv>
          <StyledTitle>회원가입</StyledTitle>
          <Distinguisher name={"사업자"} />
        </FlexDiv>

        <Intro>데이필름과 함께해요!</Intro>
        <CorporationSignUpForm />
      </StyledDiv>
    </Wrapper>
  );
};
export default CorporationsSignUp;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  margin-left: 20px;
  justify-content: center;
  text-align: center;
`;
const StyledDiv = styled.div`
  margin: 5rem auto;
  justify-content: center;
  text-align: center;
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 25px;
  margin-bottom: 0.5rem;
`;
const StyledTitle = styled.h1`
  text-align: left;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 25px;
`;
const Intro = styled.h1`
  text-align: left;
  font-size: 1rem;
  font-weight: 400;
`;
