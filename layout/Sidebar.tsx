import { useRouter } from "next/router";
import styled from "styled-components";

export default function Sidebar() {
  const router = useRouter();
  return (
    <Side>
      <Logo>
        <h1>Logo</h1>
      </Logo>
      <div style={{ marginTop: "50px" }}>
        <MenuButton onClick={() => router.push("/")}>홈</MenuButton>
        <MenuButton>좋아요</MenuButton>
        <MenuButton>알림</MenuButton>
        <MenuButton>도움</MenuButton>
        <MenuButton onClick={() => router.push("/login")}>로그인</MenuButton>
      </div>
    </Side>
  );
}

const Side = styled.div`
  position: fixed;
  padding-top: 30px;
  padding-left: 10px;
  left: 0px;
  width: 250px;
  height: 100%;
  background-color: ${(props) => props.theme.pointColor};
  border: none;
  /* -ms-overflow-style: none; */
  /* border: solid 1px white; */
  display: flex;
  flex-direction: column;
  gap: 0.4em;
`;
const Logo = styled.div`
  margin: 10px;
  padding-right: 50px;
  padding-left: 50px;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 50px;
  }
`;
const MenuButton = styled.div`
  margin: 5px;
  height: fit-content;
  font-size: 20px;
  padding: 10px;
  width: 100%;
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding-left: 30px;
`;
