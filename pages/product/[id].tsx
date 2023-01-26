import styled from "styled-components";
import Image from "next/image";
import tempimage from "../../public/help.png";
import Heartbutton from "@/components/common/Heartbutton";
export default function detail() {
  return (
    <Wrapper>
      <InfoDiv>
        <div>
          <h1>카테고리 {`>`} 카메라</h1>
          <Image src={tempimage} width={464} height={380} alt="" />
        </div>
        <DetailDiv>
          <Title>제목</Title>
          <p>예약날짜 선택</p>
          <ButtonDiv>
            <button>예약하기</button>
            <button>장바구니</button>
            <Heartbutton />
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

const InfoDiv = styled.div`
  display: flex;
`;

const DetailDiv = styled.div`
  margin-left: 50px;
  padding: 5px;
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 1000px;
  padding-left: 300px;
  padding-right: 10px;
`;
const Title = styled.h1`
  font-size: 50px;
  color: ${(props) => props.theme.pointColor};
`;

const Div = styled.div``;

const Hr = styled.hr`
  color: black;
  width: 900px;
`;

const ButtonDiv = styled.div`
  display: flex;
`;
