import { useRouter } from "next/router";
import styled from "styled-components";
import homeIcon from "../public/home.png";
import likeIcon from "../public/heart.png";
import alarmIcon from "../public/bell.png";
import Image from "next/image";
import helpIcon from "../public/help.png";
import loginIcon from "../public/login.png";
import cartIcon from "../public/cart.png";
import { useState } from "react";
import UserMypageSidebar from "./UserMypageSidebar";
import SellerMypageSidebar from "./SellerMypageSidebar";
export default function Sidebar() {
  const router = useRouter();
  let user_id = 1; // 임시데이터
  const [ismypage, setIsMypage] = useState(true); // 마이페이지 여부
  const [isuser, setIsUser] = useState(false); // 유저 or 사업자 여부 관리
  /* 사이드바 속성 */
  const menuList = [
    { ref: "/", label: "홈", width: 32, height: 32, icon: homeIcon },
    { ref: "/like", label: "좋아요", width: 30, height: 30, icon: likeIcon },
    { ref: "/cart", label: "장바구니", width: 30, height: 30, icon: cartIcon },
    { ref: "/", label: "알림", width: 30, height: 30, icon: alarmIcon },
    {
      ref: "/userLogin",
      label: "로그인",
      width: 30,
      height: 30,
      icon: loginIcon,
    },
  ];

  return (
    <Side>
      <Logo>
        <h1>데이필름</h1>
      </Logo>
      <Div>
        {!ismypage ? (
          menuList.map((menu) => (
            <>
              <MenuButton onClick={() => router.push(menu.ref)}>
                <Image
                  width={menu.width}
                  height={menu.height}
                  src={menu.icon}
                  alt=""
                />
                {menu.label}
              </MenuButton>
            </>
          ))
        ) : isuser ? (
          <UserMypageSidebar />
        ) : (
          <SellerMypageSidebar />
        )}
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
