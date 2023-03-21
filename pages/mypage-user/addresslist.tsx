import { TitleDiv } from "@/components/common/TitleDiv";
import { Wrapper } from "@/components/common/Wrapper";
import styled from "styled-components";
import SearchAddress from "@/components/common/SearchAddress";
import { useState } from "react";

export default function addresslist() {
  const [addAddress, setAddAddress] = useState(false);

  const onAddHandler = () => {
    if (addAddress === true) {
      setAddAddress(false);
      return;
    }
    setAddAddress(true);
  };

  return (
    <Wrapper>
      <TitleDiv>
        <h1>배송지 관리</h1>
      </TitleDiv>
      <ButtonDiv>
        {!addAddress ? (
          <Button onClick={onAddHandler}>배송지 추가</Button>
        ) : (
          <Button onClick={onAddHandler}>배송지 목록</Button>
        )}
      </ButtonDiv>
      {addAddress ? (
        <SearchAddress />
      ) : (
        <ItemDiv>
          <SelectBox>
            <input type="checkbox"></input>
          </SelectBox>
          <ItemBox>
            <Item>
              <h1>경기도 화성시</h1>
            </Item>
          </ItemBox>
        </ItemDiv>
      )}
    </Wrapper>
  );
}
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
  flex-direction: row-reverse;
  width: 900px;
`;
const Button = styled.button<{ color?: string }>`
  background-color: ${(props) =>
    props.color ? props.theme.searchColor : props.theme.pointColor};
  border: none;
  margin-left: 30px;
  height: 50px;
  width: 130px;
  cursor: pointer;
`;
