import { useForm } from "react-hook-form";
import styled from "styled-components";
import { StyledButton } from "../common/Button";
import { ReactEventHandler, useState } from "react";
import { useRouter } from "next/router";
import AgreeTerms from "./AgreeTerms";
import UseUserSignupMutation from "../../hooks/api/auth/UserSignUpMutation";
import axios from "axios";

interface SignUpForm {
  email: string;
  nickname: string;
  pw: string;
}

const IndividualSignUpForm = () => {
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const [isNicknameChecked, setIsNicknameChecked] = useState<boolean>(false);
  //react-hook-form 사용을 위한 함수
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit: onSubmit,
    getValues,
    setError,
    setFocus,
  } = useForm<SignUpForm>({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      pw: "",
      nickname: "",
    },
  });

  const mutation = UseUserSignupMutation();

  const checkNickname = async () => {
    const enteredNickname = JSON.stringify(getValues("nickname"));
    if (enteredNickname.length > 0) {
      try {
        const response = await axios.get(
          "http://15.165.101.95:8080/user/check/nickname",
          {
            params: { nickname: JSON.stringify(getValues("nickname")) },
          }
        );
        const body = await response.data.code;
        if (body === "OK") {
          setIsNicknameChecked(true);
        } else {
          alert("이미 사용중인 닉네임입니다. 다른 닉네임을 사용하세요.");
        }
        console.log(body);
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }
  };

  const submitHandler = async (e: any) => {
    if (isNicknameChecked === true) {
      await mutation.mutate({
        nickname: getValues("nickname"),
        email: getValues("email"),
        pw: getValues("pw"),
      });
    }
  };

  return (
    <SytledForm onSubmit={onSubmit(submitHandler)}>
      <Div>
        <div>
          <StyledLabel htmlFor="email">이메일*</StyledLabel>
          <StyledInput
            type="text"
            {...register("email", {
              pattern: {
                value:
                  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                message: "이메일 형식에 맞지 않습니다.",
              },
            })}
          />
          {errors?.email ? (
            <StyledSpan className="message error">
              {errors.email?.message}
            </StyledSpan>
          ) : null}
        </div>

        <div>
          <StyledLabel htmlFor="password">비밀번호*</StyledLabel>
          <StyledInput
            {...register("pw", {
              required: "비밀번호를 입력해주세요",
              pattern: {
                value:
                  /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
                message: "숫자,영문자, 특수문자 조합 8자리 이상 입력해주세요.",
              },
            })}
            type="password"
            placeholder="숫자,영문자, 특수문자 조합 8자리 이상"
          />
          <br />
          {errors.pw && errors?.pw ? (
            <StyledSpan className="message error">
              {errors.pw?.message}
            </StyledSpan>
          ) : null}
        </div>

        <div>
          <StyledLabel htmlFor="passwordConfirmation">
            비밀번호 확인*
          </StyledLabel>
          <StyledInput
            // {...register("pwConfirmation", {
            //   required: "비밀번호 확인을 입력해주세요",
            // })}
            name="pwConfirmation"
            type="password"
            placeholder="비밀번호 확인"
          />
          <br />
          {/* {errors.pwConfirmation && errors?.pwConfirmation ? (
            <StyledSpan className="message error">
              {errors.pwConfirmation?.message}
            </StyledSpan>
          ) : null} */}
        </div>

        <StyledHr />

        <div>
          <StyledLabel htmlFor="nickname">닉네임*</StyledLabel>
          <CheckDiv>
            <StyledInput
              {...register("nickname", { required: true })}
              type="text"
              placeholder="닉네임"
            />
            <CheckButton onClick={checkNickname}>
              중복
              <br />
              확인
            </CheckButton>
          </CheckDiv>
          {isValidEmail ? (
            <SuccessSpan>사용가능한 닉네임입니다.</SuccessSpan>
          ) : null}
        </div>
      </Div>

      <Div>
        <AgreeTerms />
      </Div>

      <StyledButton type="submit">가입하기</StyledButton>
    </SytledForm>
  );
};
export default IndividualSignUpForm;

const SytledForm = styled.form`
  border-radius: 0.4em;
  margin: auto;
  width: 20rem;
  justify-content: center;
  text-align: center;
`;

const StyledLabel = styled.label`
  text-align: left;
  line-height: 2rem;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 2.5rem;
  padding: 0.5rem;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  text-align: left;
  margin-bottom: 0.5rem;
`;

const Div = styled.div`
  margin: 2.5rem auto;
  text-align: left;
`;

const StyledHr = styled.hr`
  margin: 1rem irem 0 0;
`;

const StyledSpan = styled.span`
  font-size: small;
  color: #e01c1c;
`;
const SuccessSpan = styled.span`
  font-size: small;
  color: #02a913;
`;

const CheckButton = styled.button`
  margin-left: 1rem;
  height: 2.5rem;
  width: 4rem;
  background: #b9d9c0;
  border-radius: 10px;
  border: 0;
  text-align: center;
  cursor: pointer;

  &:hover {
    background: #d9d9d9;
  }
`;

const CheckDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
