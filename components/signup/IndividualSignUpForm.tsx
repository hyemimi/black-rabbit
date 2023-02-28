import { useForm } from "react-hook-form";
import styled from "styled-components";
import { StyledButton } from "../common/Button";
import { useState, useCallback, InputHTMLAttributes, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import AgreeTerms from "./AgreeTerms";
import UseUserSignupMutation from "../../hooks/api/auth/UserSignUpMutation";

const IndividualSignUpForm = () => {
  interface SignUp {
    enteredemail: string;
    nickname: string;
    password: string;
  }

  //react-hook-form 사용을 위한 함수 호출
  const { register, handleSubmit } = useForm();

  //각 입력의 조건 확인
  const [enteredEmail, setEnteredEmail] = useState<string>(
    "dayfilm@dayfilm.com"
  );
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");

  //오류메시지
  const [emailMessage, setEmailMessage] = useState<string>("");
  const [passwordMessage, setPasswordMessage] = useState<string>("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] =
    useState<string>("");
  const [nicknameMessage, setNicknameMessage] = useState<string>("");

  // 유효성 검사
  const [isNickname, setIsNickname] = useState<boolean>(false);
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState<boolean>(false);
  const [errorstate, setError] = useState<string>("");

  const route = useRouter();
  const { mutate, isLoading, isError, error, isSuccess } =
    UseUserSignupMutation();

  const submitHandler = (e: any) => {
    e.preventDefault();

    mutate({ nickname: nickname, email: enteredEmail, pw: password });
  };

  //이메일
  const emailChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const emailRegex =
        /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      const emailCurrent = e.target.value;
      setEnteredEmail(emailCurrent);

      if (!emailRegex.test(emailCurrent)) {
        setEmailMessage("올바르지 않은 이메일 형식입니다. 다시 확인해 주세요.");
        setIsEmail(false);
      } else {
        setEmailMessage("올바른 이메일 형식입니다.");
        setIsEmail(true);
      }
    },
    []
  );

  //비밀번호
  const passwordChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const passwordRegex =
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
      const passwordCurrent = e.target.value;
      setPassword(passwordCurrent);

      if (!passwordRegex.test(passwordCurrent)) {
        setPasswordMessage(
          "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요."
        );
        setIsPassword(false);
      } else {
        setPasswordMessage("안전한 비밀번호에요.");
        setIsPassword(true);
      }
    },
    []
  );

  // 비밀번호 확인
  const passwordConfirmChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const passwordConfirmCurrent = e.target.value;
      setPasswordConfirm(passwordConfirmCurrent);

      if (password === passwordConfirmCurrent) {
        setPasswordConfirmMessage("비밀번호와 일치합니다.");
        setIsPasswordConfirm(true);
      } else {
        setPasswordConfirmMessage("비밀번호와 다릅니다. 다시 확인해 주세요.");
        setIsPasswordConfirm(false);
      }
    },
    [password]
  );

  // 닉네임
  const nicknameChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setNickname(e.target.value);
      if (e.target.value.length < 2 || e.target.value.length > 5) {
        setNicknameMessage("2글자 이상 5글자 미만으로 입력해주세요.");
        setIsNickname(false);
      } else {
        setNicknameMessage("사용 가능한 닉네임입니다.");
        setIsNickname(true);
      }
    },
    []
  );

  const nickNameCheckHandler = () => {
    //서버에 닉네임 중복 검사
  };
  return (
    <SytledForm onSubmit={submitHandler}>
      <Div>
        <div>
          <StyledLabel htmlFor="email">이메일*</StyledLabel>
          <StyledInput
            id="email"
            type="email"
            placeholder="이메일"
            onChange={emailChangeHandler}
          />
          <br />
          {enteredEmail.length > 0 && (
            <StyledSpan className={`message ${isEmail ? "success" : "error"}`}>
              {emailMessage}
            </StyledSpan>
          )}
        </div>

        <div>
          <StyledLabel htmlFor="password">비밀번호*</StyledLabel>
          <StyledInput
            id="password"
            type="password"
            placeholder="숫자,영문자, 특수문자 조합 8자리 이상"
            onChange={passwordChangeHandler}
          />
          <br />
          {password.length > 0 && (
            <StyledSpan
              className={`message ${isPassword ? "success" : "error"}`}
            >
              {passwordMessage}
            </StyledSpan>
          )}
        </div>

        <div>
          <StyledLabel htmlFor="passwordCheck">비밀번호 확인*</StyledLabel>
          <StyledInput
            id="passwordCheck"
            type="password"
            placeholder="비밀번호 확인"
            onChange={passwordConfirmChangeHandler}
          />
          <br />
          {passwordConfirm.length > 0 && (
            <StyledSpan
              className={`message ${isPasswordConfirm ? "success" : "error"}`}
            >
              {passwordConfirmMessage}
            </StyledSpan>
          )}
        </div>

        <StyledHr />

        <div>
          <StyledLabel htmlFor="nickname">닉네임*</StyledLabel>
          <CheckDiv>
            <StyledInput
              id="nickname"
              type="string"
              placeholder="닉네임"
              onChange={nicknameChangeHandler}
            />
            <CheckButton onClick={nickNameCheckHandler}>
              중복
              <br />
              확인
            </CheckButton>
          </CheckDiv>
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

const StyledH1 = styled.h1`
  font-weight: 500;
  line-height: 2rem;
`;

const StyledHr = styled.hr`
  margin: 1rem irem 0 0;
`;

const StyledSpan = styled.span`
  font-size: small;
  color: ${(props) =>
    props.className == "message error" ? "#e01c1c" : "#02A913"};
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
