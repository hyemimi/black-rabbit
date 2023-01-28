import styled from "styled-components";
import { motion, useScroll, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Searchbar from "@/components/common/Searchbar";

function Header() {
  const router = useRouter();

  return (
    <>
      <Nav>
        <Col>
          <Searchbar></Searchbar>
        </Col>
        <Col>
          <Button onClick={() => router.push("/login")}>Login</Button>
        </Col>
      </Nav>
    </>
  );
}

export default Header;

//header : 100px
const Nav = styled.nav`
  display: flex;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 1000px;
  top: 0;
  font-size: 14px;
  padding: 20px 60px;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
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
