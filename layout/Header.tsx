import styled from "styled-components";
import { motion, useScroll, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: black;
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
  color: ${(props) => props.theme.white.darker};
  transition: color 0.3s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &:hover {
    color: ${(props) => props.theme.white.lighter};
  }
`;

interface IForm {
  keyword: string;
}
function Header() {
  const navAnimation = useAnimation();

  const { scrollY } = useScroll();

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 80) {
        navAnimation.start({
          backgroundColor: "rgba(0,0,0,1)",
        });
      } else {
        navAnimation.start({
          backgroundColor: "rgba(0,0,0,0)",
        });
      }
    });
  }, [scrollY]);

  return (
    <>
      <Nav
        animate={navAnimation}
        initial={{ backgroundColor: "rgba(0,0,0,1)" }}
      >
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
        <Col>Login</Col>
      </Nav>
    </>
  );
}

export default Header;
