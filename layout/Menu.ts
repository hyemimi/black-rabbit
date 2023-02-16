import homeIcon from "../public/home.png";
import likeIcon from "../public/heart.png";
import alarmIcon from "../public/bell.png";
import helpIcon from "../public/help.png";
import loginIcon from "../public/login.png";
import cartIcon from "../public/cart.png";

const user_id = 1; // 임시 유저id 데이터

/* 메인페이지 - 사이드바 메뉴리스트 */
export const menuList = [
  { ref: "/", label: homeIcon, text: "홈" },
  { ref: "/like", label: likeIcon, text: "좋아요" },
  { ref: "/cart", label: cartIcon, text: "장바구니" },
  { ref: "/", label: helpIcon, text: "도움" },
  { ref: "/", label: alarmIcon, text: "알림" },
  { ref: "/login", label: loginIcon, text: "로그인" },
];

/* 마이페이지 - 개인유저 사이드바 메뉴리스트 */
export const ImenuList = [
  { ref: "/", label: homeIcon, text: "홈" },
  {
    ref: "/orderlist",
    label: likeIcon,
    text: "주문/배송",
    dropmenu: [
      { ref: "/orderlist", text: "주문목록/배송조회" },
      {
        ref: "/historylist",
        text: "취소/반품/교환 내역",
      },
    ],
  },
  { ref: "/login", label: loginIcon, text: "로그아웃" },
];
