import LoginForm from "@/components/login/LoginForm";
import styled from "styled-components";
import Link from "next/link";
export default function login() {
  return (
    <Wrapper>
      <LoginForm></LoginForm>
      <h2>
        아직 계정이 없으신가요?
        <Link href="/signup">회원가입하기</Link>
      </h2>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1em;
  padding: 200px;
  justify-content: center;
`;
/* height: 100%;
padding: 100px;

align-items: center;
justify-content: center;
position: relative;

width: 100%; */
