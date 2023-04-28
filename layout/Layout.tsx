import { Wrapper } from "@/components/common/Wrapper";
import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function Layout() {
  // 유저인지 사업자인지
  return (
    <LayoutDiv>
      <Sidebar />
      <HeaderContainer>
        <Header />
      </HeaderContainer>
    </LayoutDiv>
  );
}

const LayoutDiv = styled.div`
  width: 100%;
  height: 100%;
`;

// sidebar : 250px 이므로 margin-left : 250px
const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 250px;
  display: flex;
  justify-content: space-between;
`;
