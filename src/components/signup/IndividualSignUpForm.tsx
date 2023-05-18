import { useForm } from "react-hook-form";
import styled from "styled-components";
import { StyledButton } from "../../../styles/Button";
import { useState } from "react";
import AgreeTerms from "./AgreeTerms";
import UseUserSignupMutation from "../../hooks/api/auth/UserSignUpMutation";
import axios from "axios";
import { SignUpForm } from "@/Interfaces";

const IndividualSignUpForm = () => {
  const [isNicknameChecked, setIsNicknameChecked] = useState<boolean>(false);
  const [checkItems, setCheckItems] = useState<string[]>([]);
  const [pwConfirm, setPwConfirm] = useState<string>("");
  const [pwConfirmMsg, setPwConfirmMsg] = useState<string>("");
  const [isConfirmed, setIsConfirmed] = useState<boolean>(true);
  const [btnDisabled, setBtnDisabled] = useState<boolean>(false);

  //react-hook-form 사용을 위한 함수
  const {
    register,
    formState: { errors },
    handleSubmit: onChange,
    getValues,
  } = useForm<SignUpForm>({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      pw: "",
      nickname: "",
    },
  });
  const mutation = UseUserSignupMutation();

  const onPwConfirm = (e: any) => {
    e.preventDefault();
    const enteredPwconfirm = setPwConfirm(e.target.value);
    if (e.target.value!.length > 0) {
      if (e.target.value !== getValues("pw")) {
        setIsConfirmed(false);
        setPwConfirmMsg("비밀번호와 일치하지 않습니s다.");
        setBtnDisabled(true);
        return false;
      } else {
        setIsConfirmed(true);
        return true;
      }
    }
  };

  const onNicknameChange = (e: any) => {
    setBtnDisabled(false);
    setIsNicknameChecked(false);
  };

  const checkNickname = async () => {
    const enteredNickname = getValues("nickname");
    if (enteredNickname.length > 0) {
      const response = await axios.get("/user/check/nickname", {
        params: { nickname: enteredNickname },
      });
      const body = await response.data.code;
      if (body === "OK") {
        setIsNicknameChecked(true);
        alert("사용가능한 닉네임입니다.");
        setBtnDisabled(true);
      } else {
        alert("사용불가한 닉네임입니다. 다른 닉네임을 사용하세요.");
      }
    }
  };

  const onValid = () => {
    if (
      checkItems.includes("service") === true &&
      checkItems.includes("personal") === true &&
      checkItems.includes("location") === true
    ) {
      return true;
    } else {
      alert("필수 약관에 모두 동의해주세요.");
    }
  };

  const submitHandler = () => {
    if (isNicknameChecked && onValid() && isConfirmed && checkItems) {
      mutation.mutate({
        nickname: getValues("nickname"),
        email: getValues("email"),
        pw: getValues("pw"),
      });
    }
  };

  return (
    <>
      <SytledForm onSubmit={onChange(submitHandler)}>
        <Div>
          <div>
            <StyledLabel htmlFor="email">이메일*</StyledLabel>
            <StyledInput
              type="text"
              placeholder="이메일"
              {...register("email", {
                required: "이메일을 입력해주세요.",
                pattern: {
                  value:
                    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                  message: "이메일 형식에 맞지 않습니다.",
                },
                validate: {},
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
                  message:
                    "숫자,영문자, 특수문자 조합 8자리 이상 입력해주세요.",
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
              type="password"
              placeholder="비밀번호 확인"
              onChange={onPwConfirm}
              value={pwConfirm}
            />
            {isConfirmed ? null : (
              <StyledSpan className="message error">
                비밀번호와 일치하지 않습니다.
              </StyledSpan>
            )}
            <br />
          </div>

          <StyledHr />

          <div>
            <StyledLabel htmlFor="nickname">닉네임*</StyledLabel>

            <CheckDiv>
              <StyledInput
                {...register("nickname", { required: "닉네임을 입력해주세요" })}
                type="text"
                placeholder="닉네임"
                onChange={onNicknameChange}
              />
              <CheckButton onClick={checkNickname} disabled={btnDisabled}>
                중복
                <br />
                확인
              </CheckButton>
            </CheckDiv>

            {isNicknameChecked ? (
              <SuccessSpan>사용가능한 닉네임입니다.</SuccessSpan>
            ) : null}
          </div>
        </Div>

        <Div>
          <AgreeTerms checkItems={checkItems} setCheckItems={setCheckItems} />
        </Div>

        <StyledButton type="submit">가입하기</StyledButton>
      </SytledForm>
    </>
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
