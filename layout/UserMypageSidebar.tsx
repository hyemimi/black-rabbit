import { useRouter } from "next/router";
import styled from "styled-components";
import homeIcon from "../public/home.png";
import likeIcon from "../public/heart.png";
import alarmIcon from "../public/bell.png";
import Image from "next/image";
import helpIcon from "../public/help.png";
import loginIcon from "../public/login.png";
import cartIcon from "../public/cart.png";
export default function UserMypageSidebar() {
  const router = useRouter();
  let user_id = 1; // 임시데이터
  const UserMypageSidebar = [
    { ref: "/", label: "홈", width: 32, height: 32, icon: homeIcon },
    {
      ref: null,
      label: "주문/배송",
      width: 32,
      height: 32,
      icon: homeIcon,
      undermenu: [
        { ref: "/mypage-user/orderlist", label: "주문목록/배송조회" },
        { ref: "/mypage-user/historylist", label: "주문취소내역" },
      ],
    },

    {
      ref: null,
      label: "나의 활동",
      width: 30,
      height: 30,
      icon: cartIcon,
      undermenu: [
        { ref: "/mypage-user/questionlist", label: "문의목록" },
        { ref: "/mypage-user/myreview", label: "리뷰관리" },
        { ref: "/like", label: "좋아요 리스트" },
      ],
    },
    {
      ref: null,
      label: "계정 정보",
      width: 30,
      height: 30,
      icon: alarmIcon,
      undermenu: [
        { ref: "/mypage-user/editInfo", label: "개인정보 확인 및 수정" },
        { ref: "/mypage-user/addresslist", label: "배송지 관리" },
      ],
    },
    {
      ref: null,
      label: "로그아웃",
      width: 30,
      height: 30,
      icon: loginIcon,
    },
  ];
  return (
    <>
      {UserMypageSidebar.map((menu) => (
        <>
          <MenuButton>
            <Image
              width={menu.width}
              height={menu.height}
              src={menu.icon}
              alt=""
            />
            {menu.label}
          </MenuButton>
          {menu.undermenu &&
            menu.undermenu.map((undermenu) => (
              <UnderMenuButton onClick={() => router.push(undermenu.ref)}>
                {undermenu.label}
              </UnderMenuButton>
            ))}
        </>
      ))}
    </>
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
const UnderMenuButton = styled.div`
  height: fit-content;
  font-size: 15px;
  padding: 10px;
  width: 100%;
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding-left: 30px;
`;
