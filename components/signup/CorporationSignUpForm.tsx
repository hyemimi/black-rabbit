import { useForm } from "react-hook-form";
import styled from "styled-components";
import { StyledButton } from "../common/Button";
import { useState, useRef } from "react";
import axios from "axios";
import AgreeTerms from "./AgreeTerms";
import Modal from "../common/modal/Modal";
import AddressModal from "./AddressModal";
import useStoreSignupMutation from "@/hooks/api/auth/StoreSignUpMutation";

interface CorpSignUp {
  businessNumber: string;
  storeName: string;
  postalCode: number;
  address: string;
  addressDetail: string;
  registrationNumber: string;
  managerName: string;
  bank: string;
  accountNumber: number;
  accountHolder: string;
  email: string;
  pw: string;
}

const CorporationSignUpForm = () => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit: onChange,
    getValues,
  } = useForm<CorpSignUp>({
    mode: "onSubmit",
    defaultValues: {
      businessNumber: "",
      storeName: "",

      managerName: "",
      bank: "",
      accountHolder: "",
      email: "",
      pw: "",
      registrationNumber: "",
    },
  });

  const StoreMutation = useStoreSignupMutation();

  const BUSSINESS_AUTH_KEY =
    "OhzwRjXz5TiQ9y44%2BheIWfvQ4P8K113%2FhapRaX%2B6e6RqvGdreUpBYkL7p9h8fgp84iaaP00%2B4Dx6fcbYBrEHzg%3D%3D";
  const BUSSINESS_URL = `http://api.odcloud.kr/api/nts-businessman/v1/status?serviceKey=${BUSSINESS_AUTH_KEY}`;

  //입력값
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [checkItems, setCheckItems] = useState<string[]>([]);

  //오류메시지
  const [passwordConfirmMessage, setPasswordConfirmMessage] =
    useState<string>("");

  // 유효성 검사
  const [isPasswordConfirm, setIsPasswordConfirm] = useState<boolean>(false);
  const [isBusinessNum, setIsBusinessNum] = useState<boolean>(false);
  const [openPostcode, setOpenPostcode] = useState<boolean>(false);
  const [addressByProp, setAddress] = useState<string>("");
  const [postalCodeByProp, setPostalCode] = useState<number>(0);
  const pwRef = useRef<string>(null);

  //사업자 등록번호 확인
  async function corporationNumberHandler() {
    try {
      const corporationNumber = getValues("businessNumber");
      const data = { b_no: [JSON.stringify(Number(corporationNumber))] };
      const response = await axios.post(BUSSINESS_URL, data, {
        headers: { "Content-Type": "application/json" },
      });
      const body = response.data;
      if (
        body.data[0].tax_type === "국세청에 등록되지 않은 사업자등록번호입니다."
      ) {
        alert(body.data[0].tax_type);
      } else {
        alert(body.data[0].tax_type);
        setIsBusinessNum(true);
      }
    } catch (error) {
      console.error(error);
    }
  }

  // 비밀번호 확인

  const passwordConfirmChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const passwordConfirmCurrent = e.target.value;
    const currPw = watch("pw");
    setPasswordConfirm(passwordConfirmCurrent);
    if (currPw === passwordConfirmCurrent) {
      setPasswordConfirmMessage("비밀번호와 일치합니다.");
      setIsPasswordConfirm(true);
    } else {
      setPasswordConfirmMessage("비밀번호와 다릅니다. 다시 확인해 주세요.");
      setIsPasswordConfirm(false);
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

  //가입하기(forrm제출) handler
  const submitHandler = () => {
    if (onValid() && isBusinessNum) {
      StoreMutation.mutate({
        businessNumber: getValues("businessNumber"),
        storeName: getValues("storeName"),
        postalCode: Number(getValues("postalCode")),
        address: getValues("address"),
        addressDetail: getValues("addressDetail"),
        managerName: getValues("managerName"),
        bank: getValues("bank"),
        accountNumber: Number(getValues("accountNumber")),
        accountHolder: getValues("accountHolder"),
        email: getValues("email"),
        pw: getValues("pw"),
        registrationNumber: getValues("registrationNumber"),
      });
    }
  };
  const handle = {
    clickButton: () => {
      setOpenPostcode((current) => !current);
    },
  };

  return (
    <SytledForm onSubmit={onChange(submitHandler)}>
      <Div>
        <div>
          <StyledLabel htmlFor="businessNumber">사업자 등록번호*</StyledLabel>
          <CheckDiv>
            <StyledInput
              type="string"
              placeholder="-없이 숫자만 입력"
              {...register("businessNumber", {
                required: "사업자등록번호를 입력해주세요.",
                validate: {},
              })}
            />
            <CheckButton
              onClick={corporationNumberHandler}
              disabled={isBusinessNum}
            >
              확인
            </CheckButton>
          </CheckDiv>
          {isBusinessNum && <StyledSpan> 인증되었습니다.</StyledSpan>}
          {errors.businessNumber && (
            <StyledSpan className="message error">
              사업자 등록번호를 입력해주세요.
            </StyledSpan>
          )}
        </div>

        <div>
          <StyledLabel htmlFor="managerName">대표자명*</StyledLabel>
          <StyledInput
            type="text"
            placeholder="대표자명"
            {...register("managerName", {
              required: "대표자명을 입력해주세요.",
              validate: {},
            })}
          />
        </div>
        {errors.managerName && (
          <StyledSpan className="message error">
            대표자명을 입력해주세요.
          </StyledSpan>
        )}
        <div>
          <StyledLabel htmlFor="storeName">상호*</StyledLabel>
          <StyledInput
            type="text"
            placeholder="상호"
            {...register("storeName", {
              required: "상호명을 입력해주세요.",
              validate: {},
            })}
          />
        </div>
        {errors.storeName && (
          <StyledSpan className="message error">
            상호명을 입력해주세요.
          </StyledSpan>
        )}

        <div>
          <StyledLabel htmlFor="postalCode">사업장 주소*</StyledLabel>
          {openPostcode && (
            <Modal>
              <AddressModal
                setOpenPostcode={setOpenPostcode}
                setAddress={setAddress}
                setPostalCode={setPostalCode}
              />
            </Modal>
          )}
          <CheckDiv>
            <StyledInput
              type="number"
              placeholder="우편번호"
              value={postalCodeByProp}
              {...register("postalCode", {
                required: "우편번호를 입력해주세요.",
                validate: {},
              })}
            />
            <CheckButton onClick={handle.clickButton}>
              주소
              <br /> 검색
            </CheckButton>
          </CheckDiv>
          <StyledInput
            type="text"
            placeholder="기본주소"
            value={addressByProp}
            {...register("address", {
              required: "기본주소를 입력해주세요.",
              validate: {},
            })}
          />
          <StyledInput
            id="addressDetail"
            type="text"
            placeholder="상세주소"
            {...register("addressDetail", {
              required: "상세주소를 입력해주세요.",
              validate: {},
            })}
          />
        </div>
        {errors.addressDetail && (
          <StyledSpan className="message error">주소를 입력해주세요</StyledSpan>
        )}

        <div>
          <StyledLabel htmlFor="registrationNumber">
            통신판매업신고번호*
          </StyledLabel>
          <StyledInput
            placeholder="통신판매업신고번호"
            {...register("registrationNumber", {
              required: "이메일을 입력해주세요.",
              validate: {},
            })}
          />
          <br />
        </div>
        {errors.registrationNumber && (
          <StyledSpan className="message error">
            통신판매업신고번호를 입력해주세요.
          </StyledSpan>
        )}

        <div>
          <StyledLabel htmlFor="accountNumber">정산계좌*</StyledLabel>
          <StyledInput
            type="text"
            placeholder="은행명 "
            {...register("bank", {
              required: "은행명을 입력해주세요.",
              validate: {},
            })}
          />
          {errors.bank && (
            <StyledSpan className="message error">
              {errors.bank.message}
            </StyledSpan>
          )}

          <CheckDiv>
            <div>
              <StyledInput
                type="text"
                placeholder="예금주"
                {...register("accountHolder", {
                  required: "예금주를 입력해주세요.",
                  validate: {},
                })}
              />
            </div>
            <StyledInput
              type="number"
              placeholder="계좌번호"
              {...register("accountNumber", {
                required: "계좌번호를 입력해주세요.",
                validate: {},
              })}
            />
            <CheckButton>인증</CheckButton>
          </CheckDiv>
        </div>
        <div>
          {errors.accountHolder && (
            <StyledSpan className="message error">
              {errors.accountHolder.message}
            </StyledSpan>
          )}
        </div>
        {errors.accountNumber && (
          <StyledSpan className="message error">
            {errors.accountNumber.message}
          </StyledSpan>
        )}

        <StyledHr />
        <div>
          <StyledLabel htmlFor="email">입점 담당자 이메일*</StyledLabel>
          <StyledInput
            type="email"
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
          <br />
          {errors.email && (
            <StyledSpan className="message error">
              {errors.email?.message}
            </StyledSpan>
          )}
        </div>

        <div>
          <StyledLabel htmlFor="pw">비밀번호*</StyledLabel>
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
          {errors.pw && (
            <StyledSpan className="message error">
              {errors.pw?.message}
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
        <AgreeTerms checkItems={checkItems} setCheckItems={setCheckItems} />
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
