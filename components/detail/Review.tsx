import { Ireview } from "@/temp/reviews";
import styled from "styled-components";

export default function Review({
  Item_id,
  user_id,
  title,
  detail,
  score,
  createTime,
}: Ireview) {
  const MakeStars = (score: number) => {
    let star = "";
    for (let i = 1; i <= 5; i++) {
      if (i <= score) {
        star += "⭐";
      } else {
        star += "☆";
      }
    }
    return star;
  };

  return (
    <ReviewDiv>
      <Header>
        <span>{MakeStars(score)}</span>
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
