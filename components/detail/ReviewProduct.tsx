import ReviewList from "./ReviewList";
import styled from "styled-components";
export default function ReviewProduct() {
  return (
    <div>
      <Title>⭐5.0</Title>
      <h1>2개의 리뷰</h1>
      <Hr />

      <ReviewList />
    </div>
  );
}

const Title = styled.h1`
  padding-top: 40px;
  font-size: 40px;
  text-align: center;
`;

const Hr = styled.div`
  border: 2px solid gray;
`;
