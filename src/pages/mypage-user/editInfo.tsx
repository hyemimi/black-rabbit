import { TitleDiv } from "@/styles/TitleDiv";

import { Box, BoxInput } from "@/styles/Box";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useRef } from "react";
import { Wrapper } from "@/styles/Wrapper";
interface FormData {
  nickname: string;
  userID: string;
  userPW: string;
  confirmPW: string;
}

export default function Edit() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const password = useRef<any>();
  password.current = watch("userPW", "");
  const handleValid = ({ userID, userPW, nickname, confirmPW }: FormData) => {
    //Api 호출
    setValue("nickname", "");
    setValue("userID", "");
    setValue("userPW", "");
    setValue("confirmPW", "");
  };
  return (
    <Wrapper>
      <TitleDiv>
        <h1>개인정보 수정</h1>
      </TitleDiv>

      <Box height="500px" as="form" onSubmit={handleSubmit(handleValid)}>
        <Row>
          <H1>닉네임</H1>
          <BoxInput
            {...register("nickname", {
              required: "닉네임을 입력해주세요",
              maxLength: { value: 6, message: "6글자 이상 입력해주세요" },
            })}
            width="500px"
            height="50px"
          />
        </Row>
        <Row>
          <H1>이메일</H1>
          <BoxInput disabled width="500px" height="50px" />
        </Row>

        <Row>
          <H1>비밀번호</H1>
          <BoxInput
            {...register("userPW", {
              required: "패스워드를 입력해주세요",
              minLength: { value: 5, message: "5글자 이상 입력해주세요" },
            })}
            type="password"
            width="480px"
            height="50px"
          />
        </Row>
        {errors.userPW?.message}
        <Row>
          <H1>비밀번호 확인</H1>
          <BoxInput
            {...register("confirmPW", {
              validate: (value) =>
                value === password.current || "The passwords do not match",
            })}
            type="password"
            width="450px"
            height="50px"
          />
        </Row>
        {errors.confirmPW?.message}

        <Row>
          <Button>저장</Button>
        </Row>
      </Box>
    </Wrapper>
  );
}
const Row = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;
const H1 = styled.h1`
  font-weight: bold;
  font-size: 20px;
`;
const Button = styled.button`
  background-color: ${(props) => props.theme.pointColor};
  border: none;
  margin-left: 30px;
  height: 50px;
  width: 130px;
  cursor: pointer;
`;
