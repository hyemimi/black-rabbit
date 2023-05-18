import styled from "styled-components";
import {
  Title,
  Wrapper,
  Hr,
  Label,
  RowButtonDiv,
  RowDiv,
} from "@/styles/MypageSellerStyle";
import { useRouter } from "next/router";
import { StyledButton } from "./sellerInfo";

const Address = () => {
  const router = useRouter();

  return (
    <>
      <Wrapper>
        <WholeDiv>
          <Title>주소록/배송정보 관리 </Title>
          <Hr />

          <ButtonDiv>
            <Label></Label>
            <RowButtonDiv>
              <Button color="delete">선택삭제</Button>
              <Button
                onClick={() => router.push("/mypage-seller/info/addAddress")}
              >
                추가하기
              </Button>
            </RowButtonDiv>
          </ButtonDiv>

          <ItemDiv>
            <ItemBox>
              <SelectBox>
                <input type="checkbox"></input>
              </SelectBox>
              <Item>
                <RowDiv>
                  <AddressTitle>기본배송지</AddressTitle>
                  <AddressDetail>사업장</AddressDetail>
                </RowDiv>
                <AddressDetail>
                  경기도 수원시 영통구 경희대학교 202호
                </AddressDetail>
              </Item>
            </ItemBox>
          </ItemDiv>

          <MiddleDiv>
            <SaveButton>저장</SaveButton>
          </MiddleDiv>
        </WholeDiv>
      </Wrapper>
    </>
  );
};
export default Address;
export const WholeDiv = styled.div`
  margin: 0 auto;
  align: left;
  width: 1440px;
`;

const ButtonDiv = styled.div`
  margin: 10px 0 0 20px;
  height: 50px;
  width: 960px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 5px;
`;

const Button = styled.button<{ color?: string }>`
  background-color: ${(props) =>
    props.color ? props.theme.searchColor : props.theme.pointColor};
  height: 30px;
  margin: 10px 10px 10px auto;
  border: 1px #d9d9d9;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;

const SelectBox = styled.div`
  width: 68px;
  height: 90px;
  background-color: ${(props) => props.theme.pointColor};
  padding: 20px;
`;
const ItemBox = styled.div`
  width: 960px;
  height: 90px;
  border: 1px solid #d9d9d9;
  display: flex;
  overflow: hidden;
  border-radius: 10px;
`;
const Item = styled.div`
  width: 960px;
  text-align: left;
  align-items: center;
  padding: 15px 20px;
  line-height: 30px;
`;

const ItemDiv = styled.div`
  display: flex;
  margin: 2rem 10px;
  align-items: center;
  text-align: center;
`;

const AddressTitle = styled.h1`
  text-align: left;
  margin-right: 20px;
  background: #d9d9d9;
  padding: 0 5px;
  border-radius: 10px;
`;

const AddressDetail = styled.h1``;

const MiddleDiv = styled.div`
  width: 600px;
  margin: 0 auto;
`;

const SaveButton = styled.button`
  width: 100px;
  height: 2.5rem;
  margin: 0 auto;
  border: 0;
  background: #d9d9d9;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: #b9d9c0;
  }
`;
