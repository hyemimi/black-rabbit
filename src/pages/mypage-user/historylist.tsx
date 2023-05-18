import { TitleDiv } from "@/styles/TitleDiv";
import { Box, Item } from "@/styles/Box";
import { items } from "@/src/temp/items";
import styled from "styled-components";
import { Wrapper } from "@/styles/Wrapper";

export default function historylist() {
  return (
    <Wrapper>
      <TitleDiv>
        <h1>취소/교환/반품 내역</h1>
        <h4>교환 / 반품 안내 &gt;</h4>
      </TitleDiv>
      {items.map((it) => (
        <Box key={it.Item_id}>
          <Header>
            <H1>취소 접수일 : 2022/11/23</H1>
            <H1>주문일 : 2022/11/23</H1>
            <H1>주문번호 : 12314441</H1>
          </Header>
          <Item width="600px">{it.modelName}</Item>
        </Box>
      ))}
    </Wrapper>
  );
}

const Header = styled.div`
  display: flex;
  font-size: 18px;
  justify-content: space-around;
`;
const H1 = styled.h1`
  font-size: 20px;
`;
