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
      <h1>home</h1>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vw;
  padding: 100px;
  justify-content: center;
`;
