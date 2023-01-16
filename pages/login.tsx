import LoginForm from "@/components/login/LoginForm";
import styled from "styled-components";

export default function login() {
  return (
    <Wrapper>
      <LoginForm></LoginForm>
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
