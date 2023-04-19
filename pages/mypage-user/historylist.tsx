import { TitleDiv } from "@/components/common/TitleDiv";
import { Wrapper } from "@/components/common/Wrapper";
import { Box, Item } from "@/components/common/Box";
import { items } from "@/temp/items";
import styled from "styled-components";

export default function historylist() {
  return (
    <Wrapper>
      <TitleDiv>
        <h1>취소/교환/반품 내역</h1>
        <h4>교환 / 반품 안내 &gt;</h4>
      </TitleDiv>
      {items.map((it) => (
        <Box>
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
