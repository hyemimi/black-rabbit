import LoginForm from "@/components/login/LoginForm";
import styled from "styled-components";
import Link from "next/link";
import ToggleButton from "@/components/common/ToggleButton";

export default function login() {
  return (
    <Wrapper>
      <StyledDiv>
        <StyledTitle>데이필름에 오신 것을 환영해요!</StyledTitle>
        <Intro>
          아직 계정이 없으신가요?{"   "}
          <StyledLink href="/signup" className="underlined-text">
            회원가입하기
          </StyledLink>
        </Intro>

        <ToggleButton />

        <LoginForm></LoginForm>
      </StyledDiv>
    </Wrapper>
  );
}

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
  margin: 5rem auto;
  justify-content: center;
  text-align: center;
`;
const StyledTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2rem;
  text-align: left;
`;
const Intro = styled.h1`
  font-size: 1rem;
  font-weight: 400;
  line-height: 2rem;
  text-align: left;
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
`;
