import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });
const Wrapper = styled.div`
  background: white;
  padding-bottom: 200px;
`;
const Banner = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-size: cover;
  background-color: ${(props) => props.theme.white.lighter};
`;

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>검은토끼</title>
        <div>프로젝트 세팅</div>
      </Head>
      <Banner />
    </Wrapper>
  );
}
