import { useRouter } from "next/router";
import styled from "styled-components";
import homeIcon from "../public/home.png";
import likeIcon from "../public/heart.png";
import alarmIcon from "../public/bell.png";
import Image from "next/image";
import helpIcon from "../public/help.png";
import loginIcon from "../public/login.png";
import cartIcon from "../public/cart.png";
export default function Sidebar() {
  const router = useRouter();
  let user_id = 1; // 임시데이터
  return (
    <Side>
      <Logo>
        <h1>데이필름</h1>
      </Logo>
      <Div>
        <MenuButton onClick={() => router.push("/")}>
          <Image width={32} height={32} src={homeIcon} alt="" /> 홈
        </MenuButton>
        <MenuButton onClick={() => router.push(`/like/${user_id}`)}>
          <Image width={30} height={30} src={likeIcon} alt="" />
          좋아요
        </MenuButton>
        <MenuButton onClick={() => router.push(`/cart/${user_id}`)}>
          <Image width={30} height={30} src={cartIcon} alt="" />
          장바구니
        </MenuButton>
        <MenuButton>
          <Image width={30} height={30} src={alarmIcon} alt="" />
          알림
        </MenuButton>
        <MenuButton>
          <Image width={30} height={30} src={helpIcon} alt="" />
          도움
        </MenuButton>
        <MenuButton onClick={() => router.push("/login")}>
          <Image width={30} height={30} src={loginIcon} alt="" />
          로그인
        </MenuButton>
      </Div>
    </Side>
  );
}
const Div = styled.div`
  margin-top: 50px;
`;
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
  height: fit-content;
  font-size: 20px;
  padding: 10px;
  width: 100%;
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding-left: 30px;
`;
