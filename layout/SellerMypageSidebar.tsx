import { useRouter } from "next/router";
import styled from "styled-components";
import list from "../public/list.png";
import downarrow from "../public/down-chevro.png";
import uparrow from "../public/file-upload.png";
import Image from "next/image";
import logout from "../public/logout.png";
import shop from "../public/shop.png";
import checkout from "../public/checkout.png";
import creditCard from "../public/credit-card.png";
import customer from "../public/customer.png";
import { useState } from "react";

export default function SellerMypageSidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const router = useRouter();
  let user_id = 1; // 임시데이터

  const SellerMypageSidebar = [
    // { ref: "/", label: "홈", width: 25, height: 27, icon: homeIcon2 },
    {
      ref: null,
      label: "상품관리",
      width: 20,
      height: 20,
      icon: list,
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
      icon: checkout,
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
      icon: creditCard,
      undermenu: [{ ref: "/mypage-seller/calculate", label: "정산현황" }],
    },
    {
      ref: null,
      label: "고객관리",
      width: 22,
      height: 21,
      icon: customer,
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
      icon: shop,
      undermenu: [
        { ref: "/mypage-seller/info/sellerInfo", label: "계정정보" },
        { ref: "/mypage-seller/info/address", label: "주소록/배송정보 관리" },
      ],
    },
    // {
    //   ref: null,
    //   label: "로그아웃",
    //   width: 23,
    //   height: 23,
    //   icon: loginIcon2,
    // },
  ];
  return (
    <>
      <MenuButton>
        {/* <StyledImage width={23} height={23} src={blackhome} alt="" /> */}
        <MenuLabel>홈</MenuLabel>
      </MenuButton>
      {SellerMypageSidebar.map((menu) => (
        <>
          <MenuButton onClick={() => setIsMenuOpen((prev) => !prev)}>
            {/* <StyledImage
              width={menu.width}
              height={menu.height}
              src={menu.icon}
              alt=""
            /> */}

            <MenuLabel>{menu.label}</MenuLabel>
            {isMenuOpen ? (
              <>
                <label> </label>
                <StyledImage width={20} height={20} src={uparrow} alt="" />
              </>
            ) : (
              <>
                {" "}
                <StyledImage width={15} height={15} src={downarrow} alt="" />
              </>
            )}
          </MenuButton>
          {isMenuOpen &&
            menu.undermenu &&
            menu.undermenu.map((undermenu) => (
              <UnderMenuButton
                key={menu.label}
                onClick={() => router.push(undermenu.ref)}
              >
                {undermenu.label}
              </UnderMenuButton>
            ))}
        </>
      ))}
      <MenuButton>
        <StyledImage width={23} height={23} src={logout} alt="" />
        <MenuLabel>로그아웃</MenuLabel>
      </MenuButton>
    </>
  );
}

const StyledImage = styled(Image)`
  padding-top: 2px;
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
  padding-left: 60px;
`;
