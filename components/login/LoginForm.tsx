import useLoginMutation from "@/hooks/api/auth/LoginMutation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import styled from "styled-components";

export interface LoginType {
  userID: string;
  userPW: string;
}
function LoginForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LoginType>();

  const { mutate, isSuccess } = useLoginMutation();
  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);

  const handleValid = ({ userID, userPW }: LoginType) => {
    //Api 호출
    setValue("userID", "");
    setValue("userPW", "");
    mutate({ email: userID, pw: userPW });

    if (isSuccess) {
      setIsLoggedIn(true);
    }
  };

  return (
    <Form onSubmit={handleSubmit(handleValid)}>
      <FormDiv>
        <InputDiv>
          <Label>이메일</Label>
          <Input
            {...register("userID", {
              required: "",
              minLength: {
                value: 5,
                message: "올바른 이메일 형식이 아닙니다.",
              },
            })}
            placeholder=""
          />
          {errors?.userID && errors?.userID?.message}
          <Label>비밀번호</Label>
          <Input
            {...register("userPW", {
              required: "",
              minLength: { value: 8, message: "8글자 이상 입력해주세요" },
            })}
            placeholder=""
            type="password"
          />
          {errors?.userPW && errors?.userPW?.message}
        </InputDiv>
      </FormDiv>
      <Button>로그인</Button>
    </Form>
  );
}

export default LoginForm;

const Form = styled.form`
  width: 20rem;
  height: 100%;
  justify-content: center;
  align-items: center;
  justify-content: center;
  margin: 2.5rem auto;
  padding: 0;
`;
const FormDiv = styled.div`
  align-items: center;
  margin: auto;
  justify-content: center;
`;
const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  text-align: center;
  margin: 1rem auto;
`;
const Label = styled.label`
  text-align: left;
  line-height: 30px;
  margin-top: 0.5rem;
`;

const Input = styled.input`
  position: relative;
  padding: 1rem;
  border-radius: 10px;
  width: 100%;
  height: 2.5rem;
  color: black;
  font-size: 16px;
  border: 1px solid #d9d9d9;
  margin: 0 auto;
`;

const Button = styled.button`
  font-size: 16px;
  height: 2.5rem;
  background-color: #d9d9d9;
  mouse-hover: c9c9c9;
  border: 0;
  border-radius: 10px;
  width: 100%;
  margin: 3rem auto;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: #b9d9c0;
  }
`;
