import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <>
      <LayoutDiv>
        <Sidebar />
        <div style={{ transform: "translateX(+250px)" }}>
          <Header />
        </div>
      </LayoutDiv>
    </>
  );
  //1140px width height 924 px
}

const LayoutDiv = styled.div`
  display: flex;
  width: 1440px;
  height: 100%;
`;
