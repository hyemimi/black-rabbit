import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>검은토끼</title>
      </Head>
      <h1>검은토끼 홈화면 입니다</h1>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1em;
  padding-left: 250px;
  justify-content: center;
`;
const PageDiv = styled.div`
  width: 100%;
  height: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
