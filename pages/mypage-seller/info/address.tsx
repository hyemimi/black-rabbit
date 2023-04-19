import { Box } from "@/components/common/Box";
import { TitleDiv } from "@/components/common/TitleDiv";

import styled from "styled-components";
import { Title, Wrapper, WholeDiv } from "@/components/detail/Seller";
const Address = () => {
  return (
    <Wrapper>
      <WholeDiv>
        <Title>주소록/배송정보 관리</Title>
        <Button color="delete">선택삭제</Button>
        <Button>추가하기</Button>
        <ItemDiv>
          <SelectBox>
            <input type="checkbox"></input>
          </SelectBox>
          <ItemBox>
            <Item>
              <h1>기본배송지</h1>

              <h1>경기도 화성시</h1>
            </Item>
          </ItemBox>
        </ItemDiv>
        <ButtonDiv>
          <Button color="delete">삭제</Button>
          <Button>저장</Button>
        </ButtonDiv>
      </WholeDiv>
    </Wrapper>
  );
};
export default Address;
const ItemDiv = styled.div`
  display: flex;
`;
const SelectBox = styled.div`
  width: 68px;
  height: 118px;
  background-color: ${(props) => props.theme.pointColor};
  padding: 25px;
`;
const ItemBox = styled.div`
  width: 800px;
  height: 118px;
  border: 1px solid gray;
  display: flex;
`;
const Item = styled.div`
  width: 158px;

  text-align: center;
  align-items: center;
  padding: 20px;
`;

const ButtonDiv = styled.div`
  display: flex;
`;

const Button = styled.button<{ color?: string }>`
  background-color: ${(props) =>
    props.color ? props.theme.searchColor : props.theme.pointColor};
  border: none;
  margin-left: 30px;
  height: 30px;
  width: 100px;
  cursor: pointer;
  border-radius: 5px;
`;
