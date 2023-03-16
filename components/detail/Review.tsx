import { Ireview } from "@/temp/reviews";
import styled from "styled-components";
import { useMakeStars } from "@/hooks/review/useMakeStars";
export default function Review({
  Item_id,
  user_id,
  title,
  detail,
  score,
  createTime,
}: Ireview) {
  const stars = useMakeStars(score);
  return (
    <ReviewDiv>
      <Header>
        <span>{stars}</span>
        <span>{createTime}</span>
      </Header>
      <Content>{detail}</Content>
    </ReviewDiv>
  );
}

const ReviewDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid gray;
  padding: 5px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px;
`;

const Content = styled.div`
  width: 100%;
  padding: 5px;
`;
const Title = styled.div``;
