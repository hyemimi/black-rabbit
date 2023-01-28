import styled from "styled-components";
import { Wrapper } from "@/components/common/Wrapper";
import Image from "next/image";
import tempimage from "../../public/help.png";
import Heartbutton from "@/components/common/Heartbutton";
export default function detail() {
  return (
    <Wrapper>
      <InfoDiv>
        <div>
          <h1>카테고리 {`>`} 카메라</h1>
          <ProductImage></ProductImage>
        </div>
        <DetailDiv>
          <Title>제목</Title>
          <Heartbutton />
          <hr />
          <Div>
            <div>10000원 / 1일</div>
            <div>예약날짜 선택</div>
            <div>가격 30000원</div>
          </Div>
          <br />
          <ButtonDiv>
            <Button color="reservation">예약하기</Button>
            <Button>장바구니</Button>
          </ButtonDiv>
        </DetailDiv>
      </InfoDiv>

      <Hr />
      <Div>
        <h1>상세 설명</h1>
      </Div>
    </Wrapper>
  );
}

/*const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 1000px;
  padding-left: 320px;
  padding-right: 10px;
`;
*/
const InfoDiv = styled.div`
  display: flex;
  width: 900px;
`;

const DetailDiv = styled.div`
  margin-left: 50px;
  padding: 5px;
  width: 100%;
`;

const ProductImage = styled.div`
  background-color: ${(props) => props.theme.searchColor};
  width: 464px;
  height: 380px;
`;

const Title = styled.h1`
  font-size: 50px;
`;

const Div = styled.div`
  padding: 30px;
`;

const Hr = styled.hr`
  color: black;
  width: 900px;
`;

const ButtonDiv = styled.div`
  display: flex;
  margin: 30px;
  justify-content: space-between;
`;

const Button = styled.button`
  background-color: ${(props) =>
    props.color ? props.theme.pointColor : props.theme.searchColor};
  border: none;
  cursor: pointer;
  width: 145px;
  height: 54px;
  font-size: 15px;
  transition-duration: 50ms;
  &: hover {
    color: rgb(254, 254, 254);
    background-color: rgb(0, 0, 0, 1);
    transition-duration: 100ms;
  }
`;
