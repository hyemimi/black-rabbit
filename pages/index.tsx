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
      <Banner>
        <Title>검은토끼와 함께 멋진 작품을 만들어보세요</Title>
      </Banner>
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

const Banner = styled.div`
  background-color: ${(props) => props.theme.pointColor};
  height: 250px;
  width: 900px;
`;

const Title = styled.h1`
  padding-top: 100px;
  text-align: center;
  font-size: 30px;
`;
