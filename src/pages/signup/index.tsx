import Link from "next/link";
import styled from "styled-components";

const SignUp = () => {
  return (
    <Wrapper>
      <StyledDiv>
        <Div>
          <Link href="./signup/individuals">
            <StyledTitle>
              개인회원가입
              <Intro>일반 사용자</Intro>
            </StyledTitle>
          </Link>
        </Div>
        <Div>
          <Link href="./signup/corporations">
            <StyledTitle>
              사업자회원가입
              <Intro>법인 등록 사업자</Intro>
            </StyledTitle>
          </Link>
        </Div>
      </StyledDiv>
    </Wrapper>
  );
};
export default SignUp;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  margin: 0 auto;
  justify-content: center;
  text-align: center;
`;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10rem auto;
  justify-content: center;
  text-align: center;
`;

const Intro = styled.h1`
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
`;

const StyledTitle = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2rem;

  padding: 1rem 1rem;

`;

const Div = styled.div`
  width: 20rem;
  margin: 3rem 2rem;

  text-align: center;
  justify-items: center;

  border: 1px solid #d9d9d9;
  border-radius: 10px;

  &:hover {
    border: 0;
    background: #b6dcbe;
  }
`;
