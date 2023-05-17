import styled from "styled-components";
import { Title, Hr, RowDiv } from "@/components/detail/Seller";
import { useRouter } from "next/router";
import { Input } from "@/components/common/modal/ModalStyle";
import { useState } from "react";

const Address = () => {
  const [postalCode, setPostalCode] = useState<number>(1);
  const [address, setAddress] = useState<string>("");
  const [addressDetail, setAddressDetail] = useState<string>("");
  const router = useRouter();

  return (
    <>
      <Wrapper>
        <WholeDiv>
          <Title>배송지 추가 </Title>
          <Hr />
          <Div>
            <div>
              <StyledLabel htmlFor="storeName">배송지명</StyledLabel>
              <StyledInput type="text" placeholder="배송지명" />
            </div>

            <div>
              <StyledLabel htmlFor="postalCode">주소</StyledLabel>
              <CheckDiv>
                <PostalCodeInput type="number" placeholder="우편번호" />
                <CheckButton>
                  주소
                  <br /> 검색
                </CheckButton>
              </CheckDiv>
              <StyledInput type="text" placeholder="기본주소" />
              <StyledInput
                id="addressDetail"
                type="text"
                placeholder="상세주소"
              />
            </div>

            <RowLeftDiv>
              <input type="checkbox" id="basic-address"></input>
              <label htmlFor="basic-address">기본배송지로 추가</label>
            </RowLeftDiv>

            <StyledButton>추가</StyledButton>
          </Div>
        </WholeDiv>
      </Wrapper>
    </>
  );
};
export default Address;

export const Wrapper = styled.div`
  width: 70%;
  height: 100%;
  padding: 0;
  margin: 0 300px 100px 350px;
`;
export const WholeDiv = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  width: 500px;
  align-items: center;
`;

const Button = styled.button`
  width: 3rem;
  height: 40px;
  margin: 0.2rem 0.2rem;
  border: 0;
  padding: 0.2rem;
  background: #d9d9d9;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: #2f3640;
    color: white;
  }
`;

const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: left;
  vertical-align: center;
  padding-right: 0.7rem;
`;

export const Label = styled.label`
  width: 50px;
  line-height: 50px;
  margin-left: 10px;
  margin-right: 10px;
  font-weight: 400;
`;

const StyledButton = styled.button`
  width: 500px;
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

const StyledLabel = styled.label`
  text-align: left;
  line-height: 2rem;
`;

const StyledInput = styled.input`
  width: 500px;
  height: 2.5rem;
  padding: 0.5rem;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  text-align: left;
  margin-bottom: 0.5rem;
`;

const PostalCodeInput = styled.input`
  width: 300px;
  height: 2.5rem;
  padding: 0.5rem;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  text-align: left;
  margin-bottom: 0.5rem;
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

export const RowLeftDiv = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  items-align: left;
  text-align: left;
  margin-top: 10px;
`;
