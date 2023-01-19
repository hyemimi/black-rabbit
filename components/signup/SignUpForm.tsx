import { useForm } from "react-hook-form";
import styled from "styled-components";
import Card from "@/layout/Card";
import { StyledButton } from "../common/Button";

const Form = styled.form`
  position: absolute;
  left: 50%;
  top: 30%;
  width: 60%;
  height: 40%;

  transform: translate(-50%, -50%);
`;
const MainName = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`;
const Input = styled.input`
  /* Rectangle 37 */

  width: 476px;
  height: 78px;
  left: 480px;
  top: 401px;

  background: #ffffff;
  border-radius: 10px;
`;

const InputDiv = styled.div``;

const StyledLabel = styled.label`
  text-align: left;
`;

interface SignUp {
  email: string;
  password: string;
  passwordCheck: string;
  nickname: string;
}

const SignUpForm = () => {
  //react-hook-form 사용을 위한 함수 호출
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <Card>
        <Form>
          <MainName>회원가입</MainName>
          <InputDiv>
            <StyledLabel htmlFor="email">이메일*</StyledLabel>
            <Input id="email" type="email" placeholder="abc@email.com" />
          </InputDiv>
          <InputDiv>
            <StyledLabel htmlFor="password">비밀번호*</StyledLabel>
            <Input id="password" type="password" />
          </InputDiv>
          <InputDiv>
            <StyledLabel htmlFor="passwordCheck">비밀번호 확인*</StyledLabel>
            <Input id="passwordCheck" type="password" />
          </InputDiv>
          <InputDiv>
            <StyledLabel htmlFor="nickname">닉네임*</StyledLabel>
            <Input id="nickname" type="string" />
          </InputDiv>

          <StyledButton>가입하기</StyledButton>
        </Form>
      </Card>
    </div>
  );
};
export default SignUpForm;
