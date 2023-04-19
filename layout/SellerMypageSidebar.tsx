import { useRouter } from "next/router";
import styled from "styled-components";
import homeIcon from "../public/home.png";
import likeIcon from "../public/heart.png";
import alarmIcon from "../public/bell.png";
import Image from "next/image";
import helpIcon from "../public/help.png";
import loginIcon from "../public/login.png";
import cartIcon from "../public/cart.png";
export default function SellerMypageSidebar() {
  const router = useRouter();
  let user_id = 1; // 임시데이터
  return (
    <Side>
      <Div>
        <MenuButton onClick={() => router.push("/")}>
          <Image width={32} height={32} src={homeIcon} alt="" /> 홈
        </MenuButton>
        <MenuButton onClick={() => router.push(`/like/${user_id}`)}>
          <Image width={30} height={30} src={likeIcon} alt="" />
          상품관리
        </MenuButton>
        <UnderMenuButton>상품조회/수정</UnderMenuButton>
        <UnderMenuButton>상품등록</UnderMenuButton>
        <MenuButton onClick={() => router.push(`/cart/${user_id}`)}>
          <Image width={30} height={30} src={cartIcon} alt="" />
          주문/베송
        </MenuButton>
        <UnderMenuButton
          onClick={() => router.push("/mypage-seller/orderedLists")}
        >
          주문내역조회
        </UnderMenuButton>
        <UnderMenuButton onClick={() => router.push("/mypage-seller/rental")}>
          대여관리
        </UnderMenuButton>
        <UnderMenuButton onClick={() => router.push("/mypage-seller/refund")}>
          환불관리
        </UnderMenuButton>
        <UnderMenuButton onClick={() => router.push("/mypage-seller/return")}>
          반납관리
        </UnderMenuButton>
        <MenuButton>
          <Image width={30} height={30} src={alarmIcon} alt="" />
          정산
        </MenuButton>
        <UnderMenuButton
          onClick={() => router.push("/mypage-seller/calculate")}
        >
          정산현황
        </UnderMenuButton>
        <MenuButton>
          <Image width={30} height={30} src={helpIcon} alt="" />
          고객관리
        </MenuButton>
        <UnderMenuButton onClick={() => router.push("/mypage-seller/customer")}>
          고객문의
        </UnderMenuButton>
        <UnderMenuButton onClick={() => router.push("/mypage-seller/review")}>
          상품평
        </UnderMenuButton>

        <MenuButton onClick={() => router.push("/userLogin")}>
          <Image width={30} height={30} src={loginIcon} alt="" />
          판매자정보
        </MenuButton>
        <UnderMenuButton onClick={() => router.push("/mypage-seller/review")}>
          계정정보
        </UnderMenuButton>
        <UnderMenuButton onClick={() => router.push("/mypage-seller/review")}>
          비밀번호변경
        </UnderMenuButton>
        <UnderMenuButton onClick={() => router.push("/mypage-seller/review")}>
          주소록/배송정보관리
        </UnderMenuButton>
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
