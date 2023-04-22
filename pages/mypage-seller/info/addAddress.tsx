import { Box } from "@/components/common/Box";
import { TitleDiv } from "@/components/common/TitleDiv";

import styled from "styled-components";
import { Title, Wrapper, WholeDiv } from "@/components/detail/Seller";
const AddAddress = () => {
  return (
    <Wrapper>
      <WholeDiv>
        <Title>배송지추가</Title>
        <Div>
          <h1>배송지명</h1> <input></input>
          <input />
          <button> 우편번호검색</button>
          <input />
          <input />
          <label htmlFor="baseAddress">
            기본 배송지로 선택
            <input type="checkbox" name="baseAddress" />
          </label>
          <ButtonDiv>
            <Button color="delete">삭제</Button>
            <Button>저장</Button>
          </ButtonDiv>
        </Div>
      </WholeDiv>
    </Wrapper>
  );
};
export default AddAddress;

const ButtonDiv = styled.div`
  display: flex;
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

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 960px;
  border: 1px solid #d9d9d9;
`;
