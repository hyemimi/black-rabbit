import CartList from "@/components/cart/CartList";
import { Wrapper } from "@/components/common/Wrapper";
import styled from "styled-components";

export default function Cart() {
  return (
    <Wrapper>
      <TitleDiv>
        <h1>장바구니</h1>
        <Hr />
        <MenuBar>
          <Button color="gray">전체선택</Button>
          <Title>
            <Name>상품정보</Name>
            <Name>예약기간</Name>
            <Name>금액</Name>
            <Name>거래방법</Name>
          </Title>
        </MenuBar>
      </TitleDiv>
      <CartList />
      <TotalBox>총 결제 금액 | 어쩌구</TotalBox>
      <ButtonDiv>
        <Button height="86px" width="290px" color="delete">
          삭제하기
        </Button>
        <Button height="86px" width="290px">
          결제하기
        </Button>
      </ButtonDiv>
    </Wrapper>
  );
}

const TitleDiv = styled.div`
  width: 900px;

  h1 {
    font-size: 25px;
  }
  padding: 7px;
`;
const Hr = styled.div`
  border: 1.5px solid gray;
  margin-top: 10px;
`;
const MenuBar = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
`;
const Button = styled.button<{ width?: string; height?: string }>`
  background-color: ${(props) =>
    props.color ? props.theme.searchColor : props.theme.pointColor};
  border: none;
  cursor: pointer;
  width: ${(props) => (props.width ? props.width : "100px")};
  height: ${(props) => (props.height ? props.height : "45px")};
  font-size: 15px;
`;
const ButtonDiv = styled.div`
  width: 900px;
  display: flex;
  justify-content: center;
  padding: 20px;
`;
const Title = styled.div`
  display: flex;

  align-items: center;
`;
const Name = styled.h1`
  margin-left: 80px;
  font-size: 3px;
`;

const TotalBox = styled.div`
  font-size: 30px;
  background-color: ${(props) => props.theme.searchColor};
`;
