import styled from "styled-components";
import { motion, useScroll, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Searchbar from "@/components/common/Searchbar";

function Header() {
  const navAnimation = useAnimation();
  const router = useRouter();
  const { scrollY } = useScroll();

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 80) {
        navAnimation.start({
          backgroundColor: "rgba(255,255,255,0.5)",
        });
      } else {
        navAnimation.start({
          backgroundColor: "rgba(0,0,0,1)",
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
        <Col>
          <Searchbar></Searchbar>
          <Button onClick={() => router.push("/login")}>Login</Button>
        </Col>
      </Nav>
    </>
  );
}

export default Header;

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: white;
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
  color: rgb(218, 218, 218);
  background-color: rgb(48, 48, 48);
  border-radius: 30px;
  cursor: pointer;
  transition-duration: 50ms;
  &: hover {
    color: rgb(254, 254, 254);
    background-color: rgb(63, 63, 63);
    transition-duration: 100ms;
  }
`;
