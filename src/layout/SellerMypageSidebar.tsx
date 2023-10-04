import { useRouter } from "next/router";
import styled from "styled-components";
import downarrow from "public/static/images/down-chevro.png";
import uparrow from "public/static/images/down-chevro.png";
import Image from "next/image";

import { keyframes } from "styled-components";
import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isSideBarOpenState } from "../stores/recoil/sidebarAtoms";

export default function SellerMypageSidebar() {
  const [isMenuOpen, setIsMenuOpen] = useRecoilState(
    isSideBarOpenState("manage")
  );
  const [isOrderMenuOpen, setisOrderMenuOpen] = useRecoilState(
    isSideBarOpenState("order")
  );
  // const MenuOpenComponent = (id: string) => {
  //   const [isMenuOpen, setIsMenuOpen] = useRecoilState(isSideBarOpenState(id));
  //   return isMenuOpen;
  // };

  const useHandleOpenMenu = (id: string) => {
    const [isOpen, setIsOpen] = useRecoilState(isSideBarOpenState(id));
    setIsOpen((prev) => !prev);
  };

  const router = useRouter();
  let user_id = 1; // 임시데이터

  const SellerMypageSidebar = [
    // { ref: "/", label: "홈", width: 25, height: 27 },
    {
      ref: null,
      label: "상품관리",
      width: 20,
      height: 20,
      mode: false,

      undermenu: [
        { ref: "/mypage-seller", label: "상품조회/수정" },
        { ref: "/mypage-seller/addItem", label: "상품등록" },
      ],
    },

    {
      ref: null,
      label: "주문/배송",
      width: 23,
      height: 21,
      mode: false,

      undermenu: [
        { ref: "/mypage-seller/orderedLists", label: "주문내역조회" },
        { ref: "/mypage-seller/rental", label: "대여관리" },
        { ref: "/mypage-seller/refund", label: "환불관리" },
        { ref: "/mypage-seller/return", label: "반납관리" },
      ],
    },
    {
      ref: null,
      label: "정산",
      width: 24,
      height: 24,
      mode: false,
      undermenu: [{ ref: "/mypage-seller/calculate", label: "정산현황" }],
    },
    {
      ref: null,
      label: "고객관리",
      width: 22,
      height: 21,
      mode: false,

      undermenu: [
        { ref: "/mypage-seller/inquiry", label: "고객문의" },
        { ref: "/mypage-seller/review", label: "상품평" },
      ],
    },
    {
      ref: null,
      label: "판매자정보",
      width: 23,
      height: 23,
      mode: false,
      undermenu: [
        { ref: "/mypage-seller/info/sellerInfo", label: "계정정보" },
        { ref: "/mypage-seller/info/address", label: "주소록/배송정보 관리" },
      ],
    },
    {
      ref: null,
      label: "로그아웃",
      width: 23,
      height: 23,
    },
  ];
  return (
    <>
      {SellerMypageSidebar.map((menu) => (
        <ButtonDiv key={menu.label} onClick={() => setIsMenuOpen(!menu.mode)}>
          <MenuButton>
            <MenuLabel>{menu.label}</MenuLabel>

            {menu.mode ? (
              <>
                {" "}
                <ArrowImg1 width={10} height={10} src={uparrow} alt="" />
              </>
            ) : (
              <>
                {" "}
                <ArrowImg2 width={10} height={10} src={downarrow} alt="" />
              </>
            )}
          </MenuButton>

          {menu.undermenu &&
            isMenuOpen &&
            menu.undermenu.map((undermenu) => (
              <UnderMenuButton
                key={menu.label}
                onClick={() => router.push(undermenu.ref)}
              >
                {undermenu.label}
              </UnderMenuButton>
            ))}
        </ButtonDiv>
      ))}
    </>
  );
}

const move1 = keyframes`
	//단계 별로 변화를 주는 코드
	0%{

    }
  
    100%{

        opacity: 1;
        transform: rotate(180deg);
    }
`;

const move2 = keyframes`
	//단계 별로 변화를 주는 코드
	0%{

        transform:rotate(180deg);
    }


    100%{
 
        opacity: 1;
        transform: rotate(0deg);
    }
`;

const MenuButton = styled.div`
  height: fit-content;
  font-size: 19px;
  font-weight: 300;
  width: 100%;
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding-left: 30px;
  margin: 17px auto;
  vertical-align: middle;
  align-items: left;
  padding-top: 10px;

  &:hover {
    font-weight: 400;
    color: #1a3620;
  }
`;

const ArrowImg1 = styled(Image)`
  animation: ${move1} 0.3s linear forwards;
  margin-right: 20px;
  float: right;
`;
const ArrowImg2 = styled(Image)`
  animation: ${move2} 0.3s linear forwards;
  margin-right: 20px;
  float: right;
`;

const ButtonDiv = styled.div`
  vertical-align: center;
  items-align: space-between;
`;

const MenuLabel = styled.label`
  padding-left: 5px;
  margin-bottom: 2px;
`;
const UnderMenuButton = styled.div`
  height: fit-content;
  font-size: 15px;
  font-weight: 300;
  padding: 10px;
  width: 100%;
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding-left: 40px;
  &:hover {
    font-weight: 400;
    color: #1a3620;
  }
`;
