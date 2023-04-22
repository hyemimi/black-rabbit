import {
  Title,
  WholeDiv,
  Wrapper,
  SearchDiv,
  FilterDiv,
  P,
  FilterName,
  Select,
  Option,
  LeftTd,
  OverflowDiv,
  RightTd,
  Table,
  Tbody,
  Td,
  Thead,
  Tr,
  Hr,
  WholeLists,
  GreenButton,
} from "@/components/detail/Seller";
import styled from "styled-components";

const SellerInfo = () => {
  const ItemList = [
    {
      itemId: 1,
      customerId: "감자",
      date: "22/03/14 13:32",
      title: " Canon EOS Rebel T7 18-55mm 번들 세트",
      starAvg: 4.4,
      reviewContents: "너무조하용~",
    },
    {
      itemId: 2,
      customerId: "감자",
      date: "22/03/14 13:32",
      title: "[소니] FE 28-60mm F4-5.6 표준렌즈",
      starAvg: 4.4,
      reviewContents: "너무조하용~",
    },
    {
      itemId: 3,
      customerId: "감자",
      date: "22/03/14 13:32",
      title: "소니 A7M4 미러리스 카메라",
      starAvg: 4.4,
      reviewContents: "너무조하용~",
    },
    {
      itemId: 4,
      customerId: "감자",
      date: "22/03/14 13:32",
      title: "소니 FE 24-70mm GM F2.8",
      starAvg: 4.4,
      reviewContents: "너무조하용~",
    },
  ];
  return (
    <Wrapper>
      <WholeDiv>
        <Title>계정정보</Title>
        <Hr />

        <OverflowDiv>
          <Div>
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
              <StyledLabel htmlFor="password">비밀번호*</StyledLabel>
              <StyledInput
                id="password"
                type="password"
                placeholder="숫자, 영문자, 특수문자 조합 8글자 이상"
              />
              <br />
              {/* {password.length > 0 && (
            <StyledSpan
              className={`message ${isPassword ? "success" : "error"}`}
            >
              {passwordMessage}
            </StyledSpan>
          )} */}
            </div>

            <div>
              <StyledLabel htmlFor="passwordCheck">비밀번호 확인*</StyledLabel>
              <StyledInput
                id="passwordCheck"
                type="password"
                placeholder="비밀번호 확인"
              />
              <br />
              {/* {passwordConfirm.length > 0 && (
            <StyledSpan
              className={`message ${isPasswordConfirm ? "success" : "error"}`}
            >
              {passwordConfirmMessage}
            </StyledSpan>
          )} */}
            </div>
          </Div>
        </OverflowDiv>
        <GreenButton>저장</GreenButton>
      </WholeDiv>
    </Wrapper>
  );
};
export default SellerInfo;

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
  width: 400px;

  text-align: left;
  margin: 30px;
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
