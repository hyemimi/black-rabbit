import { useForm } from "react-hook-form";
import styled from "styled-components";
import { StyledButton } from "../common/Button";
import { useState, useCallback, useRef } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import AgreeTerms from "./AgreeTerms";

const CorporationSignUpForm = () => {
  //react-hook-form 사용을 위한 함수 호출
  const { register, handleSubmit } = useForm();
  const BUSSINESS_AUTH_KEY =
    "OhzwRjXz5TiQ9y44+heIWfvQ4P8K113/hapRaX+6e6RqvGdreUpBYkL7p9h8fgp84iaaP00+4Dx6fcbYBrEHzg==";

  const BUSSINESS_URL = `http://api.odcloud.kr/api/nts-businessman/v1/status?serviceKey=${BUSSINESS_AUTH_KEY}`;
  const SIGN_STORE_URL = "15.165.101.95:8080/sign/store";

  //입력값
  const corporationNumberInputRef = useRef<HTMLInputElement>(null);
  const corporationNumber = corporationNumberInputRef.current?.value;

  const representatorNameInputRef = useRef<HTMLInputElement>(null);
  const brandNameInputRef = useRef<HTMLInputElement>(null);

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
  const router = useRouter();

  //가입하기(forrm제출) handler
  const submitHandler = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // console.log({ enteredEmail, nickname, password, passwordConfirm });
      try {
        await axios
          .post(SIGN_STORE_URL, {
            username: name,
            password: password,
          })
          .then((res) => {
            console.log("response:", res);
            if (res.status === 200) {
              router.push("/sign_up/profile_start");
            }
          });
      } catch (err) {
        console.error(err);
      }
    },
    [enteredEmail, nickname, password, router]
  );

  //사업자 등록번호 확인
  async function corporationNumberHandler() {
    try {
      const response = await axios.post(BUSSINESS_URL, {
        b_no: corporationNumber,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

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

  return (
    <SytledForm onSubmit={submitHandler}>
      <Div>
        <div>
          <StyledLabel htmlFor="corporation-number">
            사업자 등록번호*
          </StyledLabel>
          <CheckDiv>
            <StyledInput
              type="integer"
              placeholder="-없이 숫자만 입력"
              ref={corporationNumberInputRef}
            />
            <CheckButton onClick={corporationNumberHandler}>확인</CheckButton>
          </CheckDiv>
        </div>

        <div>
          <StyledLabel htmlFor="representator-name">대표자명*</StyledLabel>
          <StyledInput
            id="representator-name"
            type="text"
            placeholder="대표자명"
            ref={representatorNameInputRef}
          />
        </div>
        <div>
          <StyledLabel htmlFor="brand-name">상호*</StyledLabel>
          <StyledInput
            id="brand-name"
            type="text"
            placeholder="상호"
            ref={brandNameInputRef}
          />
        </div>

        <div>
          <StyledLabel htmlFor="password">사업장 주소*</StyledLabel>
          <CheckDiv>
            <StyledInput
              id="address-number"
              type="integer"
              onChange={passwordChangeHandler}
              placeholder="우편번호"
            />
            <CheckButton>
              주소
              <br /> 검색
            </CheckButton>
          </CheckDiv>
          <StyledInput id="address-basic" type="text" placeholder="기본주소" />
          <StyledInput id="address-detail" type="text" placeholder="상세주소" />
        </div>

        <div>
          <StyledLabel htmlFor="passwordCheck">입점 담당자명*</StyledLabel>
          <StyledInput
            id="manager-name"
            type="text"
            placeholder="입점 담당자명"
          />
        </div>

        <div>
          <StyledLabel htmlFor="account-number">정산계좌*</StyledLabel>
          <CheckDiv>
            <StyledInput
              id="account-number"
              type="integer"
              placeholder="-없이 숫자만 입력"
            />
            <CheckButton>인증</CheckButton>
          </CheckDiv>
        </div>

        <StyledHr />
        <div>
          <StyledLabel htmlFor="email">입점 담당자 이메일*</StyledLabel>
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
            placeholder="숫자, 영문자, 특수문자 조합 8글자 이상"
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
      </Div>

      <Div>
        <AgreeTerms />
      </Div>

      <StyledButton type="submit">가입하기</StyledButton>
    </SytledForm>
  );
};
export default CorporationSignUpForm;

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
