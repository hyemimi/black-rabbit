import styled from "styled-components";
import { motion, useScroll, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Searchbar from "@/components/common/Searchbar";
import { useRecoilState } from "recoil";
import { UserState, isLoginState, useSsrComplectedState } from "@/recoil/atoms";

function Header() {
  const router = useRouter();
  const [islogin, setIsLogin] = useRecoilState(isLoginState); // 로그인 여부
  const [user, setUser] = useRecoilState(UserState); // 유저 정보
  const { nickname, ismypage, isuser } = user;

  /* SSR 완료시 호출*/
  const setSsrCompleted = useSsrComplectedState();
  useEffect(setSsrCompleted, [setSsrCompleted]);

  const pushMypage = () => {
    setUser({ ...user, ismypage: !ismypage });
  };
  const pushLogout = () => {
    setIsLogin(false);
  };

  return (
    <>
      <Nav>
        <Col>
          <Searchbar></Searchbar>
        </Col>
        <Col>{islogin && <Button onClick={pushMypage}>{nickname}</Button>}</Col>
        <Col>
          {islogin ? (
            <Button onClick={() => pushLogout}>Logout</Button>
          ) : (
            <Button onClick={() => router.push("/userLogin")}>Login</Button>
          )}
        </Col>
      </Nav>
    </>
  );
}

export default Header;

//header  100px
const Nav = styled.nav`
  display: flex;
  height: 100px;
  min-width: 1000px;
  width: 100%;
  top: 0px;
  font-size: 14px;
  justify-content: center;
  padding: 20px 60px;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;

const Button = styled.button`
  height: fit-content;
  font-size: 14px;
  padding: 5px 16px 5px 16px;
  text-align: center;
  border: none;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.pointColor};
  border-radius: 30px;
  cursor: pointer;
  transition-duration: 50ms;
  &: hover {
    color: rgb(254, 254, 254);
    background-color: rgb(63, 63, 63);
    transition-duration: 100ms;
  }
`;
