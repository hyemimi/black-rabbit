import LoginForm from "@/components/login/LoginForm";
import styled from "styled-components";

export default function login() {
  return (
    <Wrapper>
      로그인페이지입니다
      <LoginForm></LoginForm>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vw;
  padding: 100px;
  justify-content: center;
`;
