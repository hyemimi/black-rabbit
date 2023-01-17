import styled from "styled-components";
import { motion, useScroll, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Searchbar from "@/components/common/Searchbar";

function Header() {
  const router = useRouter();

  useEffect(() => {}, []);

  return (
    <>
      <Nav>
        <Col>
          <Items>
            <Item>
              <h1>Menu1</h1>
            </Item>

            <Item>
              <h1>Menu2</h1>
            </Item>
          </Items>
        </Col>
        <Col>
          <Searchbar></Searchbar>
          <Button onClick={() => router.push("/login")}>Login</Button>
        </Col>
      </Nav>
    </>
  );
}

export default Header;

const Nav = styled.nav`
  display: flex;
  width: 1140px;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  font-size: 14px;
  padding: 20px 60px;
  color: white;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
`;
const Item = styled.li`
  margin-right: 20px;
  color: ${(props) => props.theme.textColor};
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
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
