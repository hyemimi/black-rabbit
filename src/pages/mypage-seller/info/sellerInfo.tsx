import { Button } from "@/styles/ModalStyle";
import {
  Title,
  WholeDiv,
  Wrapper,
  Hr,
  OverflowDiv,
  GreenButton,
} from "@/styles/MypageSellerStyle";
import styled from "styled-components";

const SellerInfo = () => {
  return (
    <Wrapper>
      <WholeDiv>
        <Title>계정정보</Title>
        <Hr />
        <MiddleDiv>
          <OverflowDiv>
            <Div>
              <div>
                <StyledLabel htmlFor="passwordCheck">
                  입점 담당자명*
                </StyledLabel>
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
                <StyledLabel htmlFor="passwordCheck">
                  비밀번호 확인*
                </StyledLabel>
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
              <StyledButton>저장</StyledButton>
            </Div>
          </OverflowDiv>
        </MiddleDiv>
      </WholeDiv>
    </Wrapper>
  );
};
export default SellerInfo;

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

const CheckButton = styled.button`
  margin-left: 1rem;
  height: 2.5rem;
  width: 4rem;
  background: ${(props) => props.theme.pointColor};
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

const MiddleDiv = styled.div`
  width: 960px;
  margin: 0 auto;
`;

export const StyledButton = styled.button`
  width: 400px;
  height: 2.5rem;
  margin: 2rem auto;
  border: 0;
  background: #d9d9d9;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: #b9d9c0;
  }
`;
